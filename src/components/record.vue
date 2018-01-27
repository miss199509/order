<template>
  <div class="record">
  
    <header class="record_nav">
      <strong v-for="(val,key) in record_navList" @click="select_record(val,key)" :class="{'recordMark':val.boll}">
        {{val.text}}
      </strong>
    </header>
    
    <div v-show="record_navList[1].boll">
      <div class="record_ranking">
        <p class="record_ranking_title">
          <img width="63px;" src="../assets/icon_two@2x.png"/>
          <img class="icon_one" width="63px;" src="../assets/icon_one@2x.png"/>
          <img width="63px;" src="../assets/icon_three@2x.png"/>
        </p>
        
        <div class="rankingBack">
          <p class="name">
            <span>逗逼</span>
            <span class="one">逗逼</span>
            <span class="three">逗逼</span>
          </p>
          <p class="num">
            <span>抓取<i>10</i>次</span>
            <span>抓取<i>10</i>次</span>
            <span>抓取<i>10</i>次</span>
          </p>
        </div>

        <ul class="recordList">
          <li>
            <p>
              <label>1</label>
              <img width="37px" src="../assets/avatar@2x.png"/>
              <strong>Talk</strong>
            </p>
            <p>
              <span>抓取</span>
              <b>888</b>
              <span>次</span>
            </p>
          </li>
        </ul>
      </div>
    </div>


    <div class="record_ranking" v-show="record_navList[2].boll">
      <ul class="recordList recordListRecord">
          <li>
            <p>
              <img width="37px" src="../assets/avatar@2x.png"/>
              <strong>Talk</strong>
            </p>
            <p>
              <span>2小时前</span>
            </p>
          </li>
          <li>
            <p>
              <img width="37px" src="../assets/avatar@2x.png"/>
              <strong>Talk</strong>
            </p>
            <p>
              <span>2小时前</span>
            </p>
          </li>
          <li>
            <p>
              <img width="37px" src="../assets/avatar@2x.png"/>
              <strong>Talk</strong>
            </p>
            <p>
              <span>2小时前</span>
            </p>
          </li>
        </ul>
    </div>

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

.rankingBack{
  background-image: url('../assets/bg_1-3Rank@2x.png');
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 130px;
  position: relative;
}
.rankingBack p{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.rankingBack .num{
  position: absolute;
  bottom: 11px;
  width: 100%;
}
.rankingBack span{
  font-size: 15px;
  color: #7F7F7F;
}
.rankingBack i{
  font-size: 23px;
  color: #FFFAC8;
  margin: 0px 1px;
}

.rankingBack .name{
  height: 45px;
  position: absolute;
  width: 100%;
  top: -11px;
}
.rankingBack .name span{
  font-size: 19px;
}
.rankingBack .one{
  margin-top: -55px;
}
.rankingBack .three{
  margin-top: 25px;
}

.record_ranking{
  padding: 0px 20px;
}

.record_ranking_title{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 23px;
  margin-bottom: -23px;
}
.record_ranking_title .icon_one{
  margin-bottom: 70px;
}


.recordList li{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 9px 0px;
  border-bottom: 1px solid #E7E7E7;
  padding-bottom: 3px;
}
.recordList p{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.recordList label{
  margin-right: 11px;
  color: #7F7F7F;
  font-size: 17px;
}
.recordList strong{
  margin-left: 9px;
  font-size: 18px;
}
.recordList span{
  color: #aeaeae;
  font-size: 15px;
}
.recordList b{
  font-size: 26px;
  color: #E3B249;
  margin: 0px 7px;
}


/**/
.recordListRecord{
  margin-top: 33px;
}
.recordListRecord li{
  margin: 13px 0px;
}
</style>
