import { defineStore } from 'pinia'
export const useTaskStore = defineStore('counter', {
    state: () => ({
        tasks:[
            {id:1,title:'badr',status:false},
            {id:2,title:'chetan',status:true},
            {id:3,title:'arman',status:false}
        ],
    }),
    getters: {
         taskComplete(){
            return this.tasks.reduce((acc,cur)=>{
                return cur.status ? acc + 1:acc
            },0)
         },
         totalTask(){
            return this.tasks.length
         }
      },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
       addtask(task){
         this.tasks.push(task)
       }
    },
  })