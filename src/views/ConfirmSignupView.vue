<template>
  <div class="parent-container">
    <div class="auth-container">
      <div
        class="icon-header"
        style="display: flex; justify-content: center; margin-bottom: 10px"
      >
        <font-awesome-icon
          :icon="['fas', 'chart-bar']"
          class="brand-icon"
          size="xl"
        />
      </div>
      <h2>Confirm Your Account</h2>
      <h4>Enter the OTP sent to your email</h4>
      <form @submit.prevent="handleOTPConfirm">
        <otp :digit-count="6" @update:otp="updateOtp"></otp>
        <!-- <p>The current OTP value is: {{ otpValue }}</p> -->
        <el-button
          type="submit"
          style="background-color: #4caf50; margin-top: 15px"
          color="#4caf50"
          @click="handleOTPConfirm"
          round
          >Confirm OTP</el-button
        >
      </form>
    </div>
  </div>
</template>
  
  <script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { confirmSignUp } from "aws-amplify/auth";
import { Amplify } from "aws-amplify";
import config from "../amplifyconfiguration.json";
import otp from "../components/OTPComponent.vue";
Amplify.configure(config);
library.add(faChartBar);

export default {
  name: "ConfirmSignupView",
  components: {
    otp,
  },
  data() {
    return {
      otp: "",
      userId: this.$route.query.userId || "",
      otpValue: "",
    };
  },
  methods: {
    updateOtp(value) {
      this.otpValue = value;
    },

    async handleOTPConfirm() {
      try {
        console.log(this.$store.getters.email, this.otpValue);
        await confirmSignUp({
          username: this.$store.getters.email,
          confirmationCode: this.otpValue,
        });
        alert("Signup confirmed successfully!");
        // Redirect to login or other appropriate action
        this.$router.push({ name: "login" });
      } catch (error) {
        console.error("OTP confirmation error:", error);
        alert("Error confirming OTP. Please try again.");
      }
    },
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
  