<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Search Form Section -->
    <div class="bg-white border-b">
      <div class="max-w-7xl mx-auto px-6 py-6">
        <div
          class="bg-white px-6 py-4 rounded-2xl shadow-lg flex flex-row lg:flex-row items-center gap-4 relative"
        >
          <!-- Loading spinner for cities -->
          <div
            v-if="loadingCities"
            class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10"
          >
            <svg
              class="animate-spin h-8 w-8 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
          </div>
          <!-- From -->
          <div
            class="flex items-center gap-3 px-4 py-3 flex-1 border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-auto"
          >
            <div class="text-gray-400">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div class="flex flex-col flex-1">
              <label class="text-sm font-medium text-gray-600 mb-1">From</label>
              <select
                v-model="searchForm.from"
                class="text-lg font-semibold text-gray-800 bg-transparent border-none outline-none cursor-pointer w-full"
              >
                <option value="">Select departure city</option>
                <option
                  v-for="city in cities"
                  :key="city.id"
                  :value="city.name"
                >
                  {{ city.name }}
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
              <svg
                class="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </button>
          </div>

          <!-- To -->
          <div
            class="flex items-center gap-3 px-4 py-3 flex-1 border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-auto order-2 lg:order-3"
          >
            <div class="text-gray-400">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div class="flex flex-col flex-1">
              <label class="text-sm font-medium text-gray-600 mb-1">To</label>
              <select
                v-model="searchForm.to"
                class="text-lg font-semibold text-gray-800 bg-transparent border-none outline-none cursor-pointer w-full"
              >
                <option value="">Select destination city</option>
                <option
                  v-for="city in cities"
                  :key="city.id"
                  :value="city.name"
                >
                  {{ city.name }}
                </option>
              </select>
            </div>
          </div>

          <!-- Date -->
          <div
            class="flex items-center gap-3 px-4 py-3 flex-1 border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-auto order-4"
          >
            <div class="text-gray-400">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div class="flex flex-col flex-1">
              <label class="text-sm font-medium text-gray-600 mb-1"
                >Departure Date</label
              >
              <input
                v-model="searchForm.departureDate"
                type="date"
                :min="today"
                class="text-lg font-semibold text-gray-800 bg-transparent border-none outline-none cursor-pointer w-full"
              />
            </div>
          </div>

          <!-- Return Date -->
          <div
            class="flex items-center gap-3 px-4 py-3 flex-1 border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-auto order-5"
          >
            <div class="text-gray-400">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div class="flex flex-col flex-1">
              <label class="text-sm font-medium text-gray-600 mb-1"
                >Return Date</label
              >
              <input
                v-model="searchForm.returnDate"
                type="date"
                :min="searchForm.departureDate || today"
                class="text-lg font-semibold text-gray-800 bg-transparent border-none outline-none cursor-pointer w-full"
              />
            </div>
          </div>

          <!-- Search Button -->
          <div
            class="bg-red-500 hover:bg-red-600 rounded-xl flex items-center justify-center transition-colors duration-200 order-6"
          >
            <button
              @click="performSearch"
              :disabled="!canSearch"
              class="text-white font-bold px-6 py-4 rounded-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ t("SEARCH", "ស្វែងរក") }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-6">
      <div class="flex flex gap-6">
        <!-- Filters Sidebar -->
        <div class="w-64 flex-shrink-0">
          <div class="bg-white rounded-lg shadow-sm p-4 sticky top-6">
            <h3 class="font-semibold text-gray-800 mb-4">FILTERS</h3>

            <!-- Red Deals Filter -->
            <div class="mb-6">
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  v-model="filters.redDeals"
                  class="rounded border-gray-300"
                />
                <span class="text-sm text-gray-700">Red Deals (13)</span>
              </label>
            </div>

            <!-- Cancellable Filter -->
            <div class="mb-6">
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  v-model="filters.cancellable"
                  class="rounded border-gray-300"
                />
                <span class="text-sm text-gray-700">Cancellable (2)</span>
              </label>
            </div>

            <!-- M-ticket Filter -->
            <div class="mb-6">
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  v-model="filters.mTicket"
                  class="rounded border-gray-300"
                />
                <span class="text-sm text-gray-700">M-ticket (43)</span>
              </label>
            </div>

            <!-- Departure Time -->
            <div class="mb-6">
              <h4 class="font-medium text-gray-800 mb-3">DEPARTURE TIME</h4>
              <div class="space-y-2">
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    v-model="filters.before6am"
                    class="rounded border-gray-300"
                  />
                  <span class="text-gray-700">Before 6 am (0)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    v-model="filters.morning"
                    class="rounded border-gray-300"
                  />
                  <span class="text-gray-700">6 am to 12 pm (0)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    v-model="filters.afternoon"
                    class="rounded border-gray-300"
                  />
                  <span class="text-gray-700">12 pm to 6 pm (2)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    v-model="filters.evening"
                    class="rounded border-gray-300"
                  />
                  <span class="text-gray-700">After 6 pm (41)</span>
                </label>
              </div>
            </div>

            <!-- Bus Types -->
            <div class="mb-6">
              <h4 class="font-medium text-gray-800 mb-3">BUS TYPES</h4>
              <div class="space-y-2">
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    v-model="filters.minivan"
                    class="rounded border-gray-300"
                  />
                  <span class="text-gray-700">Minivan (14)</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    v-model="filters.hotelBus"
                    class="rounded border-gray-300"
                  />
                  <span class="text-gray-700">Hotel Bus (Night Bus) (29)</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1">
          <!-- Simple loading for buses -->
          <div v-if="loading" class="flex items-center justify-center py-16">
            <div
              class="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"
            ></div>
          </div>
          <div v-else>
            <!-- Offers Section -->
            <div
              v-if="loadingOffers"
              class="flex items-center justify-center py-4"
            >
              <svg
                class="animate-spin h-6 w-6 text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
              <span class="ml-2 text-gray-500 text-base"
                >Loading offers...</span
              >
            </div>
            <div
              v-else-if="offers.length > 0"
              class="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
            >
              <div
                v-for="offer in offers"
                :key="offer.id"
                class="bg-gradient-to-r from-red-100 to-red-200 rounded-lg p-4 flex items-center gap-4 shadow"
              >
                <img
                  :src="'http://127.0.0.1:8000/images/' + offer.image"
                  alt="Offer"
                  class="w-16 h-16 object-cover rounded"
                />
                <div>
                  <div class="font-bold text-lg text-red-600">
                    {{ offer.title }}
                  </div>
                  <div class="text-sm text-gray-700">
                    {{ t("Code:", "កូដ:") }}
                    <span class="font-mono bg-gray-200 px-2 py-1 rounded">{{
                      offer.code
                    }}</span>
                  </div>
                  <div class="text-xs text-gray-500">
                    {{ t("Valid till:", "មានសុពលភាពដល់:") }}
                    {{ offer.valid_till.split("T")[0] }}
                  </div>
                  <div class="text-xs text-gray-500">
                    {{ offer.conditions }}
                  </div>
                </div>
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
                  <button
                    @click="sortBy = 'departure'"
                    :class="
                      sortBy === 'departure'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-700'
                    "
                    class="px-3 py-1 rounded text-sm"
                  >
                    Departure
                  </button>
                  <button
                    @click="sortBy = 'duration'"
                    :class="
                      sortBy === 'duration'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-700'
                    "
                    class="px-3 py-1 rounded text-sm"
                  >
                    Duration
                  </button>
                  <button
                    @click="sortBy = 'arrival'"
                    :class="
                      sortBy === 'arrival'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-700'
                    "
                    class="px-3 py-1 rounded text-sm"
                  >
                    Arrival
                  </button>
                  <button
                    @click="sortBy = 'rating'"
                    :class="
                      sortBy === 'rating'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-700'
                    "
                    class="px-3 py-1 rounded text-sm"
                  >
                    Ratings
                  </button>
                  <button
                    @click="sortBy = 'price'"
                    :class="
                      sortBy === 'price'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-700'
                    "
                    class="px-3 py-1 rounded text-sm"
                  >
                    Fare
                  </button>
                  <button
                    @click="sortBy = 'seats'"
                    :class="
                      sortBy === 'seats'
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-700'
                    "
                    class="px-3 py-1 rounded text-sm"
                  >
                    Seats Available
                  </button>
                </div>
              </div>
            </div>

            <!-- Bus Results -->
            <div class="space-y-4">
              <div
                v-if="filteredResults.length === 0 && !loading"
                class="text-center text-gray-500 py-8 text-lg"
              >
                {{
                  t(
                    "No buses found for your search.",
                    "រកមិនឃើញរថយន្តសម្រាប់ការស្វែងរករបស់អ្នកទេ។"
                  )
                }}
              </div>
              <div
                v-for="bus in filteredResults"
                :key="bus.id"
                class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-transform duration-200 hover:scale-[1.01] hover:shadow-md"
              >
                <div class="flex items-center justify-between">
                  <!-- Bus Info -->
                  <div class="flex items-center gap-4">
                    <div
                      class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center"
                    >
                      <span class="text-yellow-600 font-bold text-sm">{{
                        image_url
                      }}</span>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-800">
                        {{ bus.name }}
                      </h3>
                      <div class="text-sm text-gray-600">
                        Type: {{ bus.type }}
                      </div>
                    </div>
                  </div>

                  <!-- Journey Info -->
                  <div class="flex items-center gap-8">
                    <div class="text-center">
                      <div class="text-2xl font-bold text-gray-800">
                        {{ bus.departure_time }}
                      </div>
                      <div class="text-sm text-gray-600">
                        {{ bus.departure }}
                      </div>
                    </div>
                    <div class="text-center">
                      <div class="text-sm text-gray-600">
                        Seats: {{ bus.seats }}
                      </div>
                    </div>
                    <div class="text-center">
                      <div class="text-2xl font-bold text-gray-800">
                        {{ bus.arrival_time }}
                      </div>
                      <div class="text-sm text-gray-600">
                        {{ bus.arrival }}
                      </div>
                    </div>
                  </div>

                  <!-- Price & Action -->
                  <div class="text-right">
                    <div class="text-2xl font-bold text-gray-800">
                      USD {{ bus.price }}
                    </div>
                    <button
                      @click="selectSeats(bus)"
                      class="mt-2 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                    >
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
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { t, language } from "@/plugins/translate";

