require('./bootstrap');
import { createApp } from 'vue'

import Welcome from './components/Welcome'

//importar axios
import axios from 'axios';
import VueAxios from 'vue-axios'

//importamos y configuramos el vue router
import VueRouter from 'vue-router';
import {routes} from './routes';
import Vue from 'vue';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
//instaciamos router
const router = new VueRouter({
    mode:'history',
    routes:routes
});

const app = createApp({
    router
})
app.component('Welcome', Welcome)

app.mount('#app')
