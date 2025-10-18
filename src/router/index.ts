import { createRouter, createWebHistory } from "vue-router"
import Capa from "@/components/Capa.vue"
import Home from "@/components/Home.vue"
import Denuncia from "@/views/Denuncia.vue"


const routes = [
  { path: "/", component: Capa },
  { path: "/home", component: Home },
  { path: "/Denuncia", component: Denuncia },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

