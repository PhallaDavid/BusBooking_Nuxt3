<template>
  <div class="flex items-center pt-50 justify-center">
    <div class="w-[1230px] gap-8 flex flex-col">
      <p class="text-3xl font-bold text-gray-700">Partnered with</p>
      <div class="flex flex-row justify-between">
        <p class="text-3xl text-gray-700">200+ bus operators</p>
        <NuxtLink class="text-blue-500 font-medium px-3 sm:px-4 md:px-6 py-1 sm:py-2 border border-gray-300 rounded-full hover:bg-blue-50 transition-colors text-sm md:text-base"
          >View All</NuxtLink
        >
      </div>
      <div class="grid grid-cols-7 lg:grid-cols-2 gap-4">
        <div v-for="(image, index) in images" :key="index">
          <img :src="image" alt="Image" class="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const images = [
 "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",  
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/4.jpg",
 "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/4.jpg",
];
</script>
