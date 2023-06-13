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
import Create_Ens from '../views/Create_Ens.vue';
import create_interv from '../views/create_interv.vue';
import list_president from '../views/list_president.vue';
import list_directeur from '../views/list_directeur.vue';
import Create_President from '../views/create_president.vue';
import list_admin_etab from '../views/list_admin_etab.vue';
import Create_Admin_Etab from '../views/Create_Admin_Etab.vue';
import Mod_interv from '../views/Mod_interv.vue';
import Update_ens from '../views/Update_ens.vue';
import Update_admn_etb from '../views/Update_admn_etb.vue';
import Update_ens_adm from '../views/Update_ens_adm.vue';
import Mod_profil_direct from '../views/Mod_profil_direct.vue';
import sidebar from '@/components/sidebar.vue';
import Accueil from '@/components/Accueil.vue';


const routes = [
    {
      path: '/',
      component: Accueil
    },
    {
      path: '/',
      name: 'sidebar',
      component: sidebar
    },
    
    {
      path: '/AboutView',
      name: 'AboutView',
      component: AboutView
    },
    
    {
      path: '/Create_Ens',
      name: 'Create_Ens',
      component: Create_Ens
    },
    {
      path: '/Mod_interv',
      name: 'Mod_interv',
      component: Mod_interv
    },
    {
      path: '/Update_ens',
      name: 'Update_ens',
      component: Update_ens
    },
    {
      path: '/Update_admn_etb',
      name: 'Update_admn_etb',
      component: Update_admn_etb
    },
    {
      path: '/Update_ens_adm',
      name: 'Update_ens_adm',
      component: Update_ens_adm
    },
    {
      path: '/Mod_profil_direct',
      name: 'Mod_profil_direct',
      component: Mod_profil_direct
    },
    {
      path: '/create_interv',
      name: 'create_interv',
      component: create_interv
    },
    {
      path: '/Create_President',
      name: 'Create_President',
      component: Create_President
    },
    
    {
      path: '/Create_Admin_Etab',
      name: 'Create_Admin_Etab',
      component: Create_Admin_Etab
    },
    {
      path: '/list_president',
      name: 'list_president',
      component: list_president
    },
    {
      path: '/list_admin_etab',
      name: 'list_admin_etab',
      component: list_admin_etab
    },
    {
      path: '/list_directeur',
      name: 'list_directeur',
      component: list_directeur
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
