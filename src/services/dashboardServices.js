import axios from 'axios';

const baseURL = 'http://localhost:3001';

const service = axios.create({
    baseURL,
    withCredentials: true
});

export const getAllTasks = async(token) => {
    return service.get(`${baseURL}/getAllTaskByUser`, { headers: { token } });
}

export const createTask = async(body, token) => {
    return service.post(`${baseURL}/newTask`, body, { headers: { token } });
}

export const deleteTask = async(taskID, token) => {
    return await service.delete(`${baseURL}/deleteTask/${taskID}`, { headers: { token } });
}

export const taskToComplete = async(taskID, token) => {
    return await service.post(`${baseURL}/completedTask/${taskID}`, { headers: { token } });
}