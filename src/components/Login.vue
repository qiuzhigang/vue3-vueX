<template>
  <div class="login">
    <div class="h_my">
      <img src="../../src/assets/logo.png" alt />
    </div>
    <button @click="getdatalogin">点击登录</button>
  </div>
</template>

<script>
export default {
  return() {
    name: "login";
    data: {
    }
  },
  methods: {
    getdatalogin() {
      this.axios.get("/users").then(res => {
        console.log(res.data);
        if (res.status === 200) {
          this.$router.push("/");
        }
      });
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.login {
  text-align: center;

  .h_my {
    text-align: center;
  }
  button {
    padding: 8px 45px;
    background: green;
    color: white;
    border: none;
    border-radius: 4px;
    user-select: none;
  }
}
</style>>