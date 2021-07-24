<template lang="pug">
#app-container
  Header
  NewTodo
  ListTodo
</template>

<script>
import Header from '@/components/Header'
import NewTodo from '@/components/NewTodo'
import ListTodo from '@/components/ListTodo'
export default {
  components: {
    Header,
    NewTodo,
    ListTodo
  }
}
</script>

<style>
#app-container{
  width: 520px;
}
</style>
