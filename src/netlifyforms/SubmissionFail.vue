<template>
  <b-container>
    <b-row class="justify-content-center">
      <div class="text-center mt-3 text-danger">
        <h3>Oops, looks like something went wrong!</h3>
        <router-link to="/">
          <b-button variant="dark" class="m-3">Go Back</b-button>
        </router-link>
      </div>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: "SubmissionFail"
  }
</script>