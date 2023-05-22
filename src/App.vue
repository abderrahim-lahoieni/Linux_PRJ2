<template>
  <div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  // Other options and logic
}
</script>

<style>
/* Component styles */
</style>

<style>
.Accueil{
  
    position: relative;
  -webkit-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
    background: #6a6af7;
    opacity: 0.5;
      /* padding: 30px; */
      width:auto;
    /* max-width: 450px; */
    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    text-align: center;
}

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

</style>
