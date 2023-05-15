<template>
   
    <div class="container">
       
        <div class="d-flex justify-content-between">
            <h2>About</h2>
            <button class="btn btn-sm btn-danger" @click="toggle=!toggle">Switch</button>
            <!-- <button class="btn btn-sm btn-danger" @click="handleCard()">Switch</button> -->
        </div>

        <AsynCom v-if="toggle" />
    </div>
</template>
<script setup>
// import Card from "./components/Card.vue"
import {defineAsyncComponent, ref} from "vue"
// import Loading from "./components/Loading.vue"
// import Error from "./components/Error.vue"
const toggle = ref(false)
const AsynCom = defineAsyncComponent(()=>
import('./components/Card.vue')
)
// const AsynCom = defineAsyncComponent({
// loader:()=>import('./components/Card.vue'),
// loadingComponent:Loading,
// delay:2000,
// errorComponent:Error,
// // timeout:10
// })
// function handleCard(){
//      toggle.value = !toggle.value
// }
</script>
