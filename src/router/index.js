import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import market from '@/components/market.vue'
import http from '@/components/http.vue'
import home from '@/components/home.vue'
import material from '@/components/material.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/z',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },{
      path: '/material',
      name: 'material',
      component: material
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/http',
      name: 'http',
      component: http
    },
    {
      path: '/market',
      name: 'market',
      component: market
    }
  ]
})
