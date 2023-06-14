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
        <router-link to="/list_enseignants">Liste Enseignants</router-link>
        </div >
        <div class="element">
      <router-link to="/Create_Ens">création</router-link>
      </div>
       
        <div class="element">
        <router-link to="/admin_intervention_Etab">interventions</router-link>
       </div>
       <div class="element">
            <a @click="logout" href="#">logout</a>
          </div>
    </div>

    <div class="content">
    
      <div class="wrapper fadeInDown">
      <div id="formContent">
      
        <h2 class="inactive underlineHover">update Enseignant</h2> 
        <form>
          <input type="text" id="Nom" class="fadeIn second" name="Nom"  v-model="responseData.nom">
          <input type="text" id="Prénom" class="fadeIn second" name="Prénom" v-model="responseData.prenom" >

          <select id="select" class="fadeIn third" name="login"  v-model="grade">
            <option value="PA">PA</option>
            <option value="PH">PH</option>
            <option value="PES">PES</option>
          </select> 

          <input type="date"  class="fadeIn second"  name="date" v-model="responseData.date_naissance">
          
          <!-- <input type="text" class="fadeIn third" name="login" placeholder="designation" v-model="grade"> -->
         
          <!-- <input type="text"  class="fadeIn third" name="login" placeholder="etat" v-model="etat">  -->

          <input type="submit"  @click.prevent="Update()" class="fadeIn fourth"  value="UPDATE">
          <input type="reset"  class="fadeIn fourth" value="Annuler">
  
        </form>
      </div>
    </div>
    </div>
   </div>
    </template>
    
    <script>
    
