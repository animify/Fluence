import request from '../modules/Request';

export default class Auth {
    static async signIn(formValues) {
        console.log('got values', formValues);
        request().post('/auth/signin', formValues).then((e) => {
            console.log(e);
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
        return localStorage.getItem('FLUENCE_USER_TOKEN') !== null;
    }

    static deauthenticateUser() {
        localStorage.removeItem('FLUENCE_USER_TOKEN');
    }

    static getToken() {
        return localStorage.getItem('FLUENCE_USER_TOKEN');
    }
}
