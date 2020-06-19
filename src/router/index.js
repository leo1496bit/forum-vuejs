import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sujets from '../components/Sujets.vue'
import NouveauSujet from '../components/Nouveau-sujet.vue'
import Sujet from '../components/Sujet.vue'
import Connexion from '../components/Connexion.vue'
import CreerCompte from '../components/Creer-Compte.vue'
import Profil from '../components/Profil.vue'
import Renit from '../components/renit.vue'
import NewPass from '../components/newPass.vue'
import store from '@/store'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    ,meta: {requiresAuth:true}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    ,meta: {requiresAuth:true}
  },
  {
    path:'/sujets',
    name:'Sujets',
    component:Sujets
    ,meta: {requiresAuth:true}
  },
  {
    path:'/nouveau-sujet',
    name:'Nouveau-sujet',
    component:NouveauSujet
    ,meta: {requiresAuth:true}
  },
  {
    path:'/sujet',
    name:'Sujet',
    component:Sujet
    ,meta: {requiresAuth:true}
  },
  {
    path:'/profil',
    name:'Profil',
    component:Profil
    ,meta: {requiresAuth:true}
  },
  {
    path:'/connexion',
    name:'Connexion',
    component:Connexion
  },
  {
    path:'/creer-compte',
    name:'CreerCompte',
    component:CreerCompte
  },
  {
    path:'/new-pass',
    name:'NewPass',
    component:NewPass
  },
  {
    path:'/renitialiser',
    name:'Renit',
    component:Renit
  }

]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!store.state.connect){
      next({
        path: '/connexion'
      })
    }
    else{
      next()
    }
  }
  else{
    next()
  }
})
export default router
