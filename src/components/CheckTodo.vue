<template lang="pug">
.check-todo(:class="{ done: todo.done }" @click="handleClick")
</template>

<script>
export default {
  props: {
    todo: {
      default: Object,
      required: true
    },
    handlerCheck: {
      default: Function,
      required: true
    }
  },
  methods: {
    handleClick () {
      this.handlerCheck()
    }
  }
}
</script>

<style>
.check-todo{
  width: 25px;
  height: 25px;
  border:1px solid hsl(236, 33%, 92%);
  border-radius: 50%;
  -moz-border-radius:50%;
  -webkit-border-radius:50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  background: unset;
}
.dark-theme .check-todo{
  border:1px solid var(--gray-color);
}
.check-todo.done{
  border-color:white;
  background: url('../assets/icon-check.svg') center center no-repeat, linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%));
}
.dark-theme .check-todo.done{
  border-color: var(--input-dark-bg-color);
}
</style>
