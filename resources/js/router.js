import Vue from 'vue';
import VueRouter from 'vue-router';
// import { component } from 'vue/types/umd';

Vue.use(VueRouter)

// * importiamo le singole pagine

import AboutUs from './pages/AboutUs';
import HomePage from './pages/HomePage';
import SinglePost from './pages/SinglePost';

const router = new VueRouter ({
    mode: 'history',
    routes:[
        {
            path:'/About',
            name:'AboutUs',
            component:AboutUs
        },
        {
            path:'/HomePage',
            name:'HomePage',
            component:HomePage
        },
        {
            path:'/SinglePost',
            name:'SinglePost',
            component:SinglePost
        }
    ]
})
export default router