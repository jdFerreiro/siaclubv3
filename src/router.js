import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Register from "./components/Register.vue";
import Login from "./views/Login.vue";

// lazy-loaded
import Profile  from "./views/Profile.vue";
import ResumePartner  from "./views/Partners/ResumePartner.vue";
import BusinessPartner from "./views/Partners/Business.vue";
import AdminServicios from "./views/Admin/Servicios.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/profile",
        component: Profile,
    },
    {
        path: "/ResumePartner",
        component: ResumePartner,
    },
    {
        path: "/BusinessPartner",
        component: BusinessPartner,
    },
    {
        path: "/AdminServicios",
        component: AdminServicios,
    },
/*
    {
        path: "/mod",
        component: BoardModerator,
    },
    {
        path: "/user",
        component: BoardUser,
    },
*/
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;