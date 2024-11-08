/*
 * @Author: zhaorong zhaorong@travelsky.com.cn
 * @Date: 2024-10-30 21:40:43
 * @LastEditors: zhaorong zhaorong@travelsky.com.cn
 * @LastEditTime: 2024-11-08 15:18:11
 * @FilePath: /vue3_electron/vue.config.js
 * @Description: Do not edit
 */
const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: "nativeTheme.js", // 指定主文件路径
      preload: path.join(__dirname, "src/components/darkMode/preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
      builderOptions: {
        electronDownload: {
          mirror: "https://npm.taobao.org/mirrors/electron/",
        },
        files: [
          "**/*",
          "!**/.git",
          "!**/.DS_Store",
          "!**/node_modules",
          "!**/dist",
          "!**/dist_electron",
          "!**/src/nativeTheme.js", // 确保文件路径正确
        ],
      },
    },
  },
  configureWebpack: {
    resolve: {
      fallback: {
        path: require.resolve("path-browserify"),
        fs: false, // 如果你不需要 fs 模块
        os: require.resolve("os-browserify/browser"),
        stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer/"),
      },
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      modules: [
        path.resolve(__dirname, "node_modules"),
        path.resolve(__dirname, "src"),
      ],
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("preload")
      .test(/\.js$/)
      .include.add(path.resolve(__dirname, "src/components/darkMode"))
      .end()
      .use("babel-loader")
      .loader("babel-loader")
      .tap((options) => {
        return options;
      });
  },
});
// module.exports = {
//   pluginOptions: {
//     electronBuilder: {
//       mainProcessFile: "src/nativeTheme.js", // 指定主文件路径
//       nodeIntegration: true,
//       contextIsolation: false,
//     },
//   },
//   configureWebpack: {
//     resolve: {
//       fallback: {
//         path: require.resolve("path-browserify"),
//       },
//     },
//   },
// };
