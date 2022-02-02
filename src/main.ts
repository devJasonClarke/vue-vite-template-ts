import { createApp } from "vue";
import App from "./App.vue";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";

const routes = setupLayouts(generatedRoutes);
const head = createHead();
const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

app.use(pinia);
app.use(head);
app.use(router);

app.mount("#app");
