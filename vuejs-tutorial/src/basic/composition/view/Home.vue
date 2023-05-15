<template>
  <div class="mx-1 d-flex justify-content-between">
    <h2>Home</h2>
    <button class="btn btn-sm btn-primary" @click="note=!note">Note</button>
  </div>
  <AsynCom v-if="note" />
  <div class="container my-1">
   <User name="badru" />
  </div>
</template>
<script setup>
import {defineAsyncComponent, ref,provide} from "vue"
// import Todo from "./components/todos/Todo.vue"
 import User from "./components/providerInjector/User.vue"
const note = ref(false)
provide("admin","Badru")
const AsynCom = defineAsyncComponent(()=>
 import('./components/todos/Todo.vue')
)
// const AsynUser = defineAsyncComponent(()=>
//  import('./components/providerInjector/User.vue')
// )
</script>
