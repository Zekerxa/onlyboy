<template>
  <b-container class="mt-5" @keyup="loadname">
    <b-row class="justify-content-center">
    </b-row>
    <b-row class="justify-content-center">
      <div class="m-3">
        <form method="post" @submit.prevent="Register">
          <div class="text-success text-center text-uppercase">
            <h3>Free Sign Up</h3>
          </div>
          <input type="hidden" name="form-name" value="SignUp" />
          <ul>
            <li>
              <label for="name-error">Username :</label>
              <input
                class="form-control"
                :class="[namevalid]"
                required
                type="text"
                name="name"
                id="name-error"
                v-model="Signup.name"
                @input="ev => form.name = ev.target.value"
                placeholder="Enter your name"
              />
<small id="name-error" class="text-muted pl-1">Username must be used to login</small>
              <div class="invalid-feedback">Username already exist . . .</div>
            </li>
            <li>
              <label for="email-error">Email :</label>
              <input
                class="form-control"
                :class="[emailvalid]"
                required
                type="email"
                placeholder="Enter your email"
                name="email"
                id="email-error"
                v-model="Signup.email"
                @input="ev => form.email = ev.target.value"
              /><small id="name-error" class="text-muted pl-1">Eg. @example.com</small>
              <div class="invalid-feedback">Email address already used . . .</div>
            </li>
            <li>
              <label>Phone : </label>
                <input
                  class="form-control"
                  type="tel"
                  placeholder="Enter your phone"
                  name="tel"
                  id="tel-error"
                  v-model="Signup.tel"
                  @input="ev => form.tel = ev.target.value"
                />
                <small id="tel-error" class="text-muted pl-1">Eg. +959xxxxxxxxx (or) 09xxxxxxxx  </small>
             
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
              <label>Password :</label>
              <input
                class="form-control"
                type="password"
                placeholder="Enter your password "
                v-model="Signup.password"
                name="password"
                required
                :class="[passwordvalid]"
                id="password-error"
                @input="ev => form.password = ev.target.value"
              />
              <small id="password-error" class="text-muted pl-1">Must be greater than 7 characters long.</small>
              <div class="invalid-feedback"></div>
            </li>
            <li class="text-center m-2">
              <div data-netlify-recaptcha="true"></div>
            </li>
            <li class="text-center">
              <b-button variant="success" type="submit" class="submit-button text-center">Register</b-button>
            </li>
          </ul>
        </form>
      </div>
    </b-row>
  </b-container>
</template>

<script>
const Swagger = require("swagger-client");
const req = require("./netlify");
export default {
  name: "SignUp",
  data() {
    return {
      register: true,
      emailvalid: "",
      namevalid: "",
      passwordvalid: "",
      namesuccess: false,
      emailsuccess: false,
      passwordsuccess:false,
      Signup: {
        email: "",
        name: "",
        tel: "",
        password: ""
      },
      alert: "",
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
    loadname() {
      Swagger.http(req).then(get => {
        const SignUp = get.body;
        SignUp.filter(users => {
          if (this.Signup.name == users.data.name) {
            this.namevalid = "is-invalid";
            this.namesuccess = false;
          } else if (this.Signup.name.length > 7) {
            this.namevalid = "is-valid";
            this.namesuccess = true;
          } else if (this.Signup.name.length < 7) {
            this.namevalid = "";
          }
        });
      });

        Swagger.http(req).then(get => {
         const SignUp = get.body;
         SignUp.filter(users => {
           if (this.Signup.password == users.data.password) {
             this.passwordvalid = "is-invalid";
             this.passwordsuccess = false;
           } else if (this.Signup.password.length > 7) {
             this.passwordvalid = "is-valid";
             this.passwordsuccess = true;
           } else if (this.Signup.password.length < 7) {
             this.passwordvalid = "";
           }
         });
       });

      Swagger.http(req).then(get => {
        const SingUp = get.body;
        SingUp.filter(users => {
          switch (users.data.email) {
            case (this.Signup.email):
              this.emailvalid = "is-invalid";
              this.emailsuccess = true;
              break;
            default:
              this.emailsuccess = true;
              this.emailvalid = ''
              break;
          }
        });
      });

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
            this.emailsuccess == true &&
            this.namesuccess == true &&
            this.passwordsuccess == true &&
            this.Signup.password.length >= 7 &&
            (this.Signup.tel.startsWith('09') || this.Signup.tel.startsWith('+959'))
          ) {
            this.$router.push("success");
          }
        })
        .catch(e => {
          console.log(e);
          this.$router.push("fail");
        });
    },
    noti() {
      const number = Math.floor(Math.random() * 5 + 1);
      console.log(number);
      switch (number) {
        case 1:
          alert("Username and Password at least 7 letters . . .");
          break;
        case 2:
          alert("Phone number should be start with (+959) or (09)");
          break;
        case 3:
          alert("Plz enter your existing email . . .");
          break;
        case 4:
          alert("Email should be @something.com . . .");
          break;
        default:
          alert("Need to fills to correct forms . . .");
          break;
      }
    }
  }
};
</script>

<style lang="scss">
body {
  text-align: left;
  background: rgb(21, 18, 34);
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
  padding: 3em;
  background: #fff;
  color: rgba(14, 30, 37, 0.54);
  border-radius: 8px;
  -webkit-box-shadow: 0 1px 6px 0 rgba(14, 30, 37, 0.12);
  box-shadow: 0 1px 6px 0 rgba(14, 30, 37, 0.12);
  h3 {
    margin-top: -20px;
    margin-bottom: 20px;
  }
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