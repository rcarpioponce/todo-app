<template lang="pug">
.footer-list-todo
  .items-left {{todoleftListCount}} items left
  .filters-todo
    .filter-item(@click="handlerTodoFilter('ALL')" :class="{ active: getFilter === 'ALL' }" ) All
    .filter-item(@click="handlerTodoFilter('ACTIVE')" :class="{ active: getFilter === 'ACTIVE' }") Active
    .filter-item(@click="handlerTodoFilter('COMPLETED')" :class="{ active: getFilter === 'COMPLETED' }") Completed
  .clear-completed(@click="handlerClearCompleted()") Clear Completed
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['todoleftListCount', 'getFilter'])
  },
  methods: {
    ...mapMutations(['handlerTodoFilter', 'handlerClearCompleted'])
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
.filters-todo{
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.filter-item,
.clear-completed{
  cursor:pointer;
}
.filter-item.active{
  color:hsl(220, 98%, 61%);
  font-weight: 700;
  opacity: 1;
}
.dark-theme .filter-item.active{
  opacity: 1;
}
.dark-theme .filter-item{
  opacity: .3;
}
.dark-theme .footer-list-todo{
  color:hsl(236, 9%, 61%);
}

.dark-theme .footer-list-todo .clear-completed:hover,
.dark-theme .footer-list-todo .filter-item:hover{
  color: hsl(0, 0%, 98%);
  opacity: 1;
}
</style>
