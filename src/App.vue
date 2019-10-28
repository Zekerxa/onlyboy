<template class="appclass">
  <div id="app">
    <b-navbar
      toggleable="lg"
      type="dark"
      class="header position-fixed w-100 p-0"
      :style="{background : scrollchange}"
    >
      <b-navbar-brand class="headername text-light pl-2">{{Function}}</b-navbar-brand>
      <b-navbar-toggle
        @click="loadscroll(1)"
        target="nav-collapse"
        class="pl-2 pr-2 mr-1"
        :style="{background : bgicon}"
      >
        <i class="fa fa-bars text-info"></i>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            <b-link class="nav-link text-light ml-2" to="/" active-class="">Home</b-link>
          </b-nav-item>

          <b-nav-item href="#">
            <b-link class="nav-link text-light ml-2" to="/about">About</b-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="inline-block text-center" @click="music">
            <span class="musicicon nav-link" :style="{background : bgicon}">
              <i :class="[icon ? ban : notban]" class="fa text-info"></i>
            </span>
          </b-nav-item>
          <b-nav-item href="#">
            <b-link class="nav-link text-light ml-2" to="/login">Login</b-link>
          </b-nav-item>
          <b-nav-item href="#">
            <b-link class="nav-link text-light ml-2"  to="/register">Sign Up</b-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view></router-view>
  </div>
</template>
<script>
const Rdmusic = Math.floor(Math.random() * 6 + 1);
      const musics = require(`./assets/music/${Rdmusic}.mp3`);
      const music = new Audio(musics);
const ConsoleMsg = require('./stn');
ConsoleMsg.stn("%cDon't waste your time!","color:#c20; font-size: 40px",console.log)
export default {
  name: "app",
  data() {
    return {
      notban: "fa-music",
      ban: "fa-ban",
      icon: "",
      bgicon: "",
      choose: false,
      scrollchange: "",
      Function: "ZEKERXA"
    };
  },
  methods: {
    music() {
      this.icon = !this.icon;
      this.choose = !this.choose;
      if (this.choose) music.play();
      else music.pause();
    },
    loadscroll(e) {
      if (scrollY > 105) {
        this.scrollchange = "#17a2b8";
        this.bgicon = "#fff";
      } else if (e == 1) {
        this.scrollchange = "#17a2b8";
        this.bgicon = "#fff";
      } else if (scrollY == 0) {
        this.scrollchange = "transparent";
        this.bgicon = "transparent";
      } else {
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.loadscroll);
  }
};
</script>

<style lang="scss">
#app{
  background: #fff;
}
body{
  background: #fff;
  .article {

    margin-top: 55px;
  }
}
.header {
  z-index: 10000;
}
.headername {
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: "serif";
  font-weight: 800;
}
.hero-img {
  width: 100vw;
  height: 75vh;
}
.navbar-collapse {
  padding-bottom: -15px;
}
.nav-item {
  margin-bottom: 0;
  .nav-link{
     &:hover{
       color: #0a0!important
     }
      a{
        font-weight: 600;
      }
    }
}

.musicicon {
  border-radius: 5px;
}
.navicon {
  padding: 1px 1px;
}

@media (max-width: 576px) {
  .hero-img {
    height: 30vh;
  }
  .navbar-collapse {
    margin-bottom: auto;
  }
}
</style>
