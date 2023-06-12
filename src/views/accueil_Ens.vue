<template>
<div class="container">
    <div class="sidebare">
      <div class="logo">
        <img src="../assets/logo_projet.png" alt="Logo">
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
            <div class="info-value">{{ grade }}</div>
          </div>
          <div class="personal-info">
            <div class="info-label">Métier:</div>
            <div class="info-value">Enseignant</div>
          </div>
        <div class="personal-info">
          <div class="info-label">Email:</div>
          <div class="info-value">{{ email}}</div>
        </div>
       
      </div>
      <input type="submit"  @click.prevent="update()" class="inpuu"  value="modifier vos informations"> 
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
      grade:'',
      email:''
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
   
  },
  
  methods: {
   
    update(){
      this.$router.push('/Update_ens');
    },
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
   
    fetchData() {
      const token = localStorage.getItem('accessToken');
      this.email=localStorage.getItem('email');
      
      axiosClient
        .get('enseignants',{headers: {
    'Authorization': 'Bearer ' + token}})
        .then(response => {
          localStorage.setItem('idgrade',response.data.items.id_grade);
       console.log(this.idgr);
          console.log(this.id);
          console.log(response);
          console.log(response.data.items);
          const idgr = localStorage.getItem('idgrade');
          axiosClient
        .get(`grades/${idgr}`)
        .then(response => {
          console.log(response);
          console.log(response.data.data);
          this.grade= response.data.data.designation;
          console.log(this.grade);
        })
      
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