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
      <h2>Liste des enseigants</h2> 
<div class="table-wrapper">

    <table class="fl-table">
   
        <thead>
        <tr>
            <th>ID_enseignant</th>
            <th>ID_Intervention </th>
            <th>Nbr d'heure</th>
            <th>Année</th>
            <th>Etat</th>
            <th>Paiement</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
            <td>Content 1</td>
        </tr>
        <tr>
            <td>Content 2</td>
            <td>Content 2</td>
            <td>Content 2</td>
            <td>Content 2</td>
            <td>Content 2</td>
            <td>Content 1</td>
        </tr>
        <tr>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 3</td>
            <td>Content 1</td>
        </tr>
        <tr>
            <td>Content 4</td>
            <td>Content 4</td>
            <td>Content 4</td>
            <td>Content 4</td>
            <td>Content 4</td>
            <td>Content 1</td>
        </tr>
        <tr>
            <td>Content 5</td>
            <td>Content 5</td>
            <td>Content 5</td>
            <td>Content 5</td>
            <td>Content 5</td>
            <td>Content 1</td>
        </tr>
        <tr>
            <td>Content 6</td>
            <td>Content 6</td>
            <td>Content 6</td>
            <td>Content 6</td>
            <td>Content 6</td>
            <td>Content 1</td>
        </tr>
        <tr>
            <td>Content 7</td>
            <td>Content 7</td>
            <td>Content 7</td>
            <td>Content 7</td>
            <td>Content 7</td>
            <td>Content 1</td>
        </tr>
        <tr>
            <td>Content 8</td>
            <td>Content 8</td>
            <td>Content 8</td>
            <td>Content 8</td>
            <td>Content 8</td>
            <td>Content 1</td>
        </tr>
        <tr>
            <td>Content 9</td>
            <td>Content 9</td>
            <td>Content 9</td>
            <td>Content 9</td>
            <td>Content 9</td>
            <td>Content 1</td>
        </tr>
        <tr>
            <td>Content 10</td>
            <td>Content 10</td>
            <td>Content 10</td>
            <td>Content 10</td>
            <td>Content 10</td>
            <td>Content 1</td>
        </tr>
        </tbody>
    </table>
</div>
      </div>
    </div>

</template>
<script>
window.addEventListener('DOMContentLoaded', function() {
    var creationProfesseur = document.getElementById('creationProfesseur');
    creationProfesseur.style.backgroundColor = '#f2f2f2';
    creationProfesseur.style.padding = '20px';
    creationProfesseur.style.marginTop = '20px';
    creationProfesseur.style.borderRadius = '5px';
    // Ajoutez d'autres styles ici selon vos besoins
  });
  export default {
    name:'list_enseignants_direct',
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
.fonction h1{
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
  margin: 10px 70px 70px;
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

.fl-table td, .fl-table th {
  text-align: center;
  padding: 8px;
}

.fl-table td {
  border-right: 1px solid #f8f8f8;
  font-size: 12px;
  height: 40px;
}

.fl-table thead th {
  color: #ffffff;
  background: #7e968f;
  height: 50px;
}


.fl-table thead th:nth-child(odd) {
  color: #ffffff;
  background: #465360;
}

.fl-table tr:nth-child(even) {
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