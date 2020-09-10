import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '../components/Login/Layout.vue'
import Login from '../components/Login/Login.vue'
import Training from '../components/Training.vue'
import Document from '../components/Document.vue'


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

    }

]

const router = new VueRouter({
    routes
})

export default router