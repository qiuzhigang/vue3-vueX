<template>
  <div class="qisolt">
    <slot name="title"></slot>
    <h2>你是春天的风，夏天的雨，秋天的夜，寒冬的雪，</h2>

    <p>{{url}}</p>
  </div>
</template>
<script>
export default {
  name: "qisolt",
  data() {
    return {
      url: process.env.VUE_APP_URL
    };
  },
  methods: {},
  mounted() {},
  computed: {}
};
</script>
<style lang="scss" scoped>
.qisolt {
  p {
    background: darkcyan;
  }
}
</style>