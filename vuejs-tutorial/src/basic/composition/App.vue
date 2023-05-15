<script setup>
 import Navbar from './components/Navbar.vue'
//  import Child from './components/Child.vue'
//  import { onMounted, ref,onUpdated  } from 'vue';
//  const count = ref(0)
//  onMounted(() => {
//  console.log('df')
// })
// onUpdated(() => {
//   console.log(count.value)
// })
</script>
<template>
 <!-- <button type="button" class="btn btn-primary btn-sm" @click="count++">
  Count <span class="badge badge-light">{{ count }}</span>
</button>
<Child name="arman" /> -->
  <Navbar />
  <router-view/>
</template>




