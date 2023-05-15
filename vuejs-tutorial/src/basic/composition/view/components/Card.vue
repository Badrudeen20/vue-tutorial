<template>
  
  <div class="row">
    <div class="col-sm-6 col-md-4 m-2" v-for="(user,i) in users" :key="i">
      <div class="card">
        <img class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ user }}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          
        </div>
      </div>
    </div>

  </div>

  
</template>
<script setup>
import {ref} from "vue"
const users = ref(['badru','chetan','anam','sonam'])

</script>