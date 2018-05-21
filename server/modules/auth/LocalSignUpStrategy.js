import { Strategy } from 'passport-local';

export default class LocalSignUpStrategy {
    constructor(core) {
        this.strategy = this.createStrategy(core.db);
    }

    createStrategy(db) {
        return new Strategy({
            usernameField: 'email',
            passwordField: 'password',
            session: false,
            passReqToCallback: true
        }, (req, email, password, done) => {
            console.log(this.core);
            done();
        });
    }
}