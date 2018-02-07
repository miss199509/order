<template>
  <div class="alertBox" v-show="boll">
    <div class="">
      <h2 v-show="boll">{{logo}}</h2>
      <span>{{val}}</span>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import qs from 'qs'

export default {
  name: 'alertBox',
  data () {
    return {

    }
  },
  props:['logo','boll','val'],
  mounted(){

  },
  methods:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}

</style>
