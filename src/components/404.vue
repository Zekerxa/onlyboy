<template>
  <b-container>
    <b-row class="justify-content-center">
      <div class="page m-3 pt-5">
        <div class="card">
            <h4 class="pl-2 text-danger m-3">Page Not Found</h4>
            <p class="pl-3">The Address that you search are not in here <span class="">Plz try again a few min later . . .</span> </p>
            </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name :"404"
}
</script>
<style lang="scss">
body {
  background: rgb(21, 18, 34);
}
.page{
    width: 75vh;
}
@media (max-width: 576px) {
  .page {
    width: 40vh;
  }
}
</style>