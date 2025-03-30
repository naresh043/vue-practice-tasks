import { createRouter,createWebHistory } from "vue-router";
import HomeComponent from "./vue-routes/HomeComponent.vue";
import AboutComponent from "./vue-routes/AboutComponent.vue";
import ContactComponent from "./vue-routes/ContactComponent.vue";
import NotFound from "./vue-routes/error/NotFroundComponent.vue";

const routes = [
        {path: "/", component: HomeComponent},
        {path: "/about", component: AboutComponent},
        {path: "/contact", component: ContactComponent},
        { path: '/:pathMatch(.*)*', component: NotFound } 
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;