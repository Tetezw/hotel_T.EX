import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: () => import("../views/SobreView.vue"),
  },
  {
    path: "/acomodacoes",
    name: "acomodacoes",
    component: () => import("../views/AcomodacoesView.vue"),
  },
  {
    path: "/contato",
    name: "contato",
    component: () => import("../views/ContatoView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/minhasreservas",
    name: "minhasReservas",
    component: () => import("../views/MinhasReservasView.vue"),
  },
  {
    path: "/reserva",
    name: "reserva",
    component: () => import("../views/ReservaView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
