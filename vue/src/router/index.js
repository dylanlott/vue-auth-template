import Vue from 'vue'
import VueRouter from 'vue-router'

import notfound from '../views/PageNotFound.vue'
import landing from '../views/Landing.vue'
import login from '../views/Login.vue'
import signup from '../views/SignUp.vue'
import dashboard from '../views/Dashboard.vue'
import profile from '../views/UserProfile.vue'
import forgotpassword from '../views/ForgotPassword.vue'
import logout from '../views/Logout.vue'
import confirmation from '../views/EmailConfirmation.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    name: 'landing',
    path: '/',
    component: landing,
    meta: {
      auth: false
    }
  }, {
    name: 'login',
    path: '/login',
    component: login,
    meta: {
      auth: false
    }
  }, {
    name: 'signup',
    path: '/signup',
    component: signup,
    meta: {
      auth: false
    }
  }, {
    name: 'forgot',
    path: '/forgot',
    component: forgotpassword,
    meta: {
      auth: false
    }
  }, {
    name: 'profile',
    path: '/profile',
    component: profile,
    meta: {
      auth: true
    }
  }, {
    name: 'dashboard',
    path: '/dashboard',
    component: dashboard,
    meta: {
      auth: true
    }
  }, {
    path: '/logout',
    name: 'logout',
    component: logout,
    meta: {
      auth: false
    }
  }, {
    path: '*',
    component: notfound
  }]
})
