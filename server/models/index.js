import mongoose from 'mongoose';
import AccessToken from './accessToken';
import RefreshToken from './RefreshToken';
import User from './User';

export default {
    AccessToken: mongoose.model('AccessToken', AccessToken),
    RefreshToken: mongoose.model('RefreshToken', RefreshToken),
    User: mongoose.model('User', User)
};
