import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const name = ref('')

  const setName = (newName: string) => {
    name.value = newName
  }

  return {
    name,
    setName,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
