
import { createStore } from "vuex";
// import axios from "axios"
import card from "./modules/card"
import todos from "./modules/todo"
export default createStore({
  modules: {
      card,
      todos
  },
})