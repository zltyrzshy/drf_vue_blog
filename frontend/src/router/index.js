import {createWebHistory, createRouter} from "vue-router";
import ArticleDetail from "@/views/ArticleDetail.vue";
import ArticleHome from "@/views/ArticleHome";

const routes = [
    {
        path: "/",
        name: "ArticleHome",
        component: ArticleHome,
    },
    {
        path: "/article/:id",
        name: "ArticleDetail",
        component: ArticleDetail
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;