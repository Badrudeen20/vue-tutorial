<template>
 <h1>directive</h1>   
 <div class="row">
    <div class="col-6 g-2">
        <div class="card ">
            <div class="card-body">
                <h5 class="card-title" v-text="msg"></h5>
                <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a> -->
            </div>
       </div>
    </div>
    <div class="col-6 g-2">
        <div class="card " >
            <div class="card-body">
                <h5 class="card-title" v-once>{{ msg }}</h5>
            </div>
       </div>
    </div>
    <div class="col-6 g-2">
        <div class="card " >
            <div class="card-body">
                <div v-html="html"></div>
            </div>
       </div>
    </div>
 </div>
</template>
<script>
 import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
   const msg = ref('Hello this is ...')
   const html = ref(`<button class="btn btn-primary btn-sm">${msg.value}</button>`)
    // expose to template and other options API hooks
    return {
      count,
      msg,
      html
    }
  },

  mounted() {
    console.log(this.count) // 0
  }
}
</script>