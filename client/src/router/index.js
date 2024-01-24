import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// when a view is imported as above, it'll be http requested through whole page
// but when imported as down below in a component: () {}, it'll be lazy loaded,
// which is cheaper and important with large projects
// and http snippets are called: {chunks/bundles} even in webpack
// webpack gives {magic comments} which allows us to name those chunks
// which comes as import(/* webpackChunkName: "stories" */ "../views/StoriesView.vue")
// so above will be named stories 🔴 search for vite's one 🔴

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/stories",
    name: "Stories",
    component: () => import("../views/StoriesView.vue"),
  },
  {
    path: "/features",
    name: "Features",
    component: () => import("../views/FeaturesView.vue"),
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: () => import("../views/PricingView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFoundComponent",
    component: () => import("../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
