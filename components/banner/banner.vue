<template>
  <div class="relative">
    <!-- Banner Section -->
    <div class="relative w-full h-64 md:h-96 lg:h-[500px]">
      <!-- Banner Image -->
      <img src="/images/banner.jpg" alt="Banner" class="w-full h-64 md:h-96 lg:h-[500px] object-cover" />

      <!-- Overlay Text & Search -->
      <div class="absolute inset-0 flex flex-col items-center pt-10 md:pt-20 bg-black/30">
        <h1 class="text-2xl md:text-4xl font-bold text-white mb-2 text-center">
          Book Bus Tickets Online in Cambodia
        </h1>
        <p class="text-base md:text-xl text-white mb-8 text-center">
          World's largest bus booking platform
        </p>
        <div class="mt-1  px-2">
          <Search />
        </div>
      </div>
      <!-- Trading Card Floating -->
      <div class="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10 w-full max-w-4xl px-2">
        <TradingCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import Search from '@/components/banner/search.vue'
import TradingCard from '@/components/tranding_card.vue'
</script>