<template lang="pug">
.todo-list
  draggable
    transition-group
      Todo(v-for="todo in todoList" :todo="todo" :key="todo.id" )
</template>

<script>
import draggable from 'vuedraggable'
import Todo from './Todo'
import { mapGetters } from 'vuex'
export default {
  components: {
    Todo,
    draggable
  },
  computed: {
    ...mapGetters(['todoList'])
  }
}
</script>

<style>
.todo-list{
  margin-top: 30px;
  box-shadow: -1px 2px 16px 4px rgba(0,0,0,0.49);
  -webkit-box-shadow: -1px 2px 16px 4px rgba(0,0,0,0.49);
  -moz-box-shadow: -1px 2px 16px 4px rgba(0,0,0,0.49);
}
</style>
