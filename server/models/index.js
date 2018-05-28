import { model } from 'mongoose';
import AccessToken from './accessToken';
import RefreshToken from './RefreshToken';
import User from './User';

export default {
    AccessToken: model('AccessToken', AccessToken),
    RefreshToken: model('RefreshToken', RefreshToken),
    User: model('User', User)
};
