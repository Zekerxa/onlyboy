<template>
  <b-container>
    <b-row class="justify-content-center mt-5">
      <b-card
        class="text-center page mt-5"
        overlay
        img-src="https://images.unsplash.com/photo-1558933855-ec1579775e74?ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80"
        text-variant="light"
        title="Mp 3"
        :footer="file"
        footer-bg-variant="warning"
      >
        <p>Source from => https://media.thitsarparamisociety.com/</p>
        <audio :src="files" :controls="listen" autoplay></audio>
        <div class="mt-3">
          <b-button
            size="sm"
            variant="primary"
            @click="play(file),listen = !listen"
          >{{listen ? 'Close' : 'Play'}}</b-button>
        </div>

        <p>Photo by Taylor Simpson on Unsplash</p>
      </b-card>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      listen: false,
      count: "",
      files: ""
    };
  },
  methods: {
    play(count) {
      if (!this.listen) return (this.files = `http://triple-x.ml/${count}.mp3`);
      else return (this.files = "");
    }
  },
  props: ["file"]
};
</script>

<style lang="scss">
.page {
  width: 75vh;
}
@media (max-width: 576px) {
  .page {
    width: 40vh;
  }
}
</style>
