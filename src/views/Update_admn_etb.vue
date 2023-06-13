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
            <a @click="logout" href="#">logout</a>
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
        <input type="submit"  @click.prevent="update()" class="fadeIn fourth"  value="UPDATE">
        <input type="reset"  class="fadeIn fourth" value="Annuler">

      </form>
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
      components: {
        Sidebar,
        content
    
      },
      data() {
        return {
            responseData: {},
        nom:'',
        prenom:'',
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
    <style>
    
    </style>