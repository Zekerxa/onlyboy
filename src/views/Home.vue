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
            <router-link to="/login1">
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
  const site_id = '8b13e8fd-a73a-4341-b6d7-9a61d8329248'
  const request = {
    url: `https://api.netlify.com/api/v1/submissions?${site_id}=41b875be-e034-498d-8500-5d4e1cc58f0b&state=ham&page=1&per_page=1`,
    method: "GET",
    server: "Netlify",
    headers: {
      "Access-Control-Allow-Headers": "*",
      "access-control-allow-methods": "GET",
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      "www-authenticate": "Basic",
      "content-type": "application/json",
      "authorization":"Bearer 4e94fe81-5865-44e0-8046-1cb68199f7ce",
      "if-none-match":"82aadbe778f085a198c9d68ed0a7a480-ssl",
      "sec-fetch-site":"same-origin"
    },
    withCredentials: false,
    responseType: "application/json",
    responseEncoding: "utf8",
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN"
  };

  Swagger.http(request)
    .then(res => {
      // status text, ie: "Not Found"
      res.body; // JSON object or undefined
      res.obj; // same as above, legacy
      res.text; // textual body, or Blob
      res.headers; // header hash
      console.log("Status Code = /n" + res.statusCode);
      console.log(res.body);
      console.log("Headers =  /n" + res.headers);
      consoel.log("Config = /n" + res.config);
    })
    .catch(err => {
      err; // instanceof Error
      err.response; // response or null
    });


export default {
  name: "home",
  
  data() {
    return {
      post: "",
      get : ""
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
    width: 50vh;
  }
}
</style>