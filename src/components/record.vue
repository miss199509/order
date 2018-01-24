<template>
  <div class="record">
  
    <header class="record_nav">
      <strong v-for="(val,key) in record_navList" @click="select_record(val,key)" :class="{'recordMark':val.boll}">
        {{val.text}}
      </strong>
    </header>
    
    <ul>
      
    </ul>

  </div>
</template>

<script>
export default {
  name: 'record',
  data () {
    return {
      record_navList:[
        {text:'娃娃详情',boll:true},
        {text:'抓中记录',boll:false},
        {text:'抓取达人',boll:false}
      ]
    }
  },
  methods:{
    select_record(val,key){
      for(let i in this.record_navList){
        this.record_navList[i].boll = false;
      }
      val.boll = true;
    }
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


.record{
  background-image: url('../assets/bg_info@2x.png');
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
  padding: 0px 11px;
}


.record_nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 13px;
}
.record_nav strong{
  font-size: 21px;
  color: #AEAEAE;
  padding-bottom: 3px;
}


.record_nav .recordMark{
  color: #E3B249;
  border-bottom: 3px solid #E3B249;
}
</style>
