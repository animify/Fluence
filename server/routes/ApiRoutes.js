import express from 'express';

export default class ApiRoutes {
    _applyRoutes() {
        this._getAccountDetailsRoute();
    }

    _getAccountDetailsRoute() {
        this.router.get('/account', (req, res) => {
            res.status(200).json({
                success: true,
                user: {
                    _id: req.user.id,
                    name: req.user.name,
                    email: req.user.email,
                    ip_address: req.user.ip_address
                }
            });
        });
    }

    constructor() {
        this.router = new express.Router();
        this._applyRoutes();

        return this.router;
    }
}
