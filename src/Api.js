import axios from "axios";
import {LS_TOKEN} from "./constants";

const API_URL = 'http://31.128.36.9:81/api';

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

export const getProjects = async () => {
    return await GET('/projects');
}

export const getProject = async (url) => {
    return await GET('/project/' + url);
}

export const projectPOST = async ({url}, data) => {
    console.log(url);
    return await POST('/project/' + url + '/add/task', data);
}

export const getProjectFile = async (url) => {
    return await axios.get(API_URL + '/project/' + url + '/download', {responseType: 'blob', headers: {
            Authorization: 'Bearer ' + localStorage.getItem(LS_TOKEN) ?? '',
            Accept: 'application/json',
        }});
}

export const projectPost = async (data) => {
    return await axios.post(API_URL + '/projects/add', data, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem(LS_TOKEN) ?? '',
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
        }
    });
}

export const getSubscriptions = async () => {
    return await axios.get(API_URL + '/subscriptions', {
        headers: {
            Accept: 'application/json',
        }
    });
}

export const deleteProject = async (url) => {
    return await axios.delete(API_URL + '/project/' + url, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem(LS_TOKEN) ?? '',
            Accept: 'application/json',
        }
    })
}

//todo прописать 401\403 для всего проекта
