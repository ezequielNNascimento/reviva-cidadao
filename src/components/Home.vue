<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import ProgressBar from './ui/progressBar/ProgressBar.vue'
import Button from './ui/button/Button.vue'

import {
  User,
  Megaphone,
  Sprout,
  CalendarDays,
  Map,
  HelpCircle
} from 'lucide-vue-next'



</script>

<template>
  <section class="bg-gray-100 w-full flex flex-col items-center py-5">
    <div class="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-6 w-full max-w-md mx-auto shadow-lg">
      <h1 class="text-xl font-bold">
        Olá, <span class="underline decoration-blue-400">CIDADÃO</span>
      </h1>
      <p class="mt-2 text-sm">
        Seu selo de contribuição é:
        <span class="font-extrabold tracking-wide ml-1">
          Guardião da Cidade
        </span>
      </p>
      <div class="mt-4 flex gap-2">
        <ProgressBar color="green" />
        <ProgressBar color="amber" />
        <ProgressBar color="blue" />
      </div>
      <p class="flex text-sm pt-1 justify-end">240 Pontos</p>
    </div>

    <div class="mt-6 w-full max-w-md mx-auto">
      <h2 class="text-lg font-bold text-blue-900 mb-3 px-2">Atividades</h2>

      <div class="flex flex-col">

        <Button as-child class="flex items-center justify-start rounded-none border-b border-b-gray-300 bg-white text-black hover:bg-gray-200">
          <RouterLink to="/Perfil">
            <User class="w-5 h-5" />
            Minha Conta
          </RouterLink>
        </Button>
        <Button as-child class="flex items-center justify-start rounded-none border-b border-b-gray-300 bg-white text-black hover:bg-gray-200">
          <router-link to="/Denuncia">
            <Megaphone class="w-5 h-5" />
            Denúncias
          </router-link>
        </Button>

        <Button as-child class="flex items-center justify-start rounded-none border-b border-b-gray-300 bg-white text-black hover:bg-gray-200">
          <RouterLink to="/TrabalhoVoluntario">
            <Sprout class="w-5 h-5" />
            Trabalho Voluntário
          </RouterLink>
        </Button>

       <Button as-child class="flex items-center justify-start rounded-none border-b border-b-gray-300 bg-white text-black hover:bg-gray-200">
          <RouterLink to="/Eventos">
            <CalendarDays class="w-5 h-5" />
            Eventos
          </RouterLink>
        </Button>


        <Button class="flex items-center justify-start rounded-none border-b border-b-gray-300 bg-white text-black hover:bg-gray-200">
          <Map class="w-5 h-5" />
          Mapa de Calor
        </Button>

        <Button class="flex items-center justify-start rounded-none border-b border-b-gray-300 bg-white text-black hover:bg-gray-200">
          <HelpCircle class="w-5 h-5" />
          Como usar o Aplicativo
        </Button>

      </div>
    </div>
  </section>
</template>
