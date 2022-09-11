import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: {
            path: "/SpringBoot/Actuator",
        },
    },
    {
        path: "*",
        redirect: {
            path: "/Actuator",
        },
    },
    {
        path: "/LeetCode/1_TwoSum",
        component: () => import("@/components/leetCode/1_TwoSum.vue"),
        meta: {
            title: "1_TwoSum"
        },
    },
    {
        path: "/LeetCode/9_PalindromeNumber",
        component: () => import("@/components/leetCode/9_PalindromeNumber.vue"),
        meta: {
            title: "9_PalindromeNumber"
        },
    },
    {
        path: "/LeetCode/12_IntegerToRoman",
        component: () => import("@/components/leetCode/12_IntegerToRoman.vue"),
        meta: {
            title: "12_IntegerToRoman"
        },
    },
    {
        path: "/LeetCode/17_LetterCombinations",
        component: () => import("@/components/leetCode/17_LetterCombinations.vue"),
        meta: {
            title: "17_LetterCombinations"
        },
    },
    {
        path: "/LeetCode/20_ValidParentheses",
        component: () => import("@/components/leetCode/20_ValidParentheses.vue"),
        meta: {
            title: "20_ValidParentheses"
        },
    },
    {
        path: "/LeetCode/120_MinimumTotal",
        component: () => import("@/components/leetCode/120_MinimumTotal.vue"),
        meta: {
            title: "120_MinimumTotal"
        },
    },
    {
        path: "/LeetCode/804_UniqueMorseCode",
        component: () => import("@/components/leetCode/804_UniqueMorseCode.vue"),
        meta: {
            title: "804_UniqueMorseCode"
        },
    },
    {
        path: "/Java/Generics",
        component: () => import("@/components/java/Generics.vue"),
        meta: {
            title: "Generics"
        },
    },
    {
        path: "/Java/InnerClass",
        component: () => import("@/components/java/InnerClass.vue"),
        meta: {
            title: "InnerClass"
        },
    },
    {
        path: "/Java/Lambda",
        component: () => import("@/components/java/Lambda.vue"),
        meta: {
            title: "Lambda"
        },
    },
    {
        path: "/Java/Reflection",
        component: () => import("@/components/java/Reflection.vue"),
        meta: {
            title: "Reflection"
        },
    },
    {
        path: "/SpringBoot/Actuator",
        component: () => import("@/components/springboot/Actuator.vue"),
        meta: {
            title: "Actuator"
        },
    },
    {
        path: "/SpringBoot/Aop",
        component: () => import("@/components/springboot/Aop.vue"),
        meta: {
            title: "Aop"
        },
    },
    {
        path: "/SpringBoot/Cache",
        component: () => import("@/components/springboot/Cache.vue"),
        meta: {
            title: "Cache"
        },
    },
    {
        path: "/SpringBoot/Lombok",
        component: () => import("@/components/springboot/Lombok.vue"),
        meta: {
            title: "Lombok"
        },
    },
    {
        path: "/SpringBoot/RequestTag",
        component: () => import("@/components/springboot/RequestTag.vue"),
        meta: {
            title: "RequestTag"
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
        path: "/UsaPrice",
        component: () => import("@/components/stock/UsaPrice.vue"),
        meta: {
            title: "美股資訊"
        },
    },
    {
        path: "/Structure",
        component: () => import("@/components/project/Structure.vue"),
        meta: {
            title: "Structure"
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