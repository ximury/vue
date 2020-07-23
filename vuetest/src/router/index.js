import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard/analysis'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // 下面表示啥意思，好像是表示空白
      component: {render: h => h('router-view')},
      children: [
        {
          path: '/dashboard/analysis',
          name: 'analysis',
          component: () => import('../views/dashboard/analysis.vue')
        }
      ]
    }
  ]
})
