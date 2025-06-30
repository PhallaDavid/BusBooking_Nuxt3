<template>
    <div class="flex flex-col min-h-screen bg-gray-50">
        <h1 class="flex items-center justify-center text-3xl text-gray-700 font-bold mt-8 mb-4">
            Offers
        </h1>
        <div class="w-full  max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-3 px-4 py-8">
            <div v-for="(offer, idx) in offers" :key="idx" @click="openModal(offer)"
                class=" rounded self-end shadow-lg transform hover:scale-103 transition cursor-pointer py-2  flex flex-col items-center gap-4 hover:shadow-2xl transition">
                <div class="text-gray-500 pr-2 text-sm self-end w-full text-right">{{ offer.date }}</div>
                <img :src="offer.image" alt="Offer Image" class="w-full h-full object-cover shadow" />

                <div class="text-sm font-bold text-gray-500 text-center">{{ offer.promotion }}</div>
                <div class="text-gray-500 pr-2 text-sm self-end w-full text-right">Use code:{{ offer.code }}</div>

            </div>
        </div>
    </div>

    <div v-if="selectedOffer"
        class="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
            <button @click="openModal(null)" class="absolute top-2 right-5 "><font-awesome-icon :icon="['fas', 'xmark']"
                    class=" text-gray-500  hover:text-red-500" /></button>
            <h2 class="text-2xl font-bold mb-4 text-center text-gray-800">{{ selectedOffer.promotion }}</h2>
            <img :src="selectedOffer.image" alt="Modal Image" class="w-full h-52 object-cover rounded mb-4" />
            <p class="text-gray-600 mb-2">🗓️ Valid Until: {{ selectedOffer.date }}</p>
            <p class="text-gray-600 mb-2">🎁 Use Code: <span class="font-semibold">{{ selectedOffer.code }}</span></p>
            <p class="text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                Mauris tempus dui vel est placerat, ut sollicitudin magna feugiat.</p>
        </div>
    </div>
</template>

<script setup>
const selectedOffer = ref(null)

const openModal = (offer) => {
    selectedOffer.value = offer
}
const offers = [
    {
        image: "/images/a1.jpg",
        date: "Till: 30-Jun-2025",
        promotion: "Save up to 50%",
        code: "KHNEW"
    },
    {
        image: "/images/a2.jpg",
        date: "Till: 30-Jun-2025",
        promotion: "Save up to 50%",
        code: "KHNEW"
    },
    {
        image: "/images/a3.jpg",
        date: "Till: 30-Jun-2025",
        promotion: "Save up to 50%",
        code: "KHNEW"
    },
    {
        image: "/images/a4.jpg",
        date: "Till: 30-Jun-2025",
        promotion: "Save up to 50%",
        code: "KHNEW"
    },
    {
        image: "/images/a5.jpg",
        date: "Till: 30-Jun-2025",
        promotion: "Save up to 50%",
        code: "KHNEW"
    },
    {
        image: "/images/a6.jpg",
        date: "Till: 30-Jun-2025",
        promotion: "Save up to 50%",
        code: "KHNEW"
    },
    {
        image: "/images/a1.jpg",
        date: "Till: 30-Jun-2025",
        promotion: "Save up to 50%",
        code: "KHNEW"
    },
    {
        image: "/images/a1.jpg",
        date: "Till: 30-Jun-2025",
        promotion: "Save up to 50%",
        code: "KHNEW"
    },
    {
        image: "/images/a1.jpg",
        date: "Till: 30-Jun-2025",
        promotion: "Save up to 50%",
        code: "KHNEW"
    },

]
</script>