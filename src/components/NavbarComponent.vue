<template>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <font-awesome-icon :icon="['fas', 'chart-bar']" class="brand-icon" />
          AIVA
        </div>
        <div class="navbar-menu">
          <button class="login-button" @click="login">Login</button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faChartBar } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  library.add(faChartBar);
  
  export default {
    name: 'NavBar',
    components: {
      FontAwesomeIcon,
    },
    methods: {
      login() {
        this.$router.push({ name: 'login' });
      }
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #1e1e1e;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
  }
  
  .navbar-brand {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  .brand-icon {
    margin-right: 0.5rem;
    font-size: 1.5rem;
    color: #4caf50;
  }
  
  .navbar-menu {
    display: flex;
    align-items: center;
  }
  
  .login-button {
    background-color: #3a3a3a;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.2s;
  }
  
  .login-button:hover {
    background-color: #555555;
    transform: scale(1.05);
  }
  </style>
  