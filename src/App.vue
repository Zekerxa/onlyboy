<template>
  <div id="app">
    <b-navbar
      toggleable="lg"
      type="dark"
      class="header position-fixed w-100 p-0"
      :style="{background : scrollchange}"
    >
      <b-navbar-brand href="#" class="headername pl-2">Function</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" class="pl-2 pr-2 mr-1" :style="{background : bgicon}">
        <i class="fa fa-bars text-info"></i>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
       <b-nav-item href="#">
            <router-link class="nav-link text-light ml-2" to="/">Home</router-link>
          </b-nav-item>
          
          <b-nav-item href="#">
            <router-link class="nav-link text-light ml-2" to="/about">About</router-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
         <b-nav-item class="inline-block text-center" @click="music">
             <span class="musicicon nav-link" :style="{background : bgicon}">
            <i  :class="[icon ? ban : notban]" class="fa text-info"></i>
             </span>
         </b-nav-item>
          <b-nav-item href="#" >
            <router-link class="nav-link text-light ml-2" to="/login1">Login</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link class="nav-link text-light ml-2" to="/register">Sing Up</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div>
      <div>
        <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators>
          <b-carousel-slide
            caption="Welcome to OnlyBoy"
            class="hero-img"
            img-src="https://images.unsplash.com/photo-1541445996863-0c22ef83f4cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="What can I help you?"
            class="hero-img"
            img-src="https://images.unsplash.com/photo-1541445996863-0c22ef83f4cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Have a good day bro."
            class="hero-img"
            img-src="https://images.unsplash.com/photo-1541445996863-0c22ef83f4cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80"
          ></b-carousel-slide>
          <b-carousel-slide
            caption=". . . . . ."
            class="hero-img"
            img-src="https://images.unsplash.com/photo-1541445996863-0c22ef83f4cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Welcome"
            class="hero-img"
            img-src="https://images.unsplash.com/photo-1541445996863-0c22ef83f4cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80"
          ></b-carousel-slide>
        </b-carousel>
      </div>
    </div>

    <router-view />
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
const Rdmusic = Math.floor(Math.random() * 6 + 1);
const musics = require(`./assets/music/${Rdmusic}.mp3`);
const music = new Audio(musics);

export default {
  name: "app",
  data() {
    return {
      notban: "fa-music",
      ban: "fa-ban",
      icon: "",
      bgicon: "",
      choose: false,
      scrollchange: ""
    };
  },
  methods: {
    music() {
      this.icon = !this.icon;
      this.choose = !this.choose;
      if (this.choose) music.play(), console.log("Loading....");
      else {
        music.pause();
        console.log("Pause...");
      }
    },
    load() {
      if (scrollY > 100) {
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
    document.addEventListener("scroll", this.load);
  },
  components: {
    Footer
  }
};
</script>

<style lang="scss">
.header {
  z-index: 10000;
}
.headername {
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: "serif";
}
.navlinkcolor {
  color: #0f0;
}
.navbar-collapse{
  margin-bottom:-15px;
}
.hero-img {
  width: 100vw;
  height: 75vh;
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
  .navbar-collapse{
  margin-bottom: auto;
}
}

</style>
