export default [
  {
    path: '/play',
    name: 'play',
    meta: {
      requiresAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "home" */ '@/components/Play.vue')
  }
]
