<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
i{
  font-style: normal
}
p,ul,li,h1,h2,h3,h4,h5{
  padding:0px;
  margin:0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 500px;
  margin: auto;
}
html,body{
	padding: 0px;
	margin: 0px;
	height: 100%;
	width: 100%;
}
</style>
