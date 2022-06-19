import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: {
            path: "/FlowChart",
        },
    },
    {
        path: "*",
        redirect: {
            path: "/FlowChart",
        },
    },
    {
        path: "/Description",
        component: () => import("@/components/Description.vue"),
        meta: {
            title: "文字說明"
        },
    },
    {
        path: "/FlowChart",
        component: () => import("@/components/FlowChart.vue"),
        meta: {
            title: "功能展示"
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.VUE_APP_BASE_URL,
    routes,
});

router.afterEach((to) => {
    document.title = to.meta.title || "VueTwoDemo";
})

export default router;