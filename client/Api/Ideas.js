import request from '../modules/Request';

export default class Ideas {
    static async new(formValues) {
        console.log(formValues);

        request().post('/endpoint/idea/new', formValues).then((e) => {
            console.log(e);
            // if (e.request.status === 200) {
            // }
        });
    }
}
