<template>
    <div class="card m-1" >
        <div class="card-header">
            <slot name="header"  />
        </div>
        <div class="card-body" >
           
            <slot name="des" v-bind:example="example" />
            
        </div>
    </div>
</template>
   
<script>

export default {
  name: 'card-app',
  data() {                                                                                          
    return {                                                                                        
     example: 'just some data...'                                                                  
    }                                                                                               
  },
 
}
</script>

