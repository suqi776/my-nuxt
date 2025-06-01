<script setup lang="ts">
const user = useUserStore()
const route = useRoute<'hi-name'>()
const name = route.params.name

watchEffect(() => {
  user.setName(name as string)
})
</script>

<template>
  <div class="px-4 pb-4 pt-10 text-center">
    <div class="i-twemoji-waving-hand inline-block h-16 w-16 animate-shake-x animate-duration-5000" />
    <h1 class="px-4 pb-2 text-4xl font-bold">
      Hi, {{ name }}
    </h1>
    <NuxtLink to="/" class="my-4 btn">
      Back
    </NuxtLink>
  </div>
</template>
