<template>
  <div class="question-form mt-5" id="show-me" :onload="load()">
    <b-row class="justifycontent-center">
      <b-col class="text-center text-success" >
        <h3>Testing Form</h3>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-alert variant="danger" :show="show">{{ alert }}</b-alert>
    </b-row>
    <form method="post" @submit.prevent="Register">
      <input type="hidden" name="form-name" value="contact" />
      <ul>
        <li>
          <label>
            Your Name :
            <input
              type="text"
              name="name"
              v-model="name"
              @input="ev => form.name = ev.target.value"
              placeholder="Enter your name"
            />
          </label>
        </li>
        <li>
          <label for>
            Your Email :
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              v-model="email"
              @input="ev => form.email = ev.target.value"
            />
          </label>
        </li>
        <li>
          <label>
            Your Phone :
            <input
              type="tel"
              placeholder="Enter your phone"
              name="tel"
              v-model="tel"
              @input="ev => form.tel = ev.target.value"
            />
          </label>
        </li>
        <li>
          <label>
            Country Code :
            <input
              type="text"
              placeholder="Optional"
              name="code"
              @input="ev => form.code = ev.target.value"
            />
          </label>
        </li>
        <li>
          <label for>
            Your Password :
            <input
              type="password"
              placeholder="Enter your password "
              v-model="password"
              name="password"
              @input="ev => form.password = ev.target.value"
            />
          </label>
        </li>
        <li class="text-center" v-show='check'>
          <b-button variant="warning" disabled="">Checking.... </b-button>
        </li>
        <li class="text-center" v-show="register">
          <b-button variant="success" type="submit" class="submit-button text-center">Register</b-button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      show: false,
      check: true,
      register: false,
      email: "",
      name: "",
      tel: "",
      password: "",
      alert: "",
      alertmessage: {
        name: "Username can't be less than 7 . . .",
        email: "Your email address look like doesn't exist . . .",
        password: "Password can't be less than 7 . . ."
      },
      form: {
        name: "",
        question: "",
        email: "",
        tel: "",
        password: "",
        number: "",
        code: ""
      },
      status: {}
    };
  },
  methods: {
    load() {
      if (
        this.email.endsWith("@gmail.com") &&
        this.name.length > 6 &&
        this.password.length > 6 &&
        (this.tel.startsWith("+959") || this.tel.startsWith("09"))
      ) {
        this.register = true;
        this.check = false;
      } else {
        this.register = false;
        this.check = true;
      }
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    Register(e) {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({
            "form-name": "contact",
            ...this.form
          })
        })
          .then(() => {
            if (
              this.email.endsWith("@gmail.com") &&
              this.name.length > 6 &&
              this.password.length > 6
            ) {
              this.$router.push("thanks");
              const axios = require("axios");
              axios.post("http://localhost:3000/userdata/", {
                name: this.name,
                email: this.email,
                tel: this.tel,
                password: this.password
              });
            } else if (this.name.length < 6) {
              this.alert = this.alertmessage.name;
              this.show = true;
              this.name = "";
              this.password = "";
              this.email = "";
            } else if (!this.email.endsWith("@gmail.com")) {
              this.alert = this.alertmessage.email;
              this.show = true;
              this.name = "";
              this.password = "";
              this.email = "";
            } else if (this.password.length < 6) {
              this.alert = this.alertmessage.password;
              this.show = true;
              this.name = "";
              this.password = "";
              this.email = "";
            } else {
              this.$router.push("404");
            }
          })
          .catch(() => {
            this.$router.push("404");
          });
    }
  }
};
</script>

<style lang="scss">