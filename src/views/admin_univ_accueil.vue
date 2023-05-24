<template>
<div class="container">
    <div class="sidebare">
      <div class="logo">
        <img src="logo.png" alt="Logo">
      </div>
       <div class="element">
        <router-link to="/admin_univ_accueil">profil</router-link>
       </div>
      <div class="element">
       <router-link to="/Create_President">création des comptes</router-link>
      </div>
      <div class="element">
        <router-link to="/admin_univ_interv">liste interventions</router-link>
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
       
      </div>
      <input type="submit"  class="fadeIn fourth"  value="modifier vos informations">
    </div>
    
  </div>
</template>
<script>
  import Sidebar from '@/components/sidebar.vue'; 
import content from '@/components/content.vue';
export default {
    name: 'admin_univ_accueil',
  components: {
    Sidebar,
    content

  },
 
}
   
</script>
<style>

</style>