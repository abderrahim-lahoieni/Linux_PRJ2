<template>
<div class="container">
    <div class="sidebare">
      <div class="logo">
        <img src="../assets/logo_projet.png" alt="Logo">
      </div>
       <div class="element">
        <router-link to="/admin_univ_accueil">profil</router-link>
       </div>
      <div class="element">
       
       <button class="dropdown-toggle" @click="toggleDropdown">Ajout</button>
  <ul class="dropdown-menu">
    <router-link to="/Create_President">Président</router-link>
   <br> <router-link to="/Create_President">Directeur</router-link>
   <br><router-link to="/Create_President">Admin_Etablissement</router-link>
  </ul>
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
  methods:{
    toggleDropdown(){
      var dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
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