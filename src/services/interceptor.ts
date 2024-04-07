
import Axios from 'axios';
import storage from '../helpers/storage';


/**
 * Token Interceptor
 * @param {*} config
 * @returns {*}
 */
function authRequestInterceptor(config: any) {
    const token = storage.getToken();
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    config.headers.Accept = 'application/json';
    return config;
}


const httpClient = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

// Add a request interceptor
httpClient.interceptors.request.use(authRequestInterceptor);

// Add a response interceptor
httpClient.interceptors.response.use(
    (response) => {
        // You can modify the response here (e.g., data transformation)
        return response.data;
    },
    (error) => {
        // You can handle errors globally here
        return Promise.reject(error.response);
    }
);

export default httpClient;
