import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: {
            path: "/Interview/Resume",
        },
    },
    {
        path: "*",
        redirect: {
            path: "/Interview/Resume",
        },
    },
    // Docker
    {
        path: "/Docker/Compose",
        component: () => import("@/components/docker/Compose.vue"),
        meta: {
            title: "Compose"
        },
    },
    {
        path: "/Docker/Container",
        component: () => import("@/components/docker/Container.vue"),
        meta: {
            title: "Container"
        },
    },
    {
        path: "/Docker/Images",
        component: () => import("@/components/docker/Images.vue"),
        meta: {
            title: "Images"
        },
    },
    {
        path: "/Docker/Network",
        component: () => import("@/components/docker/Network.vue"),
        meta: {
            title: "Network"
        },
    },
    {
        path: "/Docker/Volume",
        component: () => import("@/components/docker/Volume.vue"),
        meta: {
            title: "Volume"
        },
    },
    // Interview
    {
        path: "/Interview/Resume",
        component: () => import("@/components/interview/Resume.vue"),
        meta: {
            title: "Resume"
        },
    },
    // Linux
    {
        path: "/Linux/Archive",
        component: () => import("@/components/linux/Archive.vue"),
        meta: {
            title: "Archive"
        },
    },
    {
        path: "/Linux/Awk",
        component: () => import("@/components/linux/Awk.vue"),
        meta: {
            title: "Awk"
        },
    },
    {
        path: "/Linux/ControlFlow",
        component: () => import("@/components/linux/ControlFlow.vue"),
        meta: {
            title: "ControlFlow"
        },
    },
    {
        path: "/Linux/DeleteLog",
        component: () => import("@/components/linux/DeleteLog.vue"),
        meta: {
            title: "DeleteLog"
        },
    },
    {
        path: "/Linux/File",
        component: () => import("@/components/linux/File.vue"),
        meta: {
            title: "File"
        },
    },
    {
        path: "/Linux/Process",
        component: () => import("@/components/linux/Process.vue"),
        meta: {
            title: "Process"
        },
    },
    // MySQL
    {
        path: "/MySQL/DCL",
        component: () => import("@/components/mysql/DCL.vue"),
        meta: {
            title: "DCL"
        },
    },
    {
        path: "/MySQL/DDL",
        component: () => import("@/components/mysql/DDL.vue"),
        meta: {
            title: "DDL"
        },
    },
    {
        path: "/MySQL/DML",
        component: () => import("@/components/mysql/DML.vue"),
        meta: {
            title: "DML"
        },
    },
    {
        path: "/MySQL/DQL",
        component: () => import("@/components/mysql/DQL.vue"),
        meta: {
            title: "DQL"
        },
    },
    // Redis
    {
        path: "/Redis/Hash",
        component: () => import("@/components/redis/Hash.vue"),
        meta: {
            title: "Hash"
        },
    },
    {
        path: "/Redis/Lock",
        component: () => import("@/components/redis/Lock.vue"),
        meta: {
            title: "Lock"
        },
    },
    {
        path: "/Redis/LogicalExpire",
        component: () => import("@/components/redis/LogicalExpire.vue"),
        meta: {
            title: "LogicalExpire"
        },
    },
    {
        path: "/Redis/Lua",
        component: () => import("@/components/redis/Lua.vue"),
        meta: {
            title: "Lua"
        },
    },
    {
        path: "/Redis/Mutex",
        component: () => import("@/components/redis/Mutex.vue"),
        meta: {
            title: "Mutex"
        },
    },
    {
        path: "/Redis/Set",
        component: () => import("@/components/redis/Set.vue"),
        meta: {
            title: "Set"
        },
    },
    {
        path: "/Redis/SortedSet",
        component: () => import("@/components/redis/SortedSet.vue"),
        meta: {
            title: "SortedSet"
        },
    },
    {
        path: "/Redis/Streams",
        component: () => import("@/components/redis/Streams.vue"),
        meta: {
            title: "Streams"
        },
    },
    {
        path: "/Redis/String",
        component: () => import("@/components/redis/String.vue"),
        meta: {
            title: "String"
        },
    },
    // Interview
    // {
    //     path: "/Interview/Fpc",
    //     component: () => import("@/components/interview/Fpc.vue"),
    //     meta: {
    //         title: "Fpc"
    //     },
    // },
    // {
    //     path: "/Interview/Pegatron",
    //     component: () => import("@/components/interview/Pegatron.vue"),
    //     meta: {
    //         title: "Pegatron"
    //     },
    // },
    // {
    //     path: "/Interview/Intelligent",
    //     component: () => import("@/components/interview/Intelligent.vue"),
    //     meta: {
    //         title: "Intelligent"
    //     },
    // },
    // {
    //     path: "/Interview/OneZeroFour",
    //     component: () => import("@/components/interview/OneZeroFour.vue"),
    //     meta: {
    //         title: "OneZeroFour"
    //     },
    // },
    // {
    //     path: "/Interview/Platinum",
    //     component: () => import("@/components/interview/Platinum.vue"),
    //     meta: {
    //         title: "Platinum"
    //     },
    // },
    // Java
    // {
    //     path: "/Java/Generics",
    //     component: () => import("@/components/java/Generics.vue"),
    //     meta: {
    //         title: "Generics"
    //     },
    // },
    // {
    //     path: "/Java/InnerClass",
    //     component: () => import("@/components/java/InnerClass.vue"),
    //     meta: {
    //         title: "InnerClass"
    //     },
    // },
    // {
    //     path: "/Java/Lambda",
    //     component: () => import("@/components/java/Lambda.vue"),
    //     meta: {
    //         title: "Lambda"
    //     },
    // },
    // {
    //     path: "/Java/Reflection",
    //     component: () => import("@/components/java/Reflection.vue"),
    //     meta: {
    //         title: "Reflection"
    //     },
    // },
    // LeetCode
    // {
    //     path: "/LeetCode/1_TwoSum",
    //     component: () => import("@/components/leetCode/1_TwoSum.vue"),
    //     meta: {
    //         title: "1_TwoSum"
    //     },
    // },
    // {
    //     path: "/LeetCode/9_PalindromeNumber",
    //     component: () => import("@/components/leetCode/9_PalindromeNumber.vue"),
    //     meta: {
    //         title: "9_PalindromeNumber"
    //     },
    // },
    // {
    //     path: "/LeetCode/12_IntegerToRoman",
    //     component: () => import("@/components/leetCode/12_IntegerToRoman.vue"),
    //     meta: {
    //         title: "12_IntegerToRoman"
    //     },
    // },
    // {
    //     path: "/LeetCode/17_LetterCombinations",
    //     component: () => import("@/components/leetCode/17_LetterCombinations.vue"),
    //     meta: {
    //         title: "17_LetterCombinations"
    //     },
    // },
    // {
    //     path: "/LeetCode/20_ValidParentheses",
    //     component: () => import("@/components/leetCode/20_ValidParentheses.vue"),
    //     meta: {
    //         title: "20_ValidParentheses"
    //     },
    // },
    // {
    //     path: "/LeetCode/120_MinimumTotal",
    //     component: () => import("@/components/leetCode/120_MinimumTotal.vue"),
    //     meta: {
    //         title: "120_MinimumTotal"
    //     },
    // },
    // {
    //     path: "/LeetCode/804_UniqueMorseCode",
    //     component: () => import("@/components/leetCode/804_UniqueMorseCode.vue"),
    //     meta: {
    //         title: "804_UniqueMorseCode"
    //     },
    // },
    // SpringBoot
    // {
    //     path: "/SpringBoot/Actuator",
    //     component: () => import("@/components/springboot/Actuator.vue"),
    //     meta: {
    //         title: "Actuator"
    //     },
    // },
    // {
    //     path: "/SpringBoot/Aop",
    //     component: () => import("@/components/springboot/Aop.vue"),
    //     meta: {
    //         title: "Aop"
    //     },
    // },
    // {
    //     path: "/SpringBoot/Cache",
    //     component: () => import("@/components/springboot/Cache.vue"),
    //     meta: {
    //         title: "Cache"
    //     },
    // },
    // {
    //     path: "/SpringBoot/EhCache",
    //     component: () => import("@/components/springboot/EhCache.vue"),
    //     meta: {
    //         title: "EhCache"
    //     },
    // },
    // {
    //     path: "/SpringBoot/GoogleSheet",
    //     component: () => import("@/components/springboot/GoogleSheet.vue"),
    //     meta: {
    //         title: "GoogleSheet"
    //     },
    // },
    // {
    //     path: "/SpringBoot/Lombok",
    //     component: () => import("@/components/springboot/Lombok.vue"),
    //     meta: {
    //         title: "Lombok"
    //     },
    // },
    // {
    //     path: "/SpringBoot/Profile",
    //     component: () => import("@/components/springboot/Profile.vue"),
    //     meta: {
    //         title: "Profile"
    //     },
    // },
    // {
    //     path: "/SpringBoot/RequestTag",
    //     component: () => import("@/components/springboot/RequestTag.vue"),
    //     meta: {
    //         title: "RequestTag"
    //     },
    // },
    // {
    //     path: "/SpringBoot/Retry",
    //     component: () => import("@/components/springboot/Retry.vue"),
    //     meta: {
    //         title: "Retry"
    //     },
    // },
    // {
    //     path: "/SpringBoot/SimpleCache",
    //     component: () => import("@/components/springboot/SimpleCache.vue"),
    //     meta: {
    //         title: "SimpleCache"
    //     },
    // },
    // {
    //     path: "/SpringBoot/UnitTesting",
    //     component: () => import("@/components/springboot/UnitTesting.vue"),
    //     meta: {
    //         title: "UnitTesting"
    //     },
    // },
    // Project
    // {
    //     path: "/Structure",
    //     component: () => import("@/components/project/Structure.vue"),
    //     meta: {
    //         title: "Structure"
    //     },
    // },
    // {
    //     path: "/Description",
    //     component: () => import("@/components/Description.vue"),
    //     meta: {
    //         title: "文字說明"
    //     },
    // },
    // {
    //     path: "/FlowChart",
    //     component: () => import("@/components/FlowChart.vue"),
    //     meta: {
    //         title: "功能展示"
    //     },
    // },
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
