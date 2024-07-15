<template>
    <div class="parent-container">
        <div class="auth-container">
            <div class="icon-header" style="display: flex; justify-content: center; margin-bottom: 10px;">
                <font-awesome-icon :icon="['fas', 'chart-bar']" class="brand-icon" size="xl" />
            </div>
            <h2>Create Account</h2>
            <h4>Please fill in the details to sign up</h4>
            <form @submit.prevent="handleSignup">
                <div class="form-group">
                    <label for="username">Username</label>
                    <el-input v-model="username" style="width: 240px" placeholder="Username" />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <el-input v-model="email" style="width: 240px" placeholder="Email" />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <el-input v-model="password" style="width: 240px" type="password" placeholder="Password"
                        show-password />
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <el-input v-model="confirmPassword" style="width: 240px" type="password"
                        placeholder="Confirm Password" show-password />
                </div>
                <el-checkbox v-model="checked" @change="showTermsAndConditions" fill="#4caf50"
                    style="margin-top: 15px;">
                    I agree to the <a @click.prevent="showTermsAndConditions" href="#">terms and conditions</a>
                </el-checkbox>
                <el-button type="submit" style="background-color: #4caf50" color="#4caf50" @click="handleSignup" round>Sign Up</el-button>
                <h4 style="margin-bottom: 10px;">Already have an account? <b>Login</b> </h4>
            </form>
        </div>
        <el-dialog v-model="centerDialogVisible" title="Terms and Conditions" width="500" destroy-on-close center>
            <span>
                Notice: before dialog gets opened for the first time this node and the one
                bellow will not be rendered
            </span>
            <div>
                <strong>Extra content (Not rendered)</strong>
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="centerDialogVisible = false">
                        Confirm
                    </el-button>
                </div>
            </template>
        </el-dialog>


    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { signUp } from "aws-amplify/auth"
import { Amplify } from 'aws-amplify';
import config from '../amplifyconfiguration.json'
Amplify.configure(config)
library.add(faChartBar);

export default {
    name: "SignupView",
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            email: "",
            password: "",
            confirmPassword: "",
            username: "",
            checked: false,
            centerDialogVisible: false
        };
    },
    methods: {
        async handleSignup() {
            // Handle signup logic here
            if (this.password !== this.confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            else{
                const { isSignUpComplete, userId, nextStep } = await signUp({
                    username: this.email,
                    email: this.email,
                    password: this.password

                })
                this.$router.push({ name: 'confirm-signup', query: { userId: this.email } });
                console.log(isSignUpComplete, userId, nextStep);

            }
            console.log("Signup:", this.email, this.password);
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