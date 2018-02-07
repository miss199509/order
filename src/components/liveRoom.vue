<template>
  <div class="liveRoom">
    <header class="header_title">
      <h3>lst饲养员：Talk</h3>
    </header>

    <div class="ues_indexBox">
      <ul>
        <li class="ues_header">
          <p class="ues_portrait">
            <img src="../assets/avatar@2x.png"/>
          </p>
          <p class="ues_heartBar">
            <img width="35px;" src="../assets/icon_heart@2x.png"/>
            <strong>3699</strong>
            <img style="margin-right: -7px;" width="45px;" src="../assets/add_normal@2x.png"/>
          </p>
        </li>
        <li class="ues_list">
          <p>
            <img width="60px" src="../assets/btn_task_normal@2x.png"/>
          </p>
          <p>
            <img width="60px" src="../assets/btn_toy_normal@2x.png"/>
          </p>
          <p>
            <img width="60px" src="../assets/btn_talk_normal@2x.png"/>
          </p>
          <img @click="" class="leftarrow" width="23px;" src="../assets/icon_Leftarrow@2x.png"/>
        </li>
        <li>
          <img class="bg_light" src="../assets/bg_light@2x.png"/>
        </li>
      </ul>
      <ul class="ranking">
        <p class="rankingOne">
          <img src="../assets/avatar@2x.png"/>
        </p>
        <p class="rankingTwo">
          <img src="../assets/avatar@2x.png"/>
        </p>
      </ul>
    </div>

    <div class="uesPet_box">
      <div class="uesPet_current">
        <p class="uesPet_portrait">
          <img src="../assets/avatar@2x.png"/>
        </p>
        <p class="uesPet_title">
          <span>小白123</span>
        </p>
        <img class="uesSwitch" width="43px;" src="../assets/icon_arrow@2x.png"/>
      </div>
    </div>
  
    <p class="set_up">
      <img width="35px;" src="../assets/btn_muise_normal@2x.png"/>
      <img width="35px;" src="../assets/btn_Options_normal@2x.png"/>
    </p>

    <div class="words_box">
      <ul>
        <li>
          <strong>留言标题</strong>
          <span>2018.2.5</span>
        </li>
        <li>
          <strong>留言标题</strong>
          <span>2018.2.5</span>
        </li>
        <li>
          <strong>留言标题</strong>
          <span>2018.2.5</span>
        </li>
      </ul>
    </div>

    <Alert :logo="text" :boll="boll"></Alert>

  </div>
</template>

<script>

import axios from 'axios'
import qs from 'qs'


import Alert from '../components/alert'

export default {
  name: 'liveRoom',
  data () {
    return {
      text:'000',
      boll:true,
    }
  },
  components:{
    Alert
  },
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
#jsmpeg-player{
  position: absolute;
  left: 50%;
  transform : translate(-50%,0%);
}

.liveRoom{
  background-image: url('../assets/bg_main@2x.png');
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
}


.header_title{
  background-image: url('../assets/bg_tiitle@2x.png');
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 55px;
  line-height: 55px;
}

.header_title h3{
  font-size: 23px;
  text-align: center;
  color: #FFF9CC;
}





.ues_indexBox{
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 13px;
  position: relative;
}


.ues_header{
  position: relative;
  height: 83px;
}
.ues_portrait{
  background-image: url('../assets/icon_M@2x.png');
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 55px;
  width: 55px;
  border-radius: 50%;
  padding: 9px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
}
.ues_portrait img{
  width: 100%;
  border-radius: 50%;
  height: 100%;

}

.ues_heartBar{
  background-image: url('../assets/bg_heartBar@2x.png');
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 155px;
  height: 45px;
  position: absolute;
  top: 0px;
  left: 23px;
  padding-left: 51px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ues_heartBar strong{
  font-size: 23px;
  color: #EDF5FF;
}


.ues_list{
  background-image: url('../assets/bg_function_L@2x.png');
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 105px;
  height: 209px;
  padding: 7px 0px 7px 9px;
  position: relative;
}
.ues_list .leftarrow{
  position: absolute;
  transform: translate(0%,-50%);
  top: 50%;
  right: 10px;
  z-index: 11;
}

.bg_light{
  position: absolute;
  top: 50px;
  left: 42px;
  width: 180px;
  height: 205px;
}

.ranking{
  background-image: url('../assets/btn_Ranking_click@2x.png');
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 110px;
  height: 188px;
  padding-top: 70px;
}
.ranking p{
  margin: auto;
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 60px;
  height: 70px;
  padding: 9px;
}
.ranking img{
  width: 100%;
  border-radius: 50%;
  margin-top: 7px;
  margin-left: 2px;
}
.rankingOne{
  background-image: url('../assets/icon_1st@2x.png');
}
.ranking .rankingTwo{
  background-image: url('../assets/icon_Candidate@2x.png');
  width: 50px;
  height: 60px;
}

/*当前*/

.uesPet_current{
  position: relative;
}
.uesPet_portrait{
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url('../assets/icon_L@2x.png');
  width: 90px;
  height: 90px;
  border-radius: 50%;
  text-align: center;
  padding: 25px;
  margin: auto;

}
.uesPet_portrait img{
  width: 100%;
  margin-top: -6px;
  margin-left: 1px;
}


.uesPet_title{
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url('../assets/bg_L@2x.png');
  width: 195px;
  text-align: center;
  margin: auto;
  margin-top: -35px;
  height: 60px;
}
.uesPet_title span{
  font-size: 19px;
  color: #fff;
}
.uesPet_title img{
  width: 100%;
  display: block;
}
.uesSwitch{
  position: absolute;
  top: 50%;
  right: 0px;
  transform : translate(-50%,0%);
}

.words_box{
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url('../assets/bg_talk@2x.png');
  padding: 0px 15px;
}
.words_box li{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom:1px solid #6C5938;
  padding: 5px 3px;
}
.words_box strong{
  color: #fff;
  font-size: 19px;
}
.words_box span{
  color: #fff;
  font-size: 19px;
}
.set_up{
  text-align: -webkit-right;
  margin-right: 7px;
}
</style>
