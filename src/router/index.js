import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Projects from '../views/Projects'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
        else {
            return { top: 0 }
        }
    }
})

export default router