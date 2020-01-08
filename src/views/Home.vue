<template>
  <div class="home">
    <div class="header_q">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item v-for="(item, i) in Headers_list" :key="i">
          {{item.name}}
          <el-menu-item v-for="(i,index) in item.address" :key="index">{{i}}</el-menu-item>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="ql_main">
      <p>
        人如其名,
        <br />
        <span>话如其声！</span>
      </p>
    </div>

    <!-- <router-link to="/login">
      <button>去登陆</button>
    </router-link>
    <el-button type="success" @click="gotoEL">去欣赏页面</el-button>-->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      mmt: [],
      Headers_list: [
        {
          id: 1,
          name: "首页"
        },
        {
          id: 2,
          name: "我的消息",
          address: ["选项一", "选项一", "选项一"]
        },
        {
          id: 1,
          name: "Leanne Graham"
        },
        {
          id: 1,
          name: "Leanne Graham"
        }
      ]
    };
  },
  methods: {
    gotoEL() {
      this.$router.push({ path: "/helloworld" });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getdata() {
      this.Headers_list.forEach((item, key) => {
        console.log(item.address);
      });
    }
  },
  created() {
    this.getdata();
  },
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
<style lang="scss">
.home {
  height: 800px;
  display: flex;
  flex-direction: column;
  flex: 110%;

  .ql_main {
    margin: auto;
    p {
      font-family: "Helvetica Neue", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      font-size: 100px;
      text-align: center;
      line-height: 150px;
      display: inline-block;

      span {
        margin-left: 200px;
      }
    }
  }
}
.home::after {
  content: "";
  background: url("https://cube.elemecdn.com/4/79/3de10e69d5fee8fc6823b93014c32jpeg.jpeg")
    no-repeat center center / auto 100%;
  background-position: center center;
  opacity: 0.1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
  background-position-x: -400px;
}
</style>
