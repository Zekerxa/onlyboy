<template>
  <div class="unlockclass">
    <div class="unlockforheaderbg"></div>
    <b-container class="unlock">
      <b-row>
      </b-row>
      <b-row class="justify-content-center pt-5">
        <b-col cols="12" md="6" class="mt-3 article">
          <div class="fullheight" @click="RoomNumber(1)">
            <b-card data-aos="zoom-in"
              title="Password-Text-Generator"
              :style="Accept ? none : rotateX"
              text-variant="info"
              bg-variant="light"
            >
              <div class="text-center text-black-50">
                <b-card-text>{{ info.msg1 }}</b-card-text>
              </div>
            </b-card>
          </div>
        </b-col>

        <b-col cols="12" md="6" class="mt-3 article">
          <div to="/unlock/How-To-Unlock-Bootloader" class="fullheight" @click="RoomNumber(2)">
            <b-card
              title="How to Unlock Bootloder"
              :style="Accept ? none : rotateX"
              text-variant="info"
              bg-variant="light"
            >
              <div class="text-center text-black-50">
                <b-card-text>{{ info.msg2 }}</b-card-text>
              </div>
            </b-card>
          </div>
        </b-col>

        <b-col cols="12" md="6" class="mt-3 article">
          <div to="/unlock/Buddhist-Mp3-audios" class="fullheight" @click="RoomNumber(3)">
            <b-card
              title="Buddhist-Mp3-Audios"
              :style="Accept ? none : rotateX"
              text-variant="info"
              bg-variant="light"
            >
              <div class="text-center text-black-50">
                <b-card-text>{{info.msg3}}</b-card-text>
              </div>
            </b-card>
          </div>
        </b-col>

        <b-col cols="12" md="6" class="mt-3 article">
          <div to="/unlock/PasswordTxtGenerator" class="fullheight" @click="RoomNumber(4)">
            <b-card
              title="Password-Text-Generator"
              :style="Accept ? none : rotateX"
              text-variant="info"
              bg-variant="light"
            >
              <div class="text-center text-black-50">
                <b-card-text>Create example.txt files yourself.Click me to know more about...</b-card-text>
              </div>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        msg1: "Create example.txt files yourself.Click me to know more info...",
        msg2:
          "How to unlock bootloader any xiaomi devices.Click me to know more info...",
        msg3: "To listen Mp3 Buddhist-Mp3-Audios"
      },
      Accept: false,
      none: { transform: "rotateY(0deg)", transition: "0.5s all" }, // need step one rotateX(0deg) to transition
      rotateX: { transform: "rotateY(360deg)", transition: "0.5s all" }
    };
  },
  methods: {
    RoomNumber(n) {
      switch (n) {
        case 1:
          this.Accept = !this.Accept;
          setTimeout(() => {
            this.$router.push("/unlock/PasswordTxtGenerator");
          }, 600);
          break;
        case 2:
          this.Accept = !this.Accept;
          setTimeout(() => {
            this.$router.push("/unlock/PasswordTxtGenerator");
          }, 600);
          break;
        case 3:
          this.Accept = !this.Accept;
          setTimeout(() => {
            this.$router.push("/unlock/PasswordTxtGenerator");
          }, 600);
          break;
        case 4:
          this.Accept = !this.Accept;
          setTimeout(() => {
            this.$router.push("/unlock/PasswordTxtGenerator");
          }, 600);
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss">
.unlockclass {
  background: #fff;
  .unlockforheaderbg{
    height: 50px;
    background: #000;
  }
  .row {
    .fullheight {
      min-height:26vh;
    }
  }
}

.article {
  min-width: 220px;
  a {
    list-style: none;
    text-decoration: none;
  }
  .card {
    box-shadow: 5px 5px 15px #222;
    color: #000;
    min-height: 180px;
    font-family: "serif";
    padding: 10px;
    margin: 15px 0;
    // transform: rotateX(-20deg)rotateY(-18deg)
  }
  &:hover {
    .card {
      box-shadow: 5px 5px 15px #0f0;
    }
  }
}
</style>
