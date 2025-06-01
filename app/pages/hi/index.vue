<script setup lang="ts">
const { data, pending, error } = await useFetch('/api/hello')
</script>

<template>
  <div class="px-4 pb-4 pt-10 text-center">
    <div class="i-twemoji-waving-hand inline-block h-16 w-16 animate-shake-x animate-duration-5000 text-cyan" />
    <h1 class="px-4 text-4xl font-bold">
      {{ data?.message }}
    </h1>
    <div v-if="pending">
      Loading...
    </div>
    <div v-else-if="error">
      Error: {{ error }}
    </div>
    <NuxtLink to="/" class="my-4 btn">
      Back
    </NuxtLink>
  </div>
</template>
