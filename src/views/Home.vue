<template>
  <b-container>
    <b-row class="justify-content-center mt-3">
      <b-card
        class="choose-form"
        body-bg-variant="light"
        header-bg-variant="dark"
        text-variant="light"
      >
        <template v-slot:header>
          <div class="text-center p-2">
            <h3 class="text-light">Free Sign Up/Log In</h3>
          </div>
        </template>
        <b-row class="justify-content-center p-3">
          <b-col class="text-center p-2">
            <router-link to="/login">
              <b-button style="min-width: 100px;" variant="primary">Log In</b-button>
            </router-link>
          </b-col>

          <b-col class="text-center p-2">
            <router-link to="/register">
              <b-button style="min-width: 100px;" variant="success">Sign Up</b-button>
            </router-link>
          </b-col>
        </b-row>
      </b-card>
    </b-row>
  </b-container>
</template>
<script>
const Swagger = require("swagger-client");
const axios = require("axios");

// Swagger.http(request)
//   .then(res => {
//     // header hash
//     console.log(res.status + " OK");
//     const SignUp = res.body;
//     SignUp.filter(s =>
//       console.log(
//         s.data.name + "\n" + s.data.email + "\n" + s.data.password + "\n"
//       )
//     );
//   })
//   .catch(err => {
//     console.log(err); // instanceof Error
//     err.response; // response or null
//   });

export default {
  name: "home",

  data() {
    return {
      post: "",
      get: ""
    };
  }
};
</script>

<style lang="scss">
.choose-form {
  width: 100vh;
  box-shadow: 4px 4px 30px #0f0;
}
@media (max-width: 576px) {
  .choose-form {
    width: 45vh;
  }
}
</style>