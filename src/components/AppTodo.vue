<template lang="pug">
#app-container
  Header
  NewTodo
  ListTodo
  .filter-todo-mobile
    FilterTodo
  p Drag and drop reorder list
</template>

<script>
import Header from '@/components/Header'
import NewTodo from '@/components/NewTodo'
import ListTodo from '@/components/ListTodo'
import FilterTodo from '@/components/FilterTodo'
export default {
  components: {
    Header,
    NewTodo,
    ListTodo,
    FilterTodo
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
.filter-todo-mobile{
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top:40px;
  box-shadow: -1px 2px 16px 4px rgba(0,0,0,0.49);
  -webkit-box-shadow: -1px 2px 16px 4px rgba(0,0,0,0.49);
  -moz-box-shadow: -1px 2px 16px 4px rgba(0,0,0,0.49);
  background: #FFFFFF;
  border-radius: 5px;
  height:60px;
}
@media only screen and (max-width:375px) {
  #app-container{
    width:calc(100% - 40px);
  }
  .filter-todo-mobile{
    display: flex;
  }
  .dark-theme .filter-todo-mobile{
    background: var(--input-dark-bg-color);
    color:var(--text-dark-color);
  }
}
</style>
