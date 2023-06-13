<template>
  <div class="container">
    <div class="sidebare">
        <div class="logo">
          <img src="../assets/logo_projet.png" alt="Logo">
        </div>
         <div class="element">
          <router-link to="/admin_etab_accueil">profil</router-link>
       </div>
          <div class="element">
          <router-link to="/admin_univ_interv">interventions</router-link>
         </div>
         <div class="element">
          <router-link to="/list_president">Les Présidents</router-link>
         </div>
          <div class="element">
          <router-link to="/list_admin_etab">Les Admin_Etab</router-link>
         </div>
          <div class="element">
            <a @click="logout" href="#">logout</a>
          </div>
      </div>
    <div class="content">
      <h2>Les interventions d'université</h2>
      <hr />
      <button type="button" @click="fetchData()" class="fadeIn fourth" value="Log In">ALL interventions</button>
      <hr /> <label for="pet-select">Choose a etab:</label>

      <select v-model="nom_etab" id="filtre_etab">
        <option value="All">All</option>
        <option value="Ensa Tanger">ENSA TANGR</option>
        <option value="Ensa Tetouan">ENSA Tetouan</option>
        <option value="Fst">Fst</option>
        <option value="Ispits">Ispits</option>
        <option value="Medecine">Medecine</option>
        <option value="Encg">Encg</option>
      </select>
      <button type="button" @click="filtrer_etab" class="fadeIn fourth" value="Log In">GO</button>
      <hr />

      <label for="pet-select">Choose a year:</label>
      <select v-model="year" id="filtre_year">
        <option value="All">All</option>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2002">2002</option>
        <option value="2003">2003</option>
        <option value="2004">2004</option>
        <option value="2005">2005</option>
      </select>

      <button type="button" @click="filtrer_year" class="fadeIn fourth" value="Log In">GO</button>
      <div class="table-wrapper">

        <table class="fl-table" v-if="filterApplied">

          <thead>
            <tr>

              <th>Nom Ethablissement</th>
              <th>Nombre heures</th>
              <th>Date_début</th>
              <th>Date_Fin</th>
              <th>Etat</th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in responseData">

              <td>{{ (item['intitule_intervention']) }}</td>
              <td>{{ (item['nbr_heures']) }}</td>
              <td>{{ (item['date_debut']) }}</td>
              <td>{{ (item['date_fin']) }}</td>
              <td v-if="item['visa_uae'] === 1">Validé</td>
              <td v-else>Non Validé</td>
               </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { axiosClient } from '../Network/axios';
export default {
  // name:'president_univ',
  //}

  
  email: localStorage.getItem('user'),
  data() {
    return {
      responseData: [],
      filterApplied: false,
      etab: "",
      year: "",
      nom_ens: ""
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
    fetchData() {

      const token = localStorage.getItem('accessToken');
      console.log("token : ",token);
      axiosClient.get('president/interventions',
      {
      headers: {
    'Authorization': 'Bearer ' + token
      }
  })
        .then(response => {
          this.responseData = (response.data)['data'];
          this.filterApplied = true;
          console.log(response.data);
          

        })
        .catch(error => {
          console.error(error);
        });
    },
    valider(id) {
      const token = localStorage.getItem('accessToken');
      console.log("token : ",token);
      axiosClient.put(`president/interventions/valider/${id}`, 
      {
      headers: {
    'Authorization': 'Bearer ' + token
      }
  })
        .then(response => {
          console.log(response.data.status_message);
         
        })
        .catch(error => {
          console.error(error);
        });
    },
    Nonvalider(id) {
      const token = localStorage.getItem('accessToken');
      console.log("token : ",token);
      axiosClient.put(`president/interventions/non_valider/${id}`,
      {
      headers: {
    'Authorization': 'Bearer ' + token
      }
  })
        .then(response => {
          console.log(response.data.status_message);
          

        })
        .catch(error => {
          console.error(error);
        });
    },
    filtrer_etab() {
      const token = localStorage.getItem('accessToken');
      console.log("token : ",token);
      
      const etablissement = this.nom_etab;  
      console.log("etab",etablissement)   
      axiosClient.get(`president/interventions/etablissement/${this.nom_etab}`,
      {
      headers: {
    'Authorization': 'Bearer ' + token
      }
  })
        .then(response => {
          this.responseData = (response.data)['data'];
          this.filterApplied = true;
          //Traitez les résultats de la requête ici
          console.log(response.data);
         
        })
        .catch(error => {
          // Gérez les erreurs de la requête ici
          console.error(error);
        });
    },
    
    filtrer_year() {
      const token = localStorage.getItem('accessToken');
      console.log("token : ",token);
      const ans = this.year;
      axiosClient.get(`president/interventions/annee/${ans}`,
      {  headers: {
    'Authorization': 'Bearer ' + token
      }})
        .then(response => {
          // Traitez les résultats de la requête ici
          this.responseData = (response.data)['data'];
          this.filterApplied = true;
          console.log(response.data);
        })
        .catch(error => {
          // Gérez les erreurs de la requête ici
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
  toggleChoices() {
    this.showChoices = !this.showChoices;
  },
  hideChoices() {
    this.showChoices = false;
  },
  selectChoice(choice) {
    // Faites quelque chose avec le choix sélectionné, par exemple :
    console.log('Choix sélectionné :', choice);
  }
}}

</script>
<style>
.choices-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.choices-list li {
  padding: 10px;
  cursor: pointer;
}

.choices-list li:hover {
  background-color: #f2f2f2;
}




* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

.fonction h1 {
  text-align: center;
  align-content: center;
  padding: 0;
  margin: 0;
  color: #f2f2f2
}

.fonction {
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

* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}


/* Table Styles */

.table-wrapper {
  margin: 10px 70px 70px;
  box-shadow: 0px 35px 50px rgba(0, 0, 0, 0.2);
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
  background-color: rgba(255, 255, 255, 0.5);

}

.fl-table td,
.fl-table th {
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
  background: #4485a5f2;
  height: 50px;
}


.fl-table thead th:nth-child(odd) {
  color: #ffffff;
  background: #4485a5f2;
}

.fl-table tr:nth-child(even) {
  background: rgba(255, 255, 255, 0.5);
}

/* Responsive */

@media (max-width: 767px) {
  .fl-table {
    display: block;
    width: 100%;
  }

  .table-wrapper:before {
    content: "Scroll horizontally >";
    display: block;
    text-align: right;
    font-size: 11px;
    color: white;
    padding: 0 0 10px;
  }

  .fl-table thead,
  .fl-table tbody,
  .fl-table thead th {
    display: block;
  }

  .fl-table thead th:last-child {
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

  .fl-table td,
  .fl-table th {
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
}</style>