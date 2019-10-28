<template>
  <b-container>
     <b-row class="justify-content-center">
       <b-col class="text-center page">
         <h3 class="text-info mt-2 mb-3 bold"><u><strong>Permission Not Allow</strong></u></h3>
         <div class="">
           <img src="../assets/photo/permission.png" class="photo" alt="">
         </div>
         <p class="">You don't have any Permission to view this page</p>

         <div class="">
           <router-link to="/">
              <strong> Go Back to Home</strong>
           </router-link>
         </div>
       </b-col>
     </b-row>
     <b-row></b-row>
  </b-container>
</template>

<script>
export default {
  name: "404"
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
.photo{
  width: 45vh;
}
@media (max-width: 576px) {
            .photo {
                width: 32vh;
            }
        }
</style>