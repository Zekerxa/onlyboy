<template>
    <b-container class="content">
      <b-row class="justify-content-center ">
        <b-col v-for="count in count" :key="count" cols="12" md="4" class="text-center mt-3">
          <Mp3 :file="count"></Mp3>
        </b-col>
        <b-button variant="primary" class="mt-3 w-50" @click="limit" >{{Limit ? 'End...' : 'More...'}}</b-button>
      </b-row>
    </b-container>
</template>

<script>
import Mp3 from "@/components/buddhistMp3";
export default {
    data() {
        return{
          count: 6,
          Limit: false,
        }
    },
    methods:{
      limit() {
      if (this.count < 11) this.count += 3;
      else this.Limit = true;
    }
    },
    components: {
    Mp3
  }
}
</script>

<style lang="scss">

</style>