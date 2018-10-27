<template>
<section class="main">
  <input id="toggle-all" class="toggle-all" type="checkbox">
  <label for="toggle-all">Mark all as complete</label>
  <ul class="todo-list">
    <!-- These are here just to show the structure of the list items -->
    <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
    <li :class="{completed: todo.done, editing: todo.id === editId}" v-for="(todo, index) in todos" :key="todo.id" @dblclick="editTodo(todo.id)">
      <div class="view">
        <input class="toggle" type="checkbox" :checked="todo.done" @input="binding(todo.id)">
        <label>{{todo.name}}</label>
        <button class="destroy" @click="delTodo(index)"></button>
      </div>
      <input class="edit" :value="todo.name" @keydown.enter="keepTodo(todo.id, $event)">
    </li>
  </ul>
</section>
</template>

<script>

// 解构 mapState 从 vuex 中
import { mapState, mapMutations } from 'vuex'

export default {
  // 由于 editId 数据旨在当前组件中用到所以只需要在当前组件中定义
  data() {
    return {
      editId: 0
    }
  },
  methods: {
    // 删除单条数据
    // delTodo(index) {
    //   // console.log(index)
    //   this.$store.commit('delTodo')
    // },
    // 双击编辑数据
    editTodo(id) {
      this.editId = id
    },
    // 编辑完成之后 enter 键保存数据
    keepTodo(id, e) {
      // console.log(e.target.value)
      this.$store.commit('editTodo', {
        id,
        name: e.target.value
      })
      // 取消编辑状态
      this.editId = 0
    },
    // 双向数据绑定
    // changeDone(id) {
    //   // console.log('aaa')
    //   this.$store.commit('binding', id)
    // },

    // 将 mutations 中的方法映射为当前组件的方法
    // 在当前组件中调用 这些方法就相当于在 mutations 中调用了 下面数组中的方法
    ...mapMutations(['delTodo', 'binding'])
  },
  // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
  // 表示把 state 中的 todos 映射到当前组件中 上面直接写 todos 就行了不用写 $store.state.todos
  // computed: mapState(['todos'])
  computed: mapState({
    todos: state => state.a.todos
  })
}
</script>

<style>
</style>
