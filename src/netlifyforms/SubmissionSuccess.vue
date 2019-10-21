<template>
  <b-container>
    <b-row class="justify-content-center">
      <div class="text-center mt-3 text-success">
        <h4 class="m-3">Email will send to your account a few second later.</h4>
        <p class="text-danger">If mail not sent to you,Plz try again later...</p>
        <router-link to="/">
          <b-button variant="danger" class="m-3">Go Back</b-button>
        </router-link>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "SubmissionSuccess"
};
</script>