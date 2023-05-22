import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import loginView from '../views/loginView.vue';
import accueil_Ens from '../views/accueil_Ens.vue';
import paiement_Ens from '../views/paiement_Ens.vue';
import interv_Ens from '../views/interv_Ens.vue';
import Accueil from '@/components/Accueil.vue';


const routes = [
    {
      path: '/',
      component: Accueil
    },
    {
      path: '/AboutView',
      name: 'AboutView',
      component: AboutView
    },
    {
      path: '/paiement_Ens',
      component: paiement_Ens,
    }, 
    
    {
      path: '/interv_Ens',
      component: interv_Ens,
    },
  {
    path: '/accueil_Ens',
    component: accueil_Ens,
  },
 
  {path: '/loginView',
  name: 'loginView',
  component: loginView,
},
 
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
