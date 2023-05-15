<template>
    <div class="row" v-if="data">
       <div class="col-sm-6 col-md-4" v-for="(pro,i) in data" :key="i">
           <div class="card m-2">
               <img class="card-img-top">
               <div class="card-body">
                   <h5 class="card-title">Card title</h5>
                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" class="btn btn-primary">Go somewhere</a>
               </div>
           </div>
       </div>
    </div>
    <div class="row" v-if="error">
       <div class="col-sm-6 col-md-4">
           Falled
       </div>
    </div>
   </template>
   <script setup>
   import {ref,onMounted } from "vue"
   const data = ref(null)
   const error = ref(null)
   onMounted( async () => {
       try{
           const product  = await fetch('https://fakestoreapi.com/products')
           const res = await product.json()
           data.value = res
           console.log(res)
       }catch(err){
           error.value = err
       }
   })
       
   //      console.log(data)
   
   // import axios from "axios";
   // import { onMounted, ref } from "vue";
   
   // export default {
   //   setup() {
   //     //   reactive state
   //     let all_trash = ref([]);
   
   //     onMounted(() => {
   //       // get data from api endpoint
   //       axios
   //         .get("https://fakestoreapi.com/products")
   //         .then((result) => {
   //           all_trash.value = result.data;
   //         })
   //         .catch((err) => {
   //           console.log(err.response);
   //         });
   //     });
   
   //     return {
   //       all_trash,
   //     };
   //   },
   // };
   </script>
   