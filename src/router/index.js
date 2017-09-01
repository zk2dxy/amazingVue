import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'
import routerModule from './router-modules/main'

Vue.use(Router)
const rootRouter = [{
  path: '/',
  name: 'root',
  redirect: '/index'
}]

var route = _.concat(rootRouter, routerModule)

export default new Router({
  routes: route
})
