import { Strategy } from 'passport-local';
import jwt from 'jsonwebtoken';

export default class LocalSignInStrategy {
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
            const userData = {
                email: email.trim(),
                password: password.trim()
            };

            const user = [];

            if (user.length === 0) {
                const error = new Error('Incorrect email or password');
                error.name = 'IncorrectCredentialsError';

                return done(error);
            }

            const isMatch = userData.password === user[0].password;

            if (!isMatch) {
                const error = new Error('Incorrect email or password');
                error.name = 'IncorrectCredentialsError';

                return done(error);
            }

            const payload = {
                sub: user[0]._id
            };
            const token = jwt.sign(payload, 'secret');
            const data = {
                id: user[0].id,
                name: user[0].name,
                email: user[0].email
            };

            return done(null, token, data);
        });
    }
}
