<template>
  <div class="SignUpclass">
    <b-container>
    <b-row>
      <div class="article"></div>
    </b-row>
    <b-row class="justify-content-center">
      <div class="mt-5">
        <form method="post" @submit.prevent="Register">
          <div class="text-success text-center text-uppercase">
            <h3>Free Sign Up</h3>
          </div>
          <input type="hidden" name="form-name" value="SignUp" />
          <ul>
            <li>
              <label for="name-error">Username :</label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fa fa-user-circle"></i>
                  </div>
                </div>
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
                  @keyup="loadname"
                />
                <div class="invalid-feedback"></div>
              </div>      
                  <small class="text-muted pl-1">Username must be used to login</small> 
            </li>

            <li>
              <label for="email-error">Email :</label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fa fa-envelope"></i>
                  </div>
                </div>
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
                  @keyup="loademail"
                /><div class="invalid-feedback"></div>
              </div>
              <small id="name-error" class="text-muted pl-1">Eg. @example.com</small>            
            </li>

            <li>
              <label for="tel-error">Phone :</label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fa fa-mobile"></i>
                  </div>
                </div>
                <input
                  class="form-control"
                  type="tel"
                  placeholder="Enter your phone"
                  name="tel"
                  id="tel-error"
                  v-model="Signup.tel"
                  @input="ev => form.tel = ev.target.value"
                />
              </div>
              <small class="text-muted pl-1">Eg. +959XXXXXXXXX</small>
            </li>

            <li>
              <label for="code-error">Country Code :</label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fa fa-globe"></i>
                  </div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Optional"
                  name="code"
                  id="code-error"
                  @input="ev => form.code = ev.target.value"
                />
              </div>
              <small id="code-error" class="text-muted pl-1">Option , Eg. 11231</small>
            </li>

            <li>
              <label for="password-error">Password :</label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fa fa-key"></i>
                  </div>
                </div>
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
                /><div class="invalid-feedback"></div>
              </div>
              <small
                class="text-muted pl-1"
              >Must be greater than 7 characters long.</small>
              
            </li>
            <li class="text-center">
              <b-button
                variant="success"
                type="submit"
                class="submit-button text-center w-75 mt-2 text-bold"
              >Register</b-button>
            </li>
          </ul>
        </form>
      </div>
    </b-row>
  </b-container>
  </div>
</template>

<script>

export default {
  name: "SignUp",
  data() {
    return {
      register: true,
      emailvalid: "",
      namevalid: '',
      passwordvalid:'',
      namesuccess: false,
      emailsuccess: false,
      Signup: {
        email: "",
        name: "",
        tel: "",
        password: ""
      },
      form: {
        name: "",
        question: "",
        email: "",
        tel: "",
        password: "",
        number: "",
        code: ""
      }
    };
  },
  methods: {
    loadname(){
      const name  = this.Signup.name ;
      if(name.length > 6 ){
        this.namevalid = 'is-valid'
        this.namesuccess = true
      }else if(name.length < 6 && name.length >= 3 ){
        this.namesuccess = false      
        this.namevalid = 'is-invalid'
      }else{
        console.log('F')
      }
    },
        loademail(){
      const email = this.Signup.email;
      if(email.endsWith('@gmail.com')){
        this.emailvalid = 'is-valid'
        this.emailsuccess = true
      }else if(email.length >= 4 ){
        this.emailsuccess = false      
        this.emailvalid = 'is-invalid'
      }else{
        console.log('F')
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
            this.emailsuccess == true &&
            this.namesuccess == true &&
            this.Signup.password.length >= 7 &&
            (this.Signup.tel.startsWith("09") ||
              this.Signup.tel.startsWith("+959"))
          ) {
            this.$router.push("success");
          }else{
            alert('')
          }
        })
        .catch(() => {
          this.$router.push("fail");
        });
    }
  }
};
</script>

<style lang="scss">
.SignUpclass{
  text-align: left;
  background: rgb(21, 18, 34);

  
}
form {
  padding: 3em;
  background: #fff;
  color: rgba(14, 30, 37, 0.54);
  border-radius: 8px;
  -webkit-box-shadow: 0 1px 6px 0 rgba(14, 30, 37, 0.12);
  box-shadow: 0 1px 6px 0 rgba(14, 30, 37, 0.12);

li {
  margin-bottom: 1em;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

  p,
label {
  color: #0af;
  font-weight: bold;
}
  h3 {
    margin-top: -20px;
    margin-bottom: 20px;
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
}

</style>