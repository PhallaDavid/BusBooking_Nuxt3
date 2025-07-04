<template>
  <nav class="bg-white border-gray-200 shadow z-50 sticky top-0">
    <div
      class="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 flex-shrink-0">
        <div
          class="w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center"
        >
          <img
            src="/images/logo1.jpg"
            alt="Logo"
            class="w-full h-full object-contain"
          />
        </div>
      </NuxtLink>

      <!-- Mobile Menu Button - Only show on mobile -->
      <!-- <button
        @click="toggleMobileMenu"
        class=" flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!showMobileMenu" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button> -->

      <!-- Desktop Navigation - Hide on mobile, show on desktop -->
      <div class="flex items-center gap-3 md:gap-4 lg:gap-6">
        <!-- Notification -->
        <Notification
          :messages="notifications"
          @message-click="handleNotificationClick"
          @mark-all-read="handleMarkAllRead"
          class="mr-2"
        />
        <!-- Help -->
        <NuxtLink
          to="/supports"
          class="flex items-center hover:bg-gray-100 px-1 sm:px-2 lg:px-3 rounded-lg py-1 sm:py-2 gap-1 sm:gap-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <svg
            class="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="font-medium text-xs sm:text-sm lg:text-base">{{
            t("Help", "ជំនួយ")
          }}</span>
        </NuxtLink>

        <!-- Language Dropdown -->
        <div class="relative">
          <button
            @click="toggleLanguageDropdown"
            class="flex items-center hover:bg-gray-100 px-1 sm:px-2 lg:px-3 py-1 sm:py-2 rounded-lg gap-1 sm:gap-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <svg
              class="w-5 h-5 text-blue-500"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="2"
              />
              <path
                d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
            <span class="font-medium text-xs sm:text-sm lg:text-base">{{
              t("English", "ខ្មែរ")
            }}</span>
          </button>

          <transition name="fade">
            <div
              v-if="showLanguageDropdown"
              class="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg z-50 border border-gray-200"
            >
              <ul class="py-1">
                <li>
                  <button
                    @click="
                      changeLanguage('en');
                      showLanguageDropdown = false;
                    "
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    <span class="mr-2">🇺🇸</span>English
                  </button>
                </li>
                <li>
                  <button
                    @click="
                      changeLanguage('kh');
                      showLanguageDropdown = false;
                    "
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    <span class="mr-2">🇰🇭</span>ខ្មែរ
                  </button>
                </li>
              </ul>
            </div>
          </transition>
        </div>

        <!-- Currency Selector -->
        <div class="relative">
          <button
            @click="toggleCurrencyDropdown"
            class="flex items-center hover:bg-gray-100 px-1 sm:px-2 lg:px-3 py-1 sm:py-2 rounded-lg gap-1 sm:gap-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
            <span class="font-medium text-xs sm:text-sm lg:text-base">{{
              currencyLabel(selectedCurrency.value)
            }}</span>
            <svg
              class="w-3 h-3 lg:w-4 lg:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <transition name="fade">
            <div
              v-if="showCurrencyDropdown"
              class="absolute right-0 mt-2 w-24 bg-white shadow-lg rounded-lg z-50 border border-gray-200"
            >
              <ul class="py-1">
                <li>
                  <button
                    @click="selectCurrency('USD')"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    USD
                  </button>
                </li>
                <li>
                  <button
                    @click="selectCurrency('KHR')"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    KHR
                  </button>
                </li>
              </ul>
            </div>
          </transition>
        </div>

        <!-- Account -->
        <div class="relative">
          <button
            @click="toggleAccountDropdown"
            class="flex items-center hover:bg-gray-100 px-1 sm:px-2 lg:px-3 py-1 sm:py-2 rounded-lg gap-1 sm:gap-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span class="font-medium text-xs sm:text-sm lg:text-base">{{
              t("Account", "គណនី")
            }}</span>
            <svg
              class="w-3 h-3 lg:w-4 lg:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <transition name="fade">
            <div
              v-if="showAccountDropdown"
              class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-xl z-50 border border-gray-200"
            >
              <ul class="py-2">
                <li>
                  <NuxtLink
                    to="/accounts/cancel_ticket"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    {{ t("Cancel Ticket", "បោះបង់សំបុត្រ") }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/accounts/change_traveldate"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    {{ t("Change Travel Date", "ផ្លាស់ប្តូរថ្ងៃធ្វើដំណើរ") }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/accounts/my_ticket"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    {{ t("Show My Ticket", "បង្ហាញសំបុត្ររបស់ខ្ញុំ") }}
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/accounts/email"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    {{ t("Email / SMS", "អ៊ីមែល / សារ") }}
                  </NuxtLink>
                </li>
                <li>
                  <hr class="my-2 border-gray-200" />
                  <button
                    v-if="isLoggedIn"
                    @click="logout"
                    class="block px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 w-full text-left"
                  >
                    {{ t("Logout", "ចាកចេញ") }}
                  </button>
                  <NuxtLink
                    v-else
                    to="/signin"
                    class="block px-4 py-3 text-sm font-medium text-blue-600 hover:bg-blue-50 w-full text-left"
                  >
                    {{ loginLabel }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>

      <!-- Mobile Navigation Menu - Only show on mobile when toggled -->
      <div
        v-if="showMobileMenu"
        class="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 md:hidden z-40"
      >
        <div class="px-4 py-4 space-y-4">
          <!-- Mobile Help -->
          <button
            class="flex items-center w-full px-3 py-3 rounded-lg hover:bg-gray-100 gap-3 text-gray-700"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="font-medium">Help</span>
          </button>

          <!-- Mobile Language -->
          <div>
            <button
              @click="toggleMobileLanguage"
              class="flex items-center justify-between w-full px-3 py-3 rounded-lg hover:bg-gray-100 text-gray-700"
            >
              <div class="flex items-center gap-3">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                <span class="font-medium"
                  >Language: {{ selectedLanguage }}</span
                >
              </div>
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div v-if="showMobileLanguage" class="ml-8 mt-2 space-y-1">
              <button
                @click="selectLanguage('En', 'en')"
                class="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
              >
                English
              </button>
              <button
                @click="selectLanguage('Kh', 'kh')"
                class="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
              >
                Khmer
              </button>
              <button
                @click="selectLanguage('中文', 'cn')"
                class="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
              >
                Chinese
              </button>
            </div>
          </div>

          <!-- Mobile Currency -->
          <div>
            <button
              @click="toggleMobileCurrency"
              class="flex items-center justify-between w-full px-3 py-3 rounded-lg hover:bg-gray-100 text-gray-700"
            >
              <div class="flex items-center gap-3">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
                <span class="font-medium"
                  >Currency: {{ selectedCurrency }}</span
                >
              </div>
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div v-if="showMobileCurrency" class="ml-8 mt-2 space-y-1">
              <button
                @click="selectCurrency('USD')"
                class="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
              >
                USD
              </button>
              <button
                @click="selectCurrency('KHR')"
                class="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
              >
                KHR
              </button>
            </div>
          </div>

          <!-- Mobile Account -->
          <div>
            <button
              @click="toggleMobileAccount"
              class="flex items-center justify-between w-full px-3 py-3 rounded-lg hover:bg-gray-100 text-gray-700"
            >
              <div class="flex items-center gap-3">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span class="font-medium">Account</span>
              </div>
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div v-if="showMobileAccount" class="ml-8 mt-2 space-y-1">
              <button
                @click="closeAllDropdowns"
                class="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
              >
                Cancel Ticket
              </button>
              <button
                @click="closeAllDropdowns"
                class="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
              >
                Change Travel Date
              </button>
              <button
                @click="closeAllDropdowns"
                class="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
              >
                Show My Ticket
              </button>
              <button
                @click="closeAllDropdowns"
                class="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
              >
                Email / SMS
              </button>
              <hr class="my-2 border-gray-200" />
              <button
                @click="closeAllDropdowns"
                class="block w-full text-left px-3 py-3 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded"
              >
                {{ loginLabel }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import Notification from "@/components/notification.vue";
import { setLanguage, language } from "@/plugins/translate";

// Desktop dropdowns
const showLanguageDropdown = ref(false);
const showCurrencyDropdown = ref(false);
const showAccountDropdown = ref(false);

// Mobile menu states
const showMobileMenu = ref(false);
const showMobileLanguage = ref(false);
const showMobileCurrency = ref(false);
const showMobileAccount = ref(false);

// Selected values
const selectedLanguage = ref("En");
const selectedCurrency = ref("USD");

const router = useRouter();

// Auth state
const isLoggedIn = computed(() => !!localStorage.getItem("access_token"));

const loginLabel = computed(() => {
  if (language.value === "kh") return "ចូលរួម";
  if (language.value === "zh") return "登录/注册";
  return "Login / Signup";
});

function logout() {
  localStorage.removeItem("access_token");
  // Optionally remove user info if stored
  router.push("/signin");
}

// Desktop dropdown toggles
const toggleLanguageDropdown = () => {
  showLanguageDropdown.value = !showLanguageDropdown.value;
  showCurrencyDropdown.value = false;
  showAccountDropdown.value = false;
};

const toggleCurrencyDropdown = () => {
  showCurrencyDropdown.value = !showCurrencyDropdown.value;
  showLanguageDropdown.value = false;
  showAccountDropdown.value = false;
};

const toggleAccountDropdown = () => {
  showAccountDropdown.value = !showAccountDropdown.value;
  showLanguageDropdown.value = false;
  showCurrencyDropdown.value = false;
};

// Mobile menu toggles
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
  if (!showMobileMenu.value) {
    showMobileLanguage.value = false;
    showMobileCurrency.value = false;
    showMobileAccount.value = false;
  }
};

const toggleMobileLanguage = () => {
  showMobileLanguage.value = !showMobileLanguage.value;
};

const toggleMobileCurrency = () => {
  showMobileCurrency.value = !showMobileCurrency.value;
};

const toggleMobileAccount = () => {
  showMobileAccount.value = !showMobileAccount.value;
};
const closeAllDropdowns = () => {
  showLanguageDropdown.value = false;
  showCurrencyDropdown.value = false;
  showAccountDropdown.value = false;
  showMobileMenu.value = false;
  showMobileLanguage.value = false;
  showMobileCurrency.value = false;
  showMobileAccount.value = false;
};
// Selection functions
const selectLanguage = (display, code) => {
  selectedLanguage.value = display;
  console.log("Selected language:", code);
  showLanguageDropdown.value = false;
  showMobileLanguage.value = false;
};

const selectCurrency = (currency) => {
  selectedCurrency.value = currency;
  if (typeof window !== "undefined") {
    localStorage.setItem("currency", currency);
  }
  showCurrencyDropdown.value = false;
  showMobileCurrency.value = false;
};

function changeLanguage(lang) {
  setLanguage(lang);
}

onMounted(() => {
  if (typeof window !== "undefined") {
    language.value = localStorage.getItem("language") || "en";
    window.addEventListener("language-changed", () => {
      language.value = localStorage.getItem("language") || "en";
    });
  }
  fetchNotifications();
  pollInterval = setInterval(fetchNotifications, 10000); // Poll every 10s
});

onUnmounted(() => {
  if (pollInterval) clearInterval(pollInterval);
});

const t = (en, kh) => {
  if (language.value === "kh") return kh;
  return en;
};

const currencyLabel = (currency) => {
  if (currency === "USD") return t("USD", "ដុល្លារ");
  if (currency === "KHR") return t("KHR", "រៀល");
  return currency;
};

const notifications = ref([]);
let pollInterval = null;

async function fetchNotifications() {
  try {
    const res = await fetch("http://localhost:8000/api/notifications");
    if (!res.ok) throw new Error("Failed to fetch notifications");
    const data = await res.json();
    // Map API data to notification component format
    notifications.value = (Array.isArray(data) ? data : [])
      .map((n) => ({
        id: n.id,
        text: n.title
          ? `${n.title}${n.description ? ": " + n.description : ""}`
          : n.description,
        read: false, // You may want to update this if your API supports read status
        created_at: n.created_at,
        image: n.image || null,
      }))
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  } catch (e) {
    // Optionally handle error
  }
}

function handleNotificationClick(msg) {
  msg.read = true;
}
function handleMarkAllRead() {
  notifications.value.forEach((m) => (m.read = true));
}
</script>

<style scoped>
.z-50 {
  z-index: 50;
}

.z-40 {
  z-index: 40;
}

@media (max-width: 768px) {
  .mobile-menu-enter-active,
  .mobile-menu-leave-active {
    transition: all 0.3s ease;
  }

  .mobile-menu-enter-from,
  .mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
