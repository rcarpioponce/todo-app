<template lang='pug'>
.filters-todo
  .filter-item(@click="handlerTodoFilter('ALL')" :class="{ active: getFilter === 'ALL' }" ) All
  .filter-item(@click="handlerTodoFilter('ACTIVE')" :class="{ active: getFilter === 'ACTIVE' }") Active
  .filter-item(@click="handlerTodoFilter('COMPLETED')" :class="{ active: getFilter === 'COMPLETED' }") Completed
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getFilter'])
  },
  methods: {
    ...mapMutations(['handlerTodoFilter', 'handlerClearCompleted'])
  }
}
</script>

<style>
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
@media only screen and (max-width:375px) {
  .filters-todo{
    width: 60%;
    font-size:14px;
  }
  .filters-todo.hide-xs{
    display: none;
  }
  .footer-list-todo{
    font-size: 14px;
  }
}
</style>
