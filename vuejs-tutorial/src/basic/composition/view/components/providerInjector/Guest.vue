<template>
   <div>
    <button type="button" class="btn btn-primary btn-sm">
     {{ admin }} <span class="badge badge-light">9</span>
    </button>
   </div>
</template>
<script setup>
import { defineProps,inject } from 'vue';
//const admin =  inject('admin','defaultValue')
const admin =  inject('admin',()=>'default',true)
const props = defineProps(['name']);  
console.log(props)
</script>