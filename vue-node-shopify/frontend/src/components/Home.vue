<script setup>
import useSong from "@/composables/songApi";
import { onMounted } from "vue";
const { getAllSong,songData } = useSong();
onMounted(getAllSong);
console.log(songData)
</script>

<template>
  <div>sdv</div>
  
</template>