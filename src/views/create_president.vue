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
          <router-link to="/loginView">logout</router-link>
          </div>
      </div>

  <div class="content">
  
    <div class="wrapper fadeInDown">
    <div id="formContent">
    
      <h2 class="inactive underlineHover">Creer un Président</h2> 
      <form>
        <input type="email" id="email" class="fadeIn third" name="login" placeholder="email">
        <input type="password" id="password" class="fadeIn third" name="login" placeholder="Mot de passe">
        <input type="password" id="rpassword" class="fadeIn third" name="login" placeholder="confirmer mot de passe">
        <input type="submit"  @click="accueil_page" class="fadeIn fourth"  value="Creer">
        <input type="reset" class="fadeIn fourth" value="Annuler">

      </form>
    </div>
  </div>
  </div>
 </div>
  </template>
  
  <script>
export default {
  name:"loginForm",
  methods: {
    accueil_page(){
    this.$router.replace('/accueil_Ens');
    console.log('test')
  },
  
    toggleDropdown(){
      var dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    
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
  
  input[type=text], [type=password], input[type=date], input[type=email]{
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