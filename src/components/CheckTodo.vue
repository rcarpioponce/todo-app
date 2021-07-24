<template lang="pug">
.check-todo(:class="{ done: isDone }" @click="handleClick")
</template>

<script>
export default {
  props: {
    done: {
      default: false
    }
  },
  data () {
    return {
      isDone: false
    }
  },
  created () {
    this.isDone = this.done
  },
  methods: {
    handleClick () {
      this.isDone = !this.isDone
    }
  }
}
</script>

<style>
.check-todo{
  width:20px;
  height: 20px;
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
.check-todo.done{
  border:0;
  background: url('../assets/icon-check.svg') center center no-repeat, linear-gradient(hsl(192, 100%, 67%),hsl(280, 87%, 65%));
}
</style>
