import passport from 'passport';
import LocalSignupStrategy from './LocalSignupStrategy';
import LocalLoginStrategy from './LocalSignInStrategy';

export default class Strategies {
    constructor(core) {
        this.core = core;
        this.local = {
            login: null,
            signup: null
        };

        this._buildSerializer();
        this._buildStrategies();
    }

    _buildStrategies() {
        this.local.signup = new LocalSignupStrategy(this.core).strategy;
        this.local.login = new LocalLoginStrategy(this.core).strategy;
    }

    _buildSerializer() {
        passport.serializeUser((user, done) => done(null, user.id));

        passport.deserializeUser((id, done) => {
            this.core.db.users
                .get(id)
                .run()
                .then(user => done(null, user));
        });
    }
}