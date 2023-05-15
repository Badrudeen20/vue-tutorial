<template>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-4" :key="entry.API" v-for="entry in cardData">
            <Card>
              <template #header>
                <h5>{{ entry.API }}</h5>
              </template>
              <template #des="slotProps">
                <h6 class="card-subtitle mb-2 text-muted">{{ entry.Category }}</h6>
                <span>{{ slotProps.example  }}</span>
                <p class="card-text">{{ entry.Description }}</p>
                
                  <router-link class="btn btn-sm btn-primary"  :to="entry.Link">Link</router-link>
               
                
              </template>
            </Card>
          </div>
        </div>
      </div>
</template>
  
  <script>
  import Card from '../components/Card.vue';
  import myIntro from '../mixin/Intro';
  export default  {
    name: 'home-page',
    mixins: [myIntro],
    components: {
      Card
    },
    computed: {
    cardData() {
      return this.$store.getters.cardData;
    },
  },
    
  }
  </script>
  