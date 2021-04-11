import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Index'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    //公共布局下的路由
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                redirect: 'home'
            },
            {
                path: 'home',
                component: Home
            },
            {
                path: 'video',
                component: () => import('../views/Video')
            },
            {
                path: 'me',
                component: () => import('../views/Me')
            },
        ]
    },
    {
        path: '/article/details/:id',
        name: 'ArticleDetails',
        component: () => import('../views/ArticleDetails')
    },
    {
        path: '/upload',
        name: 'Upload',
        component: () => import('../views/Upload')
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('../views/Search')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//路由卫士
router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !localStorage.getItem("uid")) next({name: 'Login'})
    else next()
})

export default router
