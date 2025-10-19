<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Breadcrumb from '@/components/layout/Breadcrumb.vue'
import Button from '@/components/ui/button/Button.vue'
const currentDateTime = ref('')

function updateDateTime() {
  const now = new Date()
  currentDateTime.value = now.toLocaleString()
}
const address = ref('')

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords

        // Usando fetch para Nominatim
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
          .then(res => res.json())
          .then(data => {
            address.value = data.display_name
          })
          .catch(() => {
            address.value = "Não foi possível obter endereço"
          })
      },
      () => {
        address.value = "Permissão negada para acessar localização"
      }
    )
  } else {
    address.value = "Geolocalização não suportada"
  }
}



onMounted(() => {
  updateDateTime()

  getLocation()
})
const breadcrumbItems = [
  { name: 'Início', href: '/home' },
  { name: 'Minhas Denúncias' }
]
</script>

<template>
  <div class="p-4">
    <Breadcrumb class="mb-3" :items="breadcrumbItems" />
     <div class="flex justify-end mb-4">
      <RouterLink to="CriarDenuncia">
      <Button
        class="bg-[#2062A9] text-white hover:bg-[#184d87]"
      >
        Criar Denúncia
      </Button>
      </RouterLink>
    </div>
  <Accordion type="single" collapsible class="w-full max-w-lg mx-auto p-1 md:p-2">
    <AccordionItem value="item-1" class="border rounded-lg mb-1 bg-white shadow-sm">
      <AccordionTrigger class="flex flex-row items-center justify-between p-2 md:p-3 w-full">
        <div class="flex flex-col items-start">
          <span class="font-bold text-md">Saneamento</span>
          <span class="text-sm text-gray-500 mt-1">{{ currentDateTime }}</span>
        </div>
      </AccordionTrigger>

      <AccordionContent class="p-2 md:p-3 text-gray-700">
        <p class="mb-1"><span class="font-semibold">Endereço:</span> {{ address || "Buscando localização..." }}</p>
        <p><span class="font-semibold">Descrição:</span> Teste</p>
      </AccordionContent>
      <AccordionContent class="p-2 md:p-3 text-gray-700">
        <p class="font-bold">Foto:</p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>

  <Accordion type="single" collapsible class="w-full max-w-lg mx-auto p-1 md:p-2">
    <AccordionItem value="item-2" class="border rounded-lg mb-1 bg-white shadow-sm">
      <AccordionTrigger class="flex flex-row items-center justify-between p-2 md:p-3 w-full">
        <div class="flex flex-col items-start">
          <span class="font-bold text-md">Lixo</span>
          <span class="text-sm text-gray-500 mt-1">{{ currentDateTime }}</span>
        </div>
      </AccordionTrigger>

      <AccordionContent class="p-2 md:p-3 text-gray-700">
        <p class="mb-1"><span class="font-semibold">Endereço:</span> {{ address || "Buscando localização..." }}</p>
        <p><span class="font-semibold">Descrição:</span> Teste</p>
      </AccordionContent>
      <AccordionContent class="p-2 md:p-3 text-gray-700">
        <p class="font-bold">Foto:</p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>

  <Accordion type="single" collapsible class="w-full max-w-lg mx-auto p-1 md:p-2">
    <AccordionItem value="item-3" class="border rounded-lg mb-1 bg-white shadow-sm">
      <AccordionTrigger class="flex flex-row items-center justify-between p-2 md:p-3 w-full">
        <div class="flex flex-col items-start">
          <span class="font-bold text-md">Alagamento</span>
          <span class="text-sm text-gray-500 mt-1">{{ currentDateTime }}</span>
        </div>
      </AccordionTrigger>

      <AccordionContent class="p-2 md:p-3 text-gray-700">
        <p class="mb-1"><span class="font-semibold">Endereço:</span> {{ address || "Buscando localização..." }}</p>
        <p><span class="font-semibold">Descrição:</span> teste</p>
      </AccordionContent>
      <AccordionContent class="p-2 md:p-3 text-gray-700">
        <p class="font-bold">Foto:</p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  </div>
</template>

