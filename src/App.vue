<!--
 * @Author: zhaorong zhaorong@travelsky.com.cn
 * @Date: 2024-10-30 21:40:43
 * @LastEditors: zhaorong zhaorong@travelsky.com.cn
 * @LastEditTime: 2024-11-08 10:44:55
 * @FilePath: /vue3_electron/src/App.vue
 * @Description: Do not edit
-->
<template>
  <div id="container" style="height: 100%">
    <nav>
      <router-link to="/darkMode"></router-link>
    </nav>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive> -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
