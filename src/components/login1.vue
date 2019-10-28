<template>
  <div id="lock">
    <div class="container">
      <div class="row">
        <div class="article"></div>
      </div>
      <div class="row justify-content-center p-3">
        <h2 class="text-center d-block text-danger">This is lock because of reason.</h2>
      </div>
      <div>
        <div class="row justify-content-center m-2">
          <div class="text-center codeplace">
            <!-- <input type="text" v-model="password" placeholder=" Lock !" > -->
            {{ password }}
          </div>
        </div>
        <div class="row justify-content-center m-2">
          <button class="btn btn-info w-25 pt-3 pb-3 m-1" @click="password += 1">1</button>
          <button class="btn btn-info w-25 pt-3 pb-3 m-1" @click="password += 2">2</button>
          <button class="btn btn-info w-25 pt-3 pb-3 m-1" @click="password += 3">3</button>
        </div>
        <div class="row justify-content-center m-2">
          <button class="btn btn-info w-25 pt-3 pb-3 m-1" @click="password += 4">4</button>
          <button class="btn btn-info w-25 pt-3 pb-3 m-1" @click="password += 5">5</button>
          <button class="btn btn-info w-25 pt-3 pb-3 m-1" @click="password += 6">6</button>
        </div>
        <div class="row justify-content-center m-2">
          <button class="btn btn-info w-25 pt-3 pb-3 m-1" @click="password += 7">7</button>
          <button class="btn btn-info w-25 pt-3 pb-3 m-1" @click="password += 8">8</button>
          <button class="btn btn-info w-25 pt-3 pb-3 m-1" @click="password += 9">9</button>
        </div>
        <div class="row justify-content-center m-2">
          <button class="btn btn-info w-25 pt-3 pb-3 m-1" @click="clear">C</button>
          <button class="btn btn-info w-25 pt-3 pb-3 m-1" @click="password += 0">0</button>
          <button class="btn btn-info w-25 pt-3 pb-3 m-1" @click="ok">Go</button>
        </div>
      </div>

      <b-row class="justify-content-center mt-5">
         <div class="text-light">
           <router-link to="/login">
             <b-button variant="success">Another Way</b-button>
           </router-link>
         </div>
      </b-row>
        
    </div>

    <div class="justify-content-center mt-5">
      <b-modal id="gate" centered hide-footer>
        <template v-slot:modal-title>
          <i class="fa fa-unlock"></i>
          <code>Unlocked</code>
        </template>
        <div class="text-center">
          <h4 class="text-center d-block">Welcome to data storage...</h4>
          <b-button variant="success" class="text-center">
            <router-link to="/lock/onlyboy" class="text-light nav-link text-success">OPEN</router-link>
          </b-button>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      msg: 3,
      show: false
    };
  },
  methods: {
    ok: function() {
      if (this.password == "24865" || this.password == "20283256") {
        this.$bvModal.show("gate");
        this.password = "";
      } else if (this.password == "") {
        alert("Need Password . . .");
      } else {
        this.password = "";
        alert("Wrong Password !. . . .");
      }
    },
    clear: function() {
      this.password = "";
    }
  }
};
</script>

<style>
#lock {
  background: #111;
  height: 100vh;
}
.codeplace {
  min-height: 20px;
  background: #0f0;
}
</style>