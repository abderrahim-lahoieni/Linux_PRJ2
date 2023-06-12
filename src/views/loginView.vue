<template>
  <div class="background"></div>
 <nav>

      <div class="nav">
        <router-link to="/loginView">login</router-link> |
        <router-link :to="{ path: '/' }" :class="{ 'current': $route.path === '/', 'default': $route.path !== '/' }">Accueil</router-link> |
        <router-link to="/AboutView">About</router-link>
      </div>
    </nav> 
    <div class="wrapper fadeInDown">
    <div id="formContent">

      <h2 class="inactive underlineHover">log in </h2>
      <form >
        <input type="text" id="login" class="fadeIn second"  placeholder="login" v-model="email">
        <input type="password" id="password" class="fadeIn third"  placeholder="Mot de passe"  v-model="password">
        
        <button type="button"  @click="login" class="fadeIn fourth"  value="Log In">log in</button>
        <div v-if="errors">
      <ul>
        <li v-for="(error, field) in errors" :key="field">{{ error[0] }}</li>
      </ul>
    </div>

      </form>
    </div>
  </div>

  </template>

<script>
import Accueil from '@/components/Accueil.vue';
import {axiosClient} from '../Network/axios';
import { mapGetters, mapActions } from 'vuex';


export default {
name:"loginForm",
 components :{
   Accueil
 },
data() {
  return {
    email: "",
    password: "",
    
    
  };},
  computed: {
    ...mapGetters(['getSharedValues']),
  id() {
    return this.getSharedValues.id;
  },
  emailaddr() {
    return this.getSharedValues.emailaddr;
  },
  idgr() {
    return this.getSharedValues.idgr;
  },
},
methods: {
  
  ...mapActions(['updateSharedValues']),
  
  login(){ {
  const url = 'login';
  const data = {
    email: this.email,
    password: this.password,
    
  }; 
axiosClient.post(url,data)
.then((response)=>{
  localStorage.setItem('user',response.data.items.email);
  console.log(response.data)
  console.log("==========")

  localStorage.setItem('accessToken',response.data.token);

  console.log(localStorage.getItem('accessToken'));





this.$store.commit('updateSharedValues', { id: response.data.items.id, emailaddr: response.data.items.email ,idgr : response.data.items.id_grade});

console.log(this.$store.getters.getSharedValue);
if(response.data.role ==='DIRECTEUR')
{ this.$router.push('/direct_accueil');}
else if (response.data.role ==='ENSEIGNANT'){

// this.$store.commit('updateSharedValues', { id: response.data.items.id, emailaddr: this.email });
// this.$store.dispatch('updateSharedValue',response.data.items.id);
// console.log(this.$store.getters.getSharedValue);

this.$router.push('/accueil_Ens');
}
else if (response.data.role ==='ADMINISTRATEUR_ETA'){
this.$router.push('/admin_etab_accueil');
}
else if (response.data.role ==='ADMINISTRATEUR_UNIV'){
this.$router.push('/admin_univ_accueil');
}
else if (response.data.role ==='PRESIDENT'){
this.$router.push('/president_accueil');
}
})
.catch((error) => {
        if (error.response && error.response.status === 422) {
          // Afficher les erreurs de validation
          this.errors = error.response.data.errors;
        }
      });
}}
  
      //if(response.data.role ==='Enseignant')

     // })// else {this.$router.push('/admin_univ_accueil');
     // console.log(error);}
   // })
   }}
    //this.$router.replace('/accueil_Ens');
  //console.log('test')
//},
 //login_page(){
  //this.$router.push('loginView');

</script>

<style>
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
    padding: 30px;
    width: 95%;
    height: 400px;
    max-width: 500px;
    position: relative;
    padding: 0px;
    -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    text-align: center;
    margin-top:100px;
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
    background-color: #3d525e;
    border: none;
    color: white;
    padding: 15px 15px ;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    width: 40%;
    text-transform: uppercase;
    font-size: 25px;
    -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
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

  input[type=text], [type=password]{
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