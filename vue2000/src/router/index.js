import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Reference from "../views/Reference.vue";
import Youtube from "../views/Youtube.vue";
import Contact from "../views/Contact.vue";
import Portfolio from "../views/Portfolio.vue";
import Script from "../views/Script.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/reference",
    name: "Reference",
    component: Reference,
  },
  {
    path: "/youtube",
    name: "Youtube",
    component: Youtube,
  },
  {
    path: "/script",
    name: "Script",
    component: Script,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
