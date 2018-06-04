import axios from 'axios';
import qs from 'qs';
import { Auth } from '../Api';
import History from './History';
import { PageRoutes } from '../store/actions';

const client = () => {
    const token = Auth.getToken();
    const defaults = {
        responseType: 'json',
        headers: {
            Authorization: token ? `bearer ${token}` : '',
            'Content-type': 'application/x-www-form-urlencoded'
        }
    };
    const axiosInstance = axios.create({
        timeout: 10000,
    });

    axiosInstance.interceptors.response.use(response => response, (error) => {
        console.log('using response ----- ', error);

        if (error.request.status === 400) {
            console.log(error.request.response);
        }

        if (error.request.status === 401) {
            History.push(PageRoutes.LOGOUT);
        }

        return Promise.reject(error.request);
    });

    return {
        get: (url, props = {}) => axiosInstance.get(url, { ...defaults, ...props }),
        post: (url, data, props = {}) => axiosInstance.post(url, qs.stringify(data), { ...defaults, ...props }),
        put: (url, data, props = {}) => axiosInstance.put(url, qs.stringify(data), { ...defaults, ...props }),
        delete: (url, props = {}) => axiosInstance.delete(url, { ...defaults, ...props }),
    };
};

export default client;
