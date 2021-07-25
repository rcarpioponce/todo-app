<template lang="pug">
.new-todo
  CheckTodo(:todo.sync="todo" :handlerCheck="handlerCheck")
  input.input-new-todo(type="text" v-model="todo.text" placeholder="Create a new todo..." v-on:keyup.enter='addTodoHandler')
</template>

<script>
import { mapMutations } from 'vuex'
import CheckTodo from './CheckTodo'

import { uuid } from 'vue-uuid'

export default {
  components: {
    CheckTodo
  },
  data () {
    return {
      todo: {
        id: uuid.v4(),
        text: '',
        done: false,
        order: 500
      }
    }
  },
  methods: {
    ...mapMutations(['addTodo']),
    addTodoHandler () {
      if (this.todo.text.trim() !== '') {
        const newTodo = this.todo
        this.addTodo(newTodo)
        this.todo.id = uuid.v4()
        this.todo.text = ''
        this.todo.done = false
      }
    },
    handlerCheck () {
      this.todo.done = !this.todo.done
    }
  }
}
</script>

<style>
.new-todo{
  width: calc(100% - 40px);
  height:60px;
  padding:0 20px;
  background: white;
  border-radius: 5px;
  -moz-border-radius:5px;
  -webkit-border-radius:5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-new-todo{
  width:calc(100% - 40px);
  height: 40px;
  border:0;
  background-color: var( --input-light-bg-color);
}
.input-new-todo:focus{
  outline: none;
}
.dark-theme .new-todo,
.dark-theme .input-new-todo{
  background-color:var( --input-dark-bg-color);
  color:white;
}
</style>
