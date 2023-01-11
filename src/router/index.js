import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'authLogin',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '',
    name: 'dashboardContainer',
    component: () => import('@/layouts/dashboard.vue'),
    redirect: { name: 'overview' },
    children: [
      {
        path: 'overview',
        name: 'overview',
        component: () => import('@/views/overview.vue'),
      },
      {
        path: 'medical-officer',
        name: 'medical-officer',
        component: () => import('@/views/medical-officer.vue'),
      },
      {
        path: 'patients',
        name: 'patients',
        component: () => import('@/views/patient.vue'),
      },
      {
        path: 'records',
        name: 'records',
        component: () => import('@/views/record.vue'),
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/role.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router
