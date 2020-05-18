export default [
  {
    path: '/deck-builder',
    name: 'deck-builder',
    meta: {
      requiresAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "home" */ '@/components/DeckBuilder.vue')
  }
]
