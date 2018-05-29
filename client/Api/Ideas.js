import request from '../modules/Request';
import store from '../store';
import { newIdea } from '../store/actions';

export default class Ideas {
    static async new(formValues) {
        console.log(formValues);

        request().post('/endpoint/ideas/new', formValues).then((e) => {
            console.log(e);
            if (e.request.status === 200) {
                store.dispatch(newIdea(e.data.idea));
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
}
