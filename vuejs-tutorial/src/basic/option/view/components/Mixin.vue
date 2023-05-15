<template>
  <h1>Mixin</h1>
  <button class="btn btn-primary" @click="store.count++">+</button>
</template>
<script>
import myIntro from "@/basic/option/mixin/Intro"
import {store} from "../../store"
export default {
  name:'mixin-app',
  data(){
     return {
      store
     }
  },
  mixins:[myIntro],
  created: function () {
      this.hello()
    },
    methods: {
      hello: function () {
        console.log('hello from com!')
      }
    }
}
</script>