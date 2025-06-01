<script setup lang="ts">
import { appName } from '@/constants'

useHead({
  title: appName,
})
</script>

<template>
  <div>
    <NuxtPage />
    <Footer />
  </div>
</template>

<style>
html.dark {
  color-scheme: dark;
}
</style>
