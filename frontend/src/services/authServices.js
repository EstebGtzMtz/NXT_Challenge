import axios from 'axios';

const baseURL = 'http://localhost:3001';

const service = axios.create({ baseURL });

export const signupPost = async(body) => {
    return await service.post(`${baseURL}/signup`, body)
}

export const userLogin = async(body) => {
    return await service.post(`${baseURL}/login`, body)
}