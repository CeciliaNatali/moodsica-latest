import { createRouter, createWebHistory } from "vue-router";
//import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/acercade",
      name: "acercaDe",
      component: () => import("../views/AcercaDeView.vue"),
    },
    {
      path: "/ingreso",
      name: "ingreso",
      component: () => import("../views/IngresoView.vue"),
    },
    {
      path: "/registro",
      name: "registro",
      component: () => import("../views/RegistroView.vue"),
    },
    {
      path: "/cuenta/buscador",
      name: "buscador",
      component: () => import("../views/BuscadorView.vue"),
    },
    {
      path: "/cuenta/actualizar",
      name: "actualizar",
      component: () => import("../views/ActualizarView.vue"),
    },
    {
      path: "/cuenta/eliminar",
      name: "eliminarCuenta",
      component: () => import("../views/EliminarCuentaView.vue"),
    },
    {
      path: "/cuenta/lista",
      name: "lista",
      component: () => import("../views/ListaView.vue"),
    }
  ],
});

export default router;
