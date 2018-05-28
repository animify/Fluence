import jwt from 'jsonwebtoken';
import express from 'express';
import passport from 'passport';
import Webpack from 'webpack';
import Helmet from 'helmet';
import Cors from 'cors';
import CookieParser from 'cookie-parser';
import BodyParser from 'body-parser';
import Session from 'express-session';
import ExpressRequestId from 'express-request-id';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import WebpackConfig from '../../../webpack.config.client';
import { models } from 'mongoose';

const MongoStore = require('connect-mongo')(Session);

export default class Middleware {
    constructor(core) {
        this.core = core;
    }

    initialize(app) {
        const compiler = Webpack(WebpackConfig);

        app.use(WebpackDevMiddleware(compiler, {
            noInfo: true,
            publicPath: WebpackConfig.output.publicPath
        }));
        app.use(WebpackHotMiddleware(compiler, {
            log: console.log,
            path: '/__webpack_hmr',
            heartbeat: 10 * 1000
        }));

        const sessionStore = new MongoStore({ mongooseConnection: this.core.db, stringify: false, autoRemove: 'native' });

        const eSession = Session({
            key: 'connect.sid',
            secret: 'secret',
            store: sessionStore,
            resave: true,
            cookie: {
                maxAge: 84600000
            },
            saveUninitialized: true
        });

        app.set('connection', this.core.db);
        app.use(eSession)
            .use(CookieParser())
            .use(Helmet())
            .use(ExpressRequestId())
            .use(express.static('static'))
            .use(Cors())
            .use(BodyParser.urlencoded({ extended: true }))
            .use(BodyParser.json())
            .use(passport.initialize())
            .use(passport.session());

        // app.use((req, res, next) => {
        //     req.session._garbage = new Date().toISOString();
        //     req.session.touch();
        //     next();
        // });

        return app;
    }

    authed(req, res, next) {
        if (!req.headers.authorization) {
            return res.status(401).end();
        }

        const token = req.headers.authorization.split(' ')[1];

        jwt.verify(token, 'secret', (err, decoded) => {
            if (err || !req.user) {
                return res.status(401).end();
            }

            models.User.findOne({ _id: decoded.sub }, (err, u) => {
                if (!u) {
                    return res.status(401).end();
                }
                return next();
            });
        });
    }
}
