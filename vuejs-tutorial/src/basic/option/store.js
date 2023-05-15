import { reactive } from 'vue'

export const store = reactive({
  count: 0,
  increment() {
    this.count++
  }
})

// import { ref } from 'vue'

// // global state, created in module scope
// const globalCount = ref(1)

// export function useCount() {
//   // local state, created per-component
//   const localCount = ref(1)

//   return {
//     globalCount,
//     localCount
//   }
// }