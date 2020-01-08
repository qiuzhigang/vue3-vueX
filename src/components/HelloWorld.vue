<template>
  <div class="hello">
    <el-progress type="circle" :percentage="0"></el-progress>
    <el-progress type="circle" :percentage="25"></el-progress>
    <el-progress type="circle" :percentage="100" status="success"></el-progress>
    <el-progress type="circle" :percentage="70" status="warning"></el-progress>
    <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    <button @click="cols">121212</button>
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
  methods: {
    cols() {
      this.loading = false;
    }
  },
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
