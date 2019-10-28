<template>
  <b-container>
    <b-row class="justify-content-center">
      <div class="text-center text-warning page">
        <div class="card pt-3">
          <h4 class="">Sending . . . <i class="fas fa-pulse fa-spinner fa-fw"></i> </h4>
           <h5 class="m-3 text-success">E-mail will send to your account a few second later.</h5>
        <p class="text-dark">Check back again to your mail account</p>
        <router-link to="/">
          <b-button variant="success" class="m-3">Back to our site</b-button>
        </router-link>
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "SubmissionSuccess"
};
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