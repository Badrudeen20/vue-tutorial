<template>
  <div class="container">
    <div class="row">
        <div class="col-6">
            <Time name="second" :value="sec" />
        </div>
        <div class="col-6">
            <Time name="minute" :value="min" />
        </div>
    </div>
  </div>
</template>
<script>
import Time from './components/Time.vue';

export default {
     name:"app-page",
     data(){
         return {
             sec:1,
             min:0
         }
     },
     components:{
        Time
     },
     created(){
        setInterval(this.play, 100);
     },
     methods:{
        play(){
            if(this.sec > 59){
                this.sec = 1
                if(this.min > 59){
                    this.min = 1
                }else{
                    this.min++
                }
            }
           console.log(this.sec++)
         }
     },
    //  watch: {
        
    //   sec:function(){
    //     console.log(this.min)
    //      this.play()
    //   }
    // }
}
</script>