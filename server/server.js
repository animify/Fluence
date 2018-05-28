import express from 'express';
import passport from 'passport';
import path from 'path';
import Core from './Core';
import Strategies from './modules/auth/strategies';


const app = express();
const core = new Core();
const strategies = new Strategies(core);

app.use(express.static('static'));

passport.use('local-signup', strategies.local.signup);
passport.use('local-login', strategies.local.login);

const appInit = core.middleware.initialize(app);
appInit.use('/api', (req, res, next) => core.middleware.authed(req, res, next));
appInit.use('/auth', core.routes.auth);

app.get('/api', (req, res) => {
    res.send({
        message: 'You can also access routes defined in Express.'
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve('client/local.html'));
});

export default app;
