<template>
    <h1 v-if="$route.params.id">Param:{{ $route.params.id }}</h1>
    <h1 v-if="$route.query.name">Query:{{ $route.query.name }}</h1>
    <p>Reactive Counter: {{ store.count }}</p>
  </template>
  <script>
  import {store} from "../../store"
  export default {
    name:'param-app',
    data() {
    return {
      store
    }
  }
   
  }
  </script>