<script setup lang="ts">
import { Megaphone, QrCode, Home } from 'lucide-vue-next'
import Button from '../ui/button/Button.vue'
</script>

<template>
  <footer
    class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around py-2"
  >
    <!-- Início -->
     <router-link to="/home">
    <Button
      class="flex flex-col items-center justify-center text-xs text-blue-700 hover:!bg-gray-200 bg-transparent"
    >
      <Home class="w-6 h-6" />
      <span>Início</span>
    </Button>
</router-link>
    <!-- Denúncia -->
    <Button
      class="flex flex-col items-center justify-center text-xs text-blue-700 hover:!bg-gray-200 bg-transparent"
    >
      <Megaphone class="w-6 h-6" />
      <span>Denúncia</span>
    </Button>

    <!-- QR Code -->
    <Button
      class="flex flex-col items-center justify-center text-xs text-blue-700 hover:!bg-gray-200 bg-transparent"
    >
      <QrCode class="w-6 h-6" />
      <span>QR Code</span>
    </Button>
  </footer>
</template>

<style scoped>
footer {
  z-index: 50;
}
</style>
