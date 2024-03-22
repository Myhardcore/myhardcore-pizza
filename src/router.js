import { createRouter,createWebHistory } from 'vue-router'
import Favorites from '@/pages/Favorites.vue'
import HomePage from '@/pages/HomePage.vue'
import NotFound from '@/pages/NotFound.vue'
import LoginFrom from '@/pages/LoginFrom.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: HomePage
        },
        {
            path: '/auth',
            name: 'auth',
            component: LoginFrom
        },
        {
            path: '/favorites',
            name: 'favorites',
            component: Favorites
        },
        {
            path: '/:notFound(.*)',
            name: 'notFound',
            component: NotFound
        },
    ]
})
export default router