import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = (resolve) => {
  import('components/recommend/recommend').then((module) => {
    resolve(module);
  })
}
const UserCenter = (resolve) => {
  import('components/user-center/user-center').then((module) => {
    resolve(module);
  })
}
const Singer = (resolve) => {
  import('components/singer/singer').then((module) => {
    resolve(module);
  })
}
const Rank = (resolve) => {
  import('components/rank/rank').then((module) => {
    resolve(module);
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/user',
      component: UserCenter
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    }
  ],
  module:history
})
