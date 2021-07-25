<template lang="pug">
.todo-list
  draggable
    transition-group
      Todo(v-for="todo in todoList" :todo="todo" :key="todo.id" )
  FooterListTodo
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import draggable from 'vuedraggable'
import Todo from './Todo'
import FooterListTodo from './FooterListTodo'
export default {
  components: {
    Todo,
    draggable,
    FooterListTodo
  },
  computed: {
    ...mapGetters(['todoList'])
  },
  methods: {
    ...mapMutations(['setTodoList'])
  }
}
</script>

<style>
.todo-list{
  margin-top: 30px;
  box-shadow: -1px 2px 16px 4px rgba(0,0,0,0.49);
  -webkit-box-shadow: -1px 2px 16px 4px rgba(0,0,0,0.49);
  -moz-box-shadow: -1px 2px 16px 4px rgba(0,0,0,0.49);
  background: #FFFFFF;
  border-radius: 5px;
}
.dark-theme .todo-list{
  background: var(--input-dark-bg-color);
  color:var(--text-dark-color);
}
</style>
