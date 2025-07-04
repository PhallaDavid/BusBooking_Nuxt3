<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <h1 class="flex items-center justify-center text-3xl text-gray-700 font-bold mt-8 mb-4">
      Offers
    </h1>

    <div class="w-full max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-3 px-4 py-8">
      <div
        v-for="(offer, idx) in offers"
        :key="offer.id || idx"
        @click="openModal(offer)"
        class="rounded shadow-lg transform hover:scale-105 transition cursor-pointer py-2 flex flex-col items-center gap-4 hover:shadow-2xl"
      >
        <div class="text-gray-500 pr-2 text-sm self-end w-full text-right">{{ formatDate(offer.valid_till) }}</div>
        <img
          :src="offer.image ? fullImageUrl(offer.image) : '/images/placeholder.png'"
          alt="Offer Image"
          class="w-full h-48 object-cover shadow rounded"
        />
        <div class="text-sm font-bold text-gray-700 text-center">{{ offer.title || offer.promotion || 'No Title' }}</div>
        <div class="text-gray-500 pr-2 text-sm self-end w-full text-right">Use code: {{ offer.code || 'N/A' }}</div>
      </div>
    </div>

    <div
      v-if="selectedOffer"
     class="fixed inset-0 bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50"
      @click.self="openModal(null)"
    >
      <div class="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        <button @click="openModal(null)" class="absolute top-2 right-5 text-gray-500 hover:text-red-500">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </button>
        <h2 class="text-2xl font-bold mb-4 text-center text-gray-800">{{ selectedOffer.title || selectedOffer.promotion }}</h2>
        <img
          :src="selectedOffer.image ? fullImageUrl(selectedOffer.image) : '/images/placeholder.png'"
          alt="Modal Image"
          class="w-full h-52 object-cover rounded mb-4"
        />
        <p class="text-gray-600 mb-2">🗓️ Valid Until: {{ formatDate(selectedOffer.valid_till) }}</p>
        <p class="text-gray-600 mb-2">🎁 Use Code: <span class="font-semibold">{{ selectedOffer.code || 'N/A' }}</span></p>
        <p class="text-gray-700 mt-4">
          {{ selectedOffer.conditions || 'No additional details available.' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const offers = ref([])
const selectedOffer = ref(null)

const openModal = (offer) => {
  selectedOffer.value = offer
}

const fullImageUrl = (filename) => {
  // Adjust this URL according to your backend serving images
  return `http://localhost:8000/images/${filename}`
}

const formatDate = (dateString) => {
  if (!dateString) return 'N/A'
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

const fetchOffers = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/offers')
    offers.value = response.data
  } catch (error) {
    console.error('Error fetching offers:', error)
  }
}

onMounted(() => {
  fetchOffers()
})
</script>
