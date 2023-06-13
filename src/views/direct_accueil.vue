<template>
  <div class="container">
      <div class="sidebare">
        <div class="logo">
          <img src="../assets/logo_projet.png" alt="Logo">
        </div>
         <div class="element">
         <router-link to="/direct_accueil">profil</router-link>
         </div>
        <div class="element">
         <router-link to="/list_enseignants_direct">liste enseignants</router-link>
        </div>
          <div class="element">
         <router-link to="/valid_interventions">valider les interventions</router-link>
          </div>
          <div class="element">
          <router-link to="/loginView">logout</router-link>
          </div>
      </div>
  
      <div class="content">
          <div classe="fonction">
              <h2 classe="h">directeur</h2></div>
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
        <button type="submit" @click.prevent="update()">Modifier vos informations</button>
       
      </div>
    </div>
  </template>
  <script>
   import {axiosClient} from '../Network/axios';
  
  import { mapGetters } from 'vuex';
  export default {
      name: 'direct_accueil',
      data() {
      return {
        email:'',
        responseData: {}
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      update(){
        this.$router.push('/Mod_profil_direct');
      },
      logout(){
        const token = localStorage.getItem('accessToken');
      axiosClient
          .post('logout',null,{headers: {
      'Authorization': 'Bearer ' + token}})
          .then(response => {
            console.log(response);
            this.$router.push('/loginView');
          })
          .catch(error => {
            console.error(error);
          });
        },
      fetchData() {
        const token = localStorage.getItem('accessToken');
        this.email=localStorage.getItem('email');
       axiosClient
         .get('administrateur_etb',{headers: {
     'Authorization': 'Bearer ' + token}})
         .then(response => {
           console.log(this.id);
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
  <style >
  * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
     background: linear-gradient(
      rgba(60, 149, 244, 0.5),
      rgba(120, 119, 130, 0.5)
    )
    }
    .fonction h2{
      text-align: center;
      align-content: center;
      padding: 0;
      margin: 0;
     color:#f2f2f2;
    }
    .fonction{
      background-color: rgba(255, 255, 255, 0.5);
    }
    
    .container {
      display: flex;
      height: 100vh;
    }
    
    .sidebar {
     background-color:#222;
      color: #fff;
      width: 250px;
      transition: width 0.3s;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
    
    .logo {
      padding: 20px;
      text-align: center;
    }
    
    .logo img {
      width: 80px;
    }
    
    .sidebar ul {
      list-style-type: none;
      padding: 0;
      margin-top: 20px;
    }
    
    .sidebar li {
      padding: 10px 20px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    
    .sidebar li:hover {
      background-color: #444;
    }
    
    .content {
      flex: 1;
      padding: 20px;
    }
    
    .content h1 {
      font-size: 24px;
      margin-bottom: 20px;
      color: #333;
    }
    
    .personal-data {
      background-color: #fff;
      border-radius: 5px;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    
    .personal-info {
      display: flex;
      margin-bottom: 10px;
    }
    
    .info-label {
      font-weight: bold;
      width: 80px;
      color: #555;
    }
    
    .info-value {
      flex: 1;
      color: #333;
    }
    /* button{
      width: 500px;
      height: 150px;
    } */
  </style>