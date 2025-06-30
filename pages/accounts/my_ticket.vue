
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm border-b">
      <div class="max-w-6xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <button @click="goBack" class="p-1 rounded-full hover:bg-gray-100 transition">
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <h1 class="text-2xl font-bold text-gray-800">My Tickets</h1>
          </div>
          <div class="flex items-center gap-2">
            <button
              @click="filterStatus = 'all'"
              :class="filterStatus === 'all' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              All
            </button>
            <button
              @click="filterStatus = 'upcoming'"
              :class="filterStatus === 'upcoming' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Upcoming
            </button>
            <button
              @click="filterStatus = 'completed'"
              :class="filterStatus === 'completed' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Completed
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Tickets List -->
    <div class="max-w-6xl mx-auto p-4">
      <div v-if="filteredTickets.length === 0" class="text-center py-12">
        <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        <h3 class="text-lg font-medium text-gray-800 mb-2">No tickets found</h3>
        <p class="text-gray-600">You don't have any {{ filterStatus === 'all' ? '' : filterStatus }} tickets yet.</p>
      </div>

      <div v-else class="space-y-4">
        <div
          v-for="ticket in filteredTickets"
          :key="ticket.id"
          class="bg-white rounded-lg shadow-sm  hover:shadow-md transition-shadow"
        >
          <!-- Ticket Card -->
          <div class="p-6">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-3">
                <div :class="getStatusColor(ticket.status)" class="w-3 h-3 rounded-full"></div>
                <div>
                  <h3 class="font-semibold text-gray-800">{{ ticket.route }}</h3>
                  <p class="text-sm text-gray-600">{{ ticket.operator }}</p>
                </div>
              </div>
              <div class="text-right">
                <span :class="getStatusTextColor(ticket.status)" class="text-sm font-medium px-2 py-1 rounded-full">
                  {{ ticket.status }}
                </span>
                <p class="text-sm text-gray-600 mt-1">{{ ticket.bookingRef }}</p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <!-- Journey Info -->
              <div>
                <p class="text-sm text-gray-600 mb-1">Journey Date</p>
                <p class="font-medium text-gray-800">{{ formatDate(ticket.departureDate) }}</p>
                <p class="text-sm text-gray-600">{{ ticket.departureTime }}</p>
              </div>
              
              <!-- Seats -->
              <div>
                <p class="text-sm text-gray-600 mb-1">Seats</p>
                <p class="font-medium text-gray-800">{{ ticket.seats.join(', ') }}</p>
                <p class="text-sm text-gray-600">{{ ticket.seats.length }} passenger{{ ticket.seats.length > 1 ? 's' : '' }}</p>
              </div>
              
              <!-- Amount -->
              <div>
                <p class="text-sm text-gray-600 mb-1">Total Amount</p>
                <p class="font-bold text-lg text-gray-800">USD {{ ticket.totalAmount }}</p>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center gap-3 pt-4 ">
              <button
                @click="viewTicketDetails(ticket)"
                class="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
                View Details
              </button>
              
              <button
                v-if="ticket.status === 'Confirmed'"
                @click="printQR(ticket)"
                class="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2m-10 9a2 2 0 01-2-2v-2a2 2 0 012-2h2m7 0a2 2 0 012 2v2a2 2 0 01-2 2m-7 0a2 2 0 00-2-2v-2a2 2 0 002-2"/>
                </svg>
                Print QR
              </button>
              
              <button
                @click="downloadTicket(ticket)"
                class="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ticket Detail Modal -->
    <div v-if="showDetailModal" class="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <!-- Modal Header -->
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-semibold text-gray-800">Ticket Details</h3>
            <button @click="closeDetailModal" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div v-if="selectedTicket">
            <!-- Ticket Header -->
            <div class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div class="flex items-center justify-between mb-2">
                <h4 class="text-lg font-semibold text-red-800">{{ selectedTicket.route }}</h4>
                <span :class="getStatusTextColor(selectedTicket.status)" class="text-sm font-medium px-3 py-1 rounded-full">
                  {{ selectedTicket.status }}
                </span>
              </div>
              <p class="text-red-700">{{ selectedTicket.operator }} - {{ selectedTicket.busType }}</p>
              <p class="text-sm text-red-600 mt-1">Booking Reference: {{ selectedTicket.bookingRef }}</p>
            </div>

            <!-- Journey Details -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <!-- Departure -->
              <div class="space-y-4">
                <h5 class="font-semibold text-gray-800 border-b pb-2">Departure Details</h5>
                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <div>
                      <p class="font-medium text-gray-800">{{ formatDate(selectedTicket.departureDate) }}</p>
                      <p class="text-sm text-gray-600">{{ selectedTicket.departureTime }}</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <div>
                      <p class="font-medium text-gray-800">{{ selectedTicket.fromCity }}</p>
                      <p class="text-sm text-gray-600">{{ selectedTicket.boardingPoint }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Arrival -->
              <div class="space-y-4">
                <h5 class="font-semibold text-gray-800  pb-2">Arrival Details</h5>
                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <div>
                      <p class="font-medium text-gray-800">{{ formatDate(selectedTicket.arrivalDate) }}</p>
                      <p class="text-sm text-gray-600">{{ selectedTicket.arrivalTime }}</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <div>
                      <p class="font-medium text-gray-800">{{ selectedTicket.toCity }}</p>
                      <p class="text-sm text-gray-600">{{ selectedTicket.droppingPoint }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Passenger & Seat Info -->
            <div class="bg-gray-50 rounded-lg p-4 mb-6">
              <h5 class="font-semibold text-gray-800 mb-3">Passenger & Seat Information</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="text-sm text-gray-600 mb-1">Passengers</p>
                  <div class="space-y-1">
                    <p v-for="passenger in selectedTicket.passengers" :key="passenger.name" class="font-medium text-gray-800">
                      {{ passenger.name }} ({{ passenger.age }}, {{ passenger.gender }})
                    </p>
                  </div>
                </div>
                <div>
                  <p class="text-sm text-gray-600 mb-1">Seat Numbers</p>
                  <p class="font-medium text-gray-800">{{ selectedTicket.seats.join(', ') }}</p>
                </div>
              </div>
            </div>

            <!-- Fare Breakdown -->
            <div class="border rounded-lg p-4 mb-6">
              <h5 class="font-semibold text-gray-800 mb-3">Fare Breakdown</h5>
              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-gray-600">Base Fare ({{ selectedTicket.seats.length }} seat{{ selectedTicket.seats.length > 1 ? 's' : '' }})</span>
                  <span class="font-medium">USD {{ selectedTicket.baseFare }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-600">Service Fee</span>
                  <span class="font-medium">USD {{ selectedTicket.serviceFee }}</span>
                </div>
                <div v-if="selectedTicket.discount > 0" class="flex items-center justify-between text-green-600">
                  <span>Discount</span>
                  <span class="font-medium">-USD {{ selectedTicket.discount }}</span>
                </div>
                <hr class="my-2">
                <div class="flex items-center justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span>USD {{ selectedTicket.totalAmount }}</span>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center gap-3">
              <button
                v-if="selectedTicket.status === 'Confirmed'"
                @click="printQR(selectedTicket)"
                class="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2m-10 9a2 2 0 01-2-2v-2a2 2 0 012-2h2m7 0a2 2 0 012 2v2a2 2 0 01-2 2m-7 0a2 2 0 00-2-2v-2a2 2 0 002-2"/>
                </svg>
                Print QR Code
              </button>
              
              <button
                @click="downloadTicket(selectedTicket)"
                class="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Download Ticket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- QR Print Modal -->
    <div v-if="showQRModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div class="p-6 text-center">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-semibold text-gray-800">Boarding Pass QR Code</h3>
            <button @click="closeQRModal" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div v-if="qrTicket" class="space-y-4">
            <!-- QR Code -->
            <div class="bg-gray-50 p-6 rounded-lg">
              <div class="w-48 h-48 mx-auto bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center mb-4">
                <div class="text-center">
                  <svg class="w-24 h-24 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01m-5.01 0h.01m16 8h.01M8 8h.01M4 4h.01M4 8h.01M4 16h.01"/>
                  </svg>
                  <p class="text-xs text-gray-500">QR Code</p>
                </div>
              </div>
              
              <!-- Ticket Info -->
              <div class="text-left space-y-2">
                <div class="flex justify-between">
                  <span class="text-sm text-gray-600">Booking Ref:</span>
                  <span class="text-sm font-medium">{{ qrTicket.bookingRef }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-sm text-gray-600">Route:</span>
                  <span class="text-sm font-medium">{{ qrTicket.route }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-sm text-gray-600">Date:</span>
                  <span class="text-sm font-medium">{{ formatDate(qrTicket.departureDate) }}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-sm text-gray-600">Seats:</span>
                  <span class="text-sm font-medium">{{ qrTicket.seats.join(', ') }}</span>
                </div>
              </div>
            </div>

            <!-- Print Button -->
            <button
              @click="printQRCode"
              class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              Print QR Code
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Data
const filterStatus = ref('all')
const showDetailModal = ref(false)
const showQRModal = ref(false)
const selectedTicket = ref(null)
const qrTicket = ref(null)

// Mock tickets data
const tickets = ref([
  {
    id: 1,
    bookingRef: 'BUS123ABC456',
    route: 'Siem Reap → Phnom Penh',
    operator: 'Vireak Buntham Express',
    busType: 'VIP Sleeper',
    status: 'Confirmed',
    departureDate: '2024-01-15',
    departureTime: '22:00',
    arrivalDate: '2024-01-16',
    arrivalTime: '04:00',
    fromCity: 'Siem Reap',
    toCity: 'Phnom Penh',
    boardingPoint: 'Behind Old Stadium, Khmer Pub Street',
    droppingPoint: 'Road 106, Sangkat Doun Penh',
    seats: ['11A', '11B'],
    passengers: [
      { name: 'John Doe', age: 30, gender: 'Male' },
      { name: 'Jane Doe', age: 28, gender: 'Female' }
    ],
    baseFare: '28.80',
    serviceFee: '4.00',
    discount: '1.40',
    totalAmount: '31.40',
    bookingDate: '2024-01-10'
  },
  {
    id: 2,
    bookingRef: 'BUS789XYZ123',
    route: 'Phnom Penh → Sihanoukville',
    operator: 'Mekong Express',
    busType: 'Standard Bus',
    status: 'Completed',
    departureDate: '2024-01-05',
    departureTime: '08:00',
    arrivalDate: '2024-01-05',
    arrivalTime: '12:30',
    fromCity: 'Phnom Penh',
    toCity: 'Sihanoukville',
    boardingPoint: 'Central Market Bus Station',
    droppingPoint: 'Sihanoukville Bus Terminal',
    seats: ['15C'],
    passengers: [
      { name: 'Alice Smith', age: 25, gender: 'Female' }
    ],
    baseFare: '12.00',
    serviceFee: '2.00',
    discount: '0.00',
    totalAmount: '14.00',
    bookingDate: '2024-01-03'
  },
  {
    id: 3,
    bookingRef: 'BUS456DEF789',
    route: 'Battambang → Siem Reap',
    operator: 'Capitol Tour',
    busType: 'Mini Van',
    status: 'Cancelled',
    departureDate: '2024-01-20',
    departureTime: '14:00',
    arrivalDate: '2024-01-20',
    arrivalTime: '17:30',
    fromCity: 'Battambang',
    toCity: 'Siem Reap',
    boardingPoint: 'Battambang Central Station',
    droppingPoint: 'Siem Reap Tourist Area',
    seats: ['8A', '8B'],
    passengers: [
      { name: 'Bob Wilson', age: 35, gender: 'Male' },
      { name: 'Carol Wilson', age: 32, gender: 'Female' }
    ],
    baseFare: '16.00',
    serviceFee: '2.00',
    discount: '0.00',
    totalAmount: '18.00',
    bookingDate: '2024-01-18'
  }
])

// Computed
const filteredTickets = computed(() => {
  if (filterStatus.value === 'all') return tickets.value
  
  const now = new Date()
  return tickets.value.filter(ticket => {
    const departureDate = new Date(ticket.departureDate)
    
    if (filterStatus.value === 'upcoming') {
      return departureDate >= now && ticket.status !== 'Cancelled'
    } else if (filterStatus.value === 'completed') {
      return departureDate < now || ticket.status === 'Completed' || ticket.status === 'Cancelled'
    }
    
    return true
  })
})

// Methods
const goBack = () => {
  router.back()
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

const getStatusColor = (status) => {
  switch (status) {
    case 'Confirmed': return 'bg-green-500'
    case 'Completed': return 'bg-blue-500'
    case 'Cancelled': return 'bg-red-500'
    default: return 'bg-gray-500'
  }
}

const getStatusTextColor = (status) => {
  switch (status) {
    case 'Confirmed': return 'bg-green-100 text-green-800'
    case 'Completed': return 'bg-blue-100 text-blue-800'
    case 'Cancelled': return 'bg-red-100 text-red-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

const viewTicketDetails = (ticket) => {
  selectedTicket.value = ticket
  showDetailModal.value = true
}

const closeDetailModal = () => {
  showDetailModal.value = false
  selectedTicket.value = null
}

const printQR = (ticket) => {
  qrTicket.value = ticket
  showQRModal.value = true
}

const closeQRModal = () => {
  showQRModal.value = false
  qrTicket.value = null
}

const printQRCode = () => {
  // Create a new window for printing
  const printWindow = window.open('', '_blank')
  const qrContent = `
    <html>
      <head>
        <title>Boarding Pass - ${qrTicket.value.bookingRef}</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
          .qr-container { border: 2px solid #000; padding: 20px; margin: 20px auto; width: 300px; }
          .qr-code { width: 200px; height: 200px; border: 1px solid #ccc; margin: 20px auto; background: #f0f0f0; display: flex; align-items: center; justify-content: center; }
          .ticket-info { text-align: left; margin-top: 20px; }
          .ticket-info div { margin: 5px 0; }
          @media print { body { margin: 0; } }
        </style>
      </head>
      <body>
        <div class="qr-container">
          <h2>Boarding Pass</h2>
          <div class="qr-code">QR CODE</div>
          <div class="ticket-info">
            <div><strong>Booking Ref:</strong> ${qrTicket.value.bookingRef}</div>
            <div><strong>Route:</strong> ${qrTicket.value.route}</div>
            <div><strong>Date:</strong> ${formatDate(qrTicket.value.departureDate)}</div>
            <div><strong>Time:</strong> ${qrTicket.value.departureTime}</div>
            <div><strong>Seats:</strong> ${qrTicket.value.seats.join(', ')}</div>
            <div><strong>Operator:</strong> ${qrTicket.value.operator}</div>
          </div>
        </div>
      </body>
    </html>
  `
  
  printWindow.document.write(qrContent)
  printWindow.document.close()
  printWindow.print()
  
  closeQRModal()
}

const downloadTicket = (ticket) => {
  // Create downloadable ticket content
  const ticketContent = `
DIGITAL TICKET
==============

Booking Reference: ${ticket.bookingRef}
Route: ${ticket.route}
Operator: ${ticket.operator}
Bus Type: ${ticket.busType}

JOURNEY DETAILS
---------------
Departure: ${formatDate(ticket.departureDate)} at ${ticket.departureTime}
Arrival: ${formatDate(ticket.arrivalDate)} at ${ticket.arrivalTime}

From: ${ticket.fromCity}
Boarding Point: ${ticket.boardingPoint}

To: ${ticket.toCity}
Dropping Point: ${ticket.droppingPoint}

PASSENGER INFORMATION
--------------------
${ticket.passengers.map(p => `${p.name} (${p.age}, ${p.gender})`).join('\n')}

Seat Numbers: ${ticket.seats.join(', ')}

FARE BREAKDOWN
--------------
Base Fare: USD ${ticket.baseFare}
Service Fee: USD ${ticket.serviceFee}
Discount: USD ${ticket.discount}
Total Amount: USD ${ticket.totalAmount}

Status: ${ticket.status}
Booking Date: ${formatDate(ticket.bookingDate)}

Thank you for choosing our service!
  `

  // Create and download file
  const blob = new Blob([ticketContent], { type: 'text/plain' })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `ticket-${ticket.bookingRef}.txt`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  window.URL.revokeObjectURL(url)
}

onMounted(() => {
  // Component mounted
})
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

/* Print styles */
@media print {
  .no-print {
    display: none !important;
  }
}
</style>
