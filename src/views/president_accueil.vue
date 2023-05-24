<template>
<div class="container">
    <div class="sidebare">
      <div class="logo">
        <img src="../assets/logo_projet.png" alt="Logo">
      </div>
       <div class="element">
        <router-link to="/president_accueil">profil</router-link>
       </div>
      <div class="element">
        <router-link to="/president_interv">valider les interventions</router-link>
      </div>
        <div class="element">
        <router-link to="/loginView">logout</router-link>
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
    </div>
    
  </div>
</template>
<script>
export default {
    name: 'president_accueil',
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
</style>