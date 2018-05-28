import request from '../modules/Request';
import History from '../modules/History';
import { Pages } from '../store/actions';

export default class Auth {
    static async signIn(formValues) {
        console.log('got values', formValues);
        request().post('/auth/signin', formValues).then((e) => {
            if (e.request.status === 200) {
                Auth.authenticateUser(e.request.response.token);
                History.push(Pages.IDEAS);
            }
        });
    }
    static async signUp(formValues) {
        request().post('/auth/signup', formValues).then((e) => {
            console.log(e);
        });
    }

    static authenticateUser(token) {
        localStorage.setItem('FLUENCE_USER_TOKEN', token);
    }

    static isUserAuthenticated() {
        console.log('got token', localStorage.getItem('FLUENCE_USER_TOKEN'));
        return localStorage.getItem('FLUENCE_USER_TOKEN') !== null;
    }

    static deauthenticateUser() {
        localStorage.removeItem('FLUENCE_USER_TOKEN');
    }

    static getToken() {
        return localStorage.getItem('FLUENCE_USER_TOKEN');
    }
}
