import mongoose from 'mongoose';
import AccessToken from './accessToken';
import RefreshToken from './RefreshToken';
import User from './User';
import Idea from './Idea';

export default {
    AccessToken: mongoose.model('AccessToken', AccessToken),
    RefreshToken: mongoose.model('RefreshToken', RefreshToken),
    User: mongoose.model('User', User),
    Idea: mongoose.model('Idea', Idea)
};
