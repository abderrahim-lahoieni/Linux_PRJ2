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
           <button type="submit" @click.prevent="logout()"> Logout</button>
          </div>
        </div>
    
        <div class="content">
    
    <div class="wrapper fadeInDown">
    <div id="formContent">
    
      <h2 class="inactive underlineHover">update Enseignant</h2> 
      <form>
        <input type="text" id="Nom" class="fadeIn second"  v-model="nom">
        <input type="text" id="Prénom" class="fadeIn second"  v-model="prenom" >
        <input type="text" id="Prénom" class="fadeIn second" name="Prénom" v-model="ppr" placeholder="PPR">
        <input type="submit"  @click.prevent="update()" class="fadeIn fourth"  value="UPDATE">
        <input type="resest"  class="fadeIn fourth" value="Annuler">

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
        ppr:'',
        

    responseData: {},
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
        idgr() {
          return this.getSharedValues.idgr;
        },
        emailaddr() {
          return this.getSharedValues.emailaddr;
        },
        tok() {
          return this.getSharedValues.tok;
        },
      },
      
      methods: {
        
        ...mapActions(['updateSharedValues']),
        update(){
             this.$store.commit('updateSharedValues', {  
       emailaddr: this.email });
            const itemId = localStorage.getItem('itemId');
            console.log('ID:', itemId);
            const url ='enseigant/update';
            const data = {
            nom : this.responseData.nom,
            prenom : this.responseData.prenom,
            email:this.emailaddr,
             }
             axiosClient
        .post(url,data,{headers: {
    'Authorization': 'Bearer ' + this.tok}})
        .then(response => {
          console.log(response);
          console.log(response.data.items);
        })
        .catch(error => {
          console.error(error);
        });
            },
        logout(){
        axiosClient
            .post('logout')
            .then(response => {
              this.$router.push('/loginView');
            })
            .catch(error => {
              console.error(error);
            });
          },
       
        fetchData() {
         
          axiosClient
            .get('enseignants',{headers: {
        'Authorization': 'Bearer ' + this.tok}})
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