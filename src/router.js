import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import OneView from './views/OneView.vue'
import TwoView from './views/TwoView.vue'
import ThreeView from './views/ThreeView.vue'
import FourView from './views/FourView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { component: HomeView, path: '/' },
    { component: OneView, path: '/one' },
    { component: TwoView, path: '/two' },
    { component: ThreeView, path: '/three' },
    { component: FourView, path: '/four' },
  ],
})
