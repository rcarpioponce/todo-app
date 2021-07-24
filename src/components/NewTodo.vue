<template lang="pug">
.new-todo
  CheckTodo
  input.input-new-todo(type="text" placeholder="Create a new todo...")
</template>

<script>
import CheckTodo from './CheckTodo'
export default {
  components: {
    CheckTodo
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
