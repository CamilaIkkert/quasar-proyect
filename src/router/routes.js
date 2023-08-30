
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/index', name: 'IndexPage', component: () => import('pages/IndexPage.vue') },
      { path: '/crm', name: 'CrmModulo', component: () => import('pages/CrmModulo.vue') }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
