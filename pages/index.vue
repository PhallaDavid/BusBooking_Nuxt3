<template>
  <NuxtLayout />
  <div class="flex flex-col gap-8 md:gap-12 bg-gray-50">
    <section>
      <Banner />
    </section>
    <section class="px-2 md:px-0">
      <EnjoyApp />
    </section>
    <section class="px-2 md:px-0">
      <Card />
    </section>
    <section class="px-2 md:px-0">
      <Partner />
    </section>
    <section class="px-2 md:px-0">
      <Langue />
    </section>
    <section class="px-2 md:px-0">
      <Faq />
    </section>
  </div>
</template>

<script setup>
import Banner from "@/components/banner/banner.vue";
import Faq from "@/components/faq.vue";
import Card from "@/components/card.vue";
import EnjoyApp from "@/components/enjoy_app.vue";
import Partner from "~/components/partner.vue";
import Langue from "~/components/langue.vue";
</script>