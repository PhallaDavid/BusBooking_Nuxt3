<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header with Route and Timer -->
    <div class="bg-red-500 text-white">
      <div class="max-w-7xl mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="font-medium">{{
              bookingData.fromLabel || "Siem Reap"
            }}</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <span class="font-medium">{{
              bookingData.toLabel || "Phnom Penh"
            }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm">Please pay within:</span>
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="font-semibold">{{ formatTime(timeRemaining) }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto p-4">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Payment Section -->
        <div class="lg:col-span-2">
          <!-- Offer Code -->
          <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
            <input
              v-model="offerCode"
              type="text"
              placeholder="ENTER OFFER CODE"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-500 uppercase"
            />
          </div>

          <!-- Trust Indicators -->
          <div class="grid grid-cols-3 md:grid-cols-3 gap-4 mb-6">
            <div
              class="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
            >
              <div
                class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-800">Safe and secure</p>
                <p class="text-sm text-gray-600">online payments</p>
              </div>
            </div>

            <div
              class="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
            >
              <div
                class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-800">60+ million</p>
                <p class="text-sm text-gray-600">transactions</p>
              </div>
            </div>

            <div
              class="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
            >
              <div
                class="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-800">10+ years of</p>
                <p class="text-sm text-gray-600">Trust</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 lg:grid-cols-2 gap-10">
            <!-- Payment Methods -->
            <div class="bg-white rounded-lg shadow-sm p-6">
              <h2 class="text-xl font-semibold text-gray-800 mb-6">
                Choose Payment Method
              </h2>
              <div class="space-y-4">
                <!-- Credit/Debit Card -->
                <label
                  class="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <input
                    v-model="selectedPaymentMethod"
                    type="radio"
                    value="card"
                    class="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
                  />
                  <div class="ml-3 flex-1 flex items-center justify-between">
                    <span class="font-medium text-gray-800"
                      >Credit / Debit Card</span
                    >
                    <div class="flex items-center gap-2">
                      <img src="/?height=24&width=38" alt="Visa" class="h-6" />
                      <img
                        src="/?height=24&width=38"
                        alt="Mastercard"
                        class="h-6"
                      />
                      <img
                        src="/?height=24&width=38"
                        alt="UnionPay"
                        class="h-6"
                      />
                      <img src="/?height=24&width=38" alt="JCB" class="h-6" />
                    </div>
                  </div>
                </label>
                <!-- ABA KHQR -->
                <label
                  class="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <input
                    v-model="selectedPaymentMethod"
                    type="radio"
                    value="aba"
                    class="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
                  />
                  <div class="ml-3 flex-1 flex items-center justify-between">
                    <span class="font-medium text-gray-800">ABA KHQR</span>
                    <span
                      class="bg-red-500 text-white text-xs px-2 py-1 rounded font-medium"
                      >KHQR</span
                    >
                  </div>
                </label>
                <!-- ACLEDA Bank -->
                <label
                  class="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <input
                    v-model="selectedPaymentMethod"
                    type="radio"
                    value="ACLEDA "
                    class="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
                  />
                  <div class="ml-3 flex-1 flex items-center justify-between">
                    <span class="font-medium text-gray-800">ACLEDA Bank</span>
                    <span
                      class="bg-green-500 text-white text-xs px-2 py-1 rounded font-medium"
                      >-5</span
                    >
                  </div>
                </label>
              </div>
              <!-- Pay Button -->
              <button
                @click="processPayment"
                :disabled="!selectedPaymentMethod"
                class="w-full mt-6 bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                PAY
              </button>
            </div>

            <!-- Booking Summary -->
            <div>
              <div
                class="bg-white rounded-lg shadow-sm overflow-hidden sticky top-4"
              >
                <!-- Trip Type Tabs -->
                <div class="flex border-b">
                  <button
                    @click="activeTab = 'onward'"
                    :class="
                      activeTab === 'onward'
                        ? 'bg-red-50 text-red-600 border-b-2 border-red-500'
                        : 'text-gray-600 hover:text-gray-800'
                    "
                    class="flex-1 px-4 py-3 text-sm font-medium transition-colors"
                  >
                    Onward Trip
                  </button>
                  <button
                    v-if="isRoundTrip"
                    @click="activeTab = 'return'"
                    :class="
                      activeTab === 'return'
                        ? 'bg-red-50 text-red-600 border-b-2 border-red-500'
                        : 'text-gray-600 hover:text-gray-800'
                    "
                    class="flex-1 px-4 py-3 text-sm font-medium transition-colors"
                  >
                    Return Trip
                  </button>
                </div>
                <!-- Trip Details -->
                <div class="p-4">
                  <!-- Operator -->
                  <div class="mb-4">
                    <h3 class="font-semibold text-red-500 text-lg">
                      {{ bookingData.operator || "Vireak Buntham Express" }}
                    </h3>
                    <p class="text-sm text-gray-600">
                      {{ bookingData.busType || "Hotel Bus (Night Bus)" }}
                    </p>
                  </div>
                  <!-- Departure Info -->
                  <div class="mb-4">
                    <div class="flex items-center gap-2 mb-2">
                      <svg
                        class="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span class="font-medium">Departure</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-gray-800">{{
                        formatDate(bookingData.departureDate)
                      }}</span>
                      <span class="font-medium">{{
                        bookingData.departureTime || "01:00"
                      }}</span>
                    </div>
                    <div class="flex items-center justify-between mt-1">
                      <span class="text-sm text-gray-600">Seats</span>
                      <span class="font-medium">{{ getCurrentSeats() }}</span>
                    </div>
                  </div>
                  <!-- Boarding Point -->
                  <div class="mb-4">
                    <div class="flex items-center gap-2 mb-1">
                      <svg
                        class="w-4 h-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span class="font-medium text-gray-800"
                        >Boarding Point</span
                      >
                    </div>
                    <p class="text-sm text-gray-600 ml-6">
                      {{ getCurrentBoardingPoint() }}
                    </p>
                  </div>
                  <!-- Dropping Point -->
                  <div class="mb-4">
                    <div class="flex items-center gap-2 mb-1">
                      <svg
                        class="w-4 h-4 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span class="font-medium text-gray-800"
                        >Dropping Point</span
                      >
                    </div>
                    <p class="text-sm text-gray-600 ml-6">
                      {{ getCurrentDroppingPoint() }}
                    </p>
                  </div>
                  <!-- Passenger Info -->
                  <div class="mb-4">
                    <div class="flex items-center gap-2 mb-1">
                      <svg
                        class="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span class="font-medium text-gray-800">{{
                        getPassengerInfo()
                      }}</span>
                    </div>
                  </div>
                  <!-- Fare Breakdown -->
                  <div class="border-t pt-4">
                    <button
                      @click="showFareBreakdown = !showFareBreakdown"
                      class="flex items-center justify-between w-full text-left mb-3"
                    >
                      <span class="font-medium text-gray-800"
                        >FARE BREAKUP</span
                      >
                      <svg
                        :class="showFareBreakdown ? 'rotate-180' : ''"
                        class="w-4 h-4 text-gray-400 transition-transform"
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
                    </button>
                    <div v-if="showFareBreakdown" class="space-y-2 mb-4">
                      <div class="flex items-center justify-between text-sm">
                        <span class="text-gray-600">Onward Fare</span>
                        <span class="font-medium"
                          >USD {{ getOnwardFare() }}</span
                        >
                      </div>
                      <div
                        v-if="isRoundTrip"
                        class="flex items-center justify-between text-sm"
                      >
                        <span class="text-gray-600">Return Fare</span>
                        <span class="font-medium"
                          >USD {{ getReturnFare() }}</span
                        >
                      </div>
                    </div>
                    <div class="flex items-center justify-between mb-2">
                      <span class="font-semibold text-gray-800"
                        >Total Payable</span
                      >
                      <span class="font-bold text-lg"
                        >USD {{ getTotalPayable() }}</span
                      >
                    </div>
                    <div
                      class="bg-green-100 border border-green-200 rounded p-2"
                    >
                      <div class="flex items-center justify-between">
                        <span class="font-medium text-green-800"
                          >Total Discount</span
                        >
                        <span class="font-bold text-green-800"
                          >USD {{ getDiscount() }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Security Badges -->
        <div class="flex items-center justify-center gap-6 mt-6">
          <img
            src="/?height=40&width=80"
            alt="MasterCard SecureCode"
            class="h-10"
          />
          <img src="/?height=40&width=80" alt="Verified by Visa" class="h-10" />
          <img src="/?height=40&width=60" alt="SSL Certificate" class="h-10" />
        </div>
      </div>
    </div>

    <!-- Credit Card Payment Modal -->
    <div
      v-if="showCardModal"
      class="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <div
        class="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        <div class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-semibold text-gray-800">Card Payment</h3>
            <button
              @click="closeModal"
              class="text-gray-400 hover:text-gray-600"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form @submit.prevent="submitCardPayment">
            <!-- Card Number -->
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Card Number</label
              >
              <input
                v-model="cardDetails.number"
                type="text"
                placeholder="1234 5678 9012 3456"
                maxlength="19"
                @input="formatCardNumber"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>

            <!-- Cardholder Name -->
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Cardholder Name</label
              >
              <input
                v-model="cardDetails.name"
                type="text"
                placeholder="John Doe"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              />
            </div>

            <!-- Expiry and CVV -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Expiry Date</label
                >
                <input
                  v-model="cardDetails.expiry"
                  type="text"
                  placeholder="MM/YY"
                  maxlength="5"
                  @input="formatExpiry"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >CVV</label
                >
                <input
                  v-model="cardDetails.cvv"
                  type="text"
                  placeholder="123"
                  maxlength="4"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>

            <!-- Total Amount -->
            <div class="bg-gray-50 p-4 rounded-lg mb-6">
              <div class="flex items-center justify-between">
                <span class="font-medium text-gray-800">Total Amount</span>
                <span class="font-bold text-xl text-red-500"
                  >USD {{ getTotalPayable() }}</span
                >
              </div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="processing"
              class="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              {{ processing ? "Processing..." : "Pay Now" }}
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- QR Code Payment Modal (ABA/ACLEDA ) -->
    <div
      v-if="showQRModal"
      class="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div class="p-6 text-center">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-semibold text-gray-800">
              {{
                selectedPaymentMethod === "aba"
                  ? "ABA KHQR Payment"
                  : "ACLEDA  Payment"
              }}
            </h3>
            <button
              @click="closeModal"
              class="text-gray-400 hover:text-gray-600"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- QR Code -->
          <div class="mb-6">
            <div
              class="w-64 h-64 mx-auto bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center"
            >
              <div class="text-center">
                <svg
                  class="w-16 h-16 text-gray-400 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01m-5.01 0h.01m16 8h.01M8 8h.01M4 4h.01M4 8h.01M4 16h.01"
                  />
                </svg>
                <p class="text-sm text-gray-500">QR Code</p>
              </div>
            </div>
          </div>

          <!-- Instructions -->
          <div class="mb-6">
            <p class="text-sm text-gray-600 mb-2">
              Scan this QR code with your
              {{ selectedPaymentMethod === "aba" ? "ABA Mobile" : "ACLEDA " }}
              app
            </p>
            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p class="text-sm text-yellow-800">
                <strong>Amount:</strong> USD {{ getTotalPayable() }}
              </p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="space-y-3">
            <button
              @click="confirmQRPayment"
              class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              I have completed the payment
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Message Modal -->
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div class="p-6 text-center">
          <!-- Success Icon -->
          <div
            class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            Payment Successful!
          </h3>
          <p class="text-gray-600 mb-6">
            Your booking has been confirmed. You will receive a confirmation
            email shortly.
          </p>

          <!-- Booking Reference -->
          <div class="bg-gray-50 p-4 rounded-lg mb-6">
            <p class="text-sm text-gray-600">Booking Reference</p>
            <p class="font-bold text-lg text-gray-800">
              {{ bookingReference }}
            </p>
          </div>

          <button
            @click="goToBookingConfirmation"
            class="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            View Booking Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

// Data
const bookingData = ref({});
const passengers = ref([]);
const contactDetails = ref({});
const selectedPaymentMethod = ref("ACLEDA ");
const offerCode = ref("");
const activeTab = ref("onward");
const showFareBreakdown = ref(false);
const timeRemaining = ref(723 * 60);

// Modal states
const showCardModal = ref(false);
const showQRModal = ref(false);
const showSuccessModal = ref(false);
const processing = ref(false);

// Card details
const cardDetails = ref({
  number: "",
  name: "",
  expiry: "",
  cvv: "",
});

// Booking reference
const bookingReference = ref("");

// Add error state
const bookingError = ref("");

// Computed
const isRoundTrip = computed(() => bookingData.value.grandTotal !== undefined);

// Timer
let timerInterval = null;

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  return `${minutes} minutes`;
};

