import { createRouter,createWebHistory } from 'vue-router'
import Favorites from '@/pages/Favorites.vue'
import HomePage from '@/pages/HomePage.vue'
import NotFound from '@/pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: HomePage
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