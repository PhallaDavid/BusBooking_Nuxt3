<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Search Form Section -->
    <div class="bg-white border-b">
      <div class="max-w-7xl mx-auto px-6 py-6">
        <div class="bg-white px-6 py-4 rounded-2xl shadow-lg flex flex-row lg:flex-row items-center gap-4">
          <!-- From -->
          <div class="flex items-center gap-3 px-4 py-3 flex-1 border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-auto">
            <div class="text-gray-400">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div class="flex flex-col flex-1">
              <label class="text-sm font-medium text-gray-600 mb-1">From</label>
              <select v-model="searchForm.from" class="text-lg font-semibold text-gray-800 bg-transparent border-none outline-none cursor-pointer w-full">
                <option value="">Select departure city</option>
                <option v-for="city in cambodianCities" :key="city.value" :value="city.value">{{ city.label }}</option>
              </select>
            </div>
          </div>

          <!-- Swap Button -->
          <div class="px-2 order-3 lg:order-2">
            <button @click="swapCities" class="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
              </svg>
            </button>
          </div>

          <!-- To -->
          <div class="flex items-center gap-3 px-4 py-3 flex-1 border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-auto order-2 lg:order-3">
            <div class="text-gray-400">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div class="flex flex-col flex-1">
              <label class="text-sm font-medium text-gray-600 mb-1">To</label>
              <select v-model="searchForm.to" class="text-lg font-semibold text-gray-800 bg-transparent border-none outline-none cursor-pointer w-full">
                <option value="">Select destination city</option>
                <option v-for="city in cambodianCities" :key="city.value" :value="city.value">{{ city.label }}</option>
              </select>
            </div>
          </div>

          <!-- Date -->
          <div class="flex items-center gap-3 px-4 py-3 flex-1 border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-auto order-4">
            <div class="text-gray-400">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <div class="flex flex-col flex-1">
              <label class="text-sm font-medium text-gray-600 mb-1">Departure Date</label>
              <input v-model="searchForm.departureDate" type="date" :min="today" class="text-lg font-semibold text-gray-800 bg-transparent border-none outline-none cursor-pointer w-full"/>
            </div>
          </div>

          <!-- Return Date -->
          <div class="flex items-center gap-3 px-4 py-3 flex-1 border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-auto order-5">
            <div class="text-gray-400">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <div class="flex flex-col flex-1">
              <label class="text-sm font-medium text-gray-600 mb-1">Return Date</label>
              <input v-model="searchForm.returnDate" type="date" :min="searchForm.departureDate || today" class="text-lg font-semibold text-gray-800 bg-transparent border-none outline-none cursor-pointer w-full"/>
            </div>
          </div>

          <!-- Search Button -->
          <div class="bg-red-500 hover:bg-red-600 rounded-xl flex items-center justify-center transition-colors duration-200 order-6">
            <button @click="performSearch" :disabled="!canSearch" class="text-white font-bold px-6 py-4 rounded-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed">
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-6">
      <div class="flex flex  gap-6">
        <!-- Filters Sidebar -->
        <div class="w-64 flex-shrink-0">
          <div class="bg-white rounded-lg shadow-sm p-4 sticky top-6">
            <h3 class="font-semibold text-gray-800 mb-4">FILTERS</h3>
            
            <!-- Red Deals Filter -->
            <div class="mb-6">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" v-model="filters.redDeals" class="rounded border-gray-300">
                <span class="text-sm text-gray-700">Red Deals (13)</span>
              </label>
            </div>

            <!-- Cancellable Filter -->
            <div class="mb-6">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" v-model="filters.cancellable" class="rounded border-gray-300">
                <span class="text-sm text-gray-700">Cancellable (2)</span>
              </label>
            </div>

            <!-- M-ticket Filter -->
            <div class="mb-6">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" v-model="filters.mTicket" class="rounded border-gray-300">
                <span class="text-sm text-gray-700">M-ticket (43)</span>
              </label>
            </div>

            <!-- Departure Time -->
            <div class="mb-6">
              <h4 class="font-medium text-gray-800 mb-3">DEPARTURE TIME</h4>
              <div class="space-y-2">
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" v-model="filters.before6am" class="rounded border-gray-300">
                  <span class="text-gray-700">Before 6 am (0)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" v-model="filters.morning" class="rounded border-gray-300">
                  <span class="text-gray-700">6 am to 12 pm (0)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" v-model="filters.afternoon" class="rounded border-gray-300">
                  <span class="text-gray-700">12 pm to 6 pm (2)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" v-model="filters.evening" class="rounded border-gray-300">
                  <span class="text-gray-700">After 6 pm (41)</span>
                </label>
              </div>
            </div>

            <!-- Bus Types -->
            <div class="mb-6">
              <h4 class="font-medium text-gray-800 mb-3">BUS TYPES</h4>
              <div class="space-y-2">
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" v-model="filters.minivan" class="rounded border-gray-300">
                  <span class="text-gray-700">Minivan (14)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="checkbox" v-model="filters.hotelBus" class="rounded border-gray-300">
                  <span class="text-gray-700">Hotel Bus (Night Bus) (29)</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1">
          <!-- Promotional Banners -->
          <div class="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div class="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-4 text-white">
              <div class="text-sm font-medium">Chance to win</div>
              <div class="text-lg font-bold">prizes with eBooking</div>
            </div>
            <div class="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-4 text-white">
              <div class="text-sm">UP TO</div>
              <div class="text-2xl font-bold">50% OFF</div>
              <div class="text-xs">BLOCKBUSTER DEALS FROM BUS OPERATORS</div>
            </div>
            <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-4 text-white">
              <div class="text-sm">UP TO 10% OFF ON</div>
              <div class="text-lg font-bold">TOP RATED BUSES</div>
            </div>
            <div class="bg-gradient-to-r from-red-500 to-pink-500 rounded-lg p-4 text-white">
              <div class="text-lg font-bold">redDeals</div>
              <div class="text-sm">EXCLUSIVE DEALS FOR YOU</div>
            </div>
          </div>

          <!-- Results Header -->
          <div class="flex items-center justify-between mb-6">
            <div class="text-lg font-semibold text-gray-800">
              {{ filteredResults.length }} Buses found
            </div>
            <div class="flex items-center gap-4">
              <span class="text-sm font-medium text-gray-700">SORT BY:</span>
              <div class="flex gap-2">
                <button @click="sortBy = 'departure'" :class="sortBy === 'departure' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'" class="px-3 py-1 rounded text-sm">Departure</button>
                <button @click="sortBy = 'duration'" :class="sortBy === 'duration' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'" class="px-3 py-1 rounded text-sm">Duration</button>
                <button @click="sortBy = 'arrival'" :class="sortBy === 'arrival' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'" class="px-3 py-1 rounded text-sm">Arrival</button>
                <button @click="sortBy = 'rating'" :class="sortBy === 'rating' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'" class="px-3 py-1 rounded text-sm">Ratings</button>
                <button @click="sortBy = 'price'" :class="sortBy === 'price' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'" class="px-3 py-1 rounded text-sm">Fare</button>
                <button @click="sortBy = 'seats'" :class="sortBy === 'seats' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'" class="px-3 py-1 rounded text-sm">Seats Available</button>
              </div>
            </div>
          </div>

          <!-- Bus Results -->
          <div class="space-y-4">
            <div v-for="bus in filteredResults" :key="bus.id" class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div class="flex items-center justify-between">
                <!-- Bus Info -->
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span class="text-yellow-600 font-bold text-sm">{{ bus.operator.charAt(0) }}</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-800">{{ bus.operator }}</h3>
                    <div class="text-sm text-gray-600">{{ bus.busType }}</div>
                  </div>
                </div>

                <!-- Journey Info -->
                <div class="flex items-center gap-8">
                  <div class="text-center">
                    <div class="text-2xl font-bold text-gray-800">{{ bus.departureTime }}</div>
                    <div class="text-sm text-gray-600">{{ bus.departurePoint }}</div>
                  </div>
                  <div class="text-center">
                    <div class="text-sm text-gray-600">{{ bus.duration }}</div>
                  </div>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-gray-800">{{ bus.arrivalTime }}</div>
                    <div class="text-sm text-gray-600">{{ bus.arrivalPoint }}</div>
                  </div>
                </div>

                <!-- Rating & Seats -->
                <div class="text-center">
                  <div class="flex items-center gap-1 mb-1">
                    <span class="bg-green-500 text-white px-2 py-1 rounded text-sm">★ {{ bus.rating }}</span>
                  </div>
                  <div class="text-sm text-gray-600">{{ bus.seatsAvailable }} seats available</div>
                </div>

                <!-- Price & Action -->
                <div class="text-right">
                  <div class="text-2xl font-bold text-gray-800">USD {{ bus.price }}</div>
                  <button @click="selectSeats(bus)" class="mt-2 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                    VIEW SEATS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Search parameters
