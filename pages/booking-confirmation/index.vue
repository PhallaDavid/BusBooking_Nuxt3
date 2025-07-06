<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Page Header -->
    <div class="bg-white shadow-sm border-b">
      <div class="max-w-4xl mx-auto px-4 py-4">
        <div class="flex items-center gap-3">
          <button
            @click="goBack"
            class="p-1 rounded-full hover:bg-gray-100 transition"
          >
            <svg
              class="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 class="text-xl font-bold text-gray-800">
            {{ t("Passenger Details", "ព័ត៌មានអ្នកចត់") }}
          </h1>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-4xl mx-auto p-4">
      <!-- Booking Summary -->
      <div class="bg-white rounded-lg shadow-sm mb-6 p-6">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">
          {{ t("Booking Summary", "របាយការកក់") }}
        </h2>

        <!-- One Way Booking -->
        <div v-if="!isRoundTrip" class="space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <span class="font-medium"
                >{{ bookingData.fromLabel }} → {{ bookingData.toLabel }}</span
              >
            </div>
            <span class="text-sm text-gray-600">{{
              bookingData.departureDate
            }}</span>
          </div>
          <div class="ml-6 text-sm text-gray-600">
            <p>Seats: {{ bookingData.seats }}</p>
            <p>{{ bookingData.operator }} - {{ bookingData.busType }}</p>
          </div>
        </div>

        <!-- Round Trip Booking -->
        <div v-else class="space-y-4">
          <!-- Outbound -->
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span class="font-medium"
                  >{{ bookingData.fromLabel }} → {{ bookingData.toLabel }}</span
                >
                <span
                  class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                  >Outbound</span
                >
              </div>
              <span class="text-sm text-gray-600">{{
                bookingData.departureDate
              }}</span>
            </div>
            <div class="ml-6 text-sm text-gray-600">
              <p>Seats: {{ bookingData.outboundSeats }}</p>
              <p>{{ bookingData.operator }} - {{ bookingData.busType }}</p>
            </div>
          </div>

          <!-- Return -->
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <span class="font-medium"
                  >{{ bookingData.toLabel }} → {{ bookingData.fromLabel }}</span
                >
                <span
                  class="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded"
                  >Return</span
                >
              </div>
              <span class="text-sm text-gray-600">{{
                bookingData.returnDate
              }}</span>
            </div>
            <div class="ml-6 text-sm text-gray-600">
              <p>Seats: {{ bookingData.returnSeats }}</p>
              <p>{{ bookingData.operator }} - {{ bookingData.busType }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Passenger Details Form -->
      <div class="bg-white rounded-lg shadow-sm mb-6">
        <div class="p-6">
          <!-- Passenger Forms -->
          <div
            v-for="(passenger, index) in passengers"
            :key="index"
            class="mb-8"
          >
            <h3 class="text-lg font-semibold text-gray-800 mb-4">
              {{ t("Passenger", "អ្នកចត់") }} {{ index + 1 }}
            </h3>

            <!-- Name -->
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">{{
                t("Name", "ឈ្មោះ")
              }}</label>
              <input
                v-model="passenger.name"
                type="text"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Enter full name"
                required
              />
            </div>

            <!-- Nationality -->
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">{{
                t("Nationality", "សញ្ជាត់")
              }}</label>
              <select
                v-model="passenger.nationality"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                required
              >
                <option value="Cambodian">Cambodian</option>
                <option value="American">American</option>
                <option value="British">British</option>
                <option value="Chinese">Chinese</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Japanese">Japanese</option>
                <option value="Korean">Korean</option>
                <option value="Thai">Thai</option>
                <option value="Vietnamese">Vietnamese</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <!-- Gender and Age -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <!-- Gender -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">{{
                  t("Gender", "ភាសា")
                }}</label>
                <div class="flex gap-4">
                  <label class="flex items-center">
                    <input
                      v-model="passenger.gender"
                      type="radio"
                      value="Female"
                      class="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
                    />
                    <span class="ml-2 text-sm text-gray-700">{{
                      t("Female", "ស្រី")
                    }}</span>
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="passenger.gender"
                      type="radio"
                      value="Male"
                      class="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
                    />
                    <span class="ml-2 text-sm text-gray-700">{{
                      t("Male", "ប្រុស")
                    }}</span>
                  </label>
                </div>
              </div>

              <!-- Age -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">{{
                  t("Age", "អាយ")
                }}</label>
                <input
                  v-model="passenger.age"
                  type="number"
                  min="1"
                  max="120"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter age"
                  required
                />
              </div>
            </div>
          </div>

          <!-- Contact Details Section -->
          <div class="border-t pt-6">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold text-sm"
              >
                2
              </div>
              <h3 class="text-lg font-semibold text-gray-800">
                {{ t("Contact Details", "ព័ត៌មានទូទាំង") }}
              </h3>
            </div>

            <!-- Ticket Notice -->
            <div
              class="bg-yellow-100 border border-yellow-300 rounded-md p-3 mb-4"
            >
              <p class="text-sm text-yellow-800">
                {{
                  t(
                    "Your ticket will be sent to these details",
                    "បានកក់បានបញ្ជាក់រួចទូទាំងនេះ"
                  )
                }}
              </p>
            </div>

            <!-- Email -->
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">{{
                t("Email ID", "អត្តលេខ")
              }}</label>
              <input
                v-model="contactDetails.email"
                type="email"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Enter email address"
                required
              />
            </div>

            <!-- Phone -->
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">{{
                t("Phone", "លេខទូទាំង")
              }}</label>
              <div class="flex">
                <select
                  v-model="contactDetails.countryCode"
                  class="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-gray-50"
                >
                  <option value="+855">+855</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+86">+86</option>
                  <option value="+33">+33</option>
                  <option value="+49">+49</option>
                  <option value="+81">+81</option>
                  <option value="+82">+82</option>
                  <option value="+66">+66</option>
                  <option value="+84">+84</option>
                </select>
                <input
                  v-model="contactDetails.phone"
                  type="tel"
                  class="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="bg-white border-t shadow-lg">
      <div class="max-w-4xl mx-auto px-4 py-4">
        <!-- Terms and Conditions -->
        <div class="mb-4">
          <label class="flex items-start gap-2 text-sm text-gray-600">
            <input
              v-model="agreedToTerms"
              type="checkbox"
              class="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500 mt-0.5"
              required
            />
            <span>
              {{
                t(
                  "By clicking on proceed, I agree that I have read and understood the",
                  "បន្ទាប់បញ្ជាក់ខ្ញុំអត់បានអាននិងបានអានច្បាស់នេះ"
                )
              }}
              <a href="#" class="text-red-500 hover:underline">{{
                t("T&Cs", "សម្គាល់និងលម្អិត")
              }}</a>
              {{ t("and the", "និង") }}
              <a href="#" class="text-red-500 hover:underline">{{
                t("Privacy Policy", "លម្អិត")
              }}</a>
            </span>
          </label>
        </div>

        <!-- Total and Proceed Button -->
        <div class="flex items-center justify-between">
          <div class="text-lg font-semibold text-gray-800">
            {{ t("Total Amount", "សរុបចំនាំ") }}:
            <span class="text-xl">USD {{ totalAmount }}</span>
          </div>
          <div class="flex gap-2">
            <button
              @click="proceedToPay"
              :disabled="!canProceed"
              class="bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              {{ t("PROCEED TO PAY", "បន្ទាប់ទៅកក់") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { t, language } from "@/plugins/translate";

