<template>
<section class="todoapp">
  <todosHeader></todosHeader>
  <todosList></todosList>
  <todosFooter></todosFooter>
</section>
</template>

<script>

import todosHeader from '@/components/todosHeader'
import todosList from '@/components/todosList'
import todosFooter from '@/components/todosFooter'

export default {
  components: {
    todosHeader,
    todosList,
    todosFooter
  }
}
</script>

<style>
</style>
