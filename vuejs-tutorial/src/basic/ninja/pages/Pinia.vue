<template>

    <Navbar/>
    <div class="container">
        <form class="row" @submit.prevent="handleForm">
            <div class="col-10">
                <div class="form-group">
                    <label for="name">Create Task</label>
                    <input type="text" class="form-control" id="name" v-model="task" placeholder="Enter Name">
               </div>
            </div>
           <div class="col-2 mt-4">
            <button type="submit" class="btn btn-sm btn-primary">Create</button>
           </div>
        </form>
    </div>
    <ul class="list-group"> 
      <li class="list-group-item" :key="task.id" v-for="task in todo.tasks">
        <Card :task="task" />
      </li>
    </ul>
    </template>
    <script>
    import { useTaskStore } from '@/basic/store/pinia'
    import Navbar from "./components/Navbar.vue"
    import Card from "./components/Card.vue"
    import { ref } from 'vue'
    export default{
    setup(){
        const todo = useTaskStore()
        const task = ref('')
        const handleForm = ()=>{
             if(task.value.length > 0){
                 todo.addtask({
                    id:todo.totalTask+1,
                    title:task.value,
                    status:false
                 })
             }
             task.value=''
        }
        return {
            todo,
            task,
            handleForm
        }
    },
    components:{
       Navbar,
       Card
    }
    }
    </script>