<template lang="pug">
  #todo-app-main
    AppTodo
</template>
<script>
import AppTodo from '@/components/AppTodo'
export default {
  components: {
    AppTodo
  }
}
</script>
<style>
:root{
  --dark-bg-color: hsl(235, 21%, 11%);
  --light-bg-color: hsl(0, 0%, 98%);
  --input-dark-bg-color: lightblue;
  --input-light-bg-color: white;
}
body{
  padding:0;
  margin:0;
  display: flex;
  justify-content: center;
  background-color: var(--light-bg-color);
  height: 100vh;
  font-family: 'Josefin Sans', sans-serif;
}
#todo-app-main{
  padding:0;
  margin:0;
  width: 1440px;
  height:auto;
  background-image: url('./assets/bg-desktop-light.jpg');
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: 100%;
  display:flex;
  justify-content: center;
  align-items: flex-start;
}
body.dark-theme #todo-app-main{
  background-color: var(--dark-bg-color);
  background-image: url('./assets/bg-desktop-dark.jpg');
}
</style>
