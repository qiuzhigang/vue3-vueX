<template>
  <div class="todos">
    <header-li />
    <input type="text" value ref="addvalue" @keydown="enter_huicar" placeholder="请输入" id="ql_mont" />
    <div class="mmt" v-for="(item,i) in todos" :key="i">
      <input type="checkbox" @click="Tolist(i,item)" />
      <p :class="{'dele':item.completed}">{{item.title}}</p>
      <button @click="deleitem(i,item)">删除</button>
    </div>
  </div>
</template>
<script>
import Headerli from "../components/Header";
export default {
  name: "todos",
  data() {
    return {
      todos: []
    };
  },
  methods: {
    Tolist(i, item) {
      item.completed = !item.completed;
    },
    deleitem(i) {
      console.log(this.todos);
      this.todos.splice(i, 1);
      this.$message({
        message: "已删除！",
        type: "warning"
      });
    },
    enter_huicar(e) {
      if (e.keyCode == 13) {
        let _ccy = this.$refs.addvalue.value;
        this.todos.push({
          title: _ccy,
          completed: false
        });
        this.$message({
          message: "添加成功",
          type: "success"
        });
        // this.todos=this.todos;
        (this.$refs.addvalue.value = ""), console.log(this.todos);
      }
    }
  },
  created() {
    this.axios
      .get("/todos")
      .then(res => {
        this.todos = res.data.slice(0, 20);
      })
      .catch(error => {
        console, log(error);
      });
  },
  components: {
    "header-li": Headerli
  }
};
</script>

<style lang="scss" scoped>
.todos {
  .mmt {
    display: flex;
    align-items: center;
    margin: 8px 0px;
    .dele {
      text-decoration: line-through;
    }
    button {
      margin: 0px 15px;
    }
  }
  #ql_mont {
    width: 100%;
    height: 40px;
    margin: 15px;
  }
}
</style>