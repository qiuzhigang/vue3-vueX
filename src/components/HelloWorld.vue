<template>
  <div class="hello">
    <div v-loading="loading">
      <el-button type="success" @click="gotoEL">去欣赏页面</el-button>
    </div>
    <el-progress type="circle" :percentage="0"></el-progress>
    <el-progress type="circle" :percentage="25"></el-progress>
    <el-progress type="circle" :percentage="100" status="success"></el-progress>
    <el-progress type="circle" :percentage="70" status="warning"></el-progress>
    <el-progress type="circle" :percentage="50" status="exception"></el-progress>
  </div>
</template>

<script>
export default {
  name: "helloworld",
  data() {
    return {
      loading: true
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
