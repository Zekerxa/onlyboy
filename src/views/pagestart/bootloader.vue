<template>
    <div class="bootloader">
        <b-container class="mt-4">
           <b-card>
               <b-row class="justify-content-center pt-5">
               <b-col cols="12" class="mt-5 text-center d-block"><h3>How to unlock bootloader</h3></b-col>
               <b-col cols="12" class="mt-5 text-center d-block">
                   <img :height="200" :width="300" src="../../assets/booloader/fastbootlogo.jpg" alt=""/>
               </b-col>
        
               <b-col cols="12" class="text-center m-2">
                   <h5>3-Info that we should know to Unlock Bootloader</h5>
               </b-col>
               <b-col cols="12" class="text-center m-2">
                   <p class="p-1">{{msg1}}</p>
               </b-col>
           </b-row>
           </b-card>
      </b-container>

     <b-container class="mt-5">
           <b-card>
                <b-row class="justify-content-center">            
                    <b-col md="12" class="text-center mt-2"><h5>How to get unlock permission from Xiaomi</h5></b-col>
                     <b-col md="12" class="text-center">
                      <img class="img-time-matters" v-show="show" v-bind="img_control" src="../../assets/booloader/developer.png" alt="photo">
                  </b-col>
                <b-col md="12" class=" text-center mt-2"><P>{{msg2}}</P></b-col>            
            </b-row>
           </b-card>
     </b-container>

      <b-container class="mt-5">
              <b-card>
                <b-row class="justify-content-center">          
                     <b-col><img v-bind="img_control" src="../../assets/booloader/developer.png" alt=""></b-col>
                  <b-col col md="6" class="text-center mt-2">
                      <p> {{msg3}} </p>
                      <a href="https://zeker-xa.ml/services">Link is Dead...</a>
                  </b-col>
               </b-row>
              </b-card>
     </b-container>

      <b-container class="mt-5">
              <b-card>
                <b-row class="justify-content-center">          
                     <b-col cols="12" class="text-center"><img :height="200" :width="300" src="../../assets/booloader/s.png" alt=""></b-col>
                   <b-col cols="12"  class="text-center mt-2">
                      <p> {{msg4}} </p>           
                  </b-col>
               </b-row>
              </b-card>
      </b-container>

      <b-container class="mt-5">
              <b-card>
                <b-row class="justify-content-center">          
                     <b-col cols="12" class="text-center"><img :height="200" :width="300" src="../../assets/booloader/s1.png" alt=""></b-col>
                   <b-col cols="12"  class="text-center mt-2">
                      <p> {{msg5}} </p>           
                  </b-col>
                  <b-col class="text-center mt-3">
                      <img :height="200" :width="300" src="../../assets/booloader/ss1.png" alt="">
                  </b-col>
                  <b-col class="text-center mt-3">
                      <img :height="200" :width="300" src="../../assets/booloader/ss12.png" alt="">
                  </b-col>
                  အားလံုးအဆင္​​ေျပၾကမယ္​ထင္​ပါတယ္​။
               </b-row>
              </b-card>
          </b-container>
         <!-- Sharing Link Buttom -->
                             <div class="row justify-content-center m-4">
                                  <div class="fb-like" data-href="https://zeker-xa.ml/" data-width="" data-layout="button_count" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
                             </div>
    </div>
</template>