const searchSummary = ref({
  from: 'Phnom Penh',
  to: 'Siem Reap',
  date: '2025-01-15'
})

// Filters and sorting
const sortBy = ref('price')
const filterBusType = ref('')

// Sample bus data
const searchResults = ref([
  {
    id: 1,
    operator: 'Mekong Express',
    busType: 'VIP Sleeper',
    departureTime: '08:00',
    arrivalTime: '14:30',
    duration: '6h 30m',
    price: 15,
    seatsAvailable: 12,
    rating: 4.5,
    departurePoint: 'Central Bus Station',
    arrivalPoint: 'Siem Reap Bus Terminal',
    amenities: ['WiFi', 'AC', 'Reclining Seats', 'Blanket', 'Water']
  },
  {
    id: 2,
    operator: 'Giant Ibis',
    busType: 'Premium',
    departureTime: '09:30',
    arrivalTime: '16:00',
    duration: '6h 30m',
    price: 18,
    seatsAvailable: 8,
    rating: 4.7,
    departurePoint: 'Giant Ibis Station',
    arrivalPoint: 'Giant Ibis Siem Reap',
    amenities: ['WiFi', 'AC', 'USB Charging', 'Snacks', 'Water']
  },
  {
    id: 3,
    operator: 'Sorya Transport',
    busType: 'Standard AC',
    departureTime: '11:00',
    arrivalTime: '17:30',
    duration: '6h 30m',
    price: 12,
    seatsAvailable: 20,
    rating: 4.2,
    departurePoint: 'Sorya Bus Station',
    arrivalPoint: 'Siem Reap Central',
    amenities: ['AC', 'Comfortable Seats', 'Water']
  },
  {
    id: 4,
    operator: 'Capitol Tour',
    busType: 'VIP',
    departureTime: '14:00',
    arrivalTime: '20:30',
    duration: '6h 30m',
    price: 16,
    seatsAvailable: 5,
    rating: 4.4,
    departurePoint: 'Capitol Bus Terminal',
    arrivalPoint: 'Siem Reap Bus Park',
    amenities: ['WiFi', 'AC', 'Reclining Seats', 'Entertainment', 'Water']
  },
  {
    id: 5,
    operator: 'Virak Buntham',
    busType: 'Premium',
    departureTime: '16:30',
    arrivalTime: '23:00',
    duration: '6h 30m',
    price: 17,
    seatsAvailable: 15,
    rating: 4.3,
    departurePoint: 'Virak Buntham Station',
    arrivalPoint: 'Siem Reap Terminal',
    amenities: ['WiFi', 'AC', 'USB Charging', 'Blanket', 'Water']
  }
])

