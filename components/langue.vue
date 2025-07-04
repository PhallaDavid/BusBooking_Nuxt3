<template>
  <div class="flex items-center pt-50 justify-center">
    <div class="w-[1230px] gap-8 flex flex-col">
      <h2 class="text-2xl font-bold mb-4">
        {{ t("Partnered with", "ដៃគូជាមួយ") }}
      </h2>
      <div
        class="grid grid-cols-8 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="flex flex-col items-center"
        >
          <img :src="image" alt="Image" class="w-full h-full rounded-full" />
          <p class="mt-2 font-bold text-center text-gray-700">
            {{ t(names[index].en, names[index].kh) }}
          </p>
        </div>
      </div>
      <p class="text-4xl pt-50 text-gray-700 tracking-wider">
        {{
          t(
            "Bus Tickets Online Booking in Cambodia with redBus",
            "កក់សំបុត្ររថយន្តតាមអ៊ីនធឺណិតនៅកម្ពុជា ជាមួយ redBus"
          )
        }}
      </p>
      <p class="text-lg">
        {{
          t(
            `If someone were to inquire about the world's largest temple, a quick internet search would likely yield the answer "Angkor Wat". The temple is dedicated to the Hindu deity Lord Vishnu. However, Cambodia has much more to offer, and the best way to explore this beautiful country is by hopping on a bus and travelling from one destination to another. As the travel industry grows, more travel enthusiasts seek affordable transportation. With abundant options, reliable bus connections, well-maintained AC and budget-friendly coaches, bus travel becomes every traveller's ideal mode of transportation. Recently, online bus ticket booking has become popular among international tourists. Numerous bus operators within the country provide a wide range of routes to accommodate travellers' needs, and one of the leading online bus ticket booking services in Cambodia is redBus.`,
            'បើមាននរណាម្នាក់សួរអំពីប្រាសាទធំបំផុតនៅលើពិភពលោក ការស្វែងរកតាមអ៊ីនធឺណិតនឹងឆ្លើយថា "អង្គរវត្ត"។ ប៉ុន្តែប្រទេសកម្ពុជាមានអ្វីៗជាច្រើនទៀតដែលគួរឱ្យស្វែងយល់ ហើយវិធីល្អបំផុតក្នុងការធ្វើដំណើររុករកប្រទេសនេះគឺជិះរថយន្តពីទីក្រុងមួយទៅទីក្រុងមួយ។ ឧស្សាហកម្មទេសចរណ៍កំពុងរីកចម្រើន ដូច្នេះអ្នកស្រឡាញ់ធ្វើដំណើរច្រើនក៏ស្វែងរកការដឹកជញ្ជូនដែលមានតម្លៃសមរម្យ។ ជាមួយនឹងជម្រើសជាច្រើន ការតភ្ជាប់រថយន្តដែលទុកចិត្តបាន រថយន្តមានម៉ាស៊ីនត្រជាក់ និងតម្លៃសមរម្យ ការធ្វើដំណើរដោយរថយន្តក្លាយជាជម្រើសល្អបំផុតសម្រាប់អ្នកធ្វើដំណើរ។ ថ្មីៗនេះ ការកក់សំបុត្ររថយន្តតាមអ៊ីនធឺណិតកំពុងពេញនិយមក្នុងចំណោមភ្ញៀវទេសចរអន្តរជាតិ។ មានក្រុមហ៊ុនដឹកជញ្ជូនជាច្រើនផ្តល់សេវាកម្មផ្លូវដឹកជញ្ជូនជាច្រើនដើម្បីបំពេញតម្រូវការអ្នកធ្វើដំណើរ ហើយ redBus គឺជាវេបសាយកក់សំបុត្ររថយន្តតាមអ៊ីនធឺណិតដ៏ល្បីមួយនៅកម្ពុជា។'
          )
        }}
      </p>
      <p class="text-3xl font-bold text-gray-800">
        {{
          t(
            "Why Choose redBus for Bus Booking Cambodia?",
            "ហេតុអ្វីជ្រើសរើស redBus សម្រាប់កក់សំបុត្ររថយន្តនៅកម្ពុជា?"
          )
        }}
      </p>
      <p class="text-lg">
        {{
          t(
            "If you are a meticulous, on-budget traveller, consider booking bus tickets at online platforms like redBus for convenience, transparency, and the best deals.",
            "បើអ្នកជាអ្នកធ្វើដំណើរដែលចូលចិត្តគ្រប់គ្រងថវិកា សូមពិចារណាកក់សំបុត្ររថយន្តតាមវេបសាយដូចជា redBus ដើម្បីទទួលបានភាពងាយស្រួល ភាពច្បាស់លាស់ និងការបញ្ចុះតម្លៃល្អបំផុត។"
          )
        }}
        <span class="text-blue-500 text-lg">{{
          t("Read more", "អានបន្ថែម")
        }}</span>
      </p>
    </div>
  </div>
</template>
<script setup>
import { t, language } from "@/plugins/translate";
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
  { en: "RedBus", kh: "រថយន្តក្រហម" },
  { en: "RedBus", kh: "រថយន្តក្រហម" },
  { en: "RedBus", kh: "រថយន្តក្រហម" },
  { en: "RedBus", kh: "រថយន្តក្រហម" },
  { en: "RedBus", kh: "រថយន្តក្រហម" },
  { en: "RedBus", kh: "រថយន្តក្រហម" },
  { en: "RedBus", kh: "រថយន្តក្រហម" },
  { en: "RedBus", kh: "រថយន្តក្រហម" },
];
</script>
