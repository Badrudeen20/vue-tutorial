<template>
    <nav class="navbar navbar-expand-lg px-2 navbar-light bg-light">
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
   
<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'nav-bar',
  // components: {
  //   HelloWorld
  // }
}
</script>

