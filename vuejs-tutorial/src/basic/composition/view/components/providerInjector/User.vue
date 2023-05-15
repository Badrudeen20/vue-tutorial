<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{name }}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Guest name="Notify" />
      </div>
    </div>
</template>
<script setup>
import Guest from "./Guest.vue"
 import { defineProps } from 'vue';
// const admin =  inject('admin')
const props = defineProps(['name']);    
console.log(props);
    

</script>