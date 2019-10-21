<template>
  <b-container>
    <b-row class="justify-content-center mt-3">
      <div class="loginform">
        <h3 class="text-success text-center">Login Here</h3>
        <form method="GET" @submit.prevent="login">
          <ul>
            <li>
              <label for="email-error">Email :</label>
              <b-form-input v-model="email" id="email-error" type="email" :state="error" />
              <b-form-invalid-feedback id="email-error">Check email again . . .</b-form-invalid-feedback>
            </li>
            <li>
              <label for="password-error">Password :</label>
              <b-form-input v-model="password" id="password-error" :state="error" type="password" />
              <b-form-invalid-feedback id="email-error">Check password agian . . .</b-form-invalid-feedback>
            </li>
            <li class="text-center">
              <b-button variant="success" type="submit">Login</b-button>
              <div class="text-center mt-3">
                <a class="text-danger" href="forgot">Forgot password . . .</a>
              </div>
            </li>
          </ul>
        </form>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import SingUp from "@/netlifyforms/SignUpForms.vue";
export default {
  data() {
    return {
      istrue: "",
      loginError: false,
      error: null,
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      const axios = require("axios");
      axios
        .get(
          "http://localhost:3000/userdata",
          this.loginemail,
          this.loginpassword
        )
        .then(res => {
          const logindata = res.data;
          logindata.filter(login => {
            if (login.password == this.password && login.email == this.email) {
              this.$router.push("/lock/onlyboy");
            } else {
              this.error = false;
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
.loginform {
}
</style>