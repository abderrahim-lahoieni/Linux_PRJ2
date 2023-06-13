<template>
<div class="background"></div>
<nav>
      
      <div class="nav">
        <router-link to="/loginView">login</router-link> |
        <router-link :to="{ path: '/' }" :class="{ 'current': $route.path === '/', 'default': $route.path !== '/' }">Accueil</router-link> |
        <router-link to="/AboutView">About</router-link>
      </div>
    </nav>
  
  <div class="about">
    <div class="container1">
     <h2>chef de projet</h2>
     <h3>AYA KHALLOFI</h3>
    </div>
    <div class="container2">
  <div class="left-section">
    <span>
      <h2 >Développeurs VueJs et Responsables des tests</h2>
    <h3 >NAJOUA EL HABTI</h3>
    <h3>AYA DAOUDI</h3>
  </span>
  </div>
  <div class="right-section">
   <span>
    <h2>Développeurs Laravel</h2>
   <h3>DOHA DAHRABOU</h3>
   <h3>AYMAN CHANAA</h3>
  </span>
  </div>
</div>
<div class="container2">
  <div class="left-section">
    <span>
      <h2>Responsables de la sécurité applicative</h2>
    <h3>AMAL AKIIRINE</h3>
    <h3>SELMA AIT OUKHADOU</h3>
  </span>
  </div>
  <div class="right-section">
   <span>
    <h2>Administrateurs systéme linux</h2>
   <h3>HIND AFOUD</h3>
   <h3>MAROUA BOUALI</h3>
  </span>
  </div>
</div>
<div class="container2">
  <div class="left-section">
    <span>
      <h2>Responsable Git et Github</h2>
    <h3>ABDERRAHIM LAHOIENI</h3>
  </span>
  </div>
  <div class="right-section">
   <span>
    <h2>Développeurs PL/PGSQL</h2>
   <h3>HAJAR KDIDAR</h3>
  </span>
  </div>
</div>
  </div>
</template>

<script>
 import {axiosClient} from '../Network/axios';
import Accueil from '@/components/Accueil.vue'
export default {
  name: 'About',
  components: {
    Accueil
  },
  
}


</script>
<style >
/* .background{
 
 background: linear-gradient(
   rgba(60, 149, 244, 0.5),
   rgba(120, 119, 130, 0.5)
 ), url(../assets/2.jpg);

   height: 100vh;
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

 } */
.container2 {
  justify-content: space-between;
  display: flex;
  margin-bottom: 20px;
}
.container1 h2,h3{
  margin-bottom: 10px;
  color: black;
}


.show {
  display: block;
}
span h3 {
  color: rgb(26, 28, 29);
  margin-bottom: 10px;
  font-size: 20px;
}
span h2{
  color: rgb(221, 227, 231);
  margin-bottom: 10px;
  border-bottom: 3px solid rgb(92, 9, 246);
}

.left-section {
  flex: 1;
  background: hsla(198, 76%, 58%, 0.5);
  padding: 0px;
  margin-bottom: 5px;
  width: fit-content;
  height: 190px;
  margin-right: 10px;
}

.right-section {
  flex: 1;
  background: hsla(111, 9%, 85%, 0.5);
  padding: 0px; 
  width: fit-content;
  margin-bottom: 5px;
  height: 190px;
  margin-left: 10px;
}
.left-section,
.right-section {
  flex-basis: 35%; 
}

.about{

  position: relative;
}
.container1 {
  
  background-color: #f6f6f6;
  padding: 20px;
  margin: 10px 10px 10px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: fit-content;
  display: grid;
  place-items: center; 
  height: 150px;
 
}

.container1 h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.container1 span {
  
  flex-direction: column;

  
}

.container span h4 {
  margin: 5px 0;
  font-size: 18px;
}


</style>