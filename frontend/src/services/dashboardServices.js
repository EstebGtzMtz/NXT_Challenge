import axios from 'axios';

const baseURL = 'http://localhost:3001';

const service = axios.create({ baseURL });

export const getAllTasks = async(token) => {
    return service.get(`${baseURL}/getAllTaskByUser`, { headers: { token } });
}

export const createTask = async(body, token) => {
    console.log(body, token)
    return service.post(`${baseURL}/newTask`, body, { headers: { token } })
}