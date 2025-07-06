<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Search Form Section -->
    <div class="bg-white border-b">
      <div class="max-w-7xl mx-auto px-6 py-6">
        <div
          class="bg-white px-6 py-4 rounded-2xl flex flex-row lg:flex-row items-center gap-4 relative"
        ></div>
        <!-- From -->
        <div
          class="flex items-center gap-3 px-4 py-3 flex-1 border-b lg:border-b-0 lg:border-r border-gray-200 w-full lg:w-auto"
        >
          <div class="text-gray-400 flex items-center">
            <svg
              class="w-6 h-6 text-blue-500"
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
            <label class="text-sm font-medium text-gray-600 mb-1">{{
              t("From", "ចេញពី")
            }}</label>
            <select
              v-model="searchForm.from"
              class="text-lg font-semibold text-gray-800 bg-transparent border-none outline-none cursor-pointer w-full"
            >
              <option value="">
                {{ t("Select departure city", "ជ្រើសរើសកន្លែងចេញពី") }}
              </option>
              <option v-for="city in cities" :key="city.id" :value="city.name">
                {{ city.name }}
              </option>
            </select>
          </div>

          <!-- Swap Button -->
          <div class="px-2 order-3 lg:order-2">
            <button
              @click="swapCities"
              class="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg
                class="w-6 h-6 text-blue-500"
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
            <div class="text-gray-400 flex items-center">
              <svg
                class="w-6 h-6 text-blue-500"
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
              <label class="text-sm font-medium text-gray-600 mb-1">{{
                t("To", "ទៅកាន់")
              }}</label>
              <select
                v-model="searchForm.to"
                class="text-lg font-semibold text-gray-800 bg-transparent border-none outline-none cursor-pointer w-full"
              >
                <option value="">
                  {{ t("Select destination city", "ជ្រើសរើសកន្លែងចេញពី") }}
                </option>
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
                class="w-6 h-6 text-blue-500"
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
              <label class="text-sm font-medium text-gray-600 mb-1">{{
                t("Departure Date", "ថ្ធៃចេញដំណើរ")
              }}</label>
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
                class="w-6 h-6 text-blue-500"
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
              <label class="text-sm font-medium text-gray-600 mb-1">{{
                t("Return Date", "ថ្ធៃត្រលប់មកវិញ")
              }}</label>
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
        <div class="w-64 flex-shrink-0">
          <div class="bg-white rounded-lg shadow-sm p-4 sticky top-6">
            <h3 class="font-semibold text-gray-800 mb-4">
              {{ t("FILTERS", "តម្រង់") }}
            </h3>

            <!-- Red Deals Filter -->
            <div class="mb-6">
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  v-model="filters.redDeals"
                  class="rounded border-gray-300"
                />
                <span class="text-sm text-gray-700"
                  >{{ t("Red Deals", "កិច្ចព្រមព្រៀងក្រហម") }} (13)</span
                >
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
                <span class="text-sm text-gray-700"
                  >{{ t("Cancellable", "អាចបោះបង់បាន") }} (2)</span
                >
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
                <span class="text-sm text-gray-700"
                  >{{ t("M-ticket", "វិញ្ញាបនបត្រអេឡិចត្រូនិច") }} (43)</span
                >
              </label>
            </div>

            <!-- Departure Time -->
            <div class="mb-6">
              <h4 class="font-medium text-gray-800 mb-3">
                {{ t("DEPARTURE TIME", "ពេលចេញដំណើរ") }}
              </h4>
              <div class="space-y-2">
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    v-model="filters.before6am"
                    class="rounded border-gray-300"
                  />
                  <span class="text-gray-700"
                    >{{ t("Before 6 am", "មុនម៉ោង ៦") }} (0)</span
                  >
                </label>
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    v-model="filters.morning"
                    class="rounded border-gray-300"
                  />
                  <span class="text-gray-700"
                    >{{ t("6 am to 12 pm", "ម៉ោង ៦ ដល់ ១២ ថ្ងៃ") }} (0)</span
                  >
                </label>
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    v-model="filters.afternoon"
                    class="rounded border-gray-300"
                  />
                  <span class="text-gray-700"
                    >{{
                      t("12 pm to 6 pm", "ម៉ោង ១២ ថ្ងៃ ដល់ ៦ ល្ងាច")
                    }}
                    (2)</span
                  >
                </label>
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    v-model="filters.evening"
                    class="rounded border-gray-300"
                  />
                  <span class="text-gray-700"
                    >{{ t("After 6 pm", "បន្ទាប់ពីម៉ោង ៦ ល្ងាច") }} (41)</span
                  >
                </label>
              </div>
            </div>

            <!-- Bus Types -->
            <div class="mb-6">
              <h4 class="font-medium text-gray-800 mb-3">
                {{ t("BUS TYPES", "ប្រភេទរថយន្ត") }}
              </h4>
              <div class="space-y-2">
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    v-model="filters.minivan"
                    class="rounded border-gray-300"
                  />
                  <span class="text-gray-700"
                    >{{ t("Minivan", "រថយន្តតូច") }} (14)</span
                  >
                </label>
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    v-model="filters.hotelBus"
                    class="rounded border-gray-300"
                  />
                  <span class="text-gray-700"
                    >{{
                      t("Hotel Bus (Night Bus)", "រថយន្តសណ្ឋាគារ (រថយន្តយប់)")
                    }}
                    (29)</span
                  >
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-1">
          <!-- Bus Loading Skeleton -->
          <div v-if="loading" class="space-y-4">
            <div
              v-for="i in 5"
              :key="i"
              class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 animate-pulse"
              style="
                animation-duration: 2s;
                animation-timing-function: ease-in-out;
              "
            >
              <div class="flex items-center justify-between">
                <!-- Bus Info Skeleton -->
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 bg-gray-300 rounded-full"></div>
                  <div>
                    <div class="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                    <div class="h-3 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>

                <!-- Journey Info Skeleton -->
                <div class="flex items-center gap-8">
                  <div class="text-center">
                    <div class="h-6 bg-gray-300 rounded w-16 mb-1"></div>
                    <div class="h-3 bg-gray-200 rounded w-20"></div>
                  </div>
                  <div class="text-center">
                    <div class="h-4 bg-gray-300 rounded w-12 mb-1"></div>
                  </div>
                  <div class="text-center">
                    <div class="h-6 bg-gray-300 rounded w-16 mb-1"></div>
                    <div class="h-3 bg-gray-200 rounded w-20"></div>
                  </div>
                </div>

                <!-- Price & Action Skeleton -->
                <div class="text-right">
                  <div class="h-6 bg-gray-300 rounded w-20 mb-2"></div>
                  <div class="h-8 bg-gray-300 rounded w-24"></div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <!-- Offers Section with Skeleton -->
            <div
              v-if="loadingOffers"
              class="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
            >
              <div
                v-for="i in 4"
                :key="i"
                role="status"
                class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center bg-white rounded-lg p-4 shadow-sm border border-gray-200"
                style="
                  animation-duration: 2s;
                  animation-timing-function: ease-in-out;
                "
              >
                <div
                  class="flex items-center justify-center w-full h-32 bg-gray-300 rounded-sm sm:w-"
                >
                  <svg
                    class="w-8 h-8 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path
                      d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
                    />
                  </svg>
                </div>
                <div class="w-full">
                  <div class="h-2.5 bg-gray-300 rounded-full w-24 mb-2"></div>
                  <div
                    class="h-2 bg-gray-200 rounded-full max-w-[120px] mb-1"
                  ></div>
                  <div
                    class="h-2 bg-gray-200 rounded-full max-w-[100px] mb-1"
                  ></div>
                  <div class="h-2 bg-gray-200 rounded-full max-w-[80px]"></div>
                </div>
              </div>
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
                {{ filteredResults.length }}
                {{ t("Buses found", "រថយន្តដែលរកឃើញ") }}
              </div>
              <div class="flex items-center gap-4">
                <span class="text-sm font-medium text-gray-700">{{
                  t("SORT BY:", "តម្រៀបតាម:")
                }}</span>
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
                    {{ t("Departure", "ពេលចេញ") }}
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
                    {{ t("Duration", "រយៈពេល") }}
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
                    {{ t("Arrival", "ពេលមកដល់") }}
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
                    {{ t("Ratings", "ការវាយតម្លៃ") }}
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
                    {{ t("Fare", "តម្លៃ") }}
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
                    {{ t("Seats Available", "កៅអីដែលមាន") }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Bus Results -->
            <div class="space-y-4">
              <div
                v-if="filteredResults.length === 0"
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
                      class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center overflow-hidden"
                    >
                      <img
                        v-if="bus.image_url"
                        :src="bus.image_url"
                        alt="Bus"
                        class="w-full h-full object-cover"
                      />
                      <img
                        v-else
                        src="/images/bus.png"
                        alt="Bus"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-800">
                        {{ bus.name }}
                      </h3>
                      <div class="text-sm text-gray-600">
                        {{ t("Type:", "ប្រភេទ:") }} {{ bus.type }}
                      </div>
                    </div>
                  </div>

                  <!-- Journey Info -->
                  <div class="flex items-center gap-8">
                    <div class="text-center">
                      <div class="text-2xl font-bold text-gray-800">
                        {{ formatTime(bus.departure_time) }}
                      </div>
                      <div class="text-sm text-gray-600">
                        {{ bus.departure }}
                      </div>
                    </div>
                    <div class="text-center">
                      <div class="text-sm text-gray-600">
                        {{ t("Seats:", "កៅអី:") }} {{ bus.seats }}
                      </div>
                    </div>
                    <div class="text-center">
                      <div class="text-2xl font-bold text-gray-800">
                        {{ formatTime(bus.arrival_time) }}
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
                      {{ t("VIEW SEATS", "មើលកៅអី") }}
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

  // Only fetch buses if we have search parameters
  if (
    searchForm.value.from &&
    searchForm.value.to &&
    searchForm.value.departureDate
  ) {
    await fetchBuses();
  }

  // Then fetch offers after buses are loaded
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
  try {
    const query = {
      busId: bus.id,
      operator: bus.name,
      busType: bus.type,
      departureTime: bus.departure_time,
      arrivalTime: bus.arrival_time,
      price: bus.price,
      from: searchForm.value.from,
      to: searchForm.value.to,
      departureDate: searchForm.value.departureDate,
    };

    const queryString = new URLSearchParams(query).toString();
    const url = `/seat-selection?${queryString}`;
    window.location.href = url;
  } catch (error) {
    console.error("Error navigating to seat-selection:", error);
    alert("Error navigating to seat selection: " + error.message);
  }
};

