import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataPreviewView from '../views/DataPreviewView.vue'
import ChatView from '../views/ChatView.vue'
import SelectionView from '../views/SelectionDashboardView.vue'
import LoginView from '../views/LoginView.vue' 
import SignupView from '../views/SignupView.vue'
import ConfirmSignupView from '../views/ConfirmSignupView.vue';

import  store  from '../store/index.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/confirm-signup',
    name: 'confirm-signup',
    component: ConfirmSignupView
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupView,
  },
  {
    path: '/preview',
    name: 'preview',
    component: DataPreviewView,
    beforeEnter(to, from,next) {
      console.log('ddddddd', store.getters.isAuthenticated);
      if (to.name !== 'login' && !store.getters.isAuthenticated) next({ name: 'login' })
      else next()
      // called before the route that renders this component is confirmed.
      // does NOT have access to `this` component instance,
      // because it has not been created yet when this guard is called!
    },
    
  },
  {
    path: '/playground',
    name: 'playground',
    component: ChatView,
    beforeEnter(to, from,next) {
      console.log('ddddddd', store.getters.isAuthenticated);
      if (to.name !== 'login' && !store.getters.isAuthenticated) next({ name: 'login' })
      else next()
      // called before the route that renders this component is confirmed.
      // does NOT have access to `this` component instance,
      // because it has not been created yet when this guard is called!
    },
  },
  { 
    path: '/selection',
    name: 'ProcessSelection',
    component: SelectionView,
    beforeEnter(to, from,next) {
      console.log('ddddddd', store.getters.isAuthenticated);
      if (to.name !== 'login' && !store.getters.isAuthenticated) next({ name: 'login' })
      else next()
      // called before the route that renders this component is confirmed.
      // does NOT have access to `this` component instance,
      // because it has not been created yet when this guard is called!
    },

  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
