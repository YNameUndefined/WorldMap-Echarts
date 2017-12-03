import Vue from 'vue'
import Router from 'vue-router'
import browser from '@/components/browser.vue'
import map from '@/components/map.vue'
import demo from '@/components/demo/App.vue'
Vue.use(Router)

export default new Router({
  routes: [
	 {
	    path: '/',
	    name: 'demo',
	    component: demo
	  },
    {
      path: '/browser',
      name: 'browser',
      component: browser
    },
    {
        path: '/map',
        name: 'map',
        component: map
      },
        {
            path: '/goalMap',
            name: 'demo',
            component: demo
          }
  ]
})
