<template>
    <button type="button" :style="{ background: toggle ? 'red':'blue'}" class="btn btn-primary btn-sm" @click="toggle=!toggle">
         <span class="badge badge-light">{{ name }}</span>
    </button>
</template>
<script setup>
import { onUpdated,defineProps, ref } from 'vue';
const toggle = ref(true)
const props = defineProps(['name'])
onUpdated(() => {
  console.log(props)
})
</script>