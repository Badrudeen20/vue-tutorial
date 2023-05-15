import { createApp } from 'vue'
// import { createPinia } from 'pinia'

/* ninja start */
     //import App from './basic/ninja/App.vue'

/* option start */
   // import App from './basic/option/App.vue'
    
/* composition start */
     import App from './basic/composition/App.vue'
     
/* store start */
    // import store from './basic/store/pinia'
      import store from "./basic/store";

/* router start */ 
   import router from './basic/router'

/* interview start */
   // import App from "./interview/App"
const app = createApp(App)
// const pinia = createPinia()
app.use(router)
//app.use(pinia)
app.use(store)
app.mount('#app')
// import { Vue } from 'vue'
// Vue.config.productionTip=false
// new Vue({
//     render:h=>h(App)
// }).$mount('#app')