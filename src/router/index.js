import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '../components/Login/Layout.vue'
import Login from '../components/Login/Login.vue'
import Training from '../components/Training.vue'


const routes = [
    { path: '/', redirect: '/training', },
    { path: '/training', component: Training },
    {
        path: '/Layout',
        component: Layout,
        childrenL: [
            { path: 'Login', component: Login }
        ]

    }

]

const router = new VueRouter({
    routes
})

export default router