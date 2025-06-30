<template>
  <div class="bg-white px-6 py-4 rounded-2xl shadow-lg flex flex-row lg:flex-row items-center gap-4 max-w-6xl mx-auto">
    <!-- From -->
    <div class="flex items-center gap-3 px-4 py-3 flex-1 border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-auto">
      <div class="text-gray-400">
        <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      </div>
      <div class="flex flex-col flex-1">
        <label class="text-sm font-medium text-gray-600 mb-1">From</label>
        <select 
          v-model="searchForm.from" 
          class="
          text-gray-800 bg-transparent border-none outline-none cursor-pointer w-full"
        >
          <option value="">Select departure city</option>
          <option v-for="city in cambodianCities" :key="city.value" :value="city.value">
            {{ city.label }}
          </option>
        </select>
      </div>
    </div>

    <!-- Swap Button -->
    <div class="px-2 order-3 lg:order-2">
      <button 
        @click="swapCities"
        class="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
        </svg>
      </button>
    </div>

    <!-- To -->
    <div class="flex items-center gap-3 px-4 py-3 flex-1 border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-auto order-2 lg:order-3">
      <div class="text-gray-400">
        <svg class="w-6 h-6  text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      </div>
      <div class="flex flex-col flex-1">
        <label class="text-sm font-medium text-gray-600 mb-1">To</label>
        <select 
          v-model="searchForm.to" 
          class="
          text-gray-800 bg-transparent border-none outline-none cursor-pointer w-full"
        >
          <option value="">Select destination city</option>
          <option v-for="city in cambodianCities" :key="city.value" :value="city.value">
            {{ city.label }}
          </option>
        </select>
      </div>
    </div>

    <!-- Date -->
    <div class="flex items-center gap-3 px-4 py-3 flex-1 border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-auto order-4">
      <div class="text-gray-400">
        <svg class="w-6 h-6 text-blue-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
      </div>
      <div class="flex flex-col flex-1">
        <label class="text-sm font-medium text-gray-600 mb-1">Departure Date</label>
        <input
          v-model="searchForm.departureDate"
          type="date"
          :min="today"
          class="
          text-gray-800 bg-transparent border-none outline-none cursor-pointer w-full"
        />
      </div>
    </div>

    <!-- Return Date -->
    <div class="flex items-center gap-3 px-4 py-3 flex-1 border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-auto order-5">
      <div class="text-gray-400">
        <svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
      </div>
      <div class="flex flex-col flex-1">
        <label class="text-sm font-medium text-gray-600 mb-1">Return Date</label>
        <input
          v-model="searchForm.returnDate"
          type="date"
          :min="searchForm.departureDate || today"
          class="
          text-gray-800 bg-transparent border-none outline-none cursor-pointer w-full"
          placeholder="Optional"
        />
      </div>
    </div>

    <!-- Search Button -->
    <div class="bg-red-500 hover:bg-red-600 rounded-xl flex items-center justify-center transition-colors duration-200 order-6">
      <button 
        @click="searchBuses"
        :disabled="!canSearch"
        class="text-white font-bold px-6 py-4 rounded-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        SEARCH
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Form data
const searchForm = ref({
  from: '',
  to: '',
  departureDate: '',
  returnDate: ''
})

// Cambodian cities and provinces
const cambodianCities = [
  { value: 'phnom-penh', label: 'Phnom Penh' },
  { value: 'siem-reap', label: 'Siem Reap' },
  { value: 'battambang', label: 'Battambang' },
  { value: 'kampong-cham', label: 'Kampong Cham' },
  { value: 'kampong-speu', label: 'Kampong Speu' },
  { value: 'kampong-thom', label: 'Kampong Thom' },
  { value: 'kampot', label: 'Kampot' },
  { value: 'kandal', label: 'Kandal' },
  { value: 'kep', label: 'Kep' },
  { value: 'koh-kong', label: 'Koh Kong' },
  { value: 'kratie', label: 'Kratie' },
  { value: 'mondulkiri', label: 'Mondulkiri' },
  { value: 'oddar-meanchey', label: 'Oddar Meanchey' },
  { value: 'pailin', label: 'Pailin' },
  { value: 'preah-vihear', label: 'Preah Vihear' },
  { value: 'prey-veng', label: 'Prey Veng' },
  { value: 'pursat', label: 'Pursat' },
  { value: 'ratanakiri', label: 'Ratanakiri' },
  { value: 'sihanoukville', label: 'Sihanoukville' },
  { value: 'stung-treng', label: 'Stung Treng' },
  { value: 'svay-rieng', label: 'Svay Rieng' },
  { value: 'takeo', label: 'Takeo' },
  { value: 'banteay-meanchey', label: 'Banteay Meanchey' },
  { value: 'kampong-chhnang', label: 'Kampong Chhnang' },
  { value: 'preah-sihanouk', label: 'Preah Sihanouk' }
]

// Get today's date
const today = computed(() => {
  const date = new Date()
  return date.toISOString().split('T')[0]
})

// Check if search can be performed
const canSearch = computed(() => {
  return searchForm.value.from && 
         searchForm.value.to && 
         searchForm.value.departureDate &&
         searchForm.value.from !== searchForm.value.to
})

// Get city label by value
const getCityLabel = (value) => {
  const city = cambodianCities.find(city => city.value === value)
  return city ? city.label : value
}

// Swap cities function
const swapCities = () => {
  const temp = searchForm.value.from
  searchForm.value.from = searchForm.value.to
  searchForm.value.to = temp
}

// Search buses function - navigate to search results page
const searchBuses = () => {
  if (!canSearch.value) return
  
  // Navigate to search results page with query parameters
  router.push({
    path: '/search',
    query: {
      from: searchForm.value.from,
      fromLabel: getCityLabel(searchForm.value.from),
      to: searchForm.value.to,
      toLabel: getCityLabel(searchForm.value.to),
      departureDate: searchForm.value.departureDate,
      returnDate: searchForm.value.returnDate || ''
    }
  })
}

// Set default departure date to today
searchForm.value.departureDate = today.value
</script>

<style scoped>
/* Remove default date input styling */
input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
  cursor: pointer;
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
}

input[type="date"] {
  position: relative;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* Custom focus styles */
select:focus,
input:focus {
  outline: 2px solid #ef4444;
  outline-offset: 2px;
}
</style>
