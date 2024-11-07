/*
 * @Author: zhaorong zhaorong@travelsky.com.cn
 * @Date: 2024-10-30 21:40:43
 * @LastEditors: zhaorong zhaorong@travelsky.com.cn
 * @LastEditTime: 2024-11-07 20:30:09
 * @FilePath: /vue3_electron/src/main.js
 * @Description: Do not edit
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
