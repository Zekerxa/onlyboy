<template>
 <div class="SignUpclass loginclass">
     <b-container>
    <b-row>
      <div class="article"></div>
    </b-row>
    <b-row class="justify-content-center ">
      <div class="text-center">
      <div class="mt-5">
            <form method="GET" @submit.prevent="login">
          
          <h3 class="text-success text-center">Log In Form</h3>
          <p class="text-dark">Use your Sign Up Account</p>
          <ul>
            <li>
              <label for="username-error">Username </label>
              <b-form-input placeholder="Enter username" v-model="username" id="username-error" name="name" type="text" :state="error" />
              <b-form-invalid-feedback id="username-error">Check username again . . .</b-form-invalid-feedback>
            </li>
            <li>
              <label for="password-error">Password </label>
              <b-form-input placeholder="Enter your password" v-model="password" id="password-error" name="password" :state="error" type="password" />
              <b-form-invalid-feedback id="password-error">Check password agian . . .</b-form-invalid-feedback>
            </li>
            <li class="text-center">
              <b-button variant="dark" class="w-100" type="submit">Log In</b-button>
              <div class="text-center mt-3">
                <b-button variant="light disabled">
                  <a class="text-danger" href="">Forgot password . . .</a>
                </b-button>
              </div>
            </li>
          </ul>
        </form>
      </div>
      </div>
    </b-row>

     <div class="justify-content-center mt-5">
      <b-modal id="gate" centered hide-footer>
        <template v-slot:modal-title>
          <i class="fa fa-unlock"></i>
          <code> Unlocked</code>
        </template>
        <div class="text-center">
          <p class="text-center d-block">Now you are also member of Zekerxa Website</p>
          <b-button variant="success" class="text-center m-2">
            <router-link to="/unlock" class="text-light nav-link text-success">OPEN</router-link>
          </b-button>
        </div>
      </b-modal>
    </div>

         <!-- <b-row class="justify-content-center mt-5">
         <div class="text-light">
           <router-link to="/login1">
             <b-button variant="success">Another Way</b-button>
           </router-link>
         </div>
      </b-row> -->
  </b-container>
 </div>
</template>

<script>
const Swagger = require("swagger-client");
const request = require('../netlifyforms/netlify');
import {SingUp} from "@/netlifyforms/SignUpForms.vue";
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
          // console.log(get.status + " OK") 
          const SignUp = get.body;
          SignUp.filter(users => {
            if (
              users.data.password == this.password &&
              users.data.name == this.username
            ) {
               this.$bvModal.show("gate");
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

<style lang="scss">
.loginclass{
  height: 100vh;
}
</style>