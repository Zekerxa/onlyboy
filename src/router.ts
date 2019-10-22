import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/lock/onlyboy',
      name: 'onlyboy',
      component: () => import('./views/unlock.vue')
    },
    {
      path: '/login1',
      name: 'login1',
      component: () => import('./components/lock.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import('./components/404.vue')
    },
    {
      path: '/502',
      name: '502',
      component: () => import('./components/serverdown.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/login.vue')
    },
    {
      path: '/loginform',
      name: 'loginform',
      component: () => import('./components/loginform.vue')
    },
    {
      path: '/register',
      name: 'SignUp',
      component: () => import('./netlifyforms/SignUpForms.vue')
    },
    {
      path: '/thanks',
      name: 'success',
      component: () => import('./netlifyforms/SubmissionSuccess.vue')
    },
    {
      path: '/404',
      name: 'fail',
      component: () => import('./netlifyforms/SubmissionFail.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('./components/privacy.vue')
    }
  ]
});

export default router;