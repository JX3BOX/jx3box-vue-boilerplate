import Vue from "vue";
import VueRouter from "vue-router";

const Index = () => import("../views/Index.vue");
const Single = () => import("../views/Single.vue");
const Fn = () => import("../views/Fn.vue");
// import List from "../views/List.vue";

Vue.use(VueRouter);

const routes = [
    { name: "index", path: "/", component: Index },
    { name: "single", path: "/view/:id", component: Single },
    { name: "fn", path: "/fn", component: Fn },
];

const router = new VueRouter({
    routes,
});

export default router;
