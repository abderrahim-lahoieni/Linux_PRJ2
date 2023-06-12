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
          <a @click="logout" href="loginView">logout</a>
      </div>
    </div>

    <div class="content">
          <div classe="fonction">
              <h2 classe="h">Professeur</h2></div>
        <h2>Informations personnelles</h2>
        <div class="personal-dat">
          <div class="personal-info">
            <div class="info-label">Nom:</div>
            <div class="info-value">hasnaoui</div>
          </div>
          <div class="personal-info">
              <div class="info-label">Prenom:</div>
              <div class="info-value">karim</div>
            </div>
            <div class="personal-info">
              <div class="info-label">grade:</div>
              <div class="info-value">echel 11</div>
            </div>
            <div class="personal-info">
              <div class="info-label">type:</div>
              <div class="info-value">directeur</div>
            </div>
          <div class="personal-info">
            <div class="info-label">Email:</div>
            <div class="info-value">johndoe@example.com</div>
          </div>
          <div class="personal-info">
            <div class="info-label">Tel:</div>
            <div class="info-value">1234567890</div>
          </div>
          <button type="submit"  @click.prevent="Update()" class="fadeIn fourth"  >Modifier les informations</button>
          </div>
      </div>
  </div>
</template>
<script>
import Sidebar from '@/components/sidebar.vue'; 
import content from '@/components/content.vue';
export default {
  components: {
    Sidebar,
    content
  },
  methods: {
   Update(){
     this.$router.push('/Mod_ens');
    },}
  
 
}
</script>
<style>

</style>