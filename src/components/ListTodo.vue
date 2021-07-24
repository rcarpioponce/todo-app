<template lang="pug">
.todo-list
  Todo(v-for="todo in todoList" :todo="todo" :key="todo.id" )
</template>

<script>
import Todo from './Todo'
export default {
  components: {
    Todo
  },
  data () {
    return {
      todoList: [
        {
          id: 1,
          text: 'TAREA 1',
          done: true
        },
        {
          id: 2,
          text: 'TAREA 2',
          done: false
        },
        {
          id: 3,
          text: 'TAREA 3',
          done: false
        },
        {
          id: 4,
          text: 'TAREA 4',
          done: false
        }
      ]
    }
  }
}
</script>

<style>
.todo-list{
  margin-top: 30px;
}
</style>