import { mapGetters, mapActions } from 'vuex';
    import {axiosClient} from '../Network/axios';

  export default {
    name:"loginForm",
    data() {
  return {
    
        nom:'',
        prenom:'',
        designation:'',
        date_naissance:'',

    responseData: {},
    grade:'',
    

  };
},

    mounted() {
        const token = localStorage.getItem('accessToken');
   console.log("token mounted"+token)
   if(token==null) {
     this.$router.push('/loginView');
   }
        this.fetchData();
        const itemId = localStorage.getItem('itemId');
        console.log('ID:', itemId);
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
        Update(){
            const token = localStorage.getItem('accessToken');
      console.log("token : ",token);
            const itemId = localStorage.getItem('itemId');
        console.log('ID:', itemId);
            const url =`administrateur_etb/Enseigant/update/${itemId}`;
            const data = {
            nom : this.responseData.nom,
            prenom : this.responseData.prenom,
            designation:this.grade,
            date_naissance:this.responseData.date_naissance
        } 
        axiosClient
        .post(url,data,{headers: {
    'Authorization': 'Bearer ' + token}})
        .then(response => {
      
          console.log(response);
          console.log(response.data.items);
        })
        .catch(error => {
          console.error(error);
        });

         },
       fetchData(){
        const itemId = localStorage.getItem('itemId');
      console.log('ID:', itemId);
      const token = localStorage.getItem('accessToken');
      console.log("token : ",token);
        axiosClient
        .get(`enseignants/${itemId}`,{headers: {
    'Authorization': 'Bearer ' + token}})
        .then(response => {
         const  idg=response.data.items.id_grade;
        //  console.log(this.idgr);
        //   console.log(this.id);
          console.log(response);
          console.log(response.data.items);
          axiosClient
        .get(`grades/${idg}`)
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
        // const data = {
//   nom: this.nom,
//   prenom: this.prenom,
//   ppr: this.ppr,
//   date_naissance:this.date,
//   email: this.email,
//   password: this.passwd,
//   password_confirmation: this.confpasswd,
//   designation:this.grade,
// };
// console.log(data);

// const token = localStorage.getItem('accessToken');
//       console.log("token : ",token);
// // console.log(itemId);
//         axiosClient
//         .post(url,data,{headers: {
//     'Authorization': 'Bearer ' + token}})
//         .then(response => {
//             // localStorage.setItem('idens',response.data);
//             // console.log((response.data)['id']);
//         })
        
    //     .catch(error => {
    //       console.error(error);
    //     });
    // },
       },
     login_page(){
      this.$router.push('loginView');
    }
    }
  
  }
    </script>
    
    <style >
  
  
  .background{
    background: linear-gradient(
      rgba(60, 149, 244, 0.5),
      rgba(120, 119, 130, 0.5)
    ), url(../assets/2.jpg);
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      filter: blur(5px);
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    left:0;
    right:0;
    width:100%;
    display:block;
    position:absolute;
    top:0;
  
    } 
  
  
  
  
  
    
    @import url('https://fonts.googleapis.com/css?family=Poppins');
    a {
      color: #92badd;
      display:inline-block;
      text-decoration: none;
      font-weight: 400;
    }
    
    h2 {
      text-align: center;
      font-size: 30px;
      font-weight: 600;
      text-transform: uppercase;
      display:inline-block;
      margin: 40px 8px 30px 8px; 
      color: #cccccc;
    }
    
    /* STRUCTURE */
    
    .wrapper {
    
      display: flex;
      align-items: center;
      flex-direction: column; 
      justify-content: center;
      width: 100%;
      min-height: 100%;
      padding: 20px;
     
    }
    
    #formContent {
      -webkit-border-radius: 10px 10px 10px 10px;
      border-radius: 10px 10px 10px 10px;
      background: hsl(240, 90%, 26%,0.5);
      padding: auto;
      width: 95%;
      height: auto; 
      max-width: 500px;
      position: relative;
      padding: 0px;
      -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
      box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
      text-align: center;
      margin-top:10px;
    }
    
    
    #formFooter {
      background-color: #f6f6f6;
      border-top: 1px solid #dce8f1;
      padding: 50px;
      text-align: center;
      -webkit-border-radius: 0 0 10px 10px;
      border-radius: 0 0 10px 10px;
    }
    
    h2.inactive {
      color: #cccccc;
    }
    
    h2.active {
      color: #0d0d0d;
      border-bottom: 2px solid #5fbae9;
    }
    
    
    
    /* FORM TYPOGRAPHY*/
    
    input[type=submit], input[type=reset]  {
      background-color: #7199ea;
      border: none;
      color: white;
      padding: 15px 15px ;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      width: 40%;
      text-transform: uppercase;
      font-size: 25px;
      /* -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4); */
      /* box-shadow: 0 10px 30px 0 rgba(8, 19, 237, 0.4); */
      -webkit-border-radius: 5px 5px 5px 5px;
      border-radius: 5px 5px 5px 5px;
      margin: 20px 8px 20px 8px;
      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }
     input[type=submit]:hover, input[type=reset]:hover  {
      background-color: #39ace7;
    }
    
   input[type=submit]:active, input[type=reset]:active  {
      -moz-transform: scale(0.95);
      -webkit-transform: scale(0.95);
      -o-transform: scale(0.95);
      -ms-transform: scale(0.95);
      transform: scale(0.95);
    }
    
    input[type=text], [type=password], input[type=date], input[type=email],select{
      background-color: #f6f6f6;
      border: none;
      color: #0d0d0d;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 23px;
      margin: 10px 8px 10px 8px;
      width: 85%;
      border: 2px solid #f6f6f6;
      -webkit-transition: all 0.5s ease-in-out;
      -moz-transition: all 0.5s ease-in-out;
      -ms-transition: all 0.5s ease-in-out;
      -o-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
      -webkit-border-radius: 5px 5px 5px 5px;
      border-radius: 5px 5px 5px 5px;
    }
    
    input[type=text]:focus {
      background-color: #fff;
      border-bottom: 2px solid #5fbae9;
    }
    
    input[type=text]:placeholder {
      color: #cccccc;
    }
    
    
    
    /* ANIMATIONS */
    
    /* Simple CSS3 Fade-in-down Animation */
    .fadeInDown {
      -webkit-animation-name: fadeInDown;
      animation-name: fadeInDown;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    
    @-webkit-keyframes fadeInDown {
      0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }
      100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }
    
    @keyframes fadeInDown {
      0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }
      100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }
    
    /* Simple CSS3 Fade-in Animation */
    @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    
    .fadeIn {
      opacity:0;
      -webkit-animation:fadeIn ease-in 1;
      -moz-animation:fadeIn ease-in 1;
      animation:fadeIn ease-in 1;
    
      -webkit-animation-fill-mode:forwards;
      -moz-animation-fill-mode:forwards;
      animation-fill-mode:forwards;
    
      -webkit-animation-duration:1s;
      -moz-animation-duration:1s;
      animation-duration:1s;
    }
    
    .fadeIn.first {
      -webkit-animation-delay: 0.4s;
      -moz-animation-delay: 0.4s;
      animation-delay: 0.4s;
    }
    
    .fadeIn.second {
      -webkit-animation-delay: 0.6s;
      -moz-animation-delay: 0.6s;
      animation-delay: 0.6s;
    }
    
    .fadeIn.third {
      -webkit-animation-delay: 0.8s;
      -moz-animation-delay: 0.8s;
      animation-delay: 0.8s;
    }
    
    .fadeIn.fourth {
      -webkit-animation-delay: 1s;
      -moz-animation-delay: 1s;
      animation-delay: 1s;
    }
    
    /* Simple CSS3 Fade-in Animation */
    .underlineHover:after {
      display: block;
      left: 0;
      bottom: -10px;
      width: 0;
      height: 2px;
      background-color: #56baed;
      content: "";
      transition: width 0.2s;
    }
    
    .underlineHover:hover {
      color: #0d0d0d;
    }
    
    .underlineHover:hover:after{
      width: 100%;
    }
    
    
    
    /* OTHERS */
    
    *:focus {
        outline: none;
    } 
    
    #icon {
      width:60%;
    }
    
    * {
      box-sizing: border-box;
    }
    </style>