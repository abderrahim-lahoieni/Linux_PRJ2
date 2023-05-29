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
  <div class="Accueil" ></div>
  <h1 class="fadeIn second text-danger-500">Bienvenue</h1>
    <footer class="text-container">
      
      <p class="fadeIn third">
        Découvrez notre solution innovante pour une gestion fluide et transparente
         des vacations et des heures supplémentaires des enseignants.
          Gagnez du temps, optimisez vos ressources et assurez une rémunération
           équitable avec notre plateforme intuitive et efficace.
      </p>
      <router-link to="/admin_etab_accueil">admin_Etab</router-link>
      <br>
      <router-link to="/direct_accueil">directeur_Etab</router-link>
       <br>
      <router-link to="/admin_univ_accueil">admin_univ</router-link>
        <br>
     
      <router-link to="/accueil_Ens">Enseignant</router-link>
      <br>
      <router-link to="/president_accueil">presid_univ</router-link>
    </footer>
  </div>

</template>
<script>
export default {
  name: 'Accueil',

}
</script>
<style>
/* .Accueil{
  
  position: relative;
-webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #6a6af7;
  opacity: 0.5;
    
    width:auto;

  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
} */

.current {
color: #42b983;
}

.default {
color: #2c3e50;
}
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;  
}


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



.nav{
  font-size: 25px;
  position:relative;
  text-align: center;
}


nav {
  padding: 30px;
 
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  display:contents;
 
}

nav a.router-link-exact-active {
  color: #42b983;

}



h1{
  top: 100px;
  position: relative;
  font-size: 65px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(210, 187, 187, 0.3);
}
/* .Accueil{
  
  position: relative;
  -webkit-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
  
    background-color: rgba(72, 66, 240, 0.5);
      
      width:auto;
   
    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    text-align: center;
  
} */
.text-container {
  top: 100px;
  position: relative;
  font-size: 35px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(210, 187, 187, 0.3);
}
.text-container p {
  color: #f7f7f7; 
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  
}
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
    color: #333;
  
  font-weight: bold;
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
  /* h1{
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    display:inline-block;
    margin: 40px 8px 10px 8px; 
    color: #cccccc;
} */
</style>
