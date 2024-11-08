/*
 * @Author: zhaorong zhaorong@travelsky.com.cn
 * @Date: 2024-11-06 20:24:54
 * @LastEditors: zhaorong zhaorong@travelsky.com.cn
 * @LastEditTime: 2024-11-08 15:10:45
 * @FilePath: /vue3_electron/nativeTheme.js
 * @Description: 主进程 js
 */
const { app, BrowserWindow, ipcMain, nativeTheme } = require("electron");
const path = require("path");

async function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  // win.loadFile("app.vue");
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }

  console.log("111111");
  // 切换深色模式（Dark Mode）和浅色模式（Light Mode）的。
  // 这段代码注册了一个 dark - mode:toggle 事件处理器，当这个事件被触发时，
  // 它会检查当前的系统主题设置，并根据当前设置切换到相反的主题。
  try {
    ipcMain.handle("dark-mode:toggle", () => {
      console.log("主进程11----------");
      if (nativeTheme.shouldUseDarkColors) {
        nativeTheme.themeSource = "light";
      } else {
        nativeTheme.themeSource = "dark";
      }
      return nativeTheme.shouldUseDarkColors;
    });
  } catch (error) {
    console.log("2222", error);
  }

  // 将主题设置为跟随系统的主题设置。
  // 如果用户的操作系统设置了深色模式，那么您的应用程序也会自动使用深色模式；
  // 如果操作系统设置的是浅色模式，则应用程序会使用浅色模式。
  ipcMain.handle("dark-mode:system", () => {
    nativeTheme.themeSource = "system";
  });
}

// app.whenReady().then(() => {...}) 确保在应用程序准备好后创建主窗口。
app.whenReady().then(() => {
  console.log("ready=========");
  createWindow();

  // app.on('activate', ...) 处理 macOS 上的应用程序激活事件，确保在没有打开窗口时创建一个新的窗口。
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow;
    }
  });
});

// app.on('window-all-closed', ...) 监听所有窗口关闭的事件。
// 在非 macOS 平台上，当所有窗口关闭时，应用程序会退出。
// 在 macOS 上，通常不会退出应用程序，而是等待用户再次激活。
app.on("window-all-closed", () => {
  // 'darwin'：macOS
  // 'win32'：Windows
  // 'linux'：Linux
  if (process.platform !== "darwin") {
    app.quit();
  }
});
