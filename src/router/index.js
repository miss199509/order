import Vue from 'vue'
import Router from 'vue-router'
import liveRoom from '@/components/liveRoom'
import record from '@/components/record'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'liveRoom',
      component: liveRoom
    },
    {
      path: '/record',
      name: 'record',
      component: record
    }
  ]
})
