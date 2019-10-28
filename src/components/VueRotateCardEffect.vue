<template>
  <div class="ouraboutclass">
    <div class="container">
      <div class="row justify-content-center ourabout">
        <!-- ////////////////// First Page  ////////////////////// -->
        <div class="card text-center ourabout-card firstpageforstyle" @click="ouraboutcard" :style="newstyle ? change : notchange">
          <div :class="display ? 'd-none' : 'd-block'">
            <!--You Can Start in here  -->
            <div class="card-img-top mt-3 mb-1">
              <img
                class="ourabout-img"
                :src="PhotoLink"
                alt
              />
            </div>
            <div>
              <div class="card-text mt-2">
                <p class="title">{{ MainHeader }}</p>
              </div>
              <div class="text-info font-weight-bolder card-text mb-4 pt-2 pl-1 pr-1">
                <p>Hi Everyone!</p>
                <p>{{ DataMsgUp }}</p>
                <p>{{ DataMsgDown }} </p>
                <p class="pt-4 text-muted">Click Me More Details</p>
              </div>
            </div>
          </div>
        </div>
                 <!-- ////////////////// Second Page  ////////////////////// -->
        <div class="card text-light text-center ourabout-details secondpageforstyle" @click="ouraboutcard" :style="newstyle ? notchange : change">
          <div :class="display ? 'd-block' : 'd-none'">
                                <!--You Can Start in here  -->
            <div class="secondpageforstyle">
              <div class="title m-2">
                {{ MainHeader }}
              </div>
                 <!-- ////////////// Table Stacked Format ////////// -->
               <b-table stacked  :items="SecPageTableFormat" class="bg-dark text-light"></b-table>
                <!-- //////////// Do something if you not used Table format -->
                <div class="SecPageMsg">
                  {{ SecPageMsg }}
                </div>
               <div class="">
                   <a :href="FacebookLink" target="_blank" rel="noopener noreferrer" class="text-light">
                     <b-button variant="info" class="mb-3"> Facebook  </b-button>
                   </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newstyle  : "",
      display   : "",
      change    : { transform: "rotateX(180deg)", transition: "1s all" },
      notchange : { transform: "rotateX(0deg)", transition: "1s all" },
      owner     : [ {Name:'Zin Min Htet',Age:'20',Work:'Front-end Web Developer',Address:'Myanmar/Yangon',Phone:'+959-687717767'}] //format
    };
  },
  methods: {
    ouraboutcard() {
      this.newstyle = !this.newstyle;
      setTimeout(() => {
        this.display = !this.display;
      }, 431);
    }
  },
  props: ["MainHeader","SecPageTableFormat","PhotoLink","FacebookLink","DataMsgUp","DataMsgDown","SecPageMsg"]
};
</script>

<style lang="scss">
.ouraboutclass {
  background: #fff;
}
.ourabout {
  min-height: 60vh;
  min-width: 100%;
  background: #fff;
  margin-top: 100px;

  .ourabout-card,
  .ourabout-details {
    position: absolute;
    background: #fff;
    width: 45vh;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 2px 2px 10px #222;

    .title {
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #000;
      text-shadow: 2px 2px 2px #555;
    }
    .info-text {
      line-height: 1.5ch;
    }
    .ourabout-img {
      width: 22vh;
      height: 22vh;
      border-radius: 100px;
    }
    @media (max-width: 576px) {
      .ourabout-img {
        width: 15vh;
        height: 15vh;
      }
    }
    .SecPageMsg{
      color: #000;
      padding: 10px;
      font-family: 'serif';
      font-weight: 600;
      text-shadow: 3px 3px 5px #333;
    }
  }

  @media (max-width: 576px) {
    .ourabout-card,
    .ourabout-details {
      width: 70%;
    }
  }
/////////// style for fist page ///////////////////
 .firstpageforstyle{
   background: #fff
 }
///////////// style for sec page
 .secondpageforstyle{
    background: #fff;

    table.b-table > tbody > tr > [data-label]::before{
          width: 35%;
      }
 }

}
</style>
