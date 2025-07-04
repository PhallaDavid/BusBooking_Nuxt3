<template>
  <div
    class="bg-white p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg w-full max-w-7xl mx-auto relative"
  >
    <!-- Header -->
    <div
      class="flex justify-between items-center mb-4 md:mb-6 px-2 sm:px-4 md:px-0"
    >
      <h1 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
        {{ t("Trending offers", "ព្រឹត្តិការណ៍កំពុងពេញនិយម") }}
      </h1>
      <NuxtLink
        to="/partner"
        class="text-blue-500 font-medium px-3 sm:px-4 md:px-6 py-1 sm:py-2 border border-gray-300 rounded-full hover:bg-blue-50 transition-colors text-sm md:text-base"
      >
        {{ t("View all", "មើលទាំងអស់") }}
      </NuxtLink>
    </div>

    <!-- Navigation Left Arrow -->
    <button
      @click="prevCard"
      :disabled="currentIndex === 0"
      class="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
    >
      <svg
        class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <!-- Navigation Right Arrow -->
    <button
      @click="nextCard"
      :disabled="currentIndex >= maxIndex"
      class="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
    >
      <svg
        class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>

    <!-- Cards Container -->
    <div class="overflow-hidden" :class="containerMargin">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :class="gapClass"
        :style="{ transform: `translateX(-${currentIndex * cardWidth}px)` }"
      >
        <!-- Dynamic Cards -->
        <div
          v-for="(card, index) in cards"
          :key="index"
          :class="card.gradientClass"
          class="rounded-lg sm:rounded-xl p-3 sm:p-4 text-white flex-shrink-0 relative"
          :style="{ minWidth: `${cardMinWidth}px` }"
        >
          <div
            class="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium"
          >
            {{ card.category }}
          </div>

          <div class="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6">
            <div
              class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0"
            >
              <img
                v-if="card.image"
                :src="card.image"
                alt="card image"
                class="w-full h-full object-cover rounded-full"
              />
              <div
                v-else
                :class="card.iconBgClass"
                class="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-xs"
              >
                {{ card.discountValue }}
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <h3
                class="text-sm sm:text-base md:text-lg font-bold mb-1 leading-tight"
              >
                {{ card.title }}
              </h3>
              <h4
                v-if="card.subtitle"
                class="text-xs sm:text-sm font-semibold mb-1 leading-tight"
              >
                {{ card.subtitle }}
              </h4>
              <p :class="card.textClass" class="text-xs leading-tight">
                {{ t("Valid till:", "មានសុពលភាពដល់:") }} {{ card.validityText }}
              </p>
              <p
                v-if="card.additionalText"
                :class="card.textClass"
                class="text-xs leading-tight"
              >
                {{ card.additionalText }}
              </p>
            </div>
          </div>

          <div
            v-if="card.promoCode"
            class="mt-3 sm:mt-4 flex items-center gap-2"
          >
            <div
              class="bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded border border-white/30"
            >
              <span class="font-bold text-xs">{{ card.promoCode }}</span>
            </div>
            <button
              class="p-1 bg-white/20 backdrop-blur-sm rounded border border-white/30 hover:bg-white/30 transition-colors"
            >
              <svg
                class="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>

          <p :class="card.textClass" class="text-xs mt-2 sm:mt-3">
            {{ t("*Conditions Apply", "*លក្ខខណ្ឌអនុវត្ត") }}
          </p>
        </div>
      </div>
    </div>

    <!-- Dots Indicator -->
    <div class="flex justify-center mt-4 space-x-2">
      <button
        v-for="(_, index) in Math.ceil(totalCards / visibleCards)"
        :key="index"
        @click="goToPage(index)"
        class="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200"
        :class="{
          'bg-blue-500': Math.floor(currentIndex / visibleCards) === index,
          'bg-gray-300 hover:bg-gray-400':
            Math.floor(currentIndex / visibleCards) !== index,
        }"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import axios from "axios";
import { t, language } from "@/plugins/translate";

const currentIndex = ref(0);
const screenWidth = ref(
  typeof window !== "undefined" ? window.innerWidth : 1024
);
const cards = ref([]);

const fetchOffers = async () => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/offers");
    cards.value = res.data.map((item) => ({
      category: item.type || "Bus",
      gradientClass: "bg-gradient-to-br from-blue-500 to-blue-700",
      iconBgClass: "bg-red-500",
      textClass: "text-blue-100",
      discountValue: "10%", 
      title: item.title,
      subtitle: null,
      validityText:
        "Valid till: " +
        new Date(item.valid_till).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
      additionalText: item.conditions,
      promoCode: item.code,
      image: item.image ? `http://localhost:8000/images/${item.image}` : "", // Use working image URL you confirmed
    }));
  } catch (err) {
    console.error("Failed to fetch offers:", err);
  }
};

const totalCards = computed(() => cards.value.length);
const visibleCards = computed(() =>
  screenWidth.value < 640
    ? 1
    : screenWidth.value < 768
    ? 2
    : screenWidth.value < 1024
    ? 3
    : 4
);
const cardMinWidth = computed(() =>
  screenWidth.value < 640
    ? Math.min(screenWidth.value - 80, 300)
    : screenWidth.value < 768
    ? 240
    : screenWidth.value < 1024
    ? 220
    : 260
);
const gapClass = computed(() =>
  screenWidth.value < 640
    ? "gap-2"
    : screenWidth.value < 768
    ? "gap-3"
    : "gap-4"
);
const containerMargin = computed(() =>
  screenWidth.value < 640 ? "mx-6" : screenWidth.value < 768 ? "mx-8" : "mx-12"
);
const cardWidth = computed(
  () =>
    cardMinWidth.value +
    (screenWidth.value < 640 ? 8 : screenWidth.value < 768 ? 12 : 16)
);
const maxIndex = computed(() =>
  Math.max(0, totalCards.value - visibleCards.value)
);

const nextCard = () =>
  (currentIndex.value =
    currentIndex.value < maxIndex.value ? currentIndex.value + 1 : 0);
const prevCard = () =>
  (currentIndex.value =
    currentIndex.value > 0 ? currentIndex.value - 1 : maxIndex.value);
const goToPage = (index) =>
  (currentIndex.value = Math.min(index * visibleCards.value, maxIndex.value));

const updateScreenWidth = () => {
  if (typeof window !== "undefined") {
    screenWidth.value = window.innerWidth;
    if (currentIndex.value > maxIndex.value) {
      currentIndex.value = maxIndex.value;
    }
  }
};

onMounted(() => {
  fetchOffers();
  updateScreenWidth();
  window.addEventListener("resize", updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenWidth);
});
</script>

<style scoped>
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}
</style>
