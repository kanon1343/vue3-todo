import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed((val) => count.value * val)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
