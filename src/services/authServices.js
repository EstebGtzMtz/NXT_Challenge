import axios from 'axios';

const baseURL = 'https://backendnxtchallenge.herokuapp.com';

const service = axios.create({
    baseURL,
    withCredentials: true
});

export const signupPost = async(body) => {
    return await service.post(`${baseURL}/signup`, body)
}

export const userLogin = async(body) => {
    return await service.post(`${baseURL}/login`, body)
}

export const userLogout = async() => {
    return await service.get(`${baseURL}/logout`);
}