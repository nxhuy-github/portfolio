import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Contact from '@/components/Contact'
import Resume from '@/components/Resume'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