<script>
export default {
    name : 'bootloader',
    data(){
        return{
            bg           : 'green',
            show         : true,
            img_control  : { width : 250, height :  400},
            photo        : '../../assets/logo.png',
            msg1         :  " Bootloader Unlock လုပ္​​ေတာ့မယ္​ဆိုရင္သိထားရမယ္​့အခ်က္​​ေလး​ေတြ႐ွိပါတယ္​။ပထမတစ္​ခ်က္​က Mi Account ႐ွိရပါမယ္​။Mi acc မ႐ွိဘဲ China က​ေန Global ခ်ိန္​းလို႔ရလားတို႔ PC မ႐ွိဘဲလုပ္​လို႔ရလားတို႔လာ​ေမး​ေနၾကတဲ့လူ​ေတြ႐ွိလို႔ပါ တကယ္​​ေတာ့မရပါဘူး။ဒုတိယတစ္​ခ်က္​က Unlock လုပ္​ဖို႔ Permission ​ေတာင္​းရပါမယ္​ Phone ​ေပၚမူတည္​ပီး​ေစာင္​့ရတဲ့အခ်ိန္​လည္​းနည္​းနည္​း​ေတာ့မတူၾကပါဘူး ပံုမွန္​အျဖင္​့ 360hours ​ေစာင္​့ရပါတယ္​ တတိယတစ္​ခ်က္​က Data ​ေတြအကုန္​ပ်က္​ပါမယ္​ ႀကိဳတင္​ Backup လုပ္​ထားဖို႔လို႔မယ္​ ဒါမွမဟုလည္​း SD ကဒ္​ထဲဖစ္​ဖစ္​​ေရြ  ့ထားလိုက္​ပါ",
            msg2         : "အရင္​ဆံုး ဖုန္းထဲမွာ Mi account ႐ွိရပါမယ္​ ပီးရင္​ Find Device On ​ေပးထားရပါမယ္​ ပထမအဆင္​့ပီးပါပီ ဒုတိယအဆင္​့အ​ေနနဲ႔ Setting ထဲကိုသြားပါ About phone>MIUI Version ကို You are now a developer! ဆိုတဲ့စာ​ေလး​ေပၚတဲ့ထိ ဆက္​တိုက္​ႏိွပ္​​ေပးလိုက္​ပါ။",
            msg3         : "ပီးရင္​ Setting > Additional Setting >Developer Options> OEM Unlocking ကို On ​လိုက္​ပါ USB Debuggung ပါ onထားလို႔ရပါတယ္​ အခုက Permission ​ေတာင္​းတဲ့အဆင္​့ဆို​ေတာ့အဲ့​ေလာက္​မလို​ေသးပါဘူး ပီးရင္​​ျပထားတဲ့အတိုင္​း Mi Unlock status ထဲကိုဝင္​ အဲ့ခ်ိန္​မွာသတိထားရမွာက Wifi နဲ႔ဆိုအဆင္​မ​ေျပပါဘူးဗ် ကိုယ္​ပိုင္​ Internet နဲ႔ Add account and device ဆိုတာ​ေလးကို Click ​ေပးလိုက္​ပါ ဒါဆို Permission ​ေတာင္​းတဲ့အပိုင္​းအဆင္​​ေျပပါပီ 360 hours ​ေစာင္​့ပီးရင္​​ေတာ့ Unlock လုပ္​ဖို႔အခ်ိန္​​ေရာက္​လာပီပါ။ Unlock လုပ္​ဖို႔အတြက္​ လိုအပ္​တဲ့ပစၥည္​း​ေတြကို ​ဒီLink ​ေလးက​ေန down ႏိုင္​ပါတယ္​။",
            msg4         : "Application ​ေလးကို PC မွာ Zip file ျဖည္​ ပီးရင္​ Double Click နဲ႔ ဝင္​လိုက္​ပါMiusbDriver ကိုနိပ္​ ပံုမွာျပထားတဲ့အတိုင္​း​ေပၚ​ေနရင္​ ဖုန္​းကို Power button + Volume down buttom ကိုတစ္​ၿပိဳင္တည္​းဖိထားလိုက္​ပါ Fastboot Mode ကို​ေရာက္​သြားရင္​ Usb နဲ႔ Computer ကိုခ်ိတ္​​ေပးလိုက္​ရံုပါဘဲ။",
            msg5         :"ပီးရင္​ miflash_unlock ဆိုတာကိုနိပ္​ ကိုဖုန္​းမွာထည္​့ထားတဲ့ Mi acc ကိုထည္​့​ေပးလိုက္​ပါ။ပြင္​့သြားရင္​​ေတာ့ ​ေအာက္​ကအတိုင္​း​ေပၚလာလိမ္​့မယ္​့ Unlock ဆိုတာဆိုနိပ္​​ေပးရပါမယ္​ ဆက္​​ေမးလည္​းဆက္​နိပ္​​ေပးလိုက္​ပါ data ​ေတြပ်က္​မယ္​ဘာညာ​ေပါ့ ​ပီးရင္​​​ေတာ့ Unlock လုပ္​တဲ့အပိုင္​း​ေအာင္​ျမင္​သြားပါပီ။ ဖုန္ း Reboot တက္​လာရင္​ Additional setting ထဲမွာဝင္​ၾကည္​့လို႔ရပါပီ။",
            adsenseContent: ''
        }
    },
    methods:{
        photo2(){
            
            this.photo = '../../assets/booloader/adddevice.png';
        },
    },
    mounted(){
        this.adsenseContent = document.getElementById('divadsensedisplaynone').innerHTML;
    }
}
</script>

<style lang="scss">
@import url('https://mmwebfonts.comquas.com/fonts/?font=zawgyi');
.bootloader{
    font-family: 'Zawgyi-One';
    h3{
        letter-spacing: 0;
        background: #333;
        padding: 5px;
        color: #fff;
    }
    background: #fff;
    color: #fff;
  .card-body{
      background: #0e0935;
      box-shadow: 5px 5px 20px #333;
      letter-spacing: 1px;
  }
}
</style>