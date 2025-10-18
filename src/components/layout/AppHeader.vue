<script setup lang="ts">
import { Bell } from "lucide-vue-next"
import logo from "@/assets/images/logo.png"
import Button from "../ui/button/Button.vue";
</script>

<template>
  <header class="flex items-center justify-between bg-white shadow-sm px-6 py-3 border-b border-gray-200">
    <!-- Logo -->
    <div class="flex items-center gap-3">
      <img
        :src="logo"
        alt="Logo"
        class="h-12 w-auto object-contain"
      />
    </div>

    <!-- Ícones à direita -->
    <div class="flex items-center gap-4">
      <Button
        class="text-blue-700 bg-white hover:text-white transition-colors duration-200"
        title="Notificações"
      >
        <Bell class="w-6 h-6" />
      </Button>
    </div>
  </header>
</template>
