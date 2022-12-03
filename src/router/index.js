import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/acercade",
      name: "acercaDe",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
    }/*,
    {
      path: "/i",
      name: "inicio",
      component: () => import("../views/InicioView.vue"),
    },
    {
      path: "/cuenta/playlist",
      name: "playlist",
      component: () => import("../views/PlaylistView.vue"),
    },
    {
      path: "/fondo",
      name: "fondo",
      component: () => import("../views/FondoView.vue"),
    },
    {
      path: "/fondo/aplicar",
      name: "aplicarFondo",
      component: () => import("../views/AplicarFondoView.vue"),
    },*/
  ],
});

export default router;
