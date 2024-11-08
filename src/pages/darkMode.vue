<template>
  <div>
    <div class="btn-box" @click="toggleClick">Toggle Dark Mode</div>
    <div class="btn-box" @click="systemClick">Reset to System Theme</div>
    <div>{{ themeSource }}</div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const themeSource = ref("");

    const toggleClick = () => {
      try {
        console.log("toggleClick=======", window, window.darkMode);
        window.darkMode.toggle();
      } catch (error) {
        console.log("function error=====", error);
      }
    };

    // 定义响应式对象
    const state = reactive({
      message: "Hello, Vue 3!",
    });

    return {
      themeSource,
      toggleClick,
      state,
    };
  },
};
</script>

<style scoped>
.btn-box {
  width: 100px;
  height: 100px;
  border-radius: 30px;
  background-color: aquamarine;
}
</style>
