<template>
  <div class="max-w-screen-xl mx-auto grid grid-`rows`-1 sm:grid-cols-2 md:grid-cols-3 pt-20 gap-14 p-6">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class=" border-1 border-gray-300 rounded-2xl  transition-shadow duration-300 p-6  flex flex-col items-center text-center"
    >
      <img
        v-if="card.image"
        :src="card.image"
        alt="Card Image"
        class="w-30 h-30  mb-4"
      />
      <h2 class="text-xl font-bold text-gray-800 mb-2">{{ card.title }}</h2>
      <p class="text-gray-600">{{ card.description }}</p>
    </div>
  </div>
</template>

<script setup>
const cards = [
  { title: '56 Million+', image: "/images/online.png", description: 'happy customers globally' },
  { title: 'Over 3500', image: "/images/delivery-car.png", description: 'bus companies worldwide' },
  { title: '200,000+', image: "/images/bus.png", description: 'seats booked everyday' },
]
</script>
