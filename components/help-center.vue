<template>
  <div
    class="flex flex-col bg-white rounded-xl h-full max-h-screen p-6 max-w-sm w-full relative shadow-lg"
  >
    <!-- Sticky header -->
    <div
      class="flex flex-row items-center justify-between gap-4 border-b border-gray-200 pb-4 mb-6 sticky top-0 bg-white z-10"
    >
      <h1 class="text-2xl text-gray-800 font-bold">{{ t("Help", "ជួយ") }}</h1>
      <button
        class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors"
      >
        <img src="/images/translategif.gif" alt="" />
      </button>
    </div>

    <!-- Scrollable content -->
    <div class="flex-1 overflow-y-auto flex flex-col gap-6">
      <!-- Support Section -->
      <div class="flex flex-col items-center justify-center gap-4 text-center">
        <div class="w-full max-w-xs">
          <img
            class="rounded-4xl w-80 mb-4"
            src="/images/spp.jpg"
            alt="Customer Support"
          />
        </div>
        <p class="text-gray-700 text-sm leading-relaxed">
          {{
            t(
              "For seamless booking management and",
              "សម្រាប់ការគ្រប់គ្រងការកក់យ៉ាងរលូន និង"
            )
          }}<br />{{ t("customer support", "ការគាំទ្រពីផ្នែកសេវាអតិថិជន") }}
        </p>
        <NuxtLink
          to="/signin"
          class="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold w-full py-3 rounded-full transition-colors"
        >
          {{ t("Login to your account", "ចូលទៅគណនីរបស់អ្នក") }}
        </NuxtLink>
      </div>

      <!-- FAQ Section -->
      <div class="space-y-4">
        <div>
          <h2 class="text-xl text-gray-800 font-bold mb-4">
            {{ t("FAQ", "សំណួរញឹកញាប់") }}
          </h2>
          <button
            class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div class="flex items-center gap-3">
              <svg
                class="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span class="text-gray-700 font-medium">{{
                t("Read all FAQs", "អានសំណួរញឹកញាប់ទាំងអស់")
              }}</span>
            </div>
            <svg
              class="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <!-- FAQ Items -->
        <div class="space-y-2">
          <details class="group">
            <summary
              class="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <span class="text-sm font-medium text-gray-700">{{
                t(
                  "How do I book a bus ticket?",
                  "តើធ្វើដូចម្តេចដើម្បីកក់សំបុត្ររថយន្ត?"
                )
              }}</span>
              <svg
                class="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div class="p-3 text-sm text-gray-600 bg-gray-25">
              {{
                t(
                  "To book a bus ticket, simply search for your route, select your preferred bus, choose your seats, and complete the payment process.",
                  "ដើម្បីកក់សំបុត្ររថយន្ត សូមស្វែងរកផ្លូវរបស់អ្នក ជ្រើសរើសរថយន្តដែលអ្នកចូលចិត្ត ជ្រើសរើសកៅអីរបស់អ្នក ហើយបញ្ចប់ដំណើរការទូទាត់។"
                )
              }}
            </div>
          </details>

          <details class="group">
            <summary
              class="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <span class="text-sm font-medium text-gray-700">{{
                t(
                  "Can I cancel my booking?",
                  "តើខ្ញុំអាចបោះបង់ការកក់របស់ខ្ញុំបានទេ?"
                )
              }}</span>
              <svg
                class="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div class="p-3 text-sm text-gray-600 bg-gray-25">
              {{
                t(
                  "Yes, you can cancel your booking up to 2 hours before departure. Cancellation charges may apply based on the operator's policy.",
                  "បាទ/ចាស អ្នកអាចបោះបង់ការកក់របស់អ្នកបានរហូតដល់ ២ម៉ោងមុនចេញដំណើរ។ អាចមានការកាត់ថ្លៃបោះបង់ដោយផ្អែកលើគោលការណ៍របស់ក្រុមហ៊ុនដឹកជញ្ជូន។"
                )
              }}
            </div>
          </details>

          <details class="group">
            <summary
              class="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <span class="text-sm font-medium text-gray-700">{{
                t(
                  "How do I get my refund?",
                  "តើខ្ញុំអាចទទួលប្រាក់សងវិញដូចម្តេច?"
                )
              }}</span>
              <svg
                class="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div class="p-3 text-sm text-gray-600 bg-gray-25">
              {{
                t(
                  "Refunds are processed within 5-7 business days to your original payment method after successful cancellation.",
                  "ប្រាក់សងវិញនឹងត្រូវបានដំណើរការក្នុងរយៈពេល ៥-៧ ថ្ងៃធ្វើការទៅកាន់វិធីសាស្រ្តទូទាត់ដើមរបស់អ្នកបន្ទាប់ពីបោះបង់ដោយជោគជ័យ។"
                )
              }}
            </div>
          </details>
        </div>
      </div>

      <!-- Other Topics Section -->
      <div class="space-y-4">
        <h2 class="text-xl text-gray-800 font-bold mb-4">
          {{ t("Other Topics", "ប្រធានបទផ្សេងទៀត") }}
        </h2>

        <div class="space-y-3">
          <button
            class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div class="flex items-center gap-3">
              <svg
                class="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span class="text-gray-700 font-medium">{{
                t("Browse other topics", "រកមើលប្រធានបទផ្សេងទៀត")
              }}</span>
            </div>
            <svg
              class="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <!-- Topic Categories -->
          <div class="space-y-2">
            <button
              class="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 class="font-medium text-gray-800 mb-1">
                {{ t("Payment Issues", "បញ្ហាការទូទាត់") }}
              </h3>
              <p class="text-sm text-gray-600">
                {{
                  t(
                    "Payment failures, refunds, wallet issues",
                    "បរាជ័យក្នុងការទូទាត់ ប្រាក់សងវិញ បញ្ហាកាបូប"
                  )
                }}
              </p>
            </button>

            <button
              class="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 class="font-medium text-gray-800 mb-1">
                {{ t("Booking Management", "ការគ្រប់គ្រងការកក់") }}
              </h3>
              <p class="text-sm text-gray-600">
                {{
                  t(
                    "Modify, cancel, or reschedule bookings",
                    "កែប្រែ បោះបង់ ឬកំណត់ពេលថ្មីសម្រាប់ការកក់"
                  )
                }}
              </p>
            </button>

            <button
              class="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 class="font-medium text-gray-800 mb-1">
                {{ t("Travel Guidelines", "លក្ខណៈណែនាំដំណើរការ") }}
              </h3>
              <p class="text-sm text-gray-600">
                {{
                  t(
                    "COVID protocols, baggage, boarding points",
                    "វិធានការកូវីដ ឥវ៉ាន់ ចំណុចឡើង"
                  )
                }}
              </p>
            </button>

            <button
              class="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 class="font-medium text-gray-800 mb-1">
                {{ t("Account & Profile", "គណនី និងប្រវត្តិរូប") }}
              </h3>
              <p class="text-sm text-gray-600">
                {{
                  t(
                    "Login issues, profile updates, preferences",
                    "បញ្ហាចូលគណនី ការធ្វើបច្ចុប្បន្នភាពប្រវត្តិរូប ចំណង់ចំណូលចិត្ត"
                  )
                }}
              </p>
            </button>

            <button
              class="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 class="font-medium text-gray-800 mb-1">
                {{ t("Mobile App", "កម្មវិធីទូរស័ព្ទ") }}
              </h3>
              <p class="text-sm text-gray-600">
                {{
                  t(
                    "App installation, features, troubleshooting",
                    "ការដំឡើងកម្មវិធី លក្ខណៈពិសេស ការដោះស្រាយបញ្ហា"
                  )
                }}
              </p>
            </button>

            <button
              class="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 class="font-medium text-gray-800 mb-1">
                {{ t("Offers & Discounts", "ការផ្តល់ជូន និងបញ្ចុះតម្លៃ") }}
              </h3>
              <p class="text-sm text-gray-600">
                {{
                  t(
                    "Promo codes, cashback, loyalty rewards",
                    "កូដបញ្ចុះតម្លៃ ប្រាក់សងវិញ រង្វាន់ស្មោះត្រង់"
                  )
                }}
              </p>
            </button>
          </div>
        </div>
      </div>

      <!-- Contact Support -->
      <div class="border-t border-gray-200 pt-6 mt-6">
        <h3 class="text-lg font-bold text-gray-800 mb-4">
          {{ t("Still need help?", "តើត្រូវការជំនួយបន្ថែមទៀតទេ?") }}
        </h3>
        <div class="space-y-3">
          <button
            class="w-full flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
          >
            <svg
              class="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span class="text-green-700 font-medium">{{
              t("Chat with us", "ជជែកជាមួយយើង")
            }}</span>
          </button>

          <button
            class="w-full flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <svg
              class="w-5 h-5 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span class="text-blue-700 font-medium">{{
              t("Email support", "គាំទ្រតាមអ៊ីមែល")
            }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { t, language } from "@/plugins/translate";
</script>

<style scoped>
.bg-gray-25 {
  background-color: #fafafa;
}
</style>
