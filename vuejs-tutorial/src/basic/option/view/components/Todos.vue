<template>
    <div class="container">
        <!-- <router-link  class="btn btn-sm btn-primary"  to="/create">Add</router-link>
        <div class="row">
            <div class="col-sm-6 col-md-4" :key="todo.id" v-for="todo in allList">
                <div class="card m-2">
                    <img class="card-img-top w-50" :src="todo.image">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div> -->
  
      <div class="card">
          <div class="card-body">
               <form class="row" @submit.prevent="submit">
                    <div class="col-10">
                        <div class="form-group">
                            <label for="name">Create Note</label>
                            <input type="text" v-model="form.title" class="form-control"  id="name" placeholder="Enter Name">
                        </div>
                    </div>
                    <div class="col-2 mt-4">
                    <button type="submit" class="btn btn-sm btn-primary">Create</button>
                    </div>
                </form>
                <ul class="list-group row m-1">
                    <li class="list-group-item col-10 d-flex justify-content-between" :key="todo.id" v-for="todo in allList">
                      {{ todo.id }}
                      <span class="btn btn-danger" @click="deleteList(todo.id)">Del</span>
                    </li>
                   
                </ul>
          </div>
     </div>
    </div>
  </template>
  <script>
import { mapGetters,mapActions} from 'vuex';
  export default {
  name: 'todo-app',
  data() {
    return {
      form: {
         title:''
      }
    }
  },
  computed:mapGetters(['allList']),
  methods:{
    ...mapActions(['fetchList','addList','deleteList']),
    async submit() {
      this.addList(this.form.title)
      this.form.title = ''
    },
   
  },
 
  created() {
    this.fetchList()
  },
}
  </script>