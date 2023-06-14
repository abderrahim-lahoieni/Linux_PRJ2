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
      <h2> Paiements </h2>
<div class="table-wrapper">
    <table class="fl-table">
        <thead>
        <tr>
            <th>etablissement</th>
            <th>Volume horaire</th>
            <th>brute</th>
            <th>Net</th>
        </tr>
        </thead>
        <tbody>
          <tr  v-for="item in responseData">
            <td>{{ (item['id_etab']) }}</td>
            <td>{{ (item['vh']) }}</td>
            <td>{{ (item['brut']) }}</td>
            <td>{{ (item['net']) }}</td></tr>
        
        
        </tbody>
    </table></div>
    <br><br><br>
    
    
    <div class="table-wrapper2">
     
<table class="fl-table1" align="center">
      <thead>
      <tr>
        <th>salaire supplémentaire</th>
        <th>salaire vacation</th>
        <th>salaire total</th>
      </tr>
    </thead>
    <tbody> <tr>
     <td>{{ salaire }}</td>
     <td>{{ salaire3 }}</td>
     <td>{{ salaire4 }}</td>
    </tr></tbody>
    </table>
    <br><br>
      </div>
      <div class="personal-dat">
        <!-- <div class="personal-info">
          <div class="info-label" align="center">Remarque:</div>
          
        </div> -->
        <!-- <div class="personal-info">
            <div class="info-label">Le salaire supplémentaire</div>
            <div class="info-value">correspond à la rémunération obtenue par l'enseignement des heures
     supplémentaires dans l'établissement d'origine. </div>
          </div>
          <div class="personal-info">
            <div class="info-label">saliare vacation:</div>
            <div class="info-value"> Le salaire de vacation correspond à la rémunération perçue lors d'un enseignement 
      dispensé dans un établissement différent de celui d'origine. </div>
          </div> -->

        <div class="personal-info">
          <div class="info-label">total: </div>
          <div class="info-value">la rémunération à travers l'enseignement des heures supplémentaires, à condition 
      que le nombre d'heures supplémentaires ne dépasse pas 200 </div>
        
       
      </div>
          
          </div>
    
      </div>
  
    </div>
  
 
</template>
<script>
import { axiosClient } from '../Network/axios';
export default {
    name: 'paiment_Ens',
    data() {
    return {
      salaire:'',
      salaire3:'',
      salaire4:'',
      etab:'',
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
    this.fetchData2();
    this.fetchData3();
    this.fetchData4();
  },
  methods: {
    fetchData() {
      const token = localStorage.getItem('accessToken');
      console.log("token : ",token);
      axiosClient.get(`enseignant/paiement/${2022}`,
      {  headers: {
    'Authorization': 'Bearer ' + token
      }})
        .then(response => {
          this.responseData = (response.data)['data'];
          console.log(response.data);

        })
        .catch(error => {
          console.error(error);
        });
    },
    fetchData2(){
      const token = localStorage.getItem('accessToken');
      console.log("token : ",token);
      axiosClient.get(`enseignant/paiement/Total/${2022}`,
      {  headers: {
    'Authorization': 'Bearer ' + token
      }})
        .then(response => {
          
          this.salaire = (response.data.data)[0].calculate_salaire_totalnet;
          console.log(response.data.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    fetchData3(){
      const token = localStorage.getItem('accessToken');
      console.log("token : ",token);
      axiosClient.get(`enseignant/paiement/Total_Supplementaire/${2022}`,
      {  headers: {
    'Authorization': 'Bearer ' + token
      }})
        .then(response => {
          
          this.salaire3 = (response.data.data)[0].calculate_salaire_sup;
          console.log(response.data.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    fetchData4(){
      const token = localStorage.getItem('accessToken');
      console.log("token : ",token);
      axiosClient.get(`enseignant/paiement/Total_Vacataire/${2022}`,
      {  headers: {
    'Authorization': 'Bearer ' + token
      }})
        .then(response => {
          
          this.salaire4 = (response.data.data)[0].Afficher_Salaire_Vacataire;
          console.log(response.data.data);
        })
        .catch(error => {
          console.error(error);
        });
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
  }
}
</script>
<style>
* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
  }
  .fonction {
    text-align: center;
    align-content: center;
    padding: 0;
    margin: 0;
    color:#f2f2f2
  }
  .fonction{
    background-color: #f2f2f2;
  }
  
  .container {
    display: flex;
    height: 100vh;
  }
  
  .sidebar {
    background-color: #222;
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
  *{
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  
  
  /* Table Styles */
  
  .table-wrapper{
     margin-top:20000px;
    box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
  }
  .table-wrapper1{
     margin-top:20000px;
    box-shadow: 0px 35px 50px rgba( 0, 0, 0, 0.2 );
  }
  
  .fl-table {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
    background-color: white;
    
  }
  .fl-table1 {
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 40%;
    max-width: 40%;
    white-space: nowrap;
    background-color: white;
    
  }
  
  .fl-table td, .fl-table th {
    text-align: center;
    padding: 8px;
  }
  .fl-table1 td, .fl-table1 th {
    text-align: center;
    padding: 8px;
  }
  
  .fl-table td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
    height: 40px;
  }
  .fl-table1 td {
    border-right: 1px solid #f8f8f8;
    font-size: 12px;
    height: 40px;
  }
  
  .fl-table thead th {
    color: #ffffff;
    background: #7e968f;
    height: 50px;
  }
  .fl-table1 thead th {
    color: #ffffff;
    background: #7e968f;
    height: 50px;
  }
  
  
  .fl-table thead th:nth-child(odd) {
    color: #ffffff;
    background: #465360;
  }
  .fl-table1 thead th:nth-child(odd) {
    color: #ffffff;
    background: #465360;
  }
  
  .fl-table tr:nth-child(even) {
    background: #F8F8F8;
  }
  .fl-table1 tr:nth-child(even) {
    background: #F8F8F8;
  }
  
  /* Responsive */
  
  @media (max-width: 767px) {
    .fl-table {
        display: block;
        width: 100%;
    }
    .table-wrapper:before{
        content: "Scroll horizontally >";
        display: block;
        text-align: right;
        font-size: 11px;
        color: white;
        padding: 0 0 10px;
    }
    .fl-table thead, .fl-table tbody, .fl-table thead th {
        display: block;
    }
    .fl-table thead th:last-child{
        border-bottom: none;
    }
    .fl-table thead {
        float: left;
    }
    .fl-table tbody {
        width: auto;
        position: relative;
        overflow-x: auto;
    }
    .fl-table td, .fl-table th {
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
    }
    .fl-table thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
    }
    .fl-table tbody tr {
        display: table-cell;
    }
    .fl-table tbody tr:nth-child(odd) {
        background: none;
    }
    .fl-table tr:nth-child(even) {
        background: transparent;
    }
    .fl-table tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
    }
    .fl-table tbody td {
        display: block;
        text-align: center;
    }
  }
</style>