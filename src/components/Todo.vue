<template lang="pug">
.todo(:class="{ done: todo.done }")
  CheckTodo(:todo.sync="todo" :handlerCheck="handlerCheck")
  .todo-label {{todo.text}}
  .todo-remove(@click="handlerRemove()")
</template>

<script>
import { mapMutations } from 'vuex'

import CheckTodo from './CheckTodo'
export default {
  components: {
    CheckTodo
  },
  props: {
    todo: {
      type: Object
    }
  },
  methods: {
    ...mapMutations(['handlerDoneTodo', 'removeTodo']),
    handlerCheck () {
      const todo = this.todo
      this.handlerDoneTodo(todo)
    },
    handlerRemove () {
      const todo = this.todo
      this.removeTodo(todo)
    }
  }
}
</script>

<style>

.todo-list > .todo:first-child{
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.todo{
  width: calc(100% - 40px);
  height:60px;
  padding:0 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom:1px solid hsl(236, 33%, 92%);
}
.todo-label{
  padding:0 20px;
  width: 80%;
}
.todo.done .todo-label{
  color:hsl(236, 33%, 92%);
  text-decoration: line-through;
}
.dark-theme .todo.done .todo-label{
  color:hsl(236, 9%, 61%);
  opacity: .3;
  text-decoration: line-through;
}
.todo:hover .todo-remove{
  display: flex;
}
.todo-remove{
  display: none;
  width: 18px;
  height: 18px;
  background: url('../assets/icon-cross.svg') center center no-repeat;
  cursor: pointer;
}
.dark-theme .todo{
  border-bottom:1px solid var(--gray-color);
}
</style>
