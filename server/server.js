import express from 'express';
import path from 'path';
import Core from './Core';
import logger from './helpers/logger';

const app = express();
const core = new Core();

app.use(express.static('static'));

const appInit = core.middleware.initialize(app);
app.get('/api', (req, res) => {
    res.json({
        message: req.user
    });
});
appInit.use('/api', (req, res, next) => core.middleware.authed(req, res, next), core.routes.api);
appInit.use('/auth', core.routes.auth);


app.get('*', (req, res) => {
    logger.info(`req user ${req.user}`);
    res.sendFile(path.resolve('client/local.html'));
});

export default app;
