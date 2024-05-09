import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
      children: [
        {
          path: '/services/it-consultancy',
          name: 'it-consultancy',
          component: () => import('../views/ITConsultancy.vue')
        },
        {
          path: '/services/web-development',
          name: 'web-development',
          component: () => import('../views/WebDevelopment.vue')
        },
        {
          path: '/services/digital-marketing',
          name: 'digital-marketing',
          component: () => import('../views/DigitalMarketing.vue')
        },
        {
          path: '/services/mobile-app-development',
          name: 'mobile-app-development',
          component: () => import('../views/MobileAppDevelopment.vue')
        },
        {
          path: '/services/internet-of-things',
          name: 'internet-of-things',
          component: () => import('../views/InternetOfThings.vue')
        },
        {
          path: '/services/realtime-solutions',
          name: 'realtime-solutions',
          component: () => import('../views/RealtimeSolutions.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
