import { createApp } from "vue";

import App from "@/App.vue";
import { router } from "@/router";

import "@/styles/index.css";

const app = createApp(App).use(router);

// Wait for the initial navigation to resolve before mounting — otherwise the
// breadcrumb briefly renders vue-router's START_LOCATION ("/"), flashing
// "Dashboard" on every other page during a hard refresh.
void router.isReady().then(() => app.mount("#app"));
