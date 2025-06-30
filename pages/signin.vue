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
          Welcome Back!
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
          Sign In
        </h1>
        <div class="flex flex-col gap-2">
          <label class="text-lg text-gray-500" for="name">Name</label>
          <div class="relative">
            <span
              class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <font-awesome-icon :icon="faUser" class="w-5 h-5" />
            </span>
            <input
              id="name"
              class="bg-gray-100 text-gray-700 h-10 w-full rounded border border-transparent focus:border-red-500 focus:ring-1 focus:ring-red-300 px-10 transition"
              type="text"
              placeholder="Enter Your Name"
              autocomplete="username"
            />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-lg text-gray-500" for="password">Password</label>
          <div class="relative">
            <span
              class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <font-awesome-icon :icon="faLock" class="w-5 h-5" />
            </span>
            <input
              id="password"
              class="bg-gray-100 text-gray-700 h-10 w-full rounded border border-transparent focus:border-red-500 focus:ring-1 focus:ring-red-300 px-10 transition"
              type="password"
              placeholder="Enter Your Password"
              autocomplete="current-password"
            />
          </div>
        </div>
        <button
          class="w-full bg-red-500 h-10 rounded hover:bg-red-600 text-white font-bold transition flex items-center justify-center gap-2"
        >
          <font-awesome-icon :icon="faArrowRight" class="w-5 h-5" />
          Login
        </button>
        <p class="text-center">
          Don't have an account?
          <NuxtLink to="/signup" class="text-blue-600 hover:underline"
            >Sign up now!</NuxtLink
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faLock,
  faArrowRight,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
</script>
