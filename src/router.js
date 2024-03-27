import { createRouter,createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/AuthStore.js'
import Favorites from '@/pages/Favorites.vue'
import HomePage from '@/pages/HomePage.vue'
import NotFound from '@/pages/NotFound.vue'
import LoginFrom from '@/pages/LoginFrom.vue'
import ProfilePage from '@/pages/ProfilePage.vue'

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
            path: '/profile',
            name: 'profile',
            component: ProfilePage
        },
        {
            path: '/:notFound(.*)',
            name: 'notFound',
            component: NotFound
        },
    ]
})

// NAV GUARDS

router.beforeEach(async (to, from) => {
    
    if (to.name === 'auth' && useAuthStore().user.id) {
        return false
    }
    if(to.name === 'favorites' && !useAuthStore().user.id) {
        return { name: 'auth' }
    }
    if(to.name === 'profile' && !useAuthStore().user.id) {
        return { name: 'auth' }
    }
})
export default router