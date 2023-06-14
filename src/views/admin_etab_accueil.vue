<template>
<div class="container">
  <div class="sidebare">
      <div class="logo">
        <img src="../assets/logo_projet.png" alt="Logo">
      </div>
       <div class="element">
        <router-link to="/admin_etab_accueil">Profil</router-link>
     </div>
     <div class="element">
        <router-link to="/list_enseignants">Liste Enseignants</router-link>
        </div >
        <div class="element">
      <router-link to="/Create_Ens">Création Enseignant</router-link>
      </div>
       
        <div class="element">
        <router-link to="/admin_intervention_Etab">Interventions</router-link>
       </div>
       <div class="element">
            <a @click="logout" href="#">Logout</a>
          </div>
    </div>

    <div class="content">
        <div classe="fonction">
            <h2 classe="h">Administrateur Etablissement</h2></div>
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
          <div class="info-label">Email:</div>
          <div class="info-value">{{ email }}</div>
        </div>

      </div>
      <button type="submit"  @click.prevent="update()" class="fadeIn fourth" style="margin:20px"  >Modifier les informations</button>
    </div>
  </div>
</template>
<script>
import {axiosClient} from '../Network/axios';

import Sidebar from '@/components/sidebar.vue'; 
import content from '@/components/content.vue';
export default {
    name: 'admin_etab_accueil',
    data() {
    return {
      responseData: {},
      email:'',
    };
  },
  mounted() {
    const token = localStorage.getItem('accessToken');
    console.log("token mounted"+token)
    if(token==null) {
      this.$router.push('/loginView');

    }
    this.fetchData();
  },
  
  methods: {
    update(){
      this.$router.push('/Update_admn_etb');
    },
    logout(){
      const token = localStorage.getItem('accessToken');
    axiosClient
        .post('logout',null,{headers: {
    'Authorization': 'Bearer ' + token}})
        .then(response => {
          console.log(response);
          localStorage.clear();
          this.$router.push('/loginView');
        })
        .catch(error => {
          console.error(error);
        });
      },
    fetchData() {
      this.email=localStorage.getItem('email');
      const token = localStorage.getItem('accessToken');
      axiosClient
        .get('administrateur_etb',{headers: {
    'Authorization': 'Bearer ' + token}})
        .then(response => {
          console.log(response);
          console.log(response.data.items);
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

</style>