import axios from 'axios';
import store from "../store";

const axiosClient = axios.create({
    baseURL: 'https://task.test/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})

axiosClient.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${store.state.user.token}`
    return config;
})

export const register = (user) =>{
    return axiosClient.post('/register',user)
}

export const login = (user) =>{
    return axiosClient.post('/login',user)
}

export const logout = () =>{
    return axiosClient.post('/logout',)
}

export const createTask = (task) =>{
    return axiosClient.post('/task',task)
}

export const updateTask = (task) =>{
    return axiosClient.put(`/task/${task.id}`,task)
}

export const getTasks = () =>{
    return axiosClient.get('/task')
}

export const deleteTasks = (id) =>{
    return axiosClient.delete(`/task/${id}`)
}
