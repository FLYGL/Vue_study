import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path: '/MSite',
            component: MSite,
            meta: {
                showFooter:true
            }
        },
        {
            path: '/Order',
            component: Order,
            meta: {
                showFooter:true
            }
        },
        {
            path: '/Search',
            component: Search,
            meta: {
                showFooter:true
            }
        },
        {
            path: '/Profile',
            component: Profile,
            meta: {
                showFooter:true
            }
        },
        {
            path: '/',
            redirect: '/MSite'
        },
        {
            path: '/Login',
            component: Login
        }
    ]
})