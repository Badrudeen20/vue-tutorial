<template>
    <nav class="navbar navbar-expand-lg px-2 navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <ul class="nav mr-auto">
            <li class="nav-item active">
                <router-link class="nav-link" to="/">Home</router-link> 
            </li>
            <!-- <li class="nav-item">
                <router-link  class="nav-link"  to="/about">About</router-link>
            </li> -->
            <li class="nav-item">
                <router-link  class="nav-link"  to="/product">Product</router-link>
            </li>
        </ul>
        <button type="button" class="btn btn-primary btn-sm">
           Done <span class="badge badge-light">{{ todo.taskComplete }}</span>
        </button>
    </nav>
</template>
<script>
import { useTaskStore } from '@/basic/store/pinia';
export default {
    name:'navbar-app',
    setup(){
        const todo = useTaskStore()
        return {
            todo
        }
    },

}

</script>