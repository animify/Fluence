import passport from 'passport';
import LocalSignupStrategy from './LocalSignupStrategy';
import LocalLoginStrategy from './LocalSignInStrategy';
import logger from '../../helpers/logger';
import { User } from '../../models';

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
        passport.serializeUser((user, done) => {
            logger.info('serializing user');
            console.log(user);
            return done(null, {
                _id: user.id,
                name: user.name,
                email: user.email,
                ip_address: user.ip_address
            });
        });

        passport.deserializeUser((user, done) => {
            logger.info(`deserializing user ${user._id} ${user.email}`);
            User.findById(user._id, (err, u) => {
                logger.info(`found user ${u}, ${err}`);
                return done(null, u);
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
