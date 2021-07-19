import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Recepcion",
    component: () => import("../views/Recepcion.vue"),
  },
  {
    path: "/relationship/:operacion",
    name: "Relationship",
    props: true,
    component: () => import("../views/Relationship.vue"),
  },
  {
    path: "/entregar",
    name: "Entregar",
    component: () => import("../views/Entregar.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
