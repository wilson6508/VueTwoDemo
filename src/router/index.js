import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [{
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
    {
        path: "/CacheBasic",
        component: () => import("@/components/cache/CacheBasic.vue"),
        meta: {
            title: "緩存基礎"
        },
    },
    {
        path: "/UsaPrice",
        component: () => import("@/components/stock/UsaPrice.vue"),
        meta: {
            title: "美股資訊"
        },
    },    
    {
        path: "/1_TwoSum",
        component: () => import("@/components/leetCode/1_TwoSum.vue"),
        meta: {
            title: "1_TwoSum"
        },
    },
    {
        path: "/9_PalindromeNumber",
        component: () => import("@/components/leetCode/9_PalindromeNumber.vue"),
        meta: {
            title: "9_PalindromeNumber"
        },
    },
    {
        path: "/12_IntegerToRoman",
        component: () => import("@/components/leetCode/12_IntegerToRoman.vue"),
        meta: {
            title: "12_IntegerToRoman"
        },
    },
    {
        path: "/20_ValidParentheses",
        component: () => import("@/components/leetCode/20_ValidParentheses.vue"),
        meta: {
            title: "20_ValidParentheses"
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