<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="max-w-7xl mx-auto px-6 py-12">
      <h1 class="text-4xl md:text-5xl font-light text-gray-800 mb-12">
        {{ t("FAQs", "សំណួរញឹកញាប់") }}
      </h1>

      <!-- Tab Navigation -->
      <div class="border-b border-gray-200 mb-12">
        <nav class="flex space-x-8 overflow-x-auto">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            @click="activeTab = index"
            class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors"
            :class="{
              'border-red-500 text-red-600': activeTab === index,
              'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300':
                activeTab !== index,
            }"
          >
            {{ t(tab.name.en, tab.name.kh) }}
          </button>
        </nav>
      </div>

      <!-- FAQ Content -->
      <div class="max-w-6xl">
        <div class="space-y-4">
          <div
            v-for="(faq, index) in tabs[activeTab].faqs"
            :key="index"
            class="border-b border-gray-100 last:border-b-0"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50 transition-colors"
            >
              <h3 class="text-lg font-medium text-gray-800 pr-8">
                {{ t(faq.question.en, faq.question.kh) }}
              </h3>
              <div class="flex-shrink-0">
                <svg
                  class="w-6 h-6 text-gray-400 transition-transform"
                  :class="{ 'rotate-45': openFaqs.includes(index) }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </button>

            <div
              v-if="openFaqs.includes(index)"
              class="pb-6 pr-8 text-gray-600 leading-relaxed"
            >
              {{ t(faq.answer.en, faq.answer.kh) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { t, language } from "@/plugins/translate";

const activeTab = ref(0);
const openFaqs = ref([]);

const tabs = [
  {
    name: { en: "General", kh: "ទូទៅ" },
    faqs: [
      {
        question: {
          en: "How to book bus ticket online for travel within Cambodia?",
          kh: "តើធ្វើដូចម្តេចដើម្បីកក់សំបុត្ររថយន្តតាមអ៊ីនធឺណិតសម្រាប់ធ្វើដំណើរនៅក្នុងប្រទេសកម្ពុជា?"
        },
        answer: {
          en: "To book a bus ticket online for travel within Cambodia, visit our website or mobile app, enter your departure and destination cities, select your travel date, choose from available buses, select your preferred seats, and complete the payment process. Your ticket will be generated immediately after successful payment.",
          kh: "ដើម្បីកក់សំបុត្ររថយន្តតាមអ៊ីនធឺណិតសម្រាប់ធ្វើដំណើរនៅក្នុងប្រទេសកម្ពុជា សូមចូលទៅកាន់គេហទំព័រ ឬកម្មវិធីទូរស័ព្ទរបស់យើង បញ្ចូលទីក្រុងចេញ និងទីក្រុងដំណើរ ជ្រើសរើសថ្ងៃធ្វើដំណើរ ជ្រើសរើសរថយន្ត និងកន្លែងអង្គុយ រួចបង់ប្រាក់។ សំបុត្ររបស់អ្នកនឹងត្រូវបង្កើតភ្លាមៗបន្ទាប់ពីបង់ប្រាក់ជោគជ័យ។"
        }
      },
      {
        question: {
          en: "Why book bus tickets online on redBus?",
          kh: "ហេតុអ្វីកក់សំបុត្ររថយន្តតាមអ៊ីនធឺណិតនៅលើ redBus?"
        },
        answer: {
          en: "Booking bus tickets online on redBus offers numerous advantages including 24/7 availability, real-time seat availability, secure payment options, instant ticket generation, easy cancellation and refund process, and access to exclusive deals and discounts. You can also compare different bus operators and choose the best option for your journey.",
          kh: "ការកក់សំបុត្ររថយន្តតាមអ៊ីនធឺណិតនៅលើ redBus មានអត្ថប្រយោជន៍ជាច្រើន រួមមានភាពងាយស្រួល ២៤/៧ មានកន្លែងអង្គុយនៅពេលពិត ជម្រើសបង់ប្រាក់មានសុវត្ថិភាព បង្កើតសំបុត្រភ្លាមៗ ការបោះបង់ និងសំណើរសុំប្រាក់ត្រឡប់ងាយស្រួល និងមានការបញ្ចុះតម្លៃពិសេស។ អ្នកអាចប្រៀបធៀបក្រុមហ៊ុនដឹកជញ្ជូននានា និងជ្រើសរើសជម្រើសល្អបំផុតសម្រាប់ដំណើររបស់អ្នក។"
        }
      },
      {
        question: {
          en: "Does my bus ticket get generated immediately?",
          kh: "តើសំបុត្ររបស់ខ្ញុំត្រូវបានបង្កើតភ្លាមៗទេ?"
        },
        answer: {
          en: "Yes, your bus ticket is generated immediately after successful payment. You will receive your e-ticket via email and SMS, which you can also download from your account. The e-ticket contains all necessary details including your seat number, boarding point, and journey information.",
          kh: "បាទ/ចាស សំបុត្ររបស់អ្នកនឹងត្រូវបានបង្កើតភ្លាមៗបន្ទាប់ពីបង់ប្រាក់ជោគជ័យ។ អ្នកនឹងទទួលបានសំបុត្រតាមអ៊ីមែល និងសារ SMS ហើយអាចទាញយកពីគណនីរបស់អ្នកផងដែរ។ សំបុត្រអេឡិចត្រូនិចនេះមានព័ត៌មានទាំងអស់ដូចជាលេខកន្លែងអង្គុយ ចំណុចឡើង និងព័ត៌មានដំណើរ។"
        }
      },
      {
        question: {
          en: "How does redBus online booking present a comprehensive overview of different bus journeys to customers?",
          kh: "តើការកក់តាម redBus បង្ហាញព័ត៌មានលម្អិតអំពីដំណើររថយន្ត?"
        },
        answer: {
          en: "redBus provides a comprehensive overview by displaying all available buses for your route with detailed information including departure and arrival times, bus types, amenities, seat availability, pricing, customer ratings and reviews, boarding and dropping points, and journey duration. This helps you make an informed decision based on your preferences and budget.",
          kh: "redBus បង្ហាញព័ត៌មានលម្អិតអំពីដំណើររថយន្តទាំងអស់សម្រាប់ផ្លូវដែលអ្នកជ្រើសរើស ដូចជា ម៉ោងចេញ និងមកដល់ ប្រភេទរថយន្ត សេវាកម្មបន្ថែម កន្លែងអង្គុយ តម្លៃ ពិន្ទុ និងមតិអតិថិជន ចំណុចឡើង និងចុះ និងរយៈពេលដំណើរ។ នេះជួយឲ្យអ្នកសម្រេចចិត្តបានត្រឹមត្រូវតាមចំណង់ចំណូលចិត្ត និងថវិកា។"
        }
      }
    ]
  },
  {
    name: { en: "Payments", kh: "ការទូទាត់" },
    faqs: [
      {
        question: {
          en: "What payment methods are accepted?",
          kh: "តើមានវិធីបង់ប្រាក់អ្វីខ្លះដែលអាចប្រើបាន?"
        },
        answer: {
          en: "We accept various payment methods including credit cards, debit cards, net banking, digital wallets, and UPI payments. All transactions are secured with industry-standard encryption.",
          kh: "យើងទទួលយកវិធីបង់ប្រាក់ជាច្រើន រួមមាន កាតឥណទាន កាតឥណពន្ធ បង់តាមធនាគារ អេវ៉ាឡិត និង UPI។ ប្រតិបត្តិការទាំងអស់មានសុវត្ថិភាពខ្ពស់។"
        }
      },
      {
        question: {
          en: "Is it safe to make payments online?",
          kh: "តើការបង់ប្រាក់តាមអ៊ីនធឺណិតមានសុវត្ថិភាពទេ?"
        },
        answer: {
          en: "Yes, all payments on redBus are completely secure. We use SSL encryption and comply with PCI DSS standards to ensure your payment information is protected.",
          kh: "បាទ/ចាស ការទូទាត់ទាំងអស់នៅលើ redBus មានសុវត្ថិភាពយ៉ាងខ្លាំង។ យើងប្រើការអ៊ិនគ្រីប SSL និងគោរពតាមស្តង់ដារ PCI DSS ដើម្បីការពារព័ត៌មានទូទាត់របស់អ្នក។"
        }
      },
      {
        question: {
          en: "Can I pay in installments?",
          kh: "តើខ្ញុំអាចបង់ប្រាក់ជាបន្តបន្ទាប់បានទេ?"
        },
        answer: {
          en: "Currently, we do not offer installment payment options. Full payment is required at the time of booking to confirm your reservation.",
          kh: "បច្ចុប្បន្ន យើងមិនមានជម្រើសបង់ប្រាក់ជាបន្តបន្ទាប់ទេ។ ត្រូវបង់ប្រាក់ពេញលេញនៅពេលកក់ដើម្បីបញ្ជាក់ការកក់។"
        }
      }
    ]
  },
  {
    name: { en: "redBus Wallet", kh: "កាបូប redBus" },
    faqs: [
      {
        question: {
          en: "What is redBus Wallet?",
          kh: "redBus Wallet គឺជាកាបូបឌីជីថលសម្រាប់កក់សំបុត្ររថយន្តយ៉ាងឆាប់រហ័ស។"
        },
        answer: {
          en: "redBus Wallet is a digital wallet that allows you to store money for quick and easy bus ticket bookings. You can add money to your wallet and use it for future bookings.",
          kh: "កាបូប redBus គឺជាកាបូបឌីជីថលដែលអាចផ្ទុកប្រាក់សម្រាប់កក់សំបុត្ររថយន្តយ៉ាងឆាប់រហ័ស។ អ្នកអាចបន្ថែមប្រាក់ និងប្រើសម្រាប់ការកក់ពេលក្រោយ។"
        }
      },
      {
        question: {
          en: "How do I add money to my redBus Wallet?",
          kh: "តើធ្វើដូចម្តេចដើម្បីបន្ថែមប្រាក់ទៅកាន់កាបូប redBus?"
        },
        answer: {
          en: "You can add money to your redBus Wallet through various payment methods including credit/debit cards, net banking, or UPI. Simply go to your wallet section and choose 'Add Money'.",
          kh: "អ្នកអាចបន្ថែមប្រាក់ទៅកាន់កាបូប redBus តាមរយៈវិធីបង់ប្រាក់ផ្សេងៗ ដូចជា កាតឥណទាន កាតឥណពន្ធ បង់តាមធនាគារ ឬ UPI។ គ្រាន់តែចូលទៅកាន់ផ្នែកកាបូបរបស់អ្នក ហើយជ្រើសរើស 'បន្ថែមប្រាក់'។"
        }
      },
      {
        question: {
          en: "Is there an expiry date for wallet money?",
          kh: "តើប្រាក់ក្នុងកាបូបមានថ្ងៃផុតកំណត់ទេ?"
        },
        answer: {
          en: "No, the money in your redBus Wallet does not expire. You can use it anytime for your future bookings.",
          kh: "ទេ ប្រាក់ក្នុងកាបូប redBus របស់អ្នកមិនមានថ្ងៃផុតកំណត់ទេ។ អ្នកអាចប្រើវានៅពេលណាក៏បានសម្រាប់ការកក់ពេលក្រោយ។"
        }
      }
    ]
  },
  {
    name: { en: "Payments and Refunds", kh: "ការទូទាត់ និងសំណើរសុំប្រាក់ត្រឡប់" },
    faqs: [
      {
        question: {
          en: "How long does it take to process refunds?",
          kh: "តើត្រូវចំណាយពេលប៉ុន្មានថ្ងៃដើម្បីដំណើរការសំណើរសុំប្រាក់ត្រឡប់?"
        },
        answer: {
          en: "Refunds are typically processed within 5-7 business days from the date of cancellation. The exact time may vary depending on your bank or payment method.",
          kh: "សំណើរសុំប្រាក់ត្រឡប់ភាគច្រើនត្រូវបានដំណើរការនៅក្នុងរយៈពេល ៥-៧ ថ្ងៃធ្វើការ ចាប់ពីថ្ងៃបោះបង់។ ពេលវេលាពិតប្រាកដអាចខុសគ្នាដោយផ្អែកលើធនាគារ ឬវិធីបង់ប្រាក់របស់អ្នក។"
        }
      },
      {
        question: {
          en: "Will I get a full refund if I cancel my ticket?",
          kh: "តើខ្ញុំអាចទទួលបានប្រាក់ត្រឡប់ពេញលេញបើបោះបង់សំបុត្រ?"
        },
        answer: {
          en: "Refund amount depends on the cancellation policy of the bus operator and the time of cancellation. Cancellation charges may apply as per the operator's terms and conditions.",
          kh: "ចំនួនប្រាក់ត្រឡប់អាស្រ័យលើគោលការណ៍បោះបង់របស់ក្រុមហ៊ុនដឹកជញ្ជូន និងពេលវេលាបោះបង់។ អាចមានការកាត់ថ្លៃបោះបង់តាមលក្ខខណ្ឌរបស់ក្រុមហ៊ុន។"
        }
      },
      {
        question: {
          en: "Can I get a refund if the bus is cancelled?",
          kh: "តើខ្ញុំអាចទទួលបានប្រាក់ត្រឡប់បើរថយន្តត្រូវបានបោះបង់ទេ?"
        },
        answer: {
          en: "Yes, if the bus is cancelled by the operator, you will receive a full refund. The refund will be processed automatically to your original payment method.",
          kh: "បាទ/ចាស ប្រសិនបើរថយន្តត្រូវបានបោះបង់ដោយក្រុមហ៊ុន អ្នកនឹងទទួលបានប្រាក់ត្រឡប់ពេញលេញ។ សំណើរសុំប្រាក់ត្រឡប់នឹងត្រូវដំណើរការដោយស្វ័យប្រវត្តិទៅវិធីបង់ប្រាក់ដើម។"
        }
      }
    ]
  },
  {
    name: { en: "Promo Codes", kh: "កូដបញ្ចុះតម្លៃ" },
    faqs: [
      {
        question: {
          en: "How do I use a promo code?",
          kh: "តើធ្វើដូចម្តេចដើម្បីប្រើកូដបញ្ចុះតម្លៃ?"
        },
        answer: {
          en: "During the payment process, you will find a 'Promo Code' field. Enter your promo code there and click 'Apply' to get the discount on your booking.",
          kh: "នៅពេលបង់ប្រាក់ អ្នកនឹងឃើញវាល 'កូដបញ្ចុះតម្លៃ'។ បញ្ចូលកូដរបស់អ្នក ហើយចុច 'អនុវត្ត' ដើម្បីទទួលបានការបញ្ចុះតម្លៃ។"
        }
      },
      {
        question: {
          en: "Can I use multiple promo codes on one booking?",
          kh: "តើខ្ញុំអាចប្រើកូដបញ្ចុះតម្លៃច្រើនលើការកក់មួយបានទេ?"
        },
        answer: {
          en: "No, only one promo code can be used per booking. Choose the promo code that gives you the maximum benefit.",
          kh: "ទេ អ្នកអាចប្រើបានតែ១កូដបញ្ចុះតម្លៃក្នុងការកក់មួយ។ សូមជ្រើសរើសកូដដែលផ្តល់អត្ថប្រយោជន៍ច្រើនបំផុត។"
        }
      },
      {
        question: {
          en: "Why is my promo code not working?",
          kh: "ហេតុអ្វីកូដបញ្ចុះតម្លៃរបស់ខ្ញុំមិនដំណើរការទេ?"
        },
        answer: {
          en: "Promo codes may not work due to various reasons such as expiry, minimum booking amount not met, route restrictions, or the code being already used. Please check the terms and conditions of the promo code.",
          kh: "កូដបញ្ចុះតម្លៃអាចមិនដំណើរការដោយហេតុផលផ្សេងៗដូចជា ផុតកំណត់ មិនទាន់គ្រប់ចំនួនកក់អប្បបរមា មានកំណត់ផ្លូវ ឬបានប្រើរួច។ សូមពិនិត្យលក្ខខណ្ឌនៃកូដ។"
        }
      }
    ]
  },
  {
    name: { en: "Travel Information", kh: "ព័ត៌មានដំណើរ" },
    faqs: [
      {
        question: {
          en: "What documents do I need to carry while traveling?",
          kh: "តើខ្ញុំត្រូវយកឯកសារអ្វីខ្លះនៅពេលធ្វើដំណើរ?"
        },
        answer: {
          en: "You need to carry a valid government-issued photo ID along with your e-ticket. For international routes, passport and visa may be required.",
          kh: "អ្នកត្រូវយកអត្តសញ្ញាណប័ណ្ណរបស់រដ្ឋាភិបាលដែលមានសុពលភាព និងសំបុត្រអេឡិចត្រូនិច។ សម្រាប់ផ្លូវអន្តរជាតិ ត្រូវមានលិខិតឆ្លងដែន និងវីសា។"
        }
      },
      {
        question: {
          en: "Can I change my boarding point after booking?",
          kh: "តើខ្ញុំអាចផ្លាស់ប្តូរចំណុចឡើងរថយន្តបន្ទាប់ពីកក់បានទេ?"
        },
        answer: {
          en: "Boarding point changes may be allowed depending on the bus operator's policy. Contact customer support or check with the operator directly for boarding point modifications.",
          kh: "ការផ្លាស់ប្តូរចំណុចឡើងអាចអនុញ្ញាតដោយផ្អែកលើគោលការណ៍ក្រុមហ៊ុនដឹកជញ្ជូន។ សូមទាក់ទងមជ្ឈមណ្ឌលសេវាអតិថិជន ឬក្រុមហ៊ុនដឹកជញ្ជូនផ្ទាល់។"
        }
      },
      {
        question: {
          en: "What is the baggage allowance?",
          kh: "តើមានកម្រិតទម្ងន់ឥវ៉ាន់ប៉ុន្មាន?"
        },
        answer: {
          en: "Baggage allowance varies by bus operator. Generally, you can carry one piece of luggage up to 20kg and one small handbag. Check with your specific operator for exact limits.",
          kh: "កម្រិតឥវ៉ាន់អាចខុសគ្នាតាមក្រុមហ៊ុនដឹកជញ្ជូន។ ជាទូទៅ អ្នកអាចយកឥវ៉ាន់១កាបូប (២០គីឡូក្រាម) និងកាបូបតូច១។ សូមពិនិត្យជាមួយក្រុមហ៊ុនដឹកជញ្ជូនសម្រាប់ព័ត៌មានលម្អិត។"
        }
      }
    ]
  },
  {
    name: { en: "International Tourist in Cambodia", kh: "ភ្ញៀវទេសចរអន្តរជាតិនៅកម្ពុជា" },
    faqs: [
      {
        question: {
          en: "Do I need special documents as an international tourist?",
          kh: "តើភ្ញៀវទេសចរអន្តរជាតិត្រូវការឯកសារពិសេសទេ?"
        },
        answer: {
          en: "Yes, international tourists need a valid passport and appropriate visa to travel within Cambodia. Some nationalities may get visa on arrival or e-visa.",
          kh: "បាទ/ចាស ភ្ញៀវទេសចរអន្តរជាតិត្រូវការលិខិតឆ្លងដែន និងវីសាដើម្បីធ្វើដំណើរនៅកម្ពុជា។ សញ្ជាតិខ្លះអាចទទួលបានវីសានៅព្រំដែន ឬតាមប្រព័ន្ធអេឡិចត្រូនិច។"
        }
      },
      {
        question: {
          en: "Are there any restrictions for international tourists?",
          kh: "តើមានកំណត់អ្វីខ្លះសម្រាប់ភ្ញៀវទេសចរអន្តរជាតិ?"
        },
        answer: {
          en: "International tourists should follow local laws and regulations. Some areas may have travel restrictions, so it's advisable to check current travel advisories.",
          kh: "ភ្ញៀវទេសចរអន្តរជាតិត្រូវគោរពច្បាប់ និងបទបញ្ជាក្នុងស្រុក។ តំបន់ខ្លះអាចមានកំណត់ដំណើរ។ សូមពិនិត្យព័ត៌មានថ្មីៗមុនធ្វើដំណើរ។"
        }
      },
      {
        question: {
          en: "Can I book tickets without a local phone number?",
          kh: "តើខ្ញុំអាចកក់សំបុត្រដោយមិនចាំបាច់មានលេខទូរស័ព្ទក្នុងស្រុកទេ?"
        },
        answer: {
          en: "Yes, you can book tickets using your international phone number. Make sure to provide accurate contact information for booking confirmations.",
          kh: "បាទ/ចាស អ្នកអាចកក់សំបុត្រដោយប្រើលេខទូរស័ព្ទអន្តរជាតិ។ សូមផ្តល់ព័ត៌មានទំនាក់ទំនងត្រឹមត្រូវសម្រាប់បញ្ជាក់ការកក់។"
        }
      }
    ]
  }
];

const toggleFaq = (index) => {
  const faqIndex = openFaqs.value.indexOf(index);
  if (faqIndex > -1) {
    openFaqs.value.splice(faqIndex, 1);
  } else {
    openFaqs.value.push(index);
  }
};
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