const router = useRouter();
const route = useRoute();

// Dynamic city list
const cities = ref([]);
const loadingCities = ref(false);
const errorCities = ref("");

const offers = ref([]);
const loadingOffers = ref(false);
const errorOffers = ref("");

const currentLanguage = ref("en");
onMounted(() => {
  if (typeof window !== "undefined") {
    currentLanguage.value = localStorage.getItem("language") || "en";
  }
});

function changeLanguage(lang) {
  currentLanguage.value = lang;
  // Here you could add logic to update i18n, reload data, etc.
}

onMounted(async () => {
  // Fetch cities
  loadingCities.value = true;
  try {
    const res = await fetch("http://localhost:8000/api/bus-cities");
    if (!res.ok) throw new Error("Failed to fetch cities");
    const data = await res.json();
    cities.value = data.cities || [];
  } catch (e) {
    errorCities.value = e.message || "Failed to fetch cities";
    cities.value = [];
  } finally {
    loadingCities.value = false;
  }

  // Set search form from route query
  if (route.query.from) searchForm.value.from = route.query.from;
  if (route.query.to) searchForm.value.to = route.query.to;
  if (route.query.departureDate)
    searchForm.value.departureDate = route.query.departureDate;
  if (route.query.returnDate)
    searchForm.value.returnDate = route.query.returnDate;

  // Fetch offers
  loadingOffers.value = true;
  try {
    const res = await fetch("http://127.0.0.1:8000/api/offers");
    if (!res.ok) throw new Error("Failed to fetch offers");
    offers.value = await res.json();
  } catch (e) {
    errorOffers.value = e.message || "Failed to fetch offers";
    offers.value = [];
  } finally {
    loadingOffers.value = false;
  }
});

