import express from 'express';
import path from 'path';
import Core from './Core';
import logger from './helpers/logger';

const app = express();
const core = new Core();
const appInit = core.middleware.initialize(app);

appInit.use('/api', (req, res, next) => core.middleware.authed(req, res, next), core.routes.api);
appInit.use('/auth', core.routes.auth);
appInit.use('/endpoint', core.routes.endpoints);

app.get('/api', (req, res) => {
    res.json({
        message: req.user
    });
});

app.get('*', (req, res) => {
    logger.info(`req user ${req.user}`);
    res.sendFile(path.resolve('client/local.html'));
});

export default app;
