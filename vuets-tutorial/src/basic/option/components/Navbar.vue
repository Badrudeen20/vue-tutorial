<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
        <ul class="nav mr-auto">
            <li class="nav-item active">
                <router-link class="nav-link" to="/">Home</router-link> 
            </li>
            <li class="nav-item">
                <router-link  class="nav-link"  to="/about">About</router-link>
            </li>
        </ul>
    </nav>
</template>
   
   <script lang="ts">
   import { Vue } from 'vue-class-component';

   export default class Navbar extends Vue {
     
   }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->

   