// Search parameters
const searchSummary = ref({
  from: "Phnom Penh",
  to: "Siem Reap",
  date: "2025-01-15",
});

// Filters and sorting
const sortBy = ref("price");
const filterBusType = ref("");

const searchResults = ref([]);
const loading = ref(false);
const error = ref("");

// Methods
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const modifySearch = () => {
  router.push("/");
};

const selectSeats = (bus) => {
  // Navigate to seat selection page with bus and search details
  router.push({
    path: "/seat-selection",
    query: {
      busId: bus.id,
      operator: bus.name,
      busType: bus.type,
      departureTime: bus.departure_time,
      arrivalTime: bus.arrival_time,
      duration: bus.duration,
      price: bus.price,
      from: searchForm.value.from,
      fromLabel: getCityLabel(searchForm.value.from),
      to: searchForm.value.to,
      toLabel: getCityLabel(searchForm.value.to),
      departureDate: searchForm.value.departureDate,
      returnDate: searchForm.value.returnDate || "",
    },
  });
};

const viewDetails = (bus) => {
  // Show bus details modal or navigate to details page
  console.log("View details for:", bus.name);
};

const sortResults = () => {
  // Sorting is handled by computed property
};

const filterResults = () => {
  // Filtering is handled by computed property
};

const clearFilters = () => {
  filterBusType.value = "";
  sortBy.value = "price";
};

// Add after the existing reactive variables
const searchForm = ref({
  from: "",
  to: "",
  departureDate: "",
  returnDate: "",
});

