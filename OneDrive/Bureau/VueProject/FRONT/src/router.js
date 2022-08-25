import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/login",
    name: "login",
    component: () => import("./components/Login")
  }
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;