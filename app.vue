<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './layouts/header.vue'
import Footer from './layouts/footer.vue'
</script>
f