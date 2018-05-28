import request from '../modules/Request';
import History from '../modules/History';
import { Pages, setAccount } from '../store/actions';
import store from '../store';

export default class Auth {
    static async signIn(formValues) {
        console.log('got values', formValues);
        request().post('/auth/signin', formValues).then((e) => {
            console.log(e);
            if (e.request.status === 200) {
                Auth.authenticateUser(e.request.response.user, e.request.response.token);
                History.push(Pages.IDEAS);
            }
        });
    }
    static async signUp(formValues) {
        request().post('/auth/signup', formValues).then((e) => {
            console.log(e);
        });
    }

    static authenticateUser(user, token) {
        store.dispatch(setAccount(user));
        localStorage.setItem('FLUENCE_USER_TOKEN', token);
    }

    static isUserAuthenticated() {
        return localStorage.getItem('FLUENCE_USER_TOKEN') !== null;
    }

    static deauthenticateUser() {
        store.dispatch(setAccount(null));
        localStorage.removeItem('FLUENCE_USER_TOKEN');
    }

    static getToken() {
        return localStorage.getItem('FLUENCE_USER_TOKEN');
    }
}
