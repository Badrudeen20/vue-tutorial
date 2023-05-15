import axios from "axios"

export default {
    state: {
     todos:[]
    },
    getters: {
       allList:(state)=>state.todos
    },
    mutations: {
      setTodos:(state,list)=>(state.todos=list),
      addTodos:(state,title)=>(state.todos.unshift(title)),
      deleteTodos:(state,id)=>(state.todos= state.todos.filter(list=>list.id !=id))
    },
    actions:{
        async fetchList({commit}){
           const res = await axios.get('https://fakestoreapi.com/products')
           console.log(res.data)
           commit('setTodos',res.data)
        },
        async addList({commit},title){
           const res = await axios.post('https://fakestoreapi.com/products',{title,complete:false})
           console.log(res.data)
           commit('addTodos',res.data)
        },
        async deleteList({commit},id){
           const res = await axios.get('https://fakestoreapi.com/products/'+id)
           console.log(res.data)
           commit('deleteTodos',id)
        }
        
    }
  }
  