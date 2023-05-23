<template>
<div class="background"></div>
<nav>
      
      <div class="nav">
        <router-link to="/loginView">login</router-link> 
        <router-link :to="{ path: '/' }" :class="{ 'current': $route.path === '/', 'default': $route.path !== '/' }">Accueil</router-link> 
        <router-link to="/AboutView">About</router-link>|
       

      </div>
    </nav>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import Accueil from '@/components/Accueil.vue'
export default {
  name: 'Accueil',
  components: {
    Accueil
  }
}
</script>
<style>



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
.about{
  position: relative;
}
</style>