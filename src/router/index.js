/*
 * @Author: zhaorong zhaorong@travelsky.com.cn
 * @Date: 2024-11-07 13:56:15
 * @LastEditors: zhaorong zhaorong@travelsky.com.cn
 * @LastEditTime: 2024-11-07 20:37:40
 * @FilePath: /vue3_electron/src/router/index.js
 * @Description: 路由配置
 */
import { createRouter, createWebHistory } from "vue-router";
import DarkMode from "../pages/darkMode.vue";

const routes = [
  {
    path: "/",
    component: DarkMode,
    meta: {
      keepAlive: true,
    }, // 需要缓存
  },
  {
    path: "/darkMode",
    component: DarkMode,
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
