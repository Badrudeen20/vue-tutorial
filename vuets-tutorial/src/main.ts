import { createApp } from 'vue'
import App from './basic/option/App.vue'
import router from './basic/option/router'
import store from './basic/option/store'

createApp(App).use(store).use(router).mount('#app')
