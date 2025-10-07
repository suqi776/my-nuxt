<script setup lang="ts">
import { version as nuxtVersion } from 'nuxt/package.json'
import { version as vueVersion } from 'vue'

const { data, error } = await useFetch('/api/hello')
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
    <img class="h-18 w-18 inline-block" src="/nuxt.svg">
    <h1 class="text-4xl font-bold px-4">
      Welcome to Nuxt {{ nuxtVersion.substring(0, 1) }} + Vue {{ vueVersion.substring(0, 1) }}
    </h1>
    <div>
      <input
        v-model="name"
        class="mt-4 p-2 text-center border rounded"
        placeholder="What's your name"
        @keydown.enter="to"
      >
    </div>
    <button class="my-4 btn" :disabled="!name" @click="to">
      Go
    </button>
    <ClientOnly>
      <Suspense>
        <div class="text-gray-600">
          <div v-if="error">
            Error: {{ error }}
          </div>
          <div v-else>
            {{ `${time} ${data?.message}` }}
          </div>
        </div>
      </Suspense>
      <template #fallback>
        <div class="text-gray-600 italic animate-pulse">
          Loading...
        </div>
      </template>
    </ClientOnly>
  </div>
</template>
