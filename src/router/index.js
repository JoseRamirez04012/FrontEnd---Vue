import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OrderView from '../views/OrderView.vue'
import OrderDetailView from '../views/OrderDetail.vue'
import SignInView from '../views/SignInView.vue'
import ContactView from '../views/ContactView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/order',
        name: 'order',
        component: OrderView
    },
    {
        path: '/order/:id',
        name: 'order_detail',
        component: OrderDetailView
    },
    {
        path: '/signIn',
        name: 'signIn',
        component: SignInView
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router