<template>
<form class="form">
  <h2 class="form-title">Formulaire</h2>
  
  <div class="form-group">
    <label for="name">Nom :</label>
    <input type="text" id="name" name="name" class="form-input" placeholder="Entrez votre nom" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email :</label>
    <input type="email" id="email" name="email" class="form-input" placeholder="Entrez votre adresse email" required>
  </div>
  
  <div class="form-group">
    <label for="message">Message :</label>
    <textarea id="message" name="message" class="form-textarea" placeholder="Entrez votre message" required></textarea>
  </div>
  
  <button type="submit" class="form-button">Envoyer</button>
</form>
</template>

<script>
export default{
  name:'create_president',
}
</script>

<style>

.form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.form-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.form-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4285f4;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
}

.form-button:hover {
  background-color: #327ae8;
}

</style>
