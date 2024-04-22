import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layouts: "default" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
