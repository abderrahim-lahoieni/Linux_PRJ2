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
          <router-link to="#">logout</router-link>
          </div>
      </div>
  
      
  <div class="content">
  
  <div class="wrapper fadeInDown">
  <div id="formContent">
  
    <h2 class="inactive underlineHover">update info</h2> 
    <form>
      <input type="text" id="Nom" class="fadeIn second" name="Nom"  v-model="responseData.nom">
      <input type="text" id="Prénom" class="fadeIn second" name="Prénom" v-model="responseData.prenom" >
      <input type="email" id="Prénom" class="fadeIn second" name="Prénom" v-model="email" >
      <input type="submit"  @click.prevent="update()" class="fadeIn fourth"  value="Update">
      <input type="reset"  class="fadeIn fourth" value="Annuler">

    </form>
  </div>
</div>
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
        nom:'',
      prenom:'',
      email:'',
        responseData: {}
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
      update(){
          const token = localStorage.getItem('accessToken');
          localStorage.setItem('email',this.email);
          const url ='Administrater_etb/update';
          const data = {
          nom : this.responseData.nom,
          prenom : this.responseData.prenom,
          email: localStorage.getItem('email'),
           }
           axiosClient
      .post(url,data,{headers: {
  'Authorization': 'Bearer ' + token}})
      .then(response => {
          this.$router.push('/direct_accueil');
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
  <style scoped>
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
      button{
      width: 500px;
      height: 150px;
    }  
  </style>