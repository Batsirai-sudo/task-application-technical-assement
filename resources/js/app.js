require('../sass/app.scss')

import { createApp } from 'vue'
import Main from './main'
import store from './store'
import router from './router';

createApp(Main)
    .use(store)
    .use(router)
    .mount('#app')
