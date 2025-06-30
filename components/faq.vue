<template>
    <div class="min-h-screen ">
        <!-- Header -->
        <div class="max-w-7xl mx-auto px-6 py-12">
            <h1 class="text-4xl md:text-5xl font-light text-gray-800 mb-12">FAQs</h1>

            <!-- Tab Navigation -->
            <div class="border-b border-gray-200 mb-12">
                <nav class="flex space-x-8 overflow-x-auto">
                    <button v-for="(tab, index) in tabs" :key="index" @click="activeTab = index"
                        class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors" :class="{
                            'border-red-500 text-red-600': activeTab === index,
                            'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300': activeTab !== index
                        }">
                        {{ tab.name }}
                    </button>
                </nav>
            </div>

            <!-- FAQ Content -->
            <div class="max-w-6xl">
                <div class="space-y-4">
                    <div v-for="(faq, index) in tabs[activeTab].faqs" :key="index"
                        class="border-b border-gray-100 last:border-b-0">
                        <button @click="toggleFaq(index)"
                            class="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50 transition-colors">
                            <h3 class="text-lg font-medium text-gray-800 pr-8">
                                {{ faq.question }}
                            </h3>
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 text-gray-400 transition-transform"
                                    :class="{ 'rotate-45': openFaqs.includes(index) }" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                        </button>

                        <div v-if="openFaqs.includes(index)" class="pb-6 pr-8 text-gray-600 leading-relaxed">
                            {{ faq.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)
const openFaqs = ref([])

const tabs = [
    {
        name: 'General',
        faqs: [
            {
                question: 'How to book bus ticket online for travel within Cambodia?',
                answer: 'To book a bus ticket online for travel within Cambodia, visit our website or mobile app, enter your departure and destination cities, select your travel date, choose from available buses, select your preferred seats, and complete the payment process. Your ticket will be generated immediately after successful payment.'
            },
            {
                question: 'Why book bus tickets online on redBus?',
                answer: 'Booking bus tickets online on redBus offers numerous advantages including 24/7 availability, real-time seat availability, secure payment options, instant ticket generation, easy cancellation and refund process, and access to exclusive deals and discounts. You can also compare different bus operators and choose the best option for your journey.'
            },
            {
                question: 'Does my bus ticket get generated immediately?',
                answer: 'Yes, your bus ticket is generated immediately after successful payment. You will receive your e-ticket via email and SMS, which you can also download from your account. The e-ticket contains all necessary details including your seat number, boarding point, and journey information.'
            },
            {
                question: 'How does redBus online booking present a comprehensive overview of different bus journeys to customers?',
                answer: 'redBus provides a comprehensive overview by displaying all available buses for your route with detailed information including departure and arrival times, bus types, amenities, seat availability, pricing, customer ratings and reviews, boarding and dropping points, and journey duration. This helps you make an informed decision based on your preferences and budget.'
            }
        ]
    },
    {
        name: 'Payments',
        faqs: [
            {
                question: 'What payment methods are accepted?',
                answer: 'We accept various payment methods including credit cards, debit cards, net banking, digital wallets, and UPI payments. All transactions are secured with industry-standard encryption.'
            },
            {
                question: 'Is it safe to make payments online?',
                answer: 'Yes, all payments on redBus are completely secure. We use SSL encryption and comply with PCI DSS standards to ensure your payment information is protected.'
            },
            {
                question: 'Can I pay in installments?',
                answer: 'Currently, we do not offer installment payment options. Full payment is required at the time of booking to confirm your reservation.'
            }
        ]
    },
    {
        name: 'redBus Wallet',
        faqs: [
            {
                question: 'What is redBus Wallet?',
                answer: 'redBus Wallet is a digital wallet that allows you to store money for quick and easy bus ticket bookings. You can add money to your wallet and use it for future bookings.'
            },
            {
                question: 'How do I add money to my redBus Wallet?',
                answer: 'You can add money to your redBus Wallet through various payment methods including credit/debit cards, net banking, or UPI. Simply go to your wallet section and choose "Add Money".'
            },
            {
                question: 'Is there an expiry date for wallet money?',
                answer: 'No, the money in your redBus Wallet does not expire. You can use it anytime for your future bookings.'
            }
        ]
    },
    {
        name: 'Payments and Refunds',
        faqs: [
            {
                question: 'How long does it take to process refunds?',
                answer: 'Refunds are typically processed within 5-7 business days from the date of cancellation. The exact time may vary depending on your bank or payment method.'
            },
            {
                question: 'Will I get a full refund if I cancel my ticket?',
                answer: 'Refund amount depends on the cancellation policy of the bus operator and the time of cancellation. Cancellation charges may apply as per the operator\'s terms and conditions.'
            },
            {
                question: 'Can I get a refund if the bus is cancelled?',
                answer: 'Yes, if the bus is cancelled by the operator, you will receive a full refund. The refund will be processed automatically to your original payment method.'
            }
        ]
    },
    {
        name: 'Promo Codes',
        faqs: [
            {
                question: 'How do I use a promo code?',
                answer: 'During the payment process, you will find a "Promo Code" field. Enter your promo code there and click "Apply" to get the discount on your booking.'
            },
            {
                question: 'Can I use multiple promo codes on one booking?',
                answer: 'No, only one promo code can be used per booking. Choose the promo code that gives you the maximum benefit.'
            },
            {
                question: 'Why is my promo code not working?',
                answer: 'Promo codes may not work due to various reasons such as expiry, minimum booking amount not met, route restrictions, or the code being already used. Please check the terms and conditions of the promo code.'
            }
        ]
    },
    {
        name: 'Travel Information',
        faqs: [
            {
                question: 'What documents do I need to carry while traveling?',
                answer: 'You need to carry a valid government-issued photo ID along with your e-ticket. For international routes, passport and visa may be required.'
            },
            {
                question: 'Can I change my boarding point after booking?',
                answer: 'Boarding point changes may be allowed depending on the bus operator\'s policy. Contact customer support or check with the operator directly for boarding point modifications.'
            },
            {
                question: 'What is the baggage allowance?',
                answer: 'Baggage allowance varies by bus operator. Generally, you can carry one piece of luggage up to 20kg and one small handbag. Check with your specific operator for exact limits.'
            }
        ]
    },
    {
        name: 'International Tourist in Cambodia',
        faqs: [
            {
                question: 'Do I need special documents as an international tourist?',
                answer: 'Yes, international tourists need a valid passport and appropriate visa to travel within Cambodia. Some nationalities may get visa on arrival or e-visa.'
            },
            {
                question: 'Are there any restrictions for international tourists?',
                answer: 'International tourists should follow local laws and regulations. Some areas may have travel restrictions, so it\'s advisable to check current travel advisories.'
            },
            {
                question: 'Can I book tickets without a local phone number?',
                answer: 'Yes, you can book tickets using your international phone number. Make sure to provide accurate contact information for booking confirmations.'
            }
        ]
    }
]

const toggleFaq = (index) => {
    const faqIndex = openFaqs.value.indexOf(index)
    if (faqIndex > -1) {
        openFaqs.value.splice(faqIndex, 1)
    } else {
        openFaqs.value.push(index)
    }
}
</script>

<style scoped>
/* Custom scrollbar for tab navigation */
nav::-webkit-scrollbar {
    height: 4px;
}

nav::-webkit-scrollbar-track {
    background: #f1f1f1;
}

nav::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 2px;
}

nav::-webkit-scrollbar-thumb:hover {
    background: #a1a1a1;
}
</style>