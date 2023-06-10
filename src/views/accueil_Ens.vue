<template>
<div class="container">
    <div class="sidebare">
      <div class="logo">
        <img src="../assets/logo_projet.png" alt="Logo">
      </div>
       <div class="element">
        <router-link to="/accueil_Ens">Profil</router-link>
      </div>
      <div class="element">
       <router-link to="/interv_Ens">Liste interventions</router-link>
      </div>
      <div class="element">
       <router-link to="/paiement_Ens">Liste paiement</router-link>
      </div>
        <div class="element">
        <router-link to="/loginView">Logout</router-link>
      </div>
    </div>

    <div class="content">
        <div classe="fonction">
            <h2 classe="h">Professeur</h2></div>
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
            <div class="info-label">Métier:</div>
            <div class="info-value">Enseignant</div>
          </div>
        <div class="personal-info">
          <div class="info-label">Email:</div>
          <div class="info-value">{{ emailaddr }}</div>
        </div>
       
      </div>
      <input type="submit"  class="inpuu"  value="modifier vos informations"> 
      </div>
  </div>
</template>
<script>
import {axiosClient} from '../Network/axios';

import { mapGetters } from 'vuex';
import Sidebar from '@/components/sidebar.vue'; 
import content from '@/components/content.vue';
export default {
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
    fetchData() {
      // console.log(id);
      axiosClient
        .get(`enseignants/${this.id}`)
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

</style>