import express from 'express';
import path from 'path';
import Core from './Core';

const app = express();
const core = new Core();

app.use(express.static('static'));

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
