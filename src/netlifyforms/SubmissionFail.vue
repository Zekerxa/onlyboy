<template>
  <b-container>
    <b-row class="justify-content-center">
      <div class="text-center text-danger page">
        <div class="card p-2">
        <h4>Oops, looks like something went wrong!</h4>
        <router-link to="/">
          <b-button variant="dark" class="m-3">Go Back</b-button>
        </router-link>
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: "SubmissionFail"
  }
</script>

<style lang="scss">
body{
  background: rgb(21, 18, 34);
}
 .page{
 top: 50%;
 left: 50%;
 position: absolute;
 transform: translate(-50%,-50%)
}
@media (max-width: 576px) {
            .page {
                width: 42vh;
            }
        }
</style>