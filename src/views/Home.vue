<template>
  <div class="home">
    <Collapse />

    <b-container>
      <b-row>
        <div class="article"></div>
      </b-row>
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


    <b-container>
          <!--///////// Start In ///////// -->
      <b-row class="justify-content-center" :onload="Global()">
          <b-col cols="12" md="4" class="mb-5 mt-5" v-for="Data in GlobalData" :key="Data">
          <VueRotateCardEffect
            data-aos="zoom-in"
            :PhotoLink="Data.PhotoLink"
            :MainHeader="Data.MainHeader"
            :DataMsgUp="Data.Message1"
            :DataMsgDown="Data.Message2"
            :SecPageTableFormat="Data.SecPageTable"
            :FacebookLink="Data.FacebookLink"
            :SecPageMsg  ="Data.SecPageMsg"
          />
        </b-col>
      </b-row>
    </b-container>


    <!-- ////////// Post method /////////////// -->
    <b-container>
       <div data-aos="fade-right">
        <b-row class="justify-content-center mt-5 mb-3">
        <b-col class="text-center">
          <h3>{{ msg }}</h3>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col cols="4" md="6" sm="2">
          <label>Type</label>
        </b-col>
        <b-col cols="8" md="6" sm="8">
          <b-form-input  size="sm" v-model="Header" placeholder="Eg. Member"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col cols="4" md="6" sm="2">
          <label>Message</label>
        </b-col>
        <b-col cols="8" md="6" sm="8">
          <b-form-textarea size="sm" v-model="Message" placeholder="Enter your Message"></b-form-textarea>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col cols="4" md="6" sm="2">
          <label for="">PhotoLink</label>
        </b-col>
        <b-col cols="8" md="6" sm="8">
          <b-form-input  size="sm" v-model="Photolink" placeholder="Eg.https:// Your photo link"></b-form-input>
        </b-col>
      </b-row>
        <b-row class="my-1">
        <b-col cols="4" md="6" sm="2">
          <label>Back Msg</label>
        </b-col>
        <b-col cols="8" md="6" sm="8">
          <b-form-textarea size="sm" v-model="BackMsg" placeholder="Enter your Message for Back Page"></b-form-textarea>
        </b-col>
      </b-row>
      <b-row class="justify-content-center mt-3">
        <b-col class="text-center">
          <b-button @click="poster">Create</b-button>
        </b-col>
      </b-row>
       </div>

    </b-container>

    <Footer />
  </div>
</template>
<script>

import Collapse from "@/components/collapse.vue";
import Footer from "@/components/Footer";
import VueRotateCardEffect from "@/components/VueRotateCardEffect";
import { getting, posting, GlobalData } from "../gdrive";
const gdrive = require("../gdrive");
const Swagger = require("swagger-client");
const axios = require("axios");


// Swagger.http(getting)
//   .then(res => {
//     const netlify = res.obj;
//     console.log(netlify);
//     netlify.map(e => {
//       console.log(e.data++);
//     });
//   })
//   .catch(err => {
//     console.log(err); // instanceof Error
//     err.response; // response or null
//   });

export default {
  name: "home",

  data() {
    return {
      Header: '',
      Message: '',
      Photolink: '',
      BackMsg  : '',
      msg: "Create your Own Details",
      GlobalData: [{MainHeader: '',PhotoLink: '',Message1:'',SecPageMsg:'',SecPageTable:''}]
      // GlobalData    : [{MainHeader:'jkjk'},{SecPageData:'kjk'}],
    };
  },
  methods: {
    poster() {
      const AboutmeData = require("../VueRotateCardData");
         this.GlobalData.map(e => {
            console.log(e.MainHeader)
             e.MainHeader = this.Header
             e.Message1  = this.Message
             e.PhotoLink  = this.Photolink
             e.SecPageMsg = this.BackMsg
             e.SecPageTable = ''

         })
    },
    Global() {
      const AboutmeData = require("../VueRotateCardData");
      this.GlobalData = AboutmeData.GlobalData;
    }
  },
  components: {
    Collapse,
    Footer,
    VueRotateCardEffect
  }
};
</script>

<style lang="scss">
body {
  background: #fff;
}
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
