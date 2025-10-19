<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Breadcrumb from '@/components/layout/Breadcrumb.vue';
import { onMounted, ref, computed } from 'vue';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Label from '@/components/ui/label/Label.vue';
import { Button } from '@/components/ui/button';
import { toast } from 'vue-sonner';

const address = ref('');
const selectedFile = ref<File | null>(null);
const previewUrl = ref<string | null>(null);
const category = ref('');
const description = ref('');

const breadcrumbItems = [
  { name: 'Início', href: '/home' },
  { name: 'Minhas Denúncias', href: '/Denuncia' },
  { name: 'Crie sua Denúncia' }
];

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
          .then(res => res.json())
          .then(data => { address.value = data.display_name })
          .catch(() => { address.value = "Não foi possível obter endereço" });
      },
      () => { address.value = "Permissão negada para acessar localização" }
    );
  } else {
    address.value = "Geolocalização não suportada";
  }
}

onMounted(() => getLocation());

function handleFileChange(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    selectedFile.value = file;
    previewUrl.value = URL.createObjectURL(file);
  }
}

function cancelFile() {
  if (selectedFile.value) {
    toast.info('Upload de imagem cancelado.');
  }
  selectedFile.value = null;
  previewUrl.value = null;
}

const isFormValid = computed(() => {
  return category.value !== '' && description.value.trim() !== '' && selectedFile.value !== null;
});

function saveFile() {
  if (!isFormValid.value) return;

  toast.success('Denúncia enviada com sucesso!', {
    description: `A sua denúncia sobre "${category.value}" foi registrada.`
  });

  cancelFile();
  category.value = '';
  description.value = '';
}
</script>

<template>
  <div class="p-6 max-w-7xl mx-auto space-y-8 overflow-auto">
    <Breadcrumb :items="breadcrumbItems" />

    <div class="bg-white rounded-lg shadow p-10 space-y-6">
      <div>
        <Label class="mb-2">Categoria:</Label>
        <Select class="w-full" v-model="category">
          <SelectTrigger>
            <SelectValue placeholder="Selecione uma Categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categorias</SelectLabel>
              <SelectItem value="Saneamento">Saneamento</SelectItem>
              <SelectItem value="Lixo">Lixo</SelectItem>
              <SelectItem value="Iluminação">Iluminação</SelectItem>
              <SelectItem value="Alagamento">Alagamento</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <p class="text-gray-700">
        <span class="font-semibold">Endereço:</span>
        Av. Calama, 4985 - Flodoaldo Pontes Pinto, Porto Velho - RO, 76820-441
      </p>

      <div class="grid w-full gap-1.5">
        <Label for="description">Descrição:</Label>
        <Textarea
          id="description"
          placeholder="Escreva sua descrição no campo . . ."
          v-model="description"
          rows="4"
        />
        <p class="text-sm text-gray-500">Máximo de 200 caracteres</p>
      </div>

      <div class="grid w-full gap-2">
        <Label>Foto:</Label>

        <!-- Input customizado: remove o texto "Nenhum arquivo escolhido" -->
        <label
          for="file-upload"
          class="inline-block bg-[#2062A9] text-white text-sm font-semibold py-2 px-4 rounded cursor-pointer hover:bg-blue-700 text-center w-full sm:w-auto"
        >
          Escolher arquivo
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          capture="environment"
          @change="handleFileChange"
          class="hidden"
        />

        <p v-if="selectedFile" class="text-sm text-gray-600">
          📷 {{ selectedFile.name }}
        </p>

        <div class="flex justify-end gap-2 mt-2">
          <Button variant="destructive" @click="cancelFile">
            Cancelar
          </Button>
          <Button
            variant="default"
            :disabled="!isFormValid"
            @click="saveFile"
          >
            Salvar
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
