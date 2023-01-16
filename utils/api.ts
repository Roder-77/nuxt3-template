import { AxiosRequestHeaders } from 'axios';
import axios from '@/utils/axios';

export enum httpMethod {
  delete = 'delete',
  get = 'get',
  patch = 'patch',
  post = 'post',
  put = 'put',
}

export function callAPI (method: httpMethod, uri: string, params?: any, headers?: AxiosRequestHeaders) {
    const obj = {
        delete: { data: params },
        get: { params },
        patch: params,
        post: params,
        put: params,
    };

    return axios[method](uri, obj[method], { headers });
}

export function uploadFile (uri: string, formData: FormData, progressCallback?: Function, headers?: AxiosRequestHeaders) {
    let onUploadProgress: (progressEvent: any) => void = () => {};

    if (progressCallback && typeof progressCallback === 'function') {
        onUploadProgress = progressEvent => {
            const percentCompleted = Math.round((progressEvent.loaded / progressEvent.total) * 100);
            progressCallback(percentCompleted);
        };
    }

    return axios.post(uri, formData, { headers, onUploadProgress });
}

export const apiPath = {
    member: '/v1/members',
};
