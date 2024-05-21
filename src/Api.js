import axios from "axios";
import {LS_TOKEN} from "./constants";

const API_URL = 'http://31.128.36.9:81/api';

const headerAu = {
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem(LS_TOKEN) ?? '',
        Accept: 'application/json',
    }
};

const headerAc = {
    headers: {
        Accept: 'application/json',
    }
};
// const api = axios.create({
//     baseURL: API_URL,
//     // timeout: 1000,
//     headers: {
//         // Authorization: 'Bearer ' + localStorage.getItem(LS_TOKEN) ?? '',
//         Accept: 'application/json',
//     },
// });

// api.interceptors.request.use((config) => {
//     if (localStorage.getItem(LS_TOKEN)) {
//         config.headers["Authorization"] = "Bearer " + localStorage.getItem(LS_TOKEN);
//     }
//     return config;
// });
//
// axios.interceptors.response.use(undefined,(error) => {
//     console.log(error);
// });

const GET = async (url) => {
    return await axios.get(API_URL + url, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem(LS_TOKEN) ?? '',
            Accept: 'application/json',
        }
    })
}

const POST = async (url, data) => {
    return await axios.post(API_URL + url, data, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem(LS_TOKEN) ?? '',
            Accept: 'application/json',
        }
    });
}

export const verifyPOST = async (data) => {
    return await POST('/email/verify', data);
}

export const logoutPOST = async () => {
    return await axios.post(API_URL + '/logout', {},{
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem(LS_TOKEN) ?? '',
            Accept: 'application/json',
        }
    });
}

export const loginPOST = async (data) => {
    return await POST('/login', data);
}

export const registerPOST = async (data) => {
    return await POST('/register', data);
}

export const subscriptionPOST = async (data) => {
    return await POST('/order/subscription', data);
}

export const getUser = async () => {
    return await GET('/user');
}

export const getSubscriptions = async () => {
    return await axios.get(API_URL + '/subscriptions', {
        headers: {
            Accept: 'application/json',
        }
    });
}

//todo прописать 401\403 для всего проекта
