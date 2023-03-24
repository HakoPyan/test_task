import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import MainPage from "./MainPage.vue";
import DataRender from "./DataRender.vue";
import "./index.css";

const routes = [
  { path: "/", name: "home", component: MainPage },
  { path: "/render/:zip", name: "render", component: DataRender },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
