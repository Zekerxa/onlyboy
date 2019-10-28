<template>
<div class="servicesclass">
    <b-container>
       <b-row class="justify-content-center ">
         <b-col cols="10" md="8" class="text-center  mt-5">
          <div>
            <b-card body-bg-variant="primary" body-text-variant="light" header="Hi Everyone">
             <p>Now I'm gonna explain you how to create & write something.txt file you want to save.<strong>TOO EASY</strong> </p>        
             <b-collapse id="readmore">
                <p>Just Fill-In under the name that you want to loop and then click on the START button</p>
             <p>that will automatically loop and adding another string to your target name.End /Copy them all & Open <a href="https://apkpure.com/p/com.estrongs.android.pop" target="https://apkpure.com/p/com.estrongs.android.pop" class="text-danger">ES File Explorer</a> > Paste in the note Editor > Save as something.txt</p>
             <strong class="p-3"><a href="https://www.facebook.com/profile.php?id=100016329211576" class="text-danger p-3">Ask For Help</a></strong>
             </b-collapse>
             <b-button v-b-toggle.readmore @click="read = !read" variant="outline-light">{{read ? 'Less' : 'Read More....'}}</b-button>
           </b-card>
         </div>
         </b-col>
       </b-row>
   </b-container>
<!-- ///////////////////////////////////////////////////////////////// -->
   <b-container class="mt-5">
      <b-row class="justify-content-center ">

        <b-col cols="8" offset="4" class="text-center text-center text-lowercase text-success" text-variants="light">{{code1[0]}}
        </b-col>

         <b-col cols="6" class="text-center">
           <label class="" for=""><b-button  size="sm" variant="light">Text : ></b-button></label>
          </b-col>

        <b-col cols="6" class="text-center">          
          <input class="w-75 float-left text-center" placeholder="Enter Target" type="text" v-model="code1[0]"  value="">
        </b-col>
         
      </b-row>
<!-- ///////////////////////////////////////////////////////////////// -->
      <b-row class="justify-content-center ">

        <b-col cols="8" offset="4" class="text-center text-center text-lowercase text-success" text-variants="light">{{code1[1]}}
        </b-col>

         <b-col cols="6" class="text-center">
           <label class="" for=""><b-button  size="sm" variant="light">Text : ></b-button></label>
          </b-col>

        <b-col cols="6" class="text-center">
          
          <input class="w-75 float-left text-center" placeholder="Enter Target" type="text" v-model="code1[1]"  value="">
        </b-col>
         
      </b-row>
<!-- ///////////////////////////////////////////////////////////////// -->
      <b-row class="justify-content-center ">

        <b-col cols="8" offset="4" class="text-center text-center text-lowercase text-success" text-variants="light">{{code1[2]}}
        </b-col>

         <b-col cols="6" class="text-center">
           <label class="" for=""><b-button size="sm" variant="light">Text : ></b-button></label>
          </b-col>

        <b-col cols="6" class="text-center">
          
          <input class="w-75 float-left text-center" placeholder="Enter Target" type="text" @keyup.enter="code3" v-model="code1[2]"  value="">
        </b-col>
         
      </b-row>
       
        <b-row class="justify-content-center mt-3">
         <b-col class="text-center">
           <b-button variant="danger"  @click="result">
            {{show ? 'C L E A R' : 'S T A R T'}}
           </b-button>
         </b-col>
       </b-row>
                                       
       <b-row class="justify-content-center mt-5">
         <b-col class="result_container text-center d-block">    
               <ul v-for="a in code1" :key="a">
               <ul v-for="b in code2" :key="b">
                 <ul v-for="c in code3" :key="c">
                      <li v-if="show" class=" result text-success">{{a}}{{b}}{{c}} </li>                 
                </ul>
               </ul>
             </ul>
             
         </b-col>
       </b-row>

      
   </b-container>
</div>
</template>

<script>
export default {
  name : 'services',
  data(){
    return{
       code1: ['','','','people'],
       code2: ['','@','jack','noway','kiss','ko','testing','apk','welcome','moon','sun','king','queen','mahar',';lkj','1234','power','iloveu','111','fury','monster','girl','lover'],
       code3: ['','123','1500','1234','silent','*&^%$','2468','!@#$%','stitch','pikachu','09','45678','98765','kirito','love','asdf','loney','happy'],
       show : false,
       read : false,
       a    : '',
       b    : '',
       c    : ''
    }
  },
  methods:{
    result(){
      if(this.code1[0] == ''){
        alert("Target should not be empty")
      }else if(this.code1[1] == ''){
        alert("At least two Target")
      }else if(this.code1[2] == ''){
        this.show = !this.show
      }else{
        this.show = !this.show;
      }
    }
}

}

</script>
<style lang="scss">
.servicesclass{
  background-image : url('https://hdwallpapersstores.com/wp-content/uploads/2018/09/The-art-of-coding-wallpaper-1024x640.jpg');
  background-attachment: fixed; 
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  display: block;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -1;
 

 .container{
   z-index: 1;
  .result_container{
    background: #000;
    left: 0;
     .result{
     list-style: none;
     left: -50px;
     white-space: nowrap;
    
   }
  }
 }
}
</style>