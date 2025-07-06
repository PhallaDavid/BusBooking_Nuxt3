<template>
  <div class="flex flex-row min-h-screen bg-red-400 gap-6 px-30 py-8">
    <div  class="flex flex-col">
        <HelpCenter />
    </div>
    <div  class=" pl-30 flex flex-col">
    <h1 class="text-6xl text-white font-bold mb-2">
        redBus Help
      </h1>
    <div class="flex flex-col items-start text-start w-full gap-4">


      <img class="w-120" src="/images/support.jpg" alt="Support Image" />

      <h1 class="text-3xl text-white font-bold mb-2">
        +855 98 456 000
      </h1>

      <h1 class="text-3xl text-white font-bold mb-2">
        support@redbus.com.kh
      </h1>

      <h1 class="text-2xl text-white mb-2">
        {{ t("Customer support available between 10AM–7PM, 7 days a week","ជំនួយអតិថិជនមាននៅចន្លោះម៉ោង 10 ព្រឹក ដល់ 7 យប់ 7 ថ្ងៃក្នុងមួយសប្តាហ៍") }}
      </h1>

    </div>
    </div>
  </div>
</template>

<script setup>
import HelpCenter from '~/components/help-center.vue'
import { ref } from "vue";
import { t, language } from "@/plugins/translate";
</script>
