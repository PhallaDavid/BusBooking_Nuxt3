<template>
  <div class="flex flex-row items-center justify-center px-4 py-8 min-h-screen">
    <div
      class="flex flex-row items-stretch bg-gray-50 rounded-lg w-full max-w-4xl"
    >
      <!-- Left: Image -->
      <div
        class="py-8 px-8 rounded-xl flex flex-col gap-6 items-center w-full max-w-md"
      >
        <h1
          class="text-2xl text-gray-700 font-bold flex items-center justify-center gap-2"
        >
          {{ t("Join Us!", "ចុះឈ្មោះ") }}
        </h1>
        <img
          src="/images/log-in.png"
          alt=""
          class="w-full h-full object-contain"
        />
      </div>
      <!-- Right: Form -->
      <div class="py-8 px-8 rounded-xl flex flex-col gap-6 w-full max-w-md">
        <h1
          class="text-2xl text-gray-700 font-bold flex items-center justify-center gap-2"
        >
          <font-awesome-icon
            :icon="faRightToBracket"
            class="text-red-500 w-6 h-6"
          />
          {{ t("Sign Up", "ចុះឈ្មោះ") }}
        </h1>
        <form class="flex flex-col gap-6" @submit.prevent="register">
          <div class="flex flex-col gap-2">
            <label class="text-lg text-gray-500" for="name">{{
              t("Name", "ឈ្មោះ")
            }}</label>
            <div class="relative">
              <span
                class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <font-awesome-icon :icon="faUser" class="w-5 h-5" />
                <i class="sc-bwzfXH iZnIzQ icon icon-src"></i>
              </span>
              <input
                id="name"
                v-model="name"
                class="bg-gray-100 text-gray-700 h-10 w-full rounded border border-transparent focus:border-red-500 focus:ring-1 focus:ring-red-300 px-10 transition"
                type="text"
                placeholder="Enter Your Name"
                autocomplete="username"
                required
              />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-lg text-gray-500" for="email">{{
              t("Email", "អ៊ីម៉ែល")
            }}</label>
            <div class="relative">
              <span
                class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <font-awesome-icon :icon="faUser" class="w-5 h-5" />
              </span>
              <input
                id="email"
                v-model="email"
                class="bg-gray-100 text-gray-700 h-10 w-full rounded border border-transparent focus:border-red-500 focus:ring-1 focus:ring-red-300 px-10 transition"
                type="email"
                placeholder="Enter Your Email"
                autocomplete="email"
                required
              />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-lg text-gray-500" for="password">{{
              t("Password", "ពាក្យសម្ងាត់")
            }}</label>
            <div class="relative">
              <span
                class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <font-awesome-icon :icon="faLock" class="w-5 h-5" />
              </span>
              <input
                id="password"
                v-model="password"
                class="bg-gray-100 text-gray-700 h-10 w-full rounded border border-transparent focus:border-red-500 focus:ring-1 focus:ring-red-300 px-10 transition"
                type="password"
                placeholder="Enter Your Password"
                autocomplete="new-password"
                required
              />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-lg text-gray-500" for="password_confirmation">{{
              t("Confirm Password", "បញ្ជាក់ពាក្យសម្ងាត់")
            }}</label>
            <div class="relative">
              <span
                class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <font-awesome-icon :icon="faLock" class="w-5 h-5" />
              </span>
              <input
                id="password_confirmation"
                v-model="password_confirmation"
                class="bg-gray-100 text-gray-700 h-10 w-full rounded border border-transparent focus:border-red-500 focus:ring-1 focus:ring-red-300 px-10 transition"
                type="password"
                placeholder="Confirm Your Password"
                autocomplete="new-password"
                required
              />
            </div>
          </div>
          <button
            class="w-full bg-red-500 h-10 rounded hover:bg-red-600 text-white font-bold transition flex items-center justify-center gap-2"
            :disabled="loading"
          >
            <font-awesome-icon :icon="faArrowRight" class="w-5 h-5" />
            <span v-if="!loading">{{ t("Sign Up", "ចុះឈ្មោះ") }}</span>
            <span v-else>{{ t("Registering...", "ក្មេងក្មេង...") }}</span>
          </button>
          <p v-if="error" class="text-red-500 text-center">{{ error }}</p>
          <p v-if="success" class="text-green-600 text-center">{{ success }}</p>
        </form>
        <p class="text-center">
          {{ t("Already have an account?", "មានអតិថិជនទេ?") }}
          <NuxtLink to="/signin" class="text-blue-600 hover:underline">{{
            t("Sign in now!", "ចុះឈ្មោះឥឡូវនេះ!")
          }}</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faLock,
  faArrowRight,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { t, language } from "@/plugins/translate";

const name = ref("");
const email = ref("");
const password = ref("");
const password_confirmation = ref("");
const error = ref("");
const success = ref("");
const loading = ref(false);
const router = useRouter();

async function register() {
  error.value = "";
  success.value = "";
  loading.value = true;
  try {
    const res = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: password_confirmation.value,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Registration failed");
    }
    success.value = "Registration successful! Redirecting to sign in...";
    setTimeout(() => router.push("/signin"), 1500);
  } catch (e) {
    error.value = e.message || "Registration failed";
  } finally {
    loading.value = false;
  }
}
</script>
