/*
 * @Author: zhaorong zhaorong@travelsky.com.cn
 * @Date: 2024-11-07 13:56:15
 * @LastEditors: zhaorong zhaorong@travelsky.com.cn
 * @LastEditTime: 2024-11-07 21:02:30
 * @FilePath: /vue3_electron/src/router/index.js
 * @Description: 路由配置
 */
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/darkMode.vue"),
    meta: {
      keepAlive: true,
    }, // 需要缓存
  },
  {
    path: "/darkMode",
    component: () => import("../pages/darkMode.vue"),
    meta: {
      keepAlive: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
