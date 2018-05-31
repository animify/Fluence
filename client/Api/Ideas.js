import request from '../modules/Request';
import store from '../store';
import { newIdea, Pages } from '../store/actions';
import History from '../modules/History';

export default class Ideas {
    static new(formValues) {
        console.log(formValues);

        request().post('/endpoint/ideas/new', formValues).then((e) => {
            console.log(e);
            if (e.request.status === 200) {
                store.dispatch(newIdea(e.data.idea));
                History.push(Pages.IDEAS);
            }
        });
    }

    static async get() {
        return new Promise((resolve, reject) => {
            request().get('/endpoint/ideas').then((e) => {
                console.log(e);
                if (e.request.status === 200) {
                    resolve(e.data.ideas);
                }
            });
        });
    }

    static async getOne(ideaId) {
        return new Promise((resolve, reject) => {
            request().get(`/endpoint/ideas/${ideaId}`).then((e) => {
                console.log(e);
                if (e.request.status === 200) {
                    resolve(e.data.idea);
                }
            });
        });
    }
}
