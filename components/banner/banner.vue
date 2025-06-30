<template>
  <div class="relative">
    <!-- Banner Section -->
    <div class="relative w-full h-[500px]">
      <!-- Banner Image -->
      <img src="/images/banner.jpg" alt="Banner" class="w-full h-[500px] object-cover" />

      <!-- Overlay Text & Search -->
      <div class="absolute inset-0 flex flex-col items-center pt-20  bg-black/30">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          Book Bus Tickets Online in Cambodia
        </h1>
        <p class="text-lg md:text-xl text-white mb-8 text-center">
          World's largest bus booking platform
        </p>
        <div class="mt-1">
          <Search />
        </div>
      </div>
        <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" style="top: 100%;">
      <TradingCard />
    </div>
    </div>
    <div class="h-64"></div>
  </div>
</template>

<script setup>
import Search from '@/components/banner/search.vue'
import TradingCard from '@/components/tranding_card.vue'
</script>

<style scoped>
.trading-card-overlay {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
</style>