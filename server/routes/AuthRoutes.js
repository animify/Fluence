import express from 'express';
import passport from 'passport';

export default class AuthRoutes {
    constructor(core) {
        this.core = core;
        this.router = new express.Router();
        this._applyRoutes(core);

        return this.router;
    }

    _applyRoutes() {
        this._setSignupRoute();
        this._setLoginRoute();
    }

    _setSignupRoute() {
        this.router.post('/signup', (req, res, next) => {
            const validationResult = this.core.tools.validator.signupValidated(req.body);
            if (!validationResult.success) {
                return res.status(400).json({
                    success: false,
                    message: validationResult.message,
                    errors: validationResult.errors
                });
            }

            return passport.authenticate('local-signup', (err) => {
                if (err) {
                    if (err.code === 11000) {
                        return res.status(409).json({
                            success: false,
                            message: 'Check the form for errors.',
                            errors: {
                                email: 'This email is already taken.'
                            }
                        });
                    }

                    return res.status(400).json({
                        success: false,
                        message: 'Could not process the form.'
                    });
                }

                return res.status(200).json({
                    success: true,
                    message: 'You have successfully signed up.'
                });
            })(req, res, next);
        });
    }

    _setLoginRoute() {
        this.router.post('/login', (req, res, next) => {
            const validationResult = this.core.tools.validator.loginValidated(req.body);
            if (!validationResult.success) {
                return res.status(400).json({
                    success: false,
                    message: validationResult.message,
                    errors: validationResult.errors
                });
            }

            return passport.authenticate('local-login', (err, token, user) => {
                if (err) {
                    if (err.name === 'IncorrectCredentialsError') {
                        return res.status(400).json({
                            success: false,
                            message: err.message
                        });
                    }

                    return res.status(400).json({
                        success: false,
                        message: 'Could not process the form.'
                    });
                }

                return req.logIn(user, () => res.json({
                    success: true,
                    message: 'You have successfully logged in!',
                    token,
                    user
                }));
            })(req, res, next);
        });
    }
}