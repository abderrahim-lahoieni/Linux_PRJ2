<template>
<div class="container">
    <div class="sidebare">
      <div class="logo">
        <img src="logo_projet.png" alt="Logo">
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
        <router-link to="/loginView">Logout</router-link>
      </div>
    </div>

    <div class="content">
        <div classe="fonction">
            <h2 classe="h">Professeur</h2></div>
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
      <input type="submit"  class="inpuu"  value="modifier vos informations"> 
      </div>
  </div>
</template>
<script>
export default {
    name: 'accueil_Ens',
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
   background: #1B78AF
  
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
  .element{
    padding:30px;
    font-family: fantasy;
  font-size: 25px;
  font-weight: 500;
  color:#90b8cf;
  }
  .element:hover{
    background-color:rgba(191, 144, 41, 0.4);
  }
  .container {
    display: flex;
    height: 100vh;
    background-color: #55839d;
  }
  .inpuu {
    background-color:rgba(191, 144, 41, 0.8);
  }
  .sidebare {
   background-color:#3d525e;
    color: #fff;
    width: 250px;
    transition: width 0.3s;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  .logo {
    padding: 20px;
    text-align: center;
    margin-top: 50px;
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
  
  .personal-dat {
    background-color: #c8e1e3;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
 
  }
  
  .personal-info {
    display: flex;
    margin-bottom: 10px;
    height: 40px;
    
  }
  
  .info-label {
    font-weight: bold;
    width: 80px;
    color: #555;
    font-family:'Times New Roman', Times, serif;
    font-size:x-large;
    color:#f5cbb2;
  }
  
  .info-value {
    flex: 1;
    color:#f5cbb2;
    font-family:'Times New Roman', Times, serif;
    font-size:x-large;
  }
</style>