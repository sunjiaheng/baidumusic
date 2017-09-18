import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import songlists from '@/components/songlists'
import artlists from '@/components/artlists'
import listcate from '@/components/listcate'
import ucenter from '@/components/ucenter'


Vue.use(Router)

export default new Router({
	mode: 'hash',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/songlists',
      name: 'songlists',
      component: songlists
    },
    {
      path: '/artlists',
      name: 'artlists',
      component: artlists
    },
    {
      path: '/listcate',
      name: 'listcate',
      component: listcate
    },
    {
      path: '/ucenter',
      name: 'ucenter',
      component: ucenter
    },
    {
    	path:'/',
    	redirect: {name:"home"}
    }
  ]
})
