const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default class Auth {
    static async signIn(formValues) {
        await sleep(500);
        window.alert(`Signing in with values:\n\n${JSON.stringify(formValues, null, 2)}`);
    }
    static async signUp(formValues) {
        await sleep(500);
        window.alert(`Signing up with values:\n\n${JSON.stringify(formValues, null, 2)}`);
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
