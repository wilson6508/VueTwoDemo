import Vue from "vue";
import VueRouter from 'vue-router'
import Home from "@/components/Home.vue"

Vue.use(VueRouter);

const routes = [{
        path: "/",
        meta: {
            title: "根目錄"
        },
    },
    {
        path: "/Home",
        component: Home,
        meta: {
            title: "首頁"
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.afterEach((to) => {
    document.title = to.meta.title || "VueTwoDemo";
})

export default router;