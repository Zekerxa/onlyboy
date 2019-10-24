<template>
  <b-container>
    <b-row class="justify-content-center mt-3">
      <div class="loginform">
        <form method="GET" @submit.prevent="login">
          
          <h3 class="text-success text-center">Log In Form</h3>
          <p class="text-dark">Use your Sign Up Account</p>
          <ul>
            <li>
              <label for="username-error">Username :</label>
              <b-form-input placeholder="Enter username" v-model="username" id="username-error" name="name" type="text" :state="error" />
              <b-form-invalid-feedback id="username-error">Check username again . . .</b-form-invalid-feedback>
            </li>
            <li>
              <label for="password-error">Password :</label>
              <b-form-input placeholder="Enter your password" v-model="password" id="password-error" name="password" :state="error" type="password" />
              <b-form-invalid-feedback id="password-error">Check password agian . . .</b-form-invalid-feedback>
            </li>
            <li class="text-center">
              <b-button variant="success" type="submit">Log In</b-button>
              <div class="text-center mt-3">
                <a class="text-danger" href="forgot">Forgot password . . .</a>
              </div>
            </li>
          </ul>
        </form>
      </div>
    </b-row>
         <b-row class="justify-content-center mt-5">
         <div class="text-light">
           <router-link to="/login1">
             <b-button variant="success">Another Way</b-button>
           </router-link>
         </div>
      </b-row>
  </b-container>
</template>

<script>
const Swagger = require("swagger-client");
const request = {
  url: `https://api.netlify.com/api/v1/sites/8b13e8fd-a73a-4341-b6d7-9a61d8329248/forms/5dae8a8fdf8573000be0be1b/submissions?state=ham&page=1&per_page=20`,
  method: "GET",
  server: "Netlify",
  statusCode: 200,
  headers: {
    "Access-Control-Allow-Headers": "*",
    "access-control-allow-methods": "GET",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Origin: " https://app.netlify.com",
    "Accept-Encoding": "gzip, deflate, br",
    "www-authenticate": "Basic",
    Authorization:
      "Bearer a0835290848a78775d170d42dd3b7ed67f4d5f99520a6e601e084ec50c016209", //Main thing
    "content-type": "application/json",
    "sec-fetch-site": "same-origin"
  },
  withCredentials: false,
  responseType: "application/json",
  responseEncoding: "utf8",
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN"
};
import SingUp from "@/netlifyforms/SignUpForms.vue";
export default {
  data() {
    return {
      istrue: "",
      loginError: false,
      error: null,
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      Swagger.http(request)
        .then(get => {
          console.log(get.status + " OK")
          const SignUp = get.body;
          SignUp.filter(users => {
            if (
              users.data.password == this.password &&
              users.data.name == this.username
            ) {
              this.$router.push("/lock/onlyboy");
            } else {
              this.error = false
              this.password = ''
              this.username = ''
            }
          });
        })
        .catch(() => {
          this.$router.push("/502");
        });
    }
  }
};
</script>
