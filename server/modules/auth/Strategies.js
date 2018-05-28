import passport from 'passport';
import LocalSignupStrategy from './LocalSignupStrategy';
import LocalLoginStrategy from './LocalSignInStrategy';
import logger from '../../helpers/logger';
import models from '../../models';

export default class Strategies {
    constructor(core) {
        this.core = core;
        this.local = {
            login: null,
            signup: null
        };

        this._buildSerializer();
        this._buildStrategies();
        this._attachStrategies();

        return this;
    }

    _buildSerializer() {
        passport.serializeUser((user, done) =>
            done(null, {
                _id: user._id,
                agent: user.useragent,
                ip_address: user.ip_address
            }));

        passport.deserializeUser((user, done) => {
            models.User.findOne({ _id: user._id }, (err, u) => {
                done(err, u);
            });
        });
    }

    _buildStrategies() {
        this.local.signup = new LocalSignupStrategy();
        this.local.login = new LocalLoginStrategy();
    }

    _attachStrategies() {
        passport.use('local-signup', this.local.signup);
        passport.use('local-login', this.local.login);
    }
}
