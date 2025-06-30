<template>
  <div class="flex items-center pt-50 justify-center">
    <div class="w-[1230px] gap-8 flex flex-col">
      <p class="text-3xl font-bold text-gray-700">Global presence</p>
      <div class="grid grid-cols-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        <div v-for="(image, index) in images" :key="index" class="flex  flex-col items-center">
          <img :src="image" alt="Image" class=" w-full h-full rounded-full" />
          <p class="mt-2 font-bold  text-center text-gray-700">{{ names[index] }}</p>
        </div>
      </div>
      <p class="text-4xl  pt-50 text-gray-700 tracking-wider ">Bus Tickets Online Booking in Cambodia with redBus</p>
      <p class=" text-lg  " >If someone were to inquire about the world's largest temple, a quick internet search would likely yield the answer "Angkor Wat". The temple  <br> is dedicated to the br Hindu deity Lord Vishnu. However, Cambodia has much more to offer, and the best way to explore this beautiful country is by <br> hopping on a bus and travelling from one destination to another. <br>

As the travel industry grows, more travel enthusiasts seek affordable transportation. <br> With abundant options, reliable bus connections, well-maintained <br> AC and budget-friendly coaches, bus travel becomes every traveller's ideal mode of transportation.

Recently, online bus ticket booking has become popular among international tourists. Numerous bus operators within the country provide a wide <br> range of routes to accommodate travellers' needs, and one of the leading online bus ticket booking services in Cambodia is redBus.</p>
<p class="text-3xl font-bold text-gray-800" >Why Choose redBus for Bus Booking Cambodia?</p>
<p class="text-lg" >If you are a meticulous, on-budget traveller, consider booking bus tickets at online platforms l... <span class="text-blue-500 text-lg " >Read more</span></p>
    </div>
  </div>
</template>
<script setup>
const images = [
  "/images/cam.jpg",
  "/images/cam.jpg",
  "/images/cam.jpg",  
  "/images/cam.jpg",
  "/images/cam.jpg",
  "/images/cam.jpg",
  "/images/cam.jpg",
  "/images/16.jpg",
];
const names = [ 
  "RedBus",
  "RedBus",
  "RedBus",
  "RedBus",
  "RedBus",
  "RedBus",
  "RedBus",
  "RedBus",
];
</script>