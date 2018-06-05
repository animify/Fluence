import { Strategy } from 'passport-local';
import mongoose from 'mongoose';
import crypto from 'crypto';
import { User } from '../../models';
import logger from '../../helpers/logger';

export default class LocalSignUpStrategy {
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
            logger.info('Signing up user');
            const newid = mongoose.Types.ObjectId();
            const newUser = new User();

            newUser._id = newid;
            newUser.avatar = crypto.createHash('md5').update(email).digest('hex');
            newUser.name = req.body.name;
            newUser.email = email.trim();
            newUser.password = password.trim();
            newUser.ip_address = req.ip;
            newUser.useragent = req.useragent;

            logger.info(`Signin up ${newUser}`);

            newUser.save((err, u) => {
                logger.info(`user ${u}`);
                if (!err) {
                    req.login(u, (loginError) => {
                        logger.error(`loginError ${loginError}`);
                        if (loginError) return done(loginError);

                        done();
                    });
                } else {
                    logger.error(err);
                    done();
                }
            });
        });
    }
}
