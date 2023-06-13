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
    
    import { mapGetters, mapActions } from 'vuex';
    
    import Sidebar from '@/components/sidebar.vue'; 
    import content from '@/components/content.vue';
    
    export default {
      components: {
        Sidebar,
        content
    
      },
      data() {
        return {
        nom:'',
        prenom:'',
        email:'',
    responseData: {},
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
            const itemId = localStorage.getItem('itemId');
            console.log('ID:', itemId);
            const url ='enseigant/update';
            const data = {
            nom : this.responseData.nom,
            prenom : this.responseData.prenom,
            email: localStorage.getItem('email'),
             }
             axiosClient
        .post(url,data,{headers: {
    'Authorization': 'Bearer ' + token}})
        .then(response => {
            this.$router.push('/accueil_Ens');
        })
        .catch(error => {
          console.error(error);
        });
            },
        fetchData() {
            const token = localStorage.getItem('accessToken');
          axiosClient
            .get('enseignants',{headers: {
        'Authorization': 'Bearer ' + token}})
            .then(response => {
              console.log(response);
              console.log(response.data.items);
              console.log(response.data.items);
              this.responseData = response.data.items;
              this.email=localStorage.getItem('email');
            })
            .catch(error => {
              console.error(error);
            });
        }
      }
    
     
    }
    
    /*data() {
        
        return {
          responseData: {},
          // grade:''
    
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
        idgr(){
          return this.getSharedValues.idgr;
        }
    
      },
      methods: {
        // log(){
        // axiosClient
        //     .post('logout')
        //     .then(response => {
        //       console.log(response.data);
        //       this.$router.push('/loginView');
        //     })
        //     .catch(error => {
        //       console.error(error);
        //     });
        //   },
        // gra(){
        //   axiosClient
        //     .get(`grades/${this.idgr}`)
        //     .then(response => {
        //       console.log(response);
        //       console.log(response.data.items);
        //       return response.data.items.designation;
              
        //     })
          
        // },
        fetchData() {
          // console.log(id);
          axiosClient
            .get(`enseignants/${this.id}`)
            .then(response => {
              console.log(response);
              console.log(response.data.items);
              // this.grade = gra();
              //console.log(grade);
              
            })
            .catch(error => {
              console.error(error);
            });
            
            
        }
      }
    
     
    } */
    </script>
    <style>
    
    </style>