<template>
  <div id="header">
    <h1>TODO</h1>
    <img :src="calcIconTheme" alt="dark theme" id="change-theme" v-on:click="changeTheme">
  </div>
</template>

<script>
import iconMoon from '../assets/icon-moon.svg'
import iconSun from '../assets/icon-sun.svg'
export default {
  computed: {
    calcIconTheme () {
      return this.darkTheme ? iconSun : iconMoon
    }
  },
  data () {
    return {
      darkTheme: false
    }
  },
  methods: {
    changeTheme () {
      this.darkTheme = !this.darkTheme
      document.body.classList.toggle('dark-theme')
    }
  }
}
</script>

<style>
#header{
  width: 100%;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding-top:60px;
  padding-bottom:30px;
}
#header h1{
  color: #FFFFFF;
  padding:0;
  margin:0;
  letter-spacing: 20px;
}
#change-theme{
  height:20px;
  cursor:pointer;
}
</style>
