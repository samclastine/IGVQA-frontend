<template>
  <div class="parent-container">
    <div class="auth-container">
      <div class="icon-header" style="display: flex; justify-content: center; margin-bottom: 10px;">
        <font-awesome-icon :icon="['fas', 'chart-bar']" class="brand-icon" size="xl" />
      </div>
      <h2>Welcome Back</h2>
      <h4>Please enter you details to sign in</h4>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <el-input v-model="email" style="width: 240px" placeholder="Email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <el-input
            v-model="password"
            style="width: 240px"
            type="password"
            placeholder="Password"
            show-password
          />
        </div>
        <el-button type="submit" style="background-color: #4caf50" color="#4caf50" round>Login</el-button>
        <el-checkbox v-model="checked4" label="Remember me" fill="#4caf50" style="margin-top: 15px;"/>
        <h4 style="margin-bottom: 10px; ">Dont have an account yet? <b @click="SignupAction" style="cursor: pointer;">Sign Up</b> </h4>
      </form>
    </div>
  </div>
</template>
  
  <script>
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faChartBar } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  
  library.add(faChartBar);

export default {
  name: "LoginView",
  components: {
      FontAwesomeIcon,
    },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      // Handle login logic here
      this.$router.push({ name: "selection" });
    },
    SignupAction(){
      this.$router.push('/signup')
    }
  },
};
</script>
  
  <style scoped>
.parent-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
}
.auth-container {
  max-width: 800px;
  margin: auto;
  padding: 3em;
  border-radius: 8px;

  background-color: #121212;
  color: white;
  /* display: flex; */
}

h2 {
  padding: 0;
  margin: 0;
  text-align: center;
  padding-top: 10px;
}
h4 {
  padding: 0;
  margin: 0;
  text-align: center;
  color: grey;
  padding: 2px;
  font-weight: 400;
  margin-bottom: 25px;
}
.form-group {
  margin-bottom: 1em;
}

label {
  display: block;
  margin-bottom: 0.5em;
}

input {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 0.5em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
  