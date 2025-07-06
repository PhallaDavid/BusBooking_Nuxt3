<template>
  <div class="relative">
    <!-- Bell Icon Button -->
    <button
      @click="toggleDropdown"
      class="relative p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
    >
      <font-awesome-icon
        :icon="['fas', 'bell']"
        class="w-6 h-6 text-blue-500"
      />
      <span
        v-if="unreadCount > 0"
        class="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] rounded-full px-1 py-0.7 font-bold animate-bounce border border-white shadow-sm"
        >{{ unreadCount }}</span
      >
    </button>
    <!-- Dropdown -->
    <transition name="fade">
      <div
        v-if="showDropdown"
        class="absolute right-10 mt-2 w-72 max-w-xs sm:w-80 bg-white shadow border border-gray-200 rounded-lg z-50"
      >
        <div
          class="flex items-center justify-between px-3 py-2 border-b border-gray-100"
        >
          <span class="font-semibold text-gray-800 text-sm">Notifications</span>
          <button
            v-if="unreadCount > 0"
            @click="markAllRead"
            class="text-xs text-blue-600 hover:underline"
          >
            Mark all as read
          </button>
        </div>
        <ul class="max-h-64 overflow-y-auto divide-y divide-gray-100">
          <li v-for="msg in messages" :key="msg.id">
            <button
              @click="onMessageClick(msg)"
              class="w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <span class="flex-shrink-0 mt-0.5">
                <svg
                  v-if="!msg.read"
                  class="w-2 h-2 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <circle cx="4" cy="4" r="4" />
                </svg>
              </span>
              <!-- Show image if present -->
              <img
                v-if="msg.image"
                :src="
                  msg.image.startsWith('http')
                    ? msg.image
                    : 'http://localhost:8000/images/' + msg.image
                "
                alt="Notification"
                class="w-8 h-8 object-cover rounded-full border border-gray-200"
              />
              <span
                :class="[
                  msg.read ? 'text-gray-400' : 'text-gray-700 font-medium',
                  'truncate',
                ]"
                >{{ msg.text }}</span
              >
            </button>
          </li>
          <li v-if="messages.length === 0">
            <div class="px-3 py-8 text-center text-gray-400 text-sm">
              No notifications
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const props = defineProps({
  messages: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["message-click", "mark-all-read"]);

const showDropdown = ref(false);
const unreadCount = computed(
  () => props.messages.filter((m) => !m.read).length
);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}
function onMessageClick(msg) {
  emit("message-click", msg);
  showDropdown.value = false;
}
function markAllRead() {
  emit("mark-all-read");
}
function handleClickOutside(event) {
  if (!event.target.closest(".relative")) {
    showDropdown.value = false;
  }
}
watch(showDropdown, (val) => {
  if (val) document.addEventListener("click", handleClickOutside);
  else document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
