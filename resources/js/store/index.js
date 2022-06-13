import { createStore } from 'vuex';
import * as services from '../services/index';

const tmpTasks = [
    {
        "id":1,
        "title": 'One',
        "description": 'My description',
        "status": 'open'
    },
    {
        "id":2,
        "title": 'One',
        "description": 'My description',
        "status": 'open'
    },
    {
        "id":3,
        "title": 'One',
        "description": 'My description',
        "status": 'open'
    },
    {
        "id":4,
        "title": 'One',
        "description": 'My description',
        "status": 'open'
    },
];

const store = createStore({
    state:{
        user:{
            data:{},
            token:sessionStorage.getItem('TOKEN')
        },
        tasks: [],
        loading: false
    },
    getters:{},
    actions:{
        register({ commit },user){
           return services.register(user)
                .then(({data})=>{
                   commit('setUser',data);
                   return data;
               });
        },
        login({ commit },user){
           return services.login(user)
                .then(({data})=>{
                   commit('setUser',data);
                   return data
               })
        },
        logout({commit}){
            return services.logout()
                .then(({data})=>{
                    commit('logout');
                    return data
                })
        },
        submitTask({commit},task){

            if(task.id){
                return services.updateTask(task)
                    .then(({data})=>{
                        commit('updateTask',data)
                        return data
                    })
            }else{
                return services.createTask(task)
                    .then(({data})=>{
                        commit('saveTask',data)
                        return data
                    })
            }

        },
        getTasks({commit}){
            commit('loading',true)
            return services.getTasks()
                .then(({data})=>{
                    const result = data.data;

                    commit('loading',false)
                    commit('setTasks',result)
                    return result
                })
        },
        deleteTask({ dispatch }, id) {
            return services.deleteTasks(id)
                .then(({data})=>{
                    return data;
                })
        },
    },
    mutations:{
        setUser: (state, userData)=>{
            const token = userData.token;

            state.user.token = token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN',token)
        },
        setErrors: (state, errors)=>{

            state.errors = errors;
        },
        logout: (state) =>{
            state.user.data = {};
            state.user.token = null;
            state.tasks = [];
            sessionStorage.removeItem('TOKEN');
        },
        updateTask: (state, task) =>{
            state.tasks = state.tasks.map((t)=>{
                if(t.id === task.id){
                    return task;
                }
                return t;
            })

        },
        saveTask: (state, task) =>{
            state.tasks = [...state.tasks,task];
        },
        loading: (state, status) =>{
            state.loading = status;
        },
        setTasks: (state, tasks) =>{
            state.tasks = tasks;
        }
    },
    modules:{}
});

export default store;
