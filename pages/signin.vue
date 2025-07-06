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
          {{ t("Welcome Back!", "សូមស្វាគមន៍មកវិញ!") }}
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
          {{ t("Sign In", "ចូលគណនី") }}
        </h1>
        <form class="flex flex-col gap-6" @submit.prevent="login">
          <div class="flex flex-col gap-2">
            <label class="text-base text-gray-500" for="email">{{
              t("Email", "អីម៉ែល")
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
                class="bg-gray-100 text-gray-700 h-10 w-full rounded border border-transparent focus:border-red-500 focus:ring-1 focus:ring-red-300 px-10 transition text-sm"
                type="email"
                placeholder="Enter Your Email"
                autocomplete="email"
                required
              />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-base text-gray-500" for="password">{{
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
                class="bg-gray-100 text-gray-700 h-10 w-full rounded border border-transparent focus:border-red-500 focus:ring-1 focus:ring-red-300 px-10 transition text-sm"
                type="password"
                placeholder="Enter Your Password"
                autocomplete="current-password"
                required
              />
            </div>
          </div>
          <button
            class="w-full bg-red-500 h-10 rounded hover:bg-red-600 text-white font-bold transition flex items-center justify-center gap-2 text-sm"
            :disabled="loading"
          >
            <font-awesome-icon :icon="faArrowRight" class="w-5 h-5" />
            <span v-if="!loading">{{ t("Login", "ចូល") }}</span>
            <span v-else>{{ t("Logging in...", "កំពុងចូល...") }}</span>
          </button>
          <transition name="fade">
            <p
              v-if="error"
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-center text-sm font-medium shadow-sm animate-pulse"
            >
              {{ error }}
            </p>
          </transition>
          <transition name="fade">
            <p
              v-if="success"
              class="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded text-center text-sm font-medium shadow-sm animate-pulse"
            >
              {{ success }}
            </p>
          </transition>
        </form>
        <p class="text-center text-sm">
          {{ t("Don't have an account?", "អំពីមិនមានគណនីមែន") }}
          <NuxtLink to="/signup" class="text-blue-600 hover:underline">{{
            t("Sign up now!", "ចូលស្វាគមន៍មកវិញ")
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

const email = ref("");
const password = ref("");
const error = ref("");
const success = ref("");
const loading = ref(false);
const router = useRouter();

async function login() {
  error.value = "";
  success.value = "";
  loading.value = true;
  try {
    const res = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }
    if (data.token) {
      localStorage.setItem("auth_token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
    }
    success.value = "Login successful! Redirecting...";
    setTimeout(() => router.push("/"), 1500);
  } catch (e) {
    error.value = e.message || "Login failed";
  } finally {
    loading.value = false;
  }
}
</script>
