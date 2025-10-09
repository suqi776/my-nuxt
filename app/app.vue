<script setup lang="ts">
import { appName } from '@/constants'

useHead({
  title: appName,
})
</script>

<template>
  <div v-auto-animate>
    <VitePwaManifest />
    <NuxtPage />
    <Footer />
  </div>
</template>

<style>
html.dark {
  color-scheme: dark;
}
</style>
