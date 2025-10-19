<template>
  <div id="map" class="h-screen w-full"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'

onMounted(() => {
  // Cria o mapa centralizado em Porto Velho (por exemplo)
  const map = L.map('map').setView([-8.7619, -63.9039], 13)

  // Adiciona camada base do OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map)
})
</script>

<style>
#map {
  height: 100vh;
  width: 100%;
}
</style>
