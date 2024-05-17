import axios from "axios";
import {LS_TOKEN} from "./constants";

const API_URL = 'http://31.128.36.9:81/api';

const userToken = localStorage.getItem(LS_TOKEN);

const GET = async (url) => {
    return await axios.get(API_URL + url, {
        headers: {
            'Authorization': userToken ?? '',
            'Accept': 'application/json'
        }
    })
}

const POST = async (url, data) => {
    return await axios.post(API_URL + url, data,{
        headers: {
            'Authorization': userToken ?? '',
            'Accept': 'application/json'
        }
    })
}

// export const getPosts = async () => {
//     return await GET('/posts');
// }

export const sendPOST = async (data) => {
    return await POST('/email/verify', data);
}

export const getUser = async () => {
    return await GET('/user')
}