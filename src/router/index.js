import Vue from 'vue'
import Router from 'vue-router'
import liveRoom from '@/components/liveRoom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'liveRoom',
      component: liveRoom
    }
  ]
})
