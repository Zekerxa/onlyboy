<template>
  <b-container>
    <b-row class="justify-content-center mt-3">
      <h1 class="text-dark text-center">Data Storage</h1>
    </b-row>
    <b-row class="justify-content-center mt-3 bg-dark">
      <b-col v-for="count in count" :key="count" cols="6" md="4" class="text-center mt-3">
        <a :href="photo(count)" target="_blank" rel="noopener noreferrer">
          <b-img
            thumbnail
            fluid
            class="w-100 h-auto"
            :src="photo(count)"
          />
          {{count}}
        </a>
      </b-col>
    </b-row>
    <b-row class="justify-content-center m-5">
      <b-col class="text-center">
        <b-button variant="primary" @click="more">{{Morebtn ? " => End " : "More . . ."}}</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "unlock",
  data() {
    return {
      count: 30,
      Morebtn: false
    };
  },
  methods: {
    photo(number) {
      return `https://vigilant-knuth-5cccdf.netlify.com/bff/${number}.jpg`;
    },
    more() {
      if (this.count >= 100) {
        this.Morebtn = true;
      } else {
        this.count += 20;
      }
    }
  }
};
</script>
