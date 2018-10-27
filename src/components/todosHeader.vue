<template>
<header class="header">
  <h1>todos</h1>
  <input class="new-todo" placeholder="What needs to be done?" autofocus @keydown.enter="addTodo($event)">
</header>
</template>

<script>
export default {
  methods: {
    addTodo(e) {
      // 判断输入的文本是否为空
      if (e.target.value === '') {
        return
      }
      // e.target.value: 获取输入的文本
      // actions 直接通过 $store.dispath 调用
      this.$store.dispatch('addTodoAsync', e.target.value)
      // 添加完成之后清空输入框
      e.target.value = ''
    }
  }
}
</script>

<style>
</style>
