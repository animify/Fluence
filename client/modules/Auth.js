export default class Auth {
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