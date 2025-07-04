<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Page Header -->
    <div class="bg-white">
      <div class="max-w-6xl mx-auto px-4 py-4">
        <div class="flex flex-row items-center gap-2">
          <!-- Back Button -->
          <button
            @click="closeModal"
            class="mr-2 p-1 rounded-full hover:text-red-500 hover:bg-gray-100 transition"
          >
            <svg
              class="w-6 hover:text-red-500 h-6 text-gray-600"
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
          <div>
            <h2 class="text-xl font-bold text-gray-800">
              {{ t("Select Your Seats -", "ជ្រើសរើសកន្លែងអង្គុយរបស់អ្នក") }}
              {{ currentJourneyType === "outbound" ? "Outbound" : "Return" }}
              {{ t("Journey", "ប្រឌិត") }}
            </h2>
            <!-- Journey Progress Indicator -->
            <div v-if="hasReturnDate" class="flex items-center gap-2 mt-1">
              <div class="flex items-center gap-1">
                <div
                  :class="
                    currentJourneyType === 'outbound'
                      ? 'bg-red-500'
                      : 'bg-green-500'
                  "
                  class="w-3 h-3 rounded-full"
                ></div>
                <span class="text-sm text-gray-600">Outbound</span>
              </div>
              <div class="w-4 h-px bg-gray-300"></div>
              <div class="flex items-center gap-1">
                <div
                  :class="
                    currentJourneyType === 'return'
                      ? 'bg-red-500'
                      : 'bg-gray-300'
                  "
                  class="w-3 h-3 rounded-full"
                ></div>
                <span class="text-sm text-gray-600">Return</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-red-500 text-white text-center py-2 px-4 mt-4 rounded">
          {{
            t(
              "Click on an available seat to proceed with your transaction.",
              "ចូរជ្រើសរើសកន្លែងអង្គុយរបស់អ្នកដើម្បីបន្តបញ្ជាក់ការបញ្ជីបន្ថែម"
            )
          }}
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto p-4">
      <div class="bg-white rounded-lg shadow-sm">
        <div class="flex flex-row lg:flex-row">
          <!-- Seat Map Section -->
          <div class="flex-1 p-6">
            <!-- Legend -->
            <div class="flex items-center gap-6 mb-6">
              <div class="flex items-center gap-2">
                <div
                  class="w-6 h-6 bg-gray-200 border border-gray-300 rounded"
                ></div>
                <span class="text-sm text-gray-600">Available</span>
              </div>
              <div class="flex items-center gap-2">
                <div
                  class="w-6 h-6 bg-blue-500 border border-blue-600 rounded"
                ></div>
                <span class="text-sm text-gray-600">Selected</span>
              </div>
              <div class="flex items-center gap-2">
                <div
                  class="w-6 h-6 bg-gray-400 border border-gray-500 rounded"
                ></div>
                <span class="text-sm text-gray-600">Occupied</span>
              </div>
            </div>

            <!-- Replace all seat row blocks with a single grid -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">
                {{ t("Select Your Seat", "ជ្រើសរើសកន្លែងអង្គុយរបស់អ្នក") }}
              </h3>
              <div class="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
                <div class="grid grid-cols-5 gap-4">
                  <button
                    v-for="seat in seatNumbers"
                    :key="seat"
                    @click="toggleSeat(seat)"
                    :class="getSeatClass(seat)"
                    class="w-12 h-10 border rounded text-xs font-medium transition-colors"
                    :disabled="isOccupied(seat)"
                  >
                    {{ seat }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Bus Count -->
            <div class="flex items-center gap-2 text-gray-600">
              <span class="font-medium">25 Buses</span>
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <!-- Booking Details Section -->
          <div class="w-full lg:w-80 bg-gray-50 p-6">
            <!-- Journey Summary for Round Trip -->
            <div
              v-if="hasReturnDate && outboundBooking.seats.length > 0"
              class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
            >
              <h4 class="font-semibold text-green-800 mb-2">
                ✓ Outbound Journey Selected
              </h4>
              <div class="text-sm text-green-700">
                <p>{{ busParams.fromLabel }} → {{ busParams.toLabel }}</p>
                <p>Seats: {{ outboundBooking.seats.join(", ") }}</p>
                <p>Total: USD {{ outboundBooking.totalAmount }}</p>
              </div>
            </div>

            <!-- Pickup & Drop off -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">
                {{
                  currentJourneyType === "outbound"
                    ? "Pickup & Drop off"
                    : "Return Pickup & Drop off"
                }}
              </h3>

              <!-- From City -->
              <div class="mb-4">
                <div class="flex items-center justify-between mb-1">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span class="font-medium text-gray-800">
                      {{
                        currentJourneyType === "outbound"
                          ? busParams.fromLabel || "Siem Reap"
                          : busParams.toLabel || "Phnom Penh"
                      }}
                    </span>
                  </div>
                  <span class="text-sm font-medium text-gray-600">
                    {{
                      currentJourneyType === "outbound"
                        ? busParams.departureTime || "22:00"
                        : "08:00"
                    }}
                  </span>
                </div>
                <p class="text-sm text-gray-600 ml-5">
                  {{
                    currentJourneyType === "outbound"
                      ? "Behind Old Stadium, Khmer Pub Street, Krong Siem Reap Street"
                      : "Road 106, Sangkat Doun Penh, Khan Doun Penh"
                  }}
                </p>
              </div>

              <!-- To City -->
              <div class="mb-4">
                <div class="flex items-center justify-between mb-1">
                  <div class="flex items-center gap-2">
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span class="font-medium text-gray-800">
                      {{
                        currentJourneyType === "outbound"
                          ? busParams.toLabel || "Phnom Penh"
                          : busParams.fromLabel || "Siem Reap"
                      }}
                    </span>
                  </div>
                  <span class="text-sm font-medium text-gray-600">
                    {{
                      currentJourneyType === "outbound"
                        ? busParams.arrivalTime || "04:00"
                        : "14:30"
                    }}
                  </span>
                </div>
                <p class="text-sm text-gray-600 ml-5">
                  {{
                    currentJourneyType === "outbound"
                      ? "Road 106, Sangkat Doun Penh, Khan Doun Penh"
                      : "Behind Old Stadium, Khmer Pub Street, Krong Siem Reap Street"
                  }}
                </p>
              </div>
            </div>

            <!-- Selected Seats -->
            <div class="mb-6">
              <div class="flex items-center justify-between mb-2">
                <span class="font-medium text-gray-700">Seat No.</span>
                <span class="font-medium text-gray-800">
                  {{ selectedSeats.join(", ") || "None" }}
                </span>
              </div>
            </div>

            <!-- Fare Details -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">
                {{
                  currentJourneyType === "outbound"
                    ? "Outbound Fare"
                    : "Return Fare"
                }}
              </h3>
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-gray-600">
                    Base Fare ({{ selectedSeats.length }} seat{{
                      selectedSeats.length !== 1 ? "s" : ""
                    }})
                  </span>
                  <span class="font-medium text-gray-800">
                    USD {{ (baseFare * selectedSeats.length).toFixed(2) }}
                  </span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-600">Service Fee</span>
                  <span class="font-medium text-gray-800">
                    USD {{ serviceFee.toFixed(2) }}
                  </span>
                </div>
                <hr class="my-2" />
                <div class="flex items-center justify-between">
                  <span class="font-semibold text-gray-800">Journey Total</span>
                  <span class="font-bold text-gray-800">
                    USD {{ totalAmount.toFixed(2) }}
                  </span>
                </div>

                <!-- Grand Total for Round Trip -->
                <div
                  v-if="hasReturnDate && outboundBooking.seats.length > 0"
                  class="pt-2 border-t-2 border-gray-300"
                >
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-gray-800">Grand Total</span>
                    <span class="font-bold text-red-500 text-lg">
                      USD
                      {{
                        (
                          parseFloat(outboundBooking.totalAmount) + totalAmount
                        ).toFixed(2)
                      }}
                    </span>
                  </div>
                </div>
              </div>
              <button class="text-red-500 text-sm mt-2 hover:underline">
                {{ t("Show Fare BreakUp", "បង្ហាញប្រចាំប្រមានប្រឌិត") }}
              </button>
            </div>

            <!-- Proceed Button -->
            <button
              @click="proceedToBook"
              :disabled="selectedSeats.length === 0"
              class="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              {{ getButtonText() }}
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

// URL Parameters
const busParams = ref({
  busId: "",
  operator: "",
  busType: "",
  departureTime: "",
  arrivalTime: "",
  duration: "",
  price: "",
  from: "",
  fromLabel: "",
  to: "",
  toLabel: "",
  departureDate: "",
  returnDate: "",
});

// Dynamic seat availability
const allPossibleSeats = [
  "1-A",
  "2-A",
  "3-A",
  "4-A",
  "1-B",
  "2-B",
  "3-B",
  "4-B",
  "2-D",
  "3-D",
  "4-D",
  "5-D",
  "1-H",
  "2-H",
  "3-H",
  "4-H",
  "5-H",
  "1-F",
  "2-F",
  "3-F",
  "4-F",
  "5-F",
  "1-E",
  "2-E",
  "3-E",
  "4-E",
  "5-E",
];
const availableSeats = ref([]);
const occupiedSeats = computed(() => {
  // Occupied = allPossibleSeats - availableSeats
  return allPossibleSeats.filter(
    (seat) => !availableSeats.value.includes(seat)
  );
});

// Dynamically generate seat labels based on the 'seats' property from the API
const seatNumberToLabel = [
  null, // 0 index unused
  "1-A",
  "2-A",
  "3-A",
  "4-A",
  "1-B",
  "2-B",
  "3-B",
  "4-B",
  "2-D",
  "3-D",
  "4-D",
  "5-D",
  "1-H",
  "2-H",
  "3-H",
  "4-H",
  "5-H",
  "1-F",
  "2-F",
  "3-F",
  "4-F",
  "5-F",
  "1-E",
  "2-E",
  "3-E",
  "4-E",
  "5-E",
];
const busSeatsCount = ref(0);

// Instead of seat labels, use seat numbers
const seatNumbers = computed(() => {
  return Array.from({ length: busSeatsCount.value }, (_, i) => i + 1);
});

// Update seat availability logic to use numbers
const availableSeatNumbers = ref([]);
const occupiedSeatNumbers = computed(() => {
  return seatNumbers.value.filter(
    (num) => !availableSeatNumbers.value.includes(num)
  );
});

async function fetchSeatAvailability() {
  if (!busParams.value.busId) return;
  try {
    const res = await fetch(
      `http://localhost:8000/api/buses/${busParams.value.busId}`
    );
    const data = await res.json();
    if (data && data.data) {
      busSeatsCount.value = data.data.seats || 0;
      if (Array.isArray(data.data.available_seats)) {
        availableSeatNumbers.value = data.data.available_seats;
      } else {
        availableSeatNumbers.value = seatNumbers.value;
      }
    } else {
      busSeatsCount.value = 0;
      availableSeatNumbers.value = seatNumbers.value;
    }
  } catch (e) {
    busSeatsCount.value = 0;
    availableSeatNumbers.value = seatNumbers.value;
  }
}

// Journey management
const currentJourneyType = ref("outbound"); // 'outbound' or 'return'
const hasReturnDate = computed(
  () => busParams.value.returnDate && busParams.value.returnDate !== ""
);

// Outbound booking storage
const outboundBooking = ref({
  seats: [],
  totalAmount: "0.00",
});

const closeModal = () => {
  router.back();
};

// Seat management
const selectedSeats = ref([]);

// Pricing
const baseFare = ref(19.0);
const serviceFee = ref(2.0);

const totalAmount = computed(() => {
  return baseFare.value * selectedSeats.value.length + serviceFee.value;
});

// Seat functions
const toggleSeat = (seatNumber) => {
  if (isOccupied(seatNumber)) return;
  const index = selectedSeats.value.indexOf(seatNumber);
  if (index > -1) {
    selectedSeats.value.splice(index, 1);
  } else {
    selectedSeats.value.push(seatNumber);
  }
};

const isSelected = (seatNumber) => {
  return selectedSeats.value.includes(seatNumber);
};

const isOccupied = (seatNumber) => {
  return occupiedSeatNumbers.value.includes(seatNumber);
};

const getSeatClass = (seatNumber) => {
  if (isOccupied(seatNumber)) {
    return "bg-red-500 border-red-700 text-white cursor-not-allowed";
  } else if (isSelected(seatNumber)) {
    return "bg-blue-500 border-blue-600 text-white hover:bg-blue-600";
  } else {
    return "bg-gray-200 border-gray-300 text-gray-700 hover:bg-gray-300";
  }
};

const getButtonText = () => {
  if (!hasReturnDate.value) {
    return "PROCEED TO BOOK";
  }

  if (currentJourneyType.value === "outbound") {
    return "CONTINUE TO RETURN";
  } else {
    return "PROCEED TO BOOK";
  }
};

const proceedToBook = () => {
  if (selectedSeats.value.length === 0) return;

  // If this is a round trip and we're on the outbound journey
  if (hasReturnDate.value && currentJourneyType.value === "outbound") {
    // Store outbound booking details
    outboundBooking.value = {
      seats: [...selectedSeats.value],
      totalAmount: totalAmount.value.toFixed(2),
    };

    // Switch to return journey
    currentJourneyType.value = "return";
    selectedSeats.value = []; // Clear selected seats for return journey

    // Generate different occupied seats for return journey (simulate different bus)
    availableSeats.value = ["1-A", "3-B", "2-H", "4-F", "1-E"];

    return;
  }

  // Proceed to booking confirmation
  const bookingData = {
    ...busParams.value,
    currentJourneyType: currentJourneyType.value,
  };

  if (hasReturnDate.value) {
    // Round trip booking
    bookingData.outboundSeats = outboundBooking.value.seats.join(",");
    bookingData.outboundTotal = outboundBooking.value.totalAmount;
    bookingData.returnSeats = selectedSeats.value.join(",");
    bookingData.returnTotal = totalAmount.value.toFixed(2);
    bookingData.grandTotal = (
      parseFloat(outboundBooking.value.totalAmount) + totalAmount.value
    ).toFixed(2);
  } else {
    // One way booking
    bookingData.seats = selectedSeats.value.join(",");
    bookingData.totalAmount = totalAmount.value.toFixed(2);
  }

  router.push({
    path: "/booking-confirmation",
    query: bookingData,
  });

  // After booking, close modal and refresh seat availability
  fetchSeatAvailability();
  selectedSeats.value = [];
};

onMounted(async () => {
  busParams.value = {
    busId: route.query.busId || "",
    operator: route.query.operator || "Mekong Express",
    busType: route.query.busType || "VIP Sleeper",
    departureTime: route.query.departureTime || "22:00",
    arrivalTime: route.query.arrivalTime || "04:00",
    duration: route.query.duration || "6h 00m",
    price: route.query.price || "19",
    from: route.query.from || "siem-reap",
    fromLabel: route.query.fromLabel || "Siem Reap",
    to: route.query.to || "phnom-penh",
    toLabel: route.query.toLabel || "Phnom Penh",
    departureDate: route.query.departureDate || "",
    returnDate: route.query.returnDate || "",
  };

  if (route.query.price) {
    baseFare.value = parseFloat(route.query.price);
  }
  await fetchSeatAvailability();
});
</script>

<style scoped>
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
