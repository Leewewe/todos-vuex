<template>
<footer class="footer" v-if="$store.getters.isShow">
  <!-- This should be `0 items left` by default -->
  <span class="todo-count"><strong>{{$store.getters.rest}}</strong> item left</span>
  <!-- Remove this if you don't implement routing -->
  <ul class="filters">
    <li>
      <a class="selected" href="#/">All</a>
    </li>
    <li>
      <a href="#/active">Active</a>
    </li>
    <li>
      <a href="#/completed" v-if="$store.getters.completed">Completed</a>
    </li>
  </ul>
  <!-- Hidden if no completed items are left ↓ -->
  <button class="clear-completed" v-if="$store.getters.showCompleted" @click="delCompleted">Clear completed</button>
</footer>
</template>

<script>

// 把 mutations 结构 出来
import { mapMutations } from 'vuex'

export default {
  methods: {
    // 把 mutations 中的方法映射到 当前组件 在当前组件中调用 delCompleted 方法就相当于在 mutations 中调用了 这个方法(前提是两个方法名要一样)
    ...mapMutations(['delCompleted'])
    // 清除所有已完成的任务
    // delCompleted() {
    //   this.$store.commit('delCompleted')
    // }
  }
}
</script>

<style>
</style>
