import Vue from 'vue'
import Router from 'vue-router'
import browser from '@/components/browser.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'browser',
      component: browser
    }
  ]
})
