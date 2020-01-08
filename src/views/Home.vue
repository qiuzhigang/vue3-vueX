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
        <div v-for="(item,i) in Headers_list" :key="i" index="i" class="ql_nav">
          <el-menu-item :index="item.key" v-if="item.child == undefined">{{item.name}}</el-menu-item>

          <el-submenu :index="item.key" v-if="item.child">
            <template slot="title">{{item.name}}</template>

            <div v-for="(cty,indexs) in item.child" :key="indexs">
              <el-menu-item v-if="cty.child == undefined" :index="cty.key">{{cty.name}}</el-menu-item>

              <el-submenu :index="cty.key" v-if="cty.child">
                <template slot="title">{{cty.name}}</template>
                <el-menu-item
                  :index="item.key"
                  v-for="(item,it) in cty.child"
                  :key="it"
                >{{item.name}}</el-menu-item>
              </el-submenu>
            </div>
          </el-submenu>
        </div>
      </el-menu>
    </div>
    <div class="ql_main">
      <p>
        人如其名,
        <br />
        <span>话如其声！</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      mmt: [],
      Headers_list: [
        {
          key: "1",
          name: "处理中心"
        },
        {
          key: "2",
          name: "广东省",
          child: [
            {
              key: "21",
              name: "深圳市",
              child: [
                {
                  key: "22",
                  name: "南山区"
                },
                {
                  key: "23",
                  name: "宝安区"
                }
              ]
            },
            {
              key: "24",
              name: "惠州市"
            }
          ]
        },
        {
          key: "3",
          name: "消息中心"
        },
        {
          key: "4",
          name: "订单管理"
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
  components: {}
};
</script>
<style lang="scss">
.home {
  height: 800px;
  display: flex;
  flex-direction: column;
  flex: 110%;
  .ql_nav {
    display: inline-block;
    align-items: center;
    color: red;
  }
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
