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
        localStorage.setItem(Auth.tokenName, token);
    }

    static isUserAuthenticated() {
        return localStorage.getItem(Auth.tokenName) !== null;
    }

    static deauthenticateUser() {
        store.dispatch(setAccount(null));
        localStorage.removeItem(Auth.tokenName);
    }

    static getToken() {
        return localStorage.getItem(Auth.tokenName);
    }

    static get tokenName() {
        return 'FLUENCE_USER_TOKEN';
    }
}
