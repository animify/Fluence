import axios from 'axios';
import qs from 'qs';
import { Auth } from '../Api';
import History from './History';

const client = () => {
    const token = Auth.getToken();
    const defaults = {
        responseType: 'json',
        headers: {
            Authorization: token ? `bearer ${token}` : '',
            'Content-type': 'application/x-www-form-urlencoded'
        }
    };

    axios.interceptors.response.use(response => response, (error) => {
        console.log('using response ----- ', error);

        if (error.request.status === 400) {
            console.log(error.request.response);
        }

        if (error.request.status === 401) {
            History.push('/logout');
        }

        return Promise.reject(error.request);
    });

    return {
        get: (url, props = {}) => axios.get(url, { ...defaults, ...props }),
        post: (url, data, props = {}) => axios.post(url, qs.stringify(data), { ...defaults, ...props }),
        put: (url, data, props = {}) => axios.put(url, qs.stringify(data), { ...defaults, ...props }),
        delete: (url, props = {}) => axios.delete(url, { ...defaults, ...props }),
    };
};

export default client;
