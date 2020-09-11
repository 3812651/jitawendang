import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '../views/Login/Layout.vue'
import Login from '../views/Login/Login.vue'
import Training from '../views/Training.vue'
import Document from '../views/Document/index.vue'


const routes = [
    { path: '/', redirect: '/Training', },
    { path: '/Training', component: Training },
    { path: '/Document', component: Document },
    {
        path: '/Layout',
        component: Layout,
        childrenL: [
            { path: 'Login', component: Login }
        ]

    },

]

const router = new VueRouter({
    routes
})

export default router