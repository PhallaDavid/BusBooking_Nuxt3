<template>
  <div class="w-screen h-screen col:12 sm:12 md:4 flex items-center justify-center">
    <div class="w-[1230px] rounded-4xl h-[450px] bg-red-400 flex flex-col">
      <p class="font-bold text-white text-2xl pt-8 pl-8">
        {{ t("Enjoy the app!", "រីករាយជាមួយកម្មវិធី!") }}
      </p>
      <div class="flex flex-row pl-10 pt-10">
        <div
          class="bg-white w-[350px] h-[300px] rounded-2xl flex flex-col items-center justify-center gap-6"
        >
          <div class="flex flex-col">
            <p class="text-gray-700 text-2xl font-bold">
              <font-awesome-icon
                :icon="['fas', 'circle-check']"
                class="pr-2 text-green-500"
              />
              {{ t("Quick access", "ចូលប្រើបានយ៉ាងឆាប់រហ័ស") }}
            </p>
            <p class="text-gray-700 text-2xl font-bold">
              <font-awesome-icon
                :icon="['fas', 'circle-check']"
                class="pr-2 text-green-500"
              />
              {{ t("Exclusive offers and", "ពិសេសសម្រាប់អ្នក និង") }}<br /><span
                class="text-gray-700 text-2xl font-bold pl-10"
                >{{ t("discounts", "ការបញ្ចុះតម្លៃ") }}</span
              >
            </p>
          </div>
          <div class="flex flex-row gap-4 col:12 sm:12 md:4 items-center jutify-center">
            <div class="flex flex-col">
              <h1 class="text-xl font-bold">
                45<font-awesome-icon :icon="['fas', 'star']" class="pl-2" />
              </h1>
              <p class="text-gray-600">
                {{ t("50M + download", "៥០លាន+ ដោនឡូដ") }}
              </p>
              <p class="text-gray-800 font-bold">
                {{ t("Play Store", "ហាង Play Store") }}
              </p>
            </div>
            <div class="flex flex-col">
              <h1 class="text-xl font-bold">
                46<font-awesome-icon :icon="['fas', 'star']" class="pl-2" />
              </h1>
              <p class="text-gray-600">
                {{ t("10M + download", "១០លាន+ ដោនឡូដ") }}
              </p>
              <p class="text-gray-800 font-bold">
                {{ t("App Store", "ហាង App Store") }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex-col flex pt-10 pl-15 gap-2">
          <p class="text-lg text-gray-100 font-bold">
            {{ t("Scan to", "ស្កេនដើម្បី") }} <br />
            {{ t("download", "ដោនឡូដ") }}
          </p>
          <img class="w-30 rounded-lg" src="/images/qr.jpg" alt="" />
        </div>
        <div class="flex-col flex pt-10 pl-15 gap-2">
          <p class="text-lg text-gray-100 font-bold">
            {{ t("download the", "ដោនឡូដ") }} <br />
            {{ t("App on", "កម្មវិធីនៅលើ") }}
          </p>
          <img class="h-13 rounded-lg" src="/images/google.jpg" alt="" />
          <img class="h-13 rounded-lg" src="/images/apple.jpg" alt="" />
        </div>
        <div class="flex-col flex col:12 sm:12 md:4 pl-30 pt-10 gap-2">
          <img
            class="h-[300px] w-full flex rounded-lg"
            src="/images/map.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { t, language } from "@/plugins/translate";
</script>
