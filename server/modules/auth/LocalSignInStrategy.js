import { Strategy } from 'passport-local';
import jwt from 'jsonwebtoken';
import models from '../../models';
import logger from '../../helpers/logger';

export default class LocalSignInStrategy {
    constructor() {
        return this.createStrategy();
    }

    createStrategy() {
        return new Strategy({
            usernameField: 'email',
            passwordField: 'password',
            session: false,
            passReqToCallback: true
        }, (req, email, password, done) => {
            logger.info('Signing in user');

            models.User.findOne({ email: new RegExp(`^${email.trim()}$`, 'i') })
                .exec((err, user) => {
                    logger.info(`got user ${user} and error ${err}`);
                    if (err) return done(err);

                    if (!user) {
                        const error = new Error('Incorrect email or password');
                        error.name = 'IncorrectCredentialsError';

                        return done(error);
                    }

                    if (!user.checkPassword(password)) {
                        const error = new Error('Incorrect email or password');
                        error.name = 'IncorrectCredentialsError';

                        return done(error);
                    }

                    const payload = {
                        sub: user._id
                    };
                    const token = jwt.sign(payload, 'secret');
                    const data = {
                        id: user._id,
                        name: user.name,
                        email: user.email
                    };

                    return done(null, token, data);
                });
        });
    }
}
