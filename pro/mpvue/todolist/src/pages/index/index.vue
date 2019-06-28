<template>
  <div class="page">
    <swiper :indicator-dots="false" :autoplay="true" :interval="5000" :duration="1000">
      <swiper-item v-for="(item,i) in imgUrls" :key="i">
        <image :src="item" class="slide-image" width="355" height="150"/>
      </swiper-item>
    </swiper>

    <input type="text" @keydown.enter="addToDo()" placeholder="请添加您的事项" v-model="mytodo">
    <input type="button" value="添加" @click="addToDo()">
    <input type="button" value="清理" @click="clearTodo()">
    <ul class="todos">
      <li
        v-for="(item,index) in todos"
        @click="toggle(index)"
        :class="{'done':item.done}"
        :key="index"
      >{{item.text}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      imgUrls: [
        "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",
        "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640",
        "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
      ],
      todos: [
        { text: "你好旧时光", done: false },
        { text: "最好的我们", done: true },
        { text: "枳生淮南", done: false }
      ],
      mytodo: ""
    };
  },
  methods: {
    toggle(i) {
      this.todos[i].done = !this.todos[i].done;
    },
    addToDo() {
      if (!this.mytodo) {
        return;
      }
      this.todos.push({ text: this.mytodo,done:false });
      this.mytodo = "";
    },
    clearTodo() {
      this.todos = this.todos.filter(item => !item.done);
    }
  },
  watch: {
    todos(newVal, oldVal) {
      wx.setStorageSync("todos", newVal);
    }
  },
  components: {}
};
</script>

<style scoped lang="css">
/* done樣式 */
.done {
  text-decoration: line-through;
}
</style>
