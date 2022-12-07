import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Contact from './views/contact'
import './style.css'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Contact',
      path: '/',
      component: Contact,
    }
  ],
})