// Add this computed property
const canSearch = computed(() => {
  return (
    searchForm.value.from &&
    searchForm.value.to &&
    searchForm.value.departureDate &&
    searchForm.value.from !== searchForm.value.to
  );
});

// Add these methods
const swapCities = () => {
  const temp = searchForm.value.from;
  searchForm.value.from = searchForm.value.to;
  searchForm.value.to = temp;
};

const performSearch = () => {
  if (!canSearch.value) return;

  // Update search summary
  searchSummary.value = {
    from: searchForm.value.from,
    fromLabel: getCityLabel(searchForm.value.from),
    to: searchForm.value.to,
    toLabel: getCityLabel(searchForm.value.to),
    departureDate: searchForm.value.departureDate,
    returnDate: searchForm.value.returnDate,
  };

  // Update URL
  router.replace({
    path: "/search",
    query: {
      from: searchForm.value.from,
      fromLabel: getCityLabel(searchForm.value.from),
      to: searchForm.value.to,
      toLabel: getCityLabel(searchForm.value.to),
      departureDate: searchForm.value.departureDate,
      returnDate: searchForm.value.returnDate || "",
    },
  });
};

const filters = ref({
  redDeals: false,
  cancellable: false,
  mTicket: false,
  before6am: false,
  morning: false,
  afternoon: false,
  evening: false,
  minivan: false,
  hotelBus: false,
});

// Add computed properties
const today = computed(() => {
  const date = new Date();
  return date.toISOString().split("T")[0];
});

const getCityLabel = (value) => {
  const city = cities.value.find((city) => city.name === value);
  return city ? city.name : value;
};

// Fetch buses from API
async function fetchBuses() {
  loading.value = true;
  error.value = "";
  try {
    const params = new URLSearchParams({
      from: searchForm.value.from || "",
      to: searchForm.value.to || "",
      departure_date: searchForm.value.departureDate || "",
      return_date: searchForm.value.returnDate || "",
    });
    // Add filter params
    if (filters.value.redDeals) params.append("red_deals", "1");
    if (filters.value.cancellable) params.append("cancellable", "1");
    if (filters.value.mTicket) params.append("m_ticket", "1");
    // Departure time slots
    if (filters.value.before6am)
      params.append("departure_time_slot", "before6am");
    if (filters.value.morning) params.append("departure_time_slot", "morning");
    if (filters.value.afternoon)
      params.append("departure_time_slot", "afternoon");
    if (filters.value.evening) params.append("departure_time_slot", "evening");
    // Bus types
    const busTypes = [];
    if (filters.value.minivan) busTypes.push("minivan");
    if (filters.value.hotelBus) busTypes.push("hotel_bus");
    if (busTypes.length > 0) params.append("bus_type", busTypes.join(","));
    const res = await fetch(`http://localhost:8000/api/buses?${params}`);
    if (!res.ok) throw new Error("Failed to fetch buses");
    const data = await res.json();
    let buses = [];
    if (Array.isArray(data)) {
      buses = data;
    } else if (Array.isArray(data.departure)) {
      buses = data.departure;
    } else if (Array.isArray(data.buses)) {
      buses = data.buses;
    } else if (Array.isArray(data.data)) {
      buses = data.data;
    }
    searchResults.value = buses;
  } catch (e) {
    error.value = e.message || "Failed to fetch buses";
    searchResults.value = [];
  } finally {
    loading.value = false;
  }
}

onMounted(fetchBuses);
watch(
  () => [
    searchForm.value.from,
    searchForm.value.to,
    searchForm.value.departureDate,
    searchForm.value.returnDate,
    { ...filters.value },
  ],
  fetchBuses
);

// Add a computed property to filter searchResults based on the search form
const filteredResults = computed(() => {
  return searchResults.value.filter((bus) => {
    const matchesFrom =
      !searchForm.value.from ||
      (bus.departure &&
        bus.departure.toLowerCase().trim() ===
          searchForm.value.from.toLowerCase().trim());
    const matchesTo =
      !searchForm.value.to ||
      (bus.arrival &&
        bus.arrival.toLowerCase().trim() ===
          searchForm.value.to.toLowerCase().trim());
    const matchesDate =
      !searchForm.value.departureDate ||
      (bus.departure_time &&
        bus.departure_time.startsWith(searchForm.value.departureDate));
    return matchesFrom && matchesTo && matchesDate;
  });
});
</script>

<style scoped>
/* Custom styles for better visual hierarchy */
.bus-card {
  transition: all 0.3s ease;
}

.bus-card:hover {
  transform: translateY(-2px);
}

.animate-spin {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
