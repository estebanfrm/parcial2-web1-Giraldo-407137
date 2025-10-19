// src/router/index.js
import { createRouter, createWebHashHistory } from "vue-router";

// Importar las vistas usando rutas relativas
import MuroView from "../views/MuroView.vue";
import InfoView from "../views/InfoView.vue";
import PhotosView from "../views/PhotosView.vue";
import BoxesView from "../views/BoxesView.vue";

// Definir las rutas
const routes = [
    { path: "/", redirect: "/muro" },
    { path: "/muro", name: "muro", component: MuroView },
    { path: "/info", name: "info", component: InfoView },
    { path: "/photos", name: "photos", component: PhotosView },
    { path: "/boxes", name: "boxes", component: BoxesView },
    { path: "/:pathMatch(.*)*", redirect: "/muro" }, // redirección para rutas inexistentes
];

// Crear y exportar el router
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
