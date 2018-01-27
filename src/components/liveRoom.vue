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
        <div class="">
          <img width="33px;" src="../assets/avatar@2x.png"/>
          <p>
            <label>anmi</label>
            <strong>游戏中</strong>
          </p>
        </div>
        <img @click="start()" class="switch" width="47px;" src="../assets/btn_switch@2x.png"/>
      </div>
    </div>
  
    <div class="operation_box">
      <div class="operation_padding" v-show="wait">
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
        
        <div class="wait">
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

      <div class="operation">
        <div>
          <img class="btn_up" @click="btn_upEve()" width="60px;" src="../assets/btn_up@2x.png"/>
          <p>
            <img width="60px;" @click="btn_leftEve()" src="../assets/btn_left@2x.png"/>
            <img class="btn_right" @click="btn_rightEve()" width="60px;" src="../assets/btn_right@2x.png"/>
          </p>
          <img class="btn_down" @click="btn_downEve()" width="60px;" src="../assets/btn_down@2x.png"/>
        </div>

        <p>
          <img @click="doEve()" width="130px;" src="../assets/btn_Grab@2x.png"/>
        </p>
      </div>
    
    </div>


  </div>
</template>

<script>

import axios from 'axios'
import qs from 'qs'

export default {
  name: 'liveRoom',
  data () {
    return {
      //操作等待
      wait:false,
      wawaCode:0
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


    //WebSocket推流操作
    if ("WebSocket" in window){
       //console.log("您的浏览器支持 WebSocket!");
       
       // 打开一个 web socket
       var ws = new WebSocket("ws://red.alice.live:9001");
      
       ws.onopen = function()
       {
        // Web Socket 已连接上，使用 send() 方法发送数据
        var json = {"cmd":66,"cid":1168,"roomid":47,"join":1};

        ws.send(JSON.stringify(json));
        //console.log("数据发送中...");
       };
      
       ws.onmessage = function (evt) {
        //console.log(evt.data)
        var received_msg = JSON.parse(evt.data);

        // if(received_msg.cmd==66){
        //   console.log(JSON.stringify(received_msg.cmds))
        //   for(let inde in received_msg.cmds){
        //     console.log(JSON.stringify(received_msg.cmds[inde]))
        //     break
        //   }
        // }
        //console.log("数据已接收...");
       };
      
       ws.onclose = function(){ 
        // 关闭 websocket
        alert("连接已关闭..."); 
       };
    }else{
       // 浏览器不支持 WebSocket
       alert("您的浏览器不支持 WebSocket!");
    }


  },
  methods:{
    start(){
      let _this = this;
      axios.post('https://red.alice.live/wawa/catch-start','')
      .then(function(dataJson){
        console.log(JSON.stringify(dataJson.data))
        _this.wawaCode = dataJson.data.data
      })
      .catch(function(err){
        alert(err);
      });

    },
    //按钮上
    btn_upEve(){
      let _this = this
      if(_this.wawaCode){
        axios.post('https://red.alice.live/wawa/catch-forward',qs.stringify({verify_code:_this.wawaCode}))
        .then(function(dataJson){
          console.log(dataJson.data)
        })
        .catch(function(err){
          alert(err);
        });
      }

    },
    //按钮左
    btn_leftEve(){
      let _this = this
      if(_this.wawaCode){
        axios.post('https://red.alice.live/wawa/catch-left',qs.stringify({verify_code:_this.wawaCode}))
        .then(function(dataJson){
          console.log(dataJson.data)
        })
        .catch(function(err){
          alert(err);
        });
      }

    },
    //按钮右
    btn_rightEve(){
      let _this = this
      if(_this.wawaCode){
        axios.post('https://red.alice.live/wawa/catch-right',qs.stringify({verify_code:_this.wawaCode}))
        .then(function(dataJson){
          console.log(dataJson.data)
        })
        .catch(function(err){
          alert(err);
        });
      }

    },
    //按钮下
    btn_downEve(){
      let _this = this
      if(_this.wawaCode){
        axios.post('https://red.alice.live/wawa/catch-back',qs.stringify({verify_code:_this.wawaCode}))
        .then(function(dataJson){
          console.log(dataJson.data)
        })
        .catch(function(err){
          alert(err);
        });
      }

    },
    //抓取
    doEve(){
      let _this = this
      if(_this.wawaCode){
        axios.post('https://red.alice.live/wawa/catch-do',qs.stringify({verify_code:_this.wawaCode}))
        .then(function(dataJson){
          console.log(dataJson.data)
        })
        .catch(function(err){
          alert(err);
        });
      }

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
  margin-right: 15px;
}
.liveHeader_qty{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.liveHeader_qty img{
    margin-left: -11px;
    border: 1px solid #fff;
    border-radius: 50%;
}

.video_box{
  position: relative;
}
.videoSet_up{
  position: absolute;
  top: 13px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.videoSet_up div{
  background-image: url('../assets/bg_avatar@2x.png');
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-left: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 11px;
}
.videoSet_up p{
  margin: 0px 17px;
  text-align:center;
}
.videoSet_up label{
  color: #fff;
  display: block;
  font-size: 13px;
}
.videoSet_up strong{
  color: #fff;
  font-size: 13px;
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

.wait{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 7px;
  padding-bottom: 13px;
}

.wait p{
  background-image: url('../assets/btn_lineup@2x.png');
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 160px;
  height: 90px;
  text-align: center;
}
.wait strong{
  display: block;
  font-size: 23px;
  color: #F63630;
  margin-top: 11px;
}
.wait span{
  color: #939292;
  font-size: 15px;
}
/*操作*/
.operation{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 7px;
}
.operation div{
  text-align: center;
}
.operation .btn_right{
  margin-left: 50px;
}
.operation .btn_up{
  margin-bottom: -33px;
}
.operation .btn_down{
  margin-top: -33px;
}
</style>
