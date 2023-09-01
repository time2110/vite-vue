import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const userStore = defineStore('user', () => {
    const name = ref('iwhao')
    const age = ref(18)
    const count = ref(1)
    const countDouble = computed(() => count.value * 2)
    function countAdd() {
        count.value++
    }
    return { name, age, count, countDouble, countAdd }
})