import Vue from 'vue'
import Router from 'vue-router'

import teamRoutes from './routes/teamRoutes'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'active--link',
    routes: teamRoutes
})