// Computed filtered results
const filteredResults = computed(() => {
  let results = [...searchResults.value]
  
  // Filter by bus type
  if (filterBusType.value) {
    results = results.filter(bus => bus.busType === filterBusType.value)
  }
  
  // Sort results
  results.sort((a, b) => {
    switch (sortBy.value) {
      case 'price':
        return a.price - b.price
      case 'departure':
        return a.departureTime.localeCompare(b.departureTime)
      case 'duration':
        return a.duration.localeCompare(b.duration)
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })
  
  return results
})

// Methods
const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const modifySearch = () => {
  router.push('/')
}

const selectSeats = (bus) => {
  // Navigate to seat selection page with bus and search details
  router.push({
    path: '/seat-selection',
    query: {
      busId: bus.id,
      operator: bus.operator,
      busType: bus.busType,
      departureTime: bus.departureTime,
      arrivalTime: bus.arrivalTime,
      duration: bus.duration,
      price: bus.price,
      from: searchForm.value.from,
      fromLabel: getCityLabel(searchForm.value.from),
      to: searchForm.value.to,
      toLabel: getCityLabel(searchForm.value.to),
      departureDate: searchForm.value.departureDate,
      returnDate: searchForm.value.returnDate || ''
    }
  })
}

const viewDetails = (bus) => {
  // Show bus details modal or navigate to details page
  console.log('View details for:', bus.operator)
}

const sortResults = () => {
  // Sorting is handled by computed property
}

const filterResults = () => {
  // Filtering is handled by computed property
}

const clearFilters = () => {
  filterBusType.value = ''
  sortBy.value = 'price'
}

// Add after the existing reactive variables
const searchForm = ref({
  from: '',
  to: '',
  departureDate: '',
  returnDate: ''
})

// Add this computed property
const canSearch = computed(() => {
  return searchForm.value.from && 
         searchForm.value.to && 
         searchForm.value.departureDate &&
         searchForm.value.from !== searchForm.value.to
})

// Add these methods
const swapCities = () => {
  const temp = searchForm.value.from
  searchForm.value.from = searchForm.value.to
  searchForm.value.to = temp
}

const performSearch = () => {
  if (!canSearch.value) return
  
  // Update search summary
  searchSummary.value = {
    from: searchForm.value.from,
    fromLabel: getCityLabel(searchForm.value.from),
    to: searchForm.value.to,
    toLabel: getCityLabel(searchForm.value.to),
    departureDate: searchForm.value.departureDate,
    returnDate: searchForm.value.returnDate
  }
  
  // Update URL
  router.replace({
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

const filters = ref({
  redDeals: false,
  cancellable: false,
  mTicket: false,
  before6am: false,
  morning: false,
  afternoon: false,
  evening: false,
  minivan: false,
  hotelBus: false
})

// Add Cambodian cities array
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

// Add computed properties
const today = computed(() => {
  const date = new Date()
  return date.toISOString().split('T')[0]
})

const getCityLabel = (value) => {
  const city = cambodianCities.find(city => city.value === value)
  return city ? city.label : value
}

const loading = ref(false)

// Get search parameters from route query on mount
onMounted(() => {
  if (route.query.from) {
    searchSummary.value.from = route.query.from
    searchForm.value.from = route.query.from
  }
  if (route.query.to) {
    searchSummary.value.to = route.query.to
    searchForm.value.to = route.query.to
  }
  if (route.query.departureDate) {
    searchSummary.value.departureDate = route.query.departureDate
    searchForm.value.departureDate = route.query.departureDate
  }
  if (route.query.returnDate) {
    searchSummary.value.returnDate = route.query.returnDate
    searchForm.value.returnDate = route.query.returnDate
  }
  
  // Set default values if not provided
  if (!searchForm.value.departureDate) {
    searchForm.value.departureDate = today.value
  }
})
</script>

<style scoped>
/* Custom styles for better visual hierarchy */
.bus-card {
  transition: all 0.3s ease;
}

.bus-card:hover {
  transform: translateY(-2px);
}
</style>