const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timeRemaining.value > 0) {
      timeRemaining.value--;
    } else {
      clearInterval(timerInterval);
      router.push("/timeout");
    }
  }, 1000);
};

// Methods
const formatDate = (dateString) => {
  if (!dateString) return "30/Jun/2023";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const getCurrentSeats = () => {
  if (!isRoundTrip.value) {
    return bookingData.value.seats || "11A";
  }
  return activeTab.value === "onward"
    ? bookingData.value.outboundSeats || "11A"
    : bookingData.value.returnSeats || "12B";
};

const getCurrentBoardingPoint = () => {
  if (activeTab.value === "onward") {
    return `${
      bookingData.value.fromLabel || "Phnom Penh"
    } (Cannon Rifle Roundabout Park)`;
  } else {
    return `${bookingData.value.toLabel || "Siem Reap"} Huy Leng Market`;
  }
};

const getCurrentDroppingPoint = () => {
  if (activeTab.value === "onward") {
    return `${bookingData.value.toLabel || "Siem Reap"} Huy Leng Market`;
  } else {
    return `${
      bookingData.value.fromLabel || "Phnom Penh"
    } (Cannon Rifle Roundabout Park)`;
  }
};

const getPassengerInfo = () => {
  if (passengers.value.length > 0) {
    const passenger = passengers.value[0];
    return `${passenger.name} (${passenger.age},${passenger.gender.charAt(0)})`;
  }
  return "ewesa (12,F)";
};

const getOnwardFare = () => {
  return isRoundTrip.value
    ? bookingData.value.outboundTotal || "14.4"
    : bookingData.value.totalAmount || "14.4";
};

const getReturnFare = () => {
  return bookingData.value.returnTotal || "17";
};

const getTotalPayable = () => {
  return (
    bookingData.value.grandTotal || bookingData.value.totalAmount || "31.4"
  );
};

const getDiscount = () => {
  return "3.6";
};

// Payment processing
const processPayment = () => {
  if (!selectedPaymentMethod.value) return;

  if (selectedPaymentMethod.value === "card") {
    showCardModal.value = true;
  } else if (
    selectedPaymentMethod.value === "aba" ||
    selectedPaymentMethod.value === "ACLEDA "
  ) {
    showQRModal.value = true;
  }
};

const closeModal = () => {
  showCardModal.value = false;
  showQRModal.value = false;
  processing.value = false;
};

const formatCardNumber = (event) => {
  let value = event.target.value.replace(/\s/g, "").replace(/[^0-9]/gi, "");
  let formattedValue = value.match(/.{1,4}/g)?.join(" ") || value;
  cardDetails.value.number = formattedValue;
};

const formatExpiry = (event) => {
  let value = event.target.value.replace(/\D/g, "");
  if (value.length >= 2) {
    value = value.substring(0, 2) + "/" + value.substring(2, 4);
  }
  cardDetails.value.expiry = value;
};

const submitCardPayment = async () => {
  processing.value = true;
  bookingError.value = "";

  // Simulate payment processing
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Build booking payload dynamically
  const payload = {
    bus_id: bookingData.value.busId || bookingData.value.bus_id,
    travel_date: bookingData.value.departureDate,
    seats: (bookingData.value.seats || bookingData.value.outboundSeats || "")
      .toString()
      .split(",")
      .filter(Boolean),
    passengers: passengers.value.map((p, i) => ({
      name: p.name,
      gender: p.gender,
      age: Number(p.age),
      email: contactDetails.value.email,
      phone: contactDetails.value.phone,
    })),
    discount_code: offerCode.value || undefined,
    payment_method: selectedPaymentMethod.value,
  };
  console.log("[DEBUG] Booking payload:", payload);

  const token = localStorage.getItem("access_token");
  try {
    const res = await fetch("http://localhost:8000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: "Bearer " + token } : {}),
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    console.log("[DEBUG] Booking API response:", data);
    if (
      res.ok &&
      data &&
      (data.booking_reference ||
        data.id ||
        data.message === "Booking successful" ||
        (data.booking && data.booking.id))
    ) {
      bookingReference.value =
        data.booking_reference ||
        data.id ||
        (data.booking && data.booking.id) ||
        "";
      showCardModal.value = false;
      showSuccessModal.value = true;
      setTimeout(goToBookingConfirmation, 2000);
    } else {
      throw new Error(data.message || "Booking failed");
    }
  } catch (e) {
    bookingError.value = e.message || "Booking failed. Please try again.";
    showCardModal.value = false;
    showSuccessModal.value = false;
  } finally {
    processing.value = false;
  }
};

const confirmQRPayment = async () => {
  showQRModal.value = false;
  processing.value = true;
  bookingError.value = "";

  // Build booking payload dynamically (same as above)
  const payload = {
    bus_id: bookingData.value.busId || bookingData.value.bus_id,
    travel_date: bookingData.value.departureDate,
    seats: (bookingData.value.seats || bookingData.value.outboundSeats || "")
      .toString()
      .split(",")
      .filter(Boolean),
    passengers: passengers.value.map((p, i) => ({
      name: p.name,
      gender: p.gender,
      age: Number(p.age),
      email: contactDetails.value.email,
      phone: contactDetails.value.phone,
    })),
    discount_code: offerCode.value || undefined,
    payment_method: selectedPaymentMethod.value,
  };
  console.log("[DEBUG] Booking payload:", payload);

  const token = localStorage.getItem("access_token");
  try {
    const res = await fetch("http://localhost:8000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: "Bearer " + token } : {}),
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    console.log("[DEBUG] Booking API response:", data);
    if (
      res.ok &&
      data &&
      (data.booking_reference ||
        data.id ||
        data.message === "Booking successful" ||
        (data.booking && data.booking.id))
    ) {
      bookingReference.value =
        data.booking_reference ||
        data.id ||
        (data.booking && data.booking.id) ||
        "";
      showSuccessModal.value = true;
      setTimeout(goToBookingConfirmation, 2000); // Auto-redirect after 2 seconds
    } else {
      throw new Error(data.message || "Booking failed");
    }
  } catch (e) {
    bookingError.value = e.message || "Booking failed. Please try again.";
    showSuccessModal.value = false;
  } finally {
    processing.value = false;
  }
};

const goToBookingConfirmation = () => {
  router.push({
    path: "/accounts/my_ticket",
    query: {
      ...bookingData.value,
      paymentMethod: selectedPaymentMethod.value,
      bookingReference: bookingReference.value,
      offerCode: offerCode.value,
    },
  });
};

onMounted(() => {
  bookingData.value = { ...route.query };

  if (route.query.passengers) {
    passengers.value = JSON.parse(route.query.passengers);
  }
  if (route.query.contactDetails) {
    contactDetails.value = JSON.parse(route.query.contactDetails);
  }

  startTimer();
});

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
});
</script>

<style scoped>
input[type="radio"]:checked {
  background-color: #ef4444;
  border-color: #ef4444;
}
</style>
