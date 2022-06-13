import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import Register from "../views/Register";
import Application from "../layouts/Application";
import Auth from "../layouts/Auth";
import TaskForm from "../views/TaskForm";

export default [
    {
        path: '/',
        redirect: '/dashboard',
        component: Application,
        meta: {requiresAuth: true},
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: '/task',
                name: 'TaskForm',
                component: TaskForm
            },
        ]
    },
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component: Auth,
        meta: {isGuest: true},
        children: [
            {
                path: '/Login',
                component: Login,
                name: 'Login',
            },
            {
                path: '/register',
                component: Register,
                name: 'Register',
            },
        ]
    },
]
