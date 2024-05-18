import axios from "axios";
import {LS_TOKEN} from "./constants";

const API_URL = 'http://31.128.36.9:81/api';

const userToken = localStorage.getItem(LS_TOKEN);

const api = axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: {
        Authorization: 'Bearer ' + userToken ?? '',
        Accept: 'application/json',
    },
});

const GET = async (url) => {
    return await api.get(API_URL + url)
}

const POST = async (url, data) => {
    return await api.post(API_URL + url, data)
}

export const sendPOST = async (data) => {
    return await POST('/email/verify', data);
}

export const logoutPOST = async () => {
    return await POST('/logout');
}

export const loginPOST = async (data) => {
    return await POST('/login', data);
}

export const registerPOST = async (data) => {
    return await POST('/register', data);
}

export const getUser = async () => {
    return await GET('/user')
}

export default api;
//todo прописать 401\403 для всего проекта
