<template>
  <div class="question-form mt-5" id="show-me" :onload="load()">
    <b-row class="justifycontent-center">
      <b-col class="text-center text-success">
        <h3>Free Sign Up</h3>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-alert variant="danger" :show="show">{{ alert }}</b-alert>
    </b-row>
    <form method="post" @submit.prevent="Register">
      <input type="hidden" name="form-name" value="SignUp" />
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
        <li class="text-center" v-show="check">
          <b-button variant="warning" disabled>Checking....</b-button>
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
  name: "SignUp",
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
          "form-name": "SignUp",
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
            const request = {
              url: `https://z-function.netlify.com/db.json`,
              method: "POST",
              server: "Netlify",
              headers: {
                "Access-Control-Allow-Headers": "*",
                "access-control-allow-methods": "POST",
                "Access-Control-Allow-Origin": "*",
                "content-type": "application/json",
                "Accept-Encoding": "gzip, deflate, br",
                "www-authenticate": "Basic",
                "content-type": "application/json",
                "authorization": "Bearer 4e94fe81-5865-44e0-8046-1cb68199f7ce",
                "if-none-match": "82aadbe778f085a198c9d68ed0a7a480-ssl",
                "sec-fetch-site": "same-origin"
              },
              withCredentials: false,
              responseType: "json",
              responseEncoding: "utf8",
              xsrfCookieName: "XSRF-TOKEN",
              xsrfHeaderName: "X-XSRF-TOKEN"
            };
            const axios = require("axios");
            axios.post("https://z-function.netlify.com/db.json", {
              name: "this.name",
              email: "this.email",
              tel: "this.tel",
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
            this.show = true;
            this.name = "";
            this.password = "";
            this.email = "";
          } else if (this.password.length < 6) {
            this.alert = this.alertmessage.password;
            this.show = true;
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
body {
  text-align: left;
}
li {
  margin-bottom: 1em;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
p,
span {
  margin-left: 15px;
  vertical-align: top;
}
p,
label {
  color: #0af;
  font-weight: bold;
}

.article {
  box-shadow: 3px 4px 30px #222;
  margin: 50px 0px;
}
form {
  background: rgb(248, 248, 248);
  padding: 3em;
  background: #fff;
  color: rgba(14, 30, 37, 0.54);
  border-radius: 8px;
  -webkit-box-shadow: 0 1px 6px 0 rgba(14, 30, 37, 0.12);
  box-shadow: 0 1px 6px 0 rgba(14, 30, 37, 0.12);
}
input[type="radio"] {
  position: absolute;
  opacity: 0;
}
input[type="text"],
input[type="tel"],
input[type="email"],
input[type="password"],
textarea {
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 40px;
  margin: 0;
  padding: 6px 14px;
  border: 2px solid #e9ebeb;
  border-radius: 4px;
  background: 0 0;
  color: #0e1e25;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}
textarea {
  height: 200px;
}
</style>