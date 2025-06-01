<script setup lang="ts">
const { data, pending, error } = await useFetch('/api/hello')
const router = useRouter()
const name = ref('')
const time = useTimeAgo(() => data.value?.startTime || 0)

function to() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div class="px-4 pb-4 pt-10 text-center">
    <img class="inline-block h-18 w-18" src="/nuxt.svg">
    <h1 class="px-4 text-4xl font-bold">
      Welcome to Nuxt 3
    </h1>
    <div>
      <input
        v-model="name"
        class="mt-4 border rounded p-2 text-center"
        placeholder="What's your name"
        @keydown.enter="to"
      >
    </div>
    <button class="my-4 btn" :disabled="!name" @click="to">
      Go
    </button>
    <ClientOnly>
      <div class="text-gray-600">
        <div v-if="pending">
          Loading...
        </div>
        <div v-else-if="error">
          Error: {{ error }}
        </div>
        <div v-else>
          {{ `${time} ${data?.message}` }}
        </div>
      </div>
      <template #fallback>
        <div class="animate-pulse text-gray-600 italic">
          Loading...
        </div>
      </template>
    </ClientOnly>
  </div>
</template>
