/*
 * @Author: zhaorong zhaorong@travelsky.com.cn
 * @Date: 2024-11-07 14:17:10
 * @LastEditors: zhaorong zhaorong@travelsky.com.cn
 * @LastEditTime: 2024-11-08 11:53:56
 * @FilePath: /vue3_electron/src/preload.js
 * @Description: Do not edit
 */
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("darkMode", {
  toggle: () => ipcRenderer.invoke("dark-mode:toggle"),
  system: () => ipcRenderer.invoke("dark-mode:system"),
});
