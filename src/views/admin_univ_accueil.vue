<template>
<div class="container">
  <div class="sidebare">
        <div class="logo">
          <img src="../assets/logo_projet.png" alt="Logo">
        </div>
         <div class="element">
          <router-link to="/admin_etab_accueil">profil</router-link>
       </div>
     
      
          <div class="element">
          <router-link to="/admin_univ_interv">interventions</router-link>
         </div>
         <div class="element">
          <router-link to="/list_president">Les Présidents</router-link>
         </div>
          <div class="element">
          <router-link to="/list_admin_etab">Les Admin_Etab</router-link>
         </div>
          <div class="element">
          <router-link to="/loginView">logout</router-link>
          </div>
      </div>

    <div class="content">
        <div classe="fonction">
            <h2 classe="h">administrateur université</h2></div>
      <h2>Informations personnelles</h2>
      <div class="personal-dat">
        <div class="personal-info">
          <div class="info-label">Nom:</div>
          <div class="info-value">{{ responseData.nom }}</div>
        </div>
        <div class="personal-info">
            <div class="info-label">Prenom:</div>
            <div class="info-value">{{ responseData.prenom }}</div>
          </div>
          <div class="personal-info">
            <div class="info-label">grade:</div>
            <div class="info-value">{{  }}</div>
          </div>
          
        <div class="personal-info">
          <div class="info-label">Email:</div>
          <div class="info-value">{{ emailaddr }}</div>
        </div>
       
      </div>
      <input type="submit"  class="fadeIn fourth"  value="modifier vos informations">
    </div>
    
  </div>
</template>
<script>
import {axiosClient} from '../Network/axios';

import { mapGetters } from 'vuex';
  import Sidebar from '@/components/sidebar.vue'; 
import content from '@/components/content.vue';
export default {
    name: 'admin_univ_accueil',
  components: {
    Sidebar,
    content
  },
  data() {
    return {
      responseData: {}
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    ...mapGetters(['getSharedValues']),
    id() {
      return this.getSharedValues.id;
    },
    emailaddr() {
      return this.getSharedValues.emailaddr;
    },

  },
  methods: {
    toggleDropdown(){
      var dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    },
    fetchData() {
      // console.log(id);
      axiosClient
        .get(`administrateurs/${this.id}`)
        .then(response => {
          console.log(response.data.items.id_user);
          console.log(response.data.items);
          this.responseData = response.data.items;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

}
   
</script>
<style>
 button{
    color:#92badd;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size:30px; 
  }
  

.dropdown-toggle {
  padding: 5px;
  background-color:#3d525e;
  border:none;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  display: none;
  background-color: #627885;
  padding: 10px;
  list-style-type: none;
}



</style>