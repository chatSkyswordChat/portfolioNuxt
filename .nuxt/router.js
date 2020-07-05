import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _52c5711b = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages_contact_index" */))
const _44f7051e = () => interopDefault(import('..\\pages\\curriculumVitae\\index.vue' /* webpackChunkName: "pages_curriculumVitae_index" */))
const _53e9129a = () => interopDefault(import('..\\pages\\portfolio\\index.vue' /* webpackChunkName: "pages_portfolio_index" */))
const _77c05098 = () => interopDefault(import('..\\pages\\workHistory\\index.vue' /* webpackChunkName: "pages_workHistory_index" */))
const _720be372 = () => interopDefault(import('..\\pages\\portfolio\\_id\\index.vue' /* webpackChunkName: "pages_portfolio__id_index" */))
const _28aeb0f9 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/portfolioNuxt/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _52c5711b,
    name: "contact"
  }, {
    path: "/curriculumVitae",
    component: _44f7051e,
    name: "curriculumVitae"
  }, {
    path: "/portfolio",
    component: _53e9129a,
    name: "portfolio"
  }, {
    path: "/workHistory",
    component: _77c05098,
    name: "workHistory"
  }, {
    path: "/portfolio/:id",
    component: _720be372,
    name: "portfolio-id"
  }, {
    path: "/",
    component: _28aeb0f9,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
