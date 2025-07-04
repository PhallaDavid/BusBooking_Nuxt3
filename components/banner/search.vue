<template>
  <div
    class="search-bar-root bg-white/90 border border-gray-200 px-4 md:px-8 py-6 rounded-3xl shadow-2xl flex items-center gap-6 max-w-6xl mx-auto transition-all duration-300 hover:shadow-3xl hover:border-red-200 hover:bg-white/95"
  >
    <!-- From -->
    <div
      class="flex items-center gap-3 px-2 md:px-4 py-3 flex-1 border-b-2 md:border-b-0 md:border-r-2 border-gray-100 w-full md:w-auto transition-colors duration-200 focus-within:border-red-300"
    >
      <div class="text-gray-400">
        <svg
          class="w-6 h-6 text-green-500"
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
        <label class="text-xs font-semibold text-gray-500 mb-1 tracking-wide">{{
          t("From", "ចេញពី")
        }}</label>
        <select
          v-model="searchForm.from"
          class="text-gray-800 bg-transparent border-none outline-none cursor-pointer w-full min-w-[140px] md:min-w-[180px] text-base font-medium rounded-lg focus:ring-2 focus:ring-red-300 transition-all duration-200"
        >
          <option value="">
            {{ t("Select departure city", "ជ្រើសរើសទីក្រុងចេញ") }}
          </option>
          <option v-for="city in cities" :key="city.id" :value="city.name">
            {{ city.name }}
          </option>
        </select>
      </div>
    </div>

    <!-- Swap Button -->
    <div
      class="px-2 order-3 md:order-2 flex items-center justify-center my-2 md:my-0"
    >
      <button
        @click="swapCities"
        class="p-2 rounded-full hover:bg-gray-200 active:bg-gray-300 transition-colors shadow-sm border border-gray-100"
        aria-label="Swap cities"
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
      class="flex items-center gap-3 px-2 md:px-4 py-3 flex-1 border-b-2 md:border-b-0 md:border-r-2 border-gray-100 w-full md:w-auto order-2 md:order-3 transition-colors duration-200 focus-within:border-red-300"
    >
      <div class="text-gray-400">
        <svg
          class="w-6 h-6 text-red-500"
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
        <label class="text-xs font-semibold text-gray-500 mb-1 tracking-wide">{{
          t("To", "ទៅកាន់")
        }}</label>
        <select
          v-model="searchForm.to"
          class="text-gray-800 bg-transparent border-none outline-none cursor-pointer w-full min-w-[140px] md:min-w-[180px] text-base font-medium rounded-lg focus:ring-2 focus:ring-red-300 transition-all duration-200"
        >
          <option value="">
            {{ t("Select destination city", "ជ្រើសរើសទីក្រុងដំណើរ") }}
          </option>
          <option v-for="city in cities" :key="city.id" :value="city.name">
            {{ city.name }}
          </option>
        </select>
      </div>
    </div>

    <!-- Date -->
    <div
      class="flex items-center gap-3 px-2 md:px-4 py-3 flex-1 border-b-2 md:border-b-0 md:border-r-2 border-gray-100 w-full md:w-auto order-4 transition-colors duration-200 focus-within:border-blue-300"
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
        <label class="text-xs font-semibold text-gray-500 mb-1 tracking-wide">{{
          t("Departure Date", "ថ្ងៃចេញដំណើរ")
        }}</label>
        <input
          v-model="searchForm.departureDate"
          type="date"
          :min="today"
          class="text-gray-800 bg-transparent border-none outline-none cursor-pointer w-full text-base font-medium rounded-lg focus:ring-2 focus:ring-blue-300 transition-all duration-200"
        />
      </div>
    </div>

    <!-- Return Date -->
    <div
      class="flex items-center gap-3 px-2 md:px-4 py-3 flex-1 border-b-2 md:border-b-0 md:border-r-2 border-gray-100 w-full md:w-auto order-5 transition-colors duration-200 focus-within:border-blue-300"
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
        <label class="text-xs font-semibold text-gray-500 mb-1 tracking-wide">{{
          t("Return Date", "ថ្ងៃត្រឡប់មកវិញ")
        }}</label>
        <input
          v-model="searchForm.returnDate"
          type="date"
          :min="searchForm.departureDate || today"
          class="text-gray-800 bg-transparent border-none outline-none cursor-pointer w-full text-base font-medium rounded-lg focus:ring-2 focus:ring-blue-300 transition-all duration-200"
          :placeholder="t('Optional', 'ស្រេចចិត្ត')"
        />
      </div>
    </div>

    <!-- Search Button -->
    <div
      class="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-2xl flex items-center justify-center transition-all duration-200 order-6 shadow-lg w-full md:w-auto mt-4 md:mt-0"
    >
      <button
        @click="searchBuses"
        :disabled="!canSearch"
        class="text-white font-bold px-8 py-4 rounded-2xl text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-md focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-200 w-full md:w-auto hover:scale-105"
      >
        {{ t("SEARCH", "ស្វែងរក") }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { t, language } from "@/plugins/translate";

const router = useRouter();

// Form data
const searchForm = ref({
  from: "",
  to: "",
  departureDate: "",
  returnDate: "",
});

// Dynamic city list
const cities = ref([]);
const loadingCities = ref(false);
const errorCities = ref("");

onMounted(async () => {
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
});

// Get today's date
const today = computed(() => {
  const date = new Date();
  return date.toISOString().split("T")[0];
});

// Check if search can be performed
const canSearch = computed(() => {
  return (
    searchForm.value.from &&
    searchForm.value.to &&
    searchForm.value.departureDate &&
    searchForm.value.from !== searchForm.value.to
  );
});

// Get city label by value
const getCityLabel = (value) => {
  const city = cities.value.find((city) => city.name === value);
  return city ? city.name : value;
};

// Swap cities function
const swapCities = () => {
  const temp = searchForm.value.from;
  searchForm.value.from = searchForm.value.to;
  searchForm.value.to = temp;
};

// Search buses function - navigate to search results page
const searchBuses = () => {
  if (!canSearch.value) return;

  // Navigate to search results page with query parameters
  router.push({
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

// Set default departure date to today
searchForm.value.departureDate = today.value;
</script>

<style scoped>
.search-bar-root {
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  transition: box-shadow 0.3s, border-color 0.3s, background 0.3s;
}
.search-bar-root:hover {
  box-shadow: 0 12px 40px 0 rgba(220, 38, 38, 0.15);
  border-color: #fca5a5;
  background: rgba(255, 255, 255, 0.98);
}
@media (min-width: 768px) {
  .search-bar-root {
    flex-direction: row;
    align-items: center;
  }
}
select:focus,
input:focus {
  outline: none;
  box-shadow: 0 0 0 2px #f87171;
}
select,
input {
  transition: box-shadow 0.2s, border-color 0.2s;
}
</style>
