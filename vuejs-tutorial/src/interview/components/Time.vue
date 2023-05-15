<template>
 <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{ name }}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">
      {{ value }}
    </p>
   
  </div>
</div>
</template>
<script>
 export default{
     name:'sec-page',
     props:['name','value']
 }
</script>