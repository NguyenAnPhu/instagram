import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "default" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: "auth" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: { layout: "auth" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home/register.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
