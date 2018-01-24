<template>
  <div class="liveRoom">
    <header class="liveHeader">
      <img width="27px;" src="../assets/icon_back@2x.png"/>
      <div class="liveHeader_qty">
        <label>
         100人
         <br/>在线
        </label>
        <p>
          <img width="33px;" src="../assets/avatar@2x.png"/>
          <img width="33px;" src="../assets/avatar@2x.png"/>
          <img width="33px;" src="../assets/avatar@2x.png"/>
        </p>
      </div>
    </header>
    
    <div class="video_box">
      <canvas id="jsmpeg-player"></canvas>
      <canvas id="jsmpeg-player2"></canvas>
      <div class="videoSet_up">
        <p>
          <img src=""/>
        </p>
      </div>
    </div>
  
    <div class="operation_box">
      <div class="operation_padding">
        <ul class="livePrice">
          <li>
            <label>本次:</label>
            <img width="23px;" src="../assets/icon_dc@2x.png"/>
            <label>100.00/次</label>
          </li>
          <li>
            <label>余额:</label>
            <img width="23px;" src="../assets/icon_dc@2x.png"/>
            <label>100.00</label>
          </li>
        </ul>
        
        <div class="operation">
          <img width="70px;" src="../assets/icon_chat_click@2x.png"/>
          <p>
            <strong>
              预约排队
            </strong>
            <span>
              前面2人
            </span>
          </p>
          <img width="70px;" src="../assets/btn_Recharge_click@2x.png"/>
        </div>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: 'liveRoom',
  data () {
    return {

    }
  },
  mounted(){
    var client = AgoraCMH5SDK.createClient();
    client.init('fa715ad316694ac8a88cbb05a878fb15', 'alice', {
      //对应的动态key，如果没有请不需要传null，直接不带这个参数即可，可选 alicerm1 AliceRm1
      //key: key,
      //主摄像头uid，默认为1，可选
      uid1: 2587758,
      //副摄像头uid，默认为2，可选
      uid2: 2
    }, function(){
      //初始化成功
      client.play({
        //canvas 1 id
        canvas1: "jsmpeg-player",
        //canvas 2 id
        canvas2: "jsmpeg-player2"
      }, function(){
        //视频开始播放的回调
        console.log("started playing..");
        document.getElementById('jsmpeg-player').style.width = "100%";
        let height_ = document.documentElement.clientHeight-207;
        document.getElementById('jsmpeg-player').style.height = height_+"px";

      });
    });

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


.liveRoom{
  background-image: url('../assets/bg_main1@2x.png');
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
  padding: 0px 11px;
}

.liveHeader{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0px;
}
.liveHeader label{
  color: #fff;
  text-align: center;
  display: block;
  font-size: 16px;
}
.liveHeader_qty{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.liveHeader_qty img{

}

.video_box{
  position: relative;
}
.videoSet_up{
  position: absolute;
  top: 0px;
}

.livePrice li{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.livePrice{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #fff;
  padding-bottom: 7px;
}
.livePrice label{
  font-size: 17px;
}



.operation_box{
  position: absolute;
  bottom: 0px;
  width: 100%;
  left: 0px;
}
.operation_padding{
  padding: 0px 11px;
}

.operation{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 7px;
  padding-bottom: 13px;
}

.operation p{
  background-image: url('../assets/btn_lineup@2x.png');
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 160px;
  height: 90px;
  text-align: center;
}
.operation strong{
  display: block;
  font-size: 23px;
  color: #F63630;
  margin-top: 11px;
}
.operation span{
  color: #939292;
  font-size: 15px;
}
</style>
