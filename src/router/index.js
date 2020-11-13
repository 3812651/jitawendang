import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '../views/Login/Layout.vue'
import Login from '../views/Login/Login.vue'
import Training from '../views/Training.vue'
import Document from '../views/Document/index.vue'
import Community from '../views/Community/index.vue'
import postList from '../views/Community/postList.vue'
import postRead from '../views/Community/postRead.vue'


const routes = [
    { path: '/', redirect: '/Community', },
    { path: '/Training', component: Training },
    { path: '/Document', component: Document },
    {
        path: '/Community', component: Community, redirect: '/Community/postList',
        children: [
            { path: 'postList', component: postList },
            { path: 'postRead/:id', component: postRead }
        ]
    },
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