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
        this.router.post('/ideas/new', (req, res) => {
            logger.info('route hit /idea/new');
            const ua = req.useragent;

            if (ua.isAuthoritative && !ua.isBot && !ua.isCurl) {
                logger.info(JSON.stringify(req.body), ua);

                this.core.controllers.idea.new(req.body.summary, req.body.details, req.body.category, req.user._id)
                    .then((idea) => {
                        res.json({
                            success: true,
                            idea
                        });
                    }).catch((err) => {
                        res.json({
                            success: false,
                            message: err
                        });
                    });
            } else {
                res.json({
                    success: false,
                    message: 'Invalid incremement recieved.'
                });
            }
        });

        this.router.get('/ideas', (req, res) => {
            logger.info('route hit /idea/new');
            const ua = req.useragent;

            if (ua.isAuthoritative && !ua.isBot && !ua.isCurl) {
                logger.info(JSON.stringify(req.body), ua);

                this.core.controllers.idea.get()
                    .then((ideas) => {
                        res.json({
                            success: true,
                            ideas
                        });
                    }).catch((err) => {
                        res.json({
                            success: false,
                            message: err
                        });
                    });
            } else {
                res.json({
                    success: false,
                    message: 'Invalid incremement recieved.'
                });
            }
        });

        this.router.get('/ideas/:ideaId', (req, res) => {
            logger.info('route hit /idea/new');
            const ua = req.useragent;

            if (ua.isAuthoritative && !ua.isBot && !ua.isCurl) {
                logger.info(JSON.stringify(req.body), ua);

                this.core.controllers.idea.getOne(req.params.ideaId)
                    .then((idea) => {
                        res.json({
                            success: true,
                            idea
                        });
                    }).catch((err) => {
                        res.json({
                            success: false,
                            message: err
                        });
                    });
            } else {
                res.json({
                    success: false,
                    message: 'Invalid incremement recieved.'
                });
            }
        });
    }
}
