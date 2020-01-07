<template>
  <div class="home">
    <router-link to="/login">
      <button>去登陆</button>
    </router-link>
    <el-button type="success" @click="gotoEL">去欣赏页面</el-button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "home",
  return() {
    data: {
    }
  },
  methods: {
    incermentCount() {
      this.$store.commit("decrementCount", 1);
    },
    decrementCount() {
      this.$store.commit("incermentCount", 1);
    },
    gotoEL() {
      this.$router.push({ path: "/hellowrold" });
    }
  },
  created() {},
  components: {},

  // computed:{
  //   count(){
  //     return this.$store.state.count;
  //   },
  //   todos(){
  //     return this.$store.state.todos;
  //   }
  // }
  //  写法2
  //  computed: mapState({
  //    count:state => state.count,
  //    todos:state => state.todos
  //  })
  // 写法3
  //  computed:mapState(['count','todos'])
  // computed:{
  //   doneTodosCount(){
  //     return this.$store.state.todos.filter(todo=>todo.mont).length;
  //   }
  // }
  computed: mapGetters(["doneTodos", "count"])
};
</script>
