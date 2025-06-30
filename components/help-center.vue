<template>
  <div class="flex flex-col bg-white rounded-xl h-full max-h-screen p-6 max-w-sm w-full relative shadow-lg">
    <!-- Sticky header -->
    <div class="flex flex-row items-center justify-between gap-4 border-b border-gray-200 pb-4 mb-6 sticky top-0 bg-white z-10">
      <h1 class="text-2xl text-gray-800 font-bold">Help</h1>
      <button class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
        <img src="/images/translategif.gif" alt="">
      </button>
    </div>

    <!-- Scrollable content -->
    <div class="flex-1 overflow-y-auto flex flex-col gap-6">
      <!-- Support Section -->
      <div class="flex flex-col items-center justify-center gap-4 text-center">
        <div class="w-full max-w-xs">
          <img 
            class="rounded-4xl  w-80  mb-4" 
            src="/images/spp.jpg" 
            alt="Customer Support"
          />
        </div>
        <p class="text-gray-700 text-sm leading-relaxed">
          For seamless booking management and<br>customer support
        </p>
        <NuxtLink to="/signin" class="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold w-full py-3 rounded-full transition-colors">
          Login to your account
        </NuxtLink>
      </div>

      <!-- FAQ Section -->
      <div class="space-y-4">
        <div>
          <h2 class="text-xl text-gray-800 font-bold mb-4">FAQ</h2>
          <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <span class="text-gray-700 font-medium">Read all FAQs</span>
            </div>
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <!-- FAQ Items -->
        <div class="space-y-2">
          <details class="group">
            <summary class="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <span class="text-sm font-medium text-gray-700">How do I book a bus ticket?</span>
              <svg class="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </summary>
            <div class="p-3 text-sm text-gray-600 bg-gray-25">
              To book a bus ticket, simply search for your route, select your preferred bus, choose your seats, and complete the payment process.
            </div>
          </details>

          <details class="group">
            <summary class="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <span class="text-sm font-medium text-gray-700">Can I cancel my booking?</span>
              <svg class="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </summary>
            <div class="p-3 text-sm text-gray-600 bg-gray-25">
              Yes, you can cancel your booking up to 2 hours before departure. Cancellation charges may apply based on the operator's policy.
            </div>
          </details>

          <details class="group">
            <summary class="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <span class="text-sm font-medium text-gray-700">How do I get my refund?</span>
              <svg class="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </summary>
            <div class="p-3 text-sm text-gray-600 bg-gray-25">
              Refunds are processed within 5-7 business days to your original payment method after successful cancellation.
            </div>
          </details>
        </div>
      </div>

      <!-- Other Topics Section -->
      <div class="space-y-4">
        <h2 class="text-xl text-gray-800 font-bold mb-4">Other Topics</h2>

        <div class="space-y-3">
          <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div class="flex items-center gap-3">
              <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              <span class="text-gray-700 font-medium">Browse other topics</span>
            </div>
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <!-- Topic Categories -->
          <div class="space-y-2">
            <button class="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 class="font-medium text-gray-800 mb-1">Payment Issues</h3>
              <p class="text-sm text-gray-600">Payment failures, refunds, wallet issues</p>
            </button>

            <button class="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 class="font-medium text-gray-800 mb-1">Booking Management</h3>
              <p class="text-sm text-gray-600">Modify, cancel, or reschedule bookings</p>
            </button>

            <button class="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 class="font-medium text-gray-800 mb-1">Travel Guidelines</h3>
              <p class="text-sm text-gray-600">COVID protocols, baggage, boarding points</p>
            </button>

            <button class="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 class="font-medium text-gray-800 mb-1">Account & Profile</h3>
              <p class="text-sm text-gray-600">Login issues, profile updates, preferences</p>
            </button>

            <button class="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 class="font-medium text-gray-800 mb-1">Mobile App</h3>
              <p class="text-sm text-gray-600">App installation, features, troubleshooting</p>
            </button>

            <button class="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 class="font-medium text-gray-800 mb-1">Offers & Discounts</h3>
              <p class="text-sm text-gray-600">Promo codes, cashback, loyalty rewards</p>
            </button>
          </div>
        </div>
      </div>

      <!-- Contact Support -->
      <div class="border-t border-gray-200 pt-6 mt-6">
        <h3 class="text-lg font-bold text-gray-800 mb-4">Still need help?</h3>
        <div class="space-y-3">
          <button class="w-full flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors">
            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            <span class="text-green-700 font-medium">Chat with us</span>
          </button>
          
          <button class="w-full flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span class="text-blue-700 font-medium">Email support</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.bg-gray-25 {
  background-color: #fafafa;
}
</style>