/*
 * @Author: zhaorong zhaorong@travelsky.com.cn
 * @Date: 2024-11-07 14:17:10
 * @LastEditors: zhaorong zhaorong@travelsky.com.cn
 * @LastEditTime: 2024-11-07 14:20:31
 * @FilePath: /vue3_electron/src/components/darkMode/preload.js
 * @Description: Do not edit
 */
const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld("darkMode", {
  toggle: () => ipcRenderer.invoke("dark-mode:toggle"),
  system: () => ipcRenderer.invoke("dark-mode:system"),
});
