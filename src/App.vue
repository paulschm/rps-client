<template>
  <div id="app">
    <router-view/>
    <div>
        {{this.message}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
      return {
          message: '----'
      }
  },
  components: {
  },
  sockets: {
      serverMessage (arg) {
          this.message = arg
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
