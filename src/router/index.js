import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import loginView from '../views/loginView.vue';
import accueil_Ens from '../views/accueil_Ens.vue';
import paiement_Ens from '../views/paiement_Ens.vue';
import interv_Ens from '../views/interv_Ens.vue';
import list_enseignants from '../views/list_enseignants.vue';
import admin_etab_accueil from '../views/admin_etab_accueil.vue';
import admin_intervention_Etab from '../views/admin_intervention_Etab.vue';
import direct_accueil from '../views/direct_accueil.vue';
import list_enseignants_direct from '../views/list_enseignants_direct.vue';
import valid_interventions from '../views/valid_interventions.vue';
import admin_univ_accueil from '../views/admin_univ_accueil.vue';
import admin_univ_interv from '../views/admin_univ_interv.vue';
import president_interv from '../views/president_interv.vue';
import president_accueil from '../views/president_accueil.vue';
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
      path: '/admin_etab_accueil',
      component: admin_etab_accueil,
    }, 
    {
      path: '/admin_intervention_Etab',
      component: admin_intervention_Etab,
    }, 
    {
      path: '/list_enseignants',
      component: list_enseignants,
    }, 
    {
      path: '/direct_accueil',
      component: direct_accueil,
    }, 
    {
      path: '/admin_univ_accueil',
      component: admin_univ_accueil,
    },
    {
      path: '/admin_univ_interv',
      component: admin_univ_interv,
    },
    {
      path: '/valid_interventions',
      component: valid_interventions,
    }, 
    {
      path: '/list_enseignants_direct',
      component: list_enseignants_direct,
    }, 
    {
      path: '/president_accueil',
      component: president_accueil,
    },
    {
      path: '/president_interv',
      component: president_interv,
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
