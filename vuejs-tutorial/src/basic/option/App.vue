<template>
  <Navbar />
  <router-view/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
 import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
 
  mounted() {
    //console.log(this.cardData);
  },
}
</script>

