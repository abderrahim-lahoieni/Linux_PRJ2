<template>
<div class="sidebare">
    <div class="logo">
      <img src="logo_projet.png" alt="Logo">
    </div>
    <div class="element"></div>
    </div>
    <div class="content"></div>
</template>
<style>
 .sidebare {
   background-color:#3d525e;
    color: #fff;
    width: 350px;
    transition: width 0.3s;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
  
  .logo {
   
    text-align: center;
    margin-top: 40px;
    transform: scale(2);
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
    margin-left: 60 px;
  }
  
  .sidebar li:hover {
    background-color: #444;
  }
  </style>