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
            <router-link to="/admin_univ_interv">Interventions</router-link>
           </div>
           <!-- <div class="element">
            <router-link to="/list_president"> Présidents</router-link>
           </div> -->
            <div class="element">
            <router-link to="/list_admin_etab">Liste des administrateurs</router-link>
           </div>
           <div class="element">
            <router-link to="/Create_President">Create President</router-link>

           <!-- <button type="submit" @click.prevent="create_pre()">Creation President</button> -->
           </div>
           <div class="element">
            <router-link to="/Create_Admin_etab">Create Admin Etablissement</router-link>

           <!-- <button type="submit" @click.prevent="create_adm_etab()">Creation admin etablissement</button> -->
           </div>
           <div class="element">
            <a @click="logout" href="#">Logout</a>
          </div>
        </div>
        <div class="content">
          <div classe="fonction">
            <h2 classe="h">Administrateur Université</h2></div>
          <div class="personal-dat">
        <div class="personal-info">
            <div class="info-label">Email:</div>
            <div class="info-value">{{ email }}</div>
          </div>
        </div>
        
  
    </div>
  </div>
  </template>
  <script>
  
  import {axiosClient} from '../Network/axios';
    import Sidebar from '@/components/sidebar.vue'; 
  import content from '@/components/content.vue';
  export default {
      name: 'admin_univ_accueil',
    components: {
      Sidebar,
      content
    },
    data(){
      return {
        email:''
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
      create_adm_etab(){
        this.$router.push('/Create_Admin_Etab');
      },
      create_pre(){
        this.$router.push('/Create_President');
      },
      toggleDropdown(){
        
        var dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
      },
      fetchData(){
        this.email=localStorage.getItem('email');
      }
      
      
    }
  
  }
     
  </script>
  <style>
   button{
      color:#92badd;
      font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-size:30px; 
      height:auto;
      width:auto;
      padding:15px;
      margin:10px;
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