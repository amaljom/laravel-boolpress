import Vue from 'vue';
import VueRouter from 'vue-router';
import { component } from 'vue/types/umd';

Vue.use(VueRouter)

// * importiamo le singole pagine

import AboutUs from './pages/AboutUs';
import HomePage from './pages/HomePage';

const router = new VueRouter ({
    mode: 'history',
    routes:[
        {
            path:'/About',
            name:'AboutUs',
            component:AboutUs
        },
        {
            path:'/Home',
            name:'HomePage',
            component:HomePage
        }

    ]
})
