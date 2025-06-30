<script setup lang="ts">
import { NuxtLink } from '#components';

</script>

<template>

  <div class="flex justify-center bg-gray-100 w-full">
    <div class="w-full max-w-[1250px] p-6 flex flex-col gap-10">
      
      <!-- Top Section -->
      <div class="flex flex-col lg:flex-row justify-between gap-10">
        <div class="grid grid-cols-5   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full text-sm text-gray-800">

          <!-- Logo and Description -->
          <div class="flex flex-col gap-2">
            <img class="w-16 h-16 md:w-20 md:h-20 rounded-lg" src="/images/logo1.jpg" alt="RedBus Logo" />
            <p class="text-gray-700 text-sm leading-relaxed">
              redBus is the world's largest online<br />
              bus ticket booking service trusted by<br />
              over 56+ million happy customers<br />
              globally. redBus offers bus ticket<br />
              booking through its website, iOS and<br />
              Android mobile apps for all major routes.
            </p>
          </div>

          <!-- About redBus -->
          <div class="flex flex-col gap-2">
            <p class="font-bold text-xl">About redBus</p>
            <nuxt-link to="/about_us">About us</nuxt-link>
            <nuxt-link to="/contact_us">Contact us</nuxt-link>
            <NuxtLink  to="/">Mobile version</NuxtLink>
            <nuxt-link to="/partner">Offers</nuxt-link>
          </div>

          <!-- Information -->
          <div class="flex flex-col gap-2">
            <p class="font-bold text-xl">Information</p>
            <p>FAQ</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Bus operators</p>
          </div>

          <!-- Explore -->
          <div class="flex flex-col gap-2">
            <p class="font-bold text-xl">Explore</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Newsroom</p>
            <nuxt-link to="/explore">Partners</nuxt-link>
          </div>

          <!-- Connect -->
          <div class="flex flex-col gap-2">
            <p class="font-bold text-xl">Connect</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Help Center</p>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <hr class="border-t border-gray-300" />

      <!-- Bottom Section -->
      <div class="text-center text-sm text-gray-600">
        &copy; 2025 redBus. All rights reserved.
      </div>

    </div>
  </div>
</template>
