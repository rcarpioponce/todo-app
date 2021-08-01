<template lang="pug">
div
  .footer-list-todo
    .items-left {{todoleftListCount}} items left
    FilterTodo.hide-xs
    .clear-completed(@click="handlerClearCompleted()") Clear Completed
</template>

<script>
import { mapGetters } from 'vuex'
import FilterTodo from './FilterTodo.vue'

export default {
  components: {
    FilterTodo
  },
  computed: {
    ...mapGetters(['todoleftListCount'])
  }
}
</script>

<style>
.footer-list-todo{
  width:calc(100% - 40px);
  padding:20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size:16px;
}
@media only screen and (max-width:375px) {
  .footer-list-todo{
    font-size: 14px;
  }
}
</style>