const testBooking = (bus) => {
  console.log("🧪 TEST: Bus data:", bus);
  console.log("🧪 TEST: Testing direct booking...");

  // Test direct booking without seat selection
  const bookingData = {
    busId: bus.id,
    operator: bus.name,
    busType: bus.type,
    departureTime: bus.departure_time,
    arrivalTime: bus.arrival_time,
    price: bus.price,
    from: searchForm.value.from,
    to: searchForm.value.to,
    departureDate: searchForm.value.departureDate,
    seats: "1,2", // Test seats
    totalAmount: (bus.price * 2).toFixed(2),
  };

  console.log("🧪 TEST: Booking data:", bookingData);

  // Try to go directly to booking confirmation
  const queryString = new URLSearchParams(bookingData).toString();
  const url = `/booking-confirmation?${queryString}`;
  console.log("🧪 TEST: Direct booking URL:", url);

  window.location.href = url;
};

const testDirectBooking = () => {
  console.log("🧪 TEST: Direct booking test...");
  const testData = {
    busId: "5",
    operator: "Laryta",
    busType: "Premium",
    departureTime: "21:13",
    arrivalTime: "12:13",
    price: "14",
    from: "Phnom Penh",
    to: "Siem Reap",
    departureDate: "2025-07-06",
    seats: "1",
    totalAmount: "14.00",
  };

  const queryString = new URLSearchParams(testData).toString();
  const url = `/booking-confirmation?${queryString}`;
  console.log("🧪 TEST: Direct booking URL:", url);

  window.location.href = url;
};

