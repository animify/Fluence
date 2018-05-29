import express from 'express';
import logger from '../helpers/logger';

export default class EndpointRoutes {
    constructor(core) {
        this.core = core;
        this.router = new express.Router();
        this._applyRoutes(core);

        return this.router;
    }

    _applyRoutes() {
        this._setIdeaRoutes();
    }

    _setIdeaRoutes() {
        this.router.post('/idea/new', (req, res) => {
            logger.info('route hit /idea/new');
            const ua = req.useragent;
            logger.info(JSON.stringify(req.body), ua);

            if (ua.isAuthoritative && !ua.isBot && !ua.isCurl) {

                // this.core.controllers.idea.new()
            } else {
                res.json({
                    success: false,
                    message: 'Invalid incremement recieved.'
                });
            }
        });
    }
}
