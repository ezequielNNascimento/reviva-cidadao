<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Breadcrumb from '@/components/layout/Breadcrumb.vue'


interface VolunteerEvent {
  id: string;
  title: string;
  dateTime: string;
  address: string;
  description: string;
  isParticipating: boolean;
}

const events = ref<VolunteerEvent[]>([
  {
    id: 'item-1',
    title: 'Mutirão de limpeza na orla do Rio Madeira em conjunto com a população',
    dateTime: '21/10/2025 - 21/10/2025, 11:00',
    address: 'Avenida Sete de Setembro',
    description: 'Mutirão para recolhimento de lixo na orla.',
    isParticipating: false,
  },
  {
    id: 'item-2',
    title: 'Mutirão de limpeza no Parque Natural de Porto Velho',
    dateTime: '20/10/2025 - 20/10/2025, 10:30',
    address: 'Avenida Rio Madeira',
    description: 'No dia 20 de outubro, será realizado um mutirão de limpeza no Parque Natural, em comemoração ao Dia Mundial de Limpeza de Rios e Praias. Este evento, que ocorre em mais de 180 países, tem como objetivo promover atividades de preservação da natureza. A ação será destaque no site da Secretaria Municipal de Meio Ambiente de Porto Velho, que convida todos a participarem dessa importante iniciativa de conscientização ambiental.',
    isParticipating: false,
  },
  {
    id: 'item-3',
    title: 'Plantio florestal nas avenidas principais de Porto Velho',
    dateTime: '20/11/2025 - 20/11/2025, 10:15',
    address: 'Avenida Rio de janeiro',
    description: 'O Município de Porto Velho, vai promover um evento para conscientizar e estimular a população na preservação ambiental. A ação, que faz parte do Projeto Plantar o Futuro e Cultivar a Vida, tem como objetivo criar um corredor ecológico no Município por meio do reflorestamento de uma área de 28 hectares. A Confederação Nacional de Municípios (CNM) incentivou a ação e a adesão do Município a outro projeto, o Virada Ambiental, que também incentiva o plantio de árvores',
    isParticipating: true,
  },
])

const breadcrumbItems = [
  { name: 'Início', href: '/home' },
  { name: 'Eventos' }
]
const address = ref('')
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
          .then(res => res.json())
          .then(data => { address.value = data.display_name })
          .catch(() => { address.value = "Não foi possível obter endereço" })
      },
      () => { address.value = "Permissão negada para acessar localização" }
    )
  } else {
    address.value = "Geolocalização não suportada"
  }
}
onMounted(() => {
  getLocation()
})
</script>
<template>
  <div class="p-4">
    <Breadcrumb class="mb-3" :items="breadcrumbItems" />
    <Accordion type="single" collapsible class="w-full max-w-lg mx-auto p-1 md:p-2">
      <AccordionItem
        v-for="event in events"
        :key="event.id"
        :value="event.id"
        class="border rounded-lg mb-2 bg-white shadow-sm"
      >
        <div class="flex items-center p-2 md:p-3 w-full">
          <AccordionTrigger class="flex-grow">
            <div class="flex flex-col items-start text-left">
              <span class="font-bold text-md">{{ event.title }}</span>
              <span class="text-sm text-gray-500 mt-1">{{ event.dateTime }}</span>
            </div>
          </AccordionTrigger>

        </div>
        <AccordionContent class="p-2 md:p-3 text-gray-700">
          <p class="mb-1"><span class="font-semibold">Endereço:</span> {{ event.address }}</p>
          <p><span class="font-semibold">Descrição:</span> {{ event.description }}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
