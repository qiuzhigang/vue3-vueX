<template>
  <div id="app">
    <!-- 路由切换容器 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {};
  },
  components: {}
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
