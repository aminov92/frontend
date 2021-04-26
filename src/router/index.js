import Vue from 'vue'
import Router from 'vue-router'
import PriseCommandes from '@/components/PriseCommandes'
import FilAttente from '@/components/FilAttente'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'PriseCommandes',
      component: PriseCommandes
    },
    {
      path: '/FilAttente',
      name: 'FilAttente',
      component: FilAttente
    }]
})