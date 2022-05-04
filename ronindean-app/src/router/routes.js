const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: '',
        name: 'Services',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'survey',
        name: 'Survey',
        component: () => import('pages/Survey.vue')
      }
    ]
  },
  {
    path: '/articles',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        name: 'Articles',
        component: () => import('pages/Articles.vue')
      },
      {
        path: ':id',
        name: 'Article',
        component: () => import('pages/Article.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
