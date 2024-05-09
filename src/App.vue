<script setup lang="ts">
import { RouterView } from 'vue-router'
import OweraNav from './components/OweraNav.vue'
</script>

<template>
  <header>
    <OweraNav />
  </header>

  <RouterView />
</template>
