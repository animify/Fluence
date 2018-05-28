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

export default class Middleware {
    constructor(brain) {
        this.brain = brain;
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

        app.use(CookieParser())
            .use(Helmet())
            .use(ExpressRequestId())
            .use(Session({
                secret: 'keyboard',
                cookie: {
                    maxAge: 84600000
                },
                store: null,
                resave: true,
                saveUninitialized: true
            }))
            .use(express.static('static'))
            .use(Cors())
            .use(BodyParser.urlencoded({ extended: true }))
            .use(BodyParser.json())
            .use(passport.initialize())
            .use(passport.session());

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

            // this.brain.db.users
            //     .filter({
            //         _id: decoded.sub
            //     })
            //     .run()
            //     .then((user) => {
            //         if (!user) {
            //             return res.status(401).end();
            //         }

            //         return next();
            //     })
        });
    }
}
