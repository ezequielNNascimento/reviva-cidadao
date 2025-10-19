import { createRouter, createWebHistory } from "vue-router"
import Capa from "@/components/Capa.vue"
import Home from "@/components/Home.vue"
import Denuncia from "@/views/Denuncia.vue"
import CriarDenuncia from "@/views/CriarDenuncia.vue"
import TrabalhoVoluntario from "@/views/TrabalhoVoluntario.vue"
import Perfil from "@/views/Perfil.vue"
import Eventos from "@/views/Eventos.vue"


const routes = [
  { path: "/", component: Capa },
  { path: "/home", component: Home },
  { path: "/Denuncia", component: Denuncia },
  { path: "/CriarDenuncia", component: CriarDenuncia },
  { path: "/TrabalhoVoluntario", component: TrabalhoVoluntario },
  { path: "/Perfil", component: Perfil },
  { path: "/Eventos", component: Eventos },
  {
  path: '/ScanQRCode',
  name: 'ScanQRCode',
  component: () => import('@/views/ScanQRCode.vue'),
}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

