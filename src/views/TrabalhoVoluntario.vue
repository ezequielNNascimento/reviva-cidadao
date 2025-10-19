<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Breadcrumb from '@/components/layout/Breadcrumb.vue'
import { Button } from '@/components/ui/button'
import { toast } from 'vue-sonner'

// 1. DEFINIÇÃO DO TIPO (INTERFACE)
// Criamos uma interface para descrever a estrutura de um objeto de evento.
// Isto substitui o uso de 'any' e torna o nosso código mais seguro e claro.
interface VolunteerEvent {
  id: string;
  title: string;
  dateTime: string;
  address: string;
  description: string;
  isParticipating: boolean;
}

// 2. APLICAÇÃO DO TIPO AO NOSSO ARRAY DE EVENTOS
// Agora, informamos ao TypeScript que 'events' é um array de 'VolunteerEvent'.
const events = ref<VolunteerEvent[]>([
  {
    id: 'item-1',
    title: 'Mutirão de limpeza orla do Rio Madeira I',
    dateTime: '21/10/2025, 11:00',
    address: 'Avenida Sete de Setembro',
    description: 'Mutirão para recolhimento de lixo na orla.',
    isParticipating: false,
  },
  {
    id: 'item-2',
    title: 'Mutirão de limpeza orla do Rio Madeira II',
    dateTime: '19/10/2025, 10:30',
    address: 'Avenida Jorge Teixeira',
    description: 'Junte-se a nós para deixar a orla mais limpa!',
    isParticipating: false,
  },
  {
    id: 'item-3',
    title: 'Mutirão de limpeza orla do Rio Madeira III',
    dateTime: '20/10/2025, 10:15',
    address: 'Avenida Rio de Janeiro',
    description: 'Recolhimento de lixo na área da Estrada de Ferro Madeira Mamoré.',
    isParticipating: true,
  },
])

// 3. APLICAÇÃO DO TIPO AO PARÂMETRO DA FUNÇÃO
// A função agora espera um argumento que corresponda à interface 'VolunteerEvent'.
function promptParticipation(event: VolunteerEvent) {
  toast.info(`Participar no evento "${event.title}"?`, {
    action: {
      label: 'Confirmar',
      onClick: () => {
        const eventToUpdate = events.value.find(e => e.id === event.id)
        if (eventToUpdate) {
          eventToUpdate.isParticipating = true
        }
        toast.success('Inscrição confirmada!', {
          description: `Obrigado por se juntar a nós em "${event.title}".`,
        })
      },
    },
    cancel: {
      label: 'Cancelar',
      onClick: () => {
        toast.info('Ação cancelada.')
      }
    },
    duration: 10000,
  })
}

const breadcrumbItems = [
  { name: 'Início', href: '/home' },
  { name: 'Trabalho Voluntario' }
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

          <div class="ml-4 flex-shrink-0">
            <Button
              v-if="!event.isParticipating"
              @click="promptParticipation(event)"
              variant="default"
              class="bg-green-600 hover:bg-green-700"
            >
              Participar
            </Button>

            <Button v-else  class="bg-blue-700">
              Participando
            </Button>
          </div>
        </div>

        <AccordionContent class="p-2 md:p-3 text-gray-700">
          <p class="mb-1"><span class="font-semibold">Endereço:</span> {{ event.address }}</p>
          <p><span class="font-semibold">Descrição:</span> {{ event.description }}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>

  </div>
</template>
