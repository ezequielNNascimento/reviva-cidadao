<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import QrScanner from 'qr-scanner'

// refs
const videoEl = ref<HTMLVideoElement | null>(null)
const result = ref('')

// scanner
let scanner: QrScanner | null = null

onMounted(() => {
  if (videoEl.value) {
    scanner = new QrScanner(
      videoEl.value,
      (decodedText) => {
        result.value = decodedText
        scanner?.stop() // para o scanner após leitura
        alert(`QR Code lido: ${decodedText}`)
      }
    )

    scanner
      .start()
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : String(err)
        alert('Erro ao acessar a câmera: ' + message)
      })
  }
})

onBeforeUnmount(() => {
  scanner?.stop()
})
</script>

<template>
  <section class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <h1 class="text-lg font-bold text-blue-800 mb-4">Leitor de QR Code</h1>
    <video ref="videoEl" class="w-full max-w-sm rounded-lg shadow-md bg-black"></video>

    <p v-if="result" class="mt-4 text-green-700 font-semibold">
      Resultado: {{ result }}
    </p>
  </section>
</template>
