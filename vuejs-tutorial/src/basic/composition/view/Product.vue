<template>
<div class="container">
  <Suspense @pending="onPending" @resolve="onResolved" @fallback="onFallback">
    <template #default>
        <Item />
    </template>
    <template #fallback>
       <span>Loading...</span>
    </template>
  </Suspense>
</div>
</template>
<script setup>
import Item from "./components/Item.vue"
function onPending(){
      console.log('loading...')
}
function onResolved(){
    console.log('resolved...')
}
function onFallback(){
    console.log('fallback...')
}
</script>
