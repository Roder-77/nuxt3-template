import axios, { AxiosHeaders } from 'axios';

const axiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    // Do something before request is sent
    config => {
        const token = useCookie('token');
        const headers = config.headers as AxiosHeaders;
        headers.set('Authorization', `Bearer ${token.value}`);
        return config;
    },
    // Do something with request error
    error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response => {
        console.log(response);
        return {
            statusCode: response.status,
            ...response.data,
        };
    },
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    error => {
        const response = {
            statusCode: error.response.status,
            ...error.response.data,
        };

        return Promise.reject(response);
    },
);

export default axiosInstance;