const testDirectPayment = () => {
  console.log("🧪 TEST: Direct payment test...");

  // Create test passenger data
  const testPassengers = [
    {
      name: "Test Passenger 1",
      nationality: "Cambodian",
      gender: "Female",
      age: "25",
    },
  ];

  // Create test contact data
  const testContact = {
    email: "test@example.com",
    phone: "0972076423",
    countryCode: "+855",
  };

  const testData = {
    busId: "5",
    operator: "Laryta",
    busType: "Premium",
    departureTime: "21:13",
    arrivalTime: "12:13",
    price: "14",
    from: "Phnom Penh",
    to: "Siem Reap",
    departureDate: "2025-07-06",
    seats: "1",
    totalAmount: "14.00",
    passengers: JSON.stringify(testPassengers),
    contactDetails: JSON.stringify(testContact),
  };

  const queryString = new URLSearchParams(testData).toString();
  const url = `/payment?${queryString}`;
  console.log("🧪 TEST: Direct payment URL:", url);

  window.location.href = url;
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

  // Fetch buses with the search parameters
  fetchBuses();
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

    const url = `http://localhost:8000/api/buses?${params}`;
    const res = await fetch(url);

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

// Add a computed property to filter searchResults based on the search form
const filteredResults = computed(() => {
  // Since the API already returns filtered results, just return them directly
  return searchResults.value;
});

// Helper to format time as HH:mm
function formatTime(timeStr) {
  if (!timeStr) return "--:--";
  // If timeStr is a full ISO string, extract time part
  let t = timeStr;
  if (t.includes("T")) t = t.split("T")[1];
  // Only keep HH:mm
  if (t.length >= 5) return t.slice(0, 5);
  return t;
}
</script>

<style scoped>
.bus-card {
  transition: all 0.3s ease;
}
.loading-spinner {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid;
  border-color: #000 #0000;
  animation: l1 1s infinite;
}
@keyframes l1 {
  to {
    transform: rotate(0.5turn);
  }
}
.bus-card:hover {
  transform: translateY(-2px);
}
</style>