const router = useRouter();
const route = useRoute();

// Booking data from URL parameters
const bookingData = ref({});
const isRoundTrip = computed(() => bookingData.value.grandTotal !== undefined);

// Form data
const passengers = ref([]);
const contactDetails = ref({
  email: "",
  countryCode: "+855",
  phone: "",
});
const agreedToTerms = ref(false);

// Computed properties
const totalAmount = computed(() => {
  return isRoundTrip.value
    ? bookingData.value.grandTotal
    : bookingData.value.totalAmount;
});

const totalSeats = computed(() => {
  if (isRoundTrip.value) {
    const outboundSeats = bookingData.value.outboundSeats
      ? bookingData.value.outboundSeats.split(",").length
      : 0;
    const returnSeats = bookingData.value.returnSeats
      ? bookingData.value.returnSeats.split(",").length
      : 0;
    return Math.max(outboundSeats, returnSeats); // Use the maximum number of seats
  } else {
    return bookingData.value.seats
      ? bookingData.value.seats.split(",").length
      : 1;
  }
});

const canProceed = computed(() => {
  const allPassengersValid = passengers.value.every(
    (p) => p.name.trim() && p.nationality && p.gender && p.age
  );
  const contactValid =
    contactDetails.value.email.trim() && contactDetails.value.phone.trim();
  return allPassengersValid && contactValid && agreedToTerms.value;
});

// Methods
const goBack = () => {
  router.back();
};

const initializePassengers = () => {
  passengers.value = Array.from({ length: totalSeats.value }, () => ({
    name: "",
    nationality: "Cambodian",
    gender: "Female",
    age: "",
  }));
};

const proceedToPay = () => {
  if (!canProceed.value) return;

  const paymentData = {
    ...bookingData.value,
    passengers: JSON.stringify(passengers.value),
    contactDetails: JSON.stringify(contactDetails.value),
    totalAmount: totalAmount.value,
  };

  try {
    router.push({
      path: "/payment",
      query: paymentData,
    });
  } catch (error) {
    console.error("Error navigating to payment:", error);
    alert("Error navigating to payment: " + error.message);
  }
};

onMounted(() => {
  bookingData.value = { ...route.query };

  initializePassengers();

  // Pre-fill demo data (remove in production)
  if (passengers.value.length > 0) {
    passengers.value[0].name = "ewe";
    passengers.value[0].age = "12";
  }
  contactDetails.value.email = "admin@gmail.com";
  contactDetails.value.phone = "0972076423";
});
</script>

<style scoped>
/* Custom radio button styling */
input[type="radio"]:checked {
  background-color: #ef4444;
  border-color: #ef4444;
}

/* Custom checkbox styling */
input[type="checkbox"]:checked {
  background-color: #ef4444;
  border-color: #ef4444;
}
</style>
