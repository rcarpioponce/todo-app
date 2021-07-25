<template lang="pug">
#app-container
  Header
  NewTodo
  ListTodo
  p Drag and drop reorder list
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
  width: 600px;
}
#app-container p{
  padding-top:60px;
  text-align:center;
  color: hsl(236, 9%, 61%);
  font-size:16px;
}
</style>
