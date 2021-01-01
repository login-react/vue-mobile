<template>
  <div class="bg">
    <div class="chat" ref="chatbox">
      <div class="chatFix">
        <div class="chat-content" v-for="(item) in lists" :key="item.id">
          <div class="img">
            <img v-if="item.type !== 'tm'" src="../../../static/img/12345.png" alt="">
            <img v-else src="../../../static/img/tm.png" alt="">
          </div>
          <div>
            <div class="time">{{item.time}}</div>
            <div class="chat-content-flex">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="pos_chats">
      <van-search class="seachStyle" v-model="sms" autofocus placeholder="输入内容后发送按钮显示" />
      <div v-if="sms !== ''" class="send" @click="handleSend">发送</div>
    </div>
    <div class="loadStyle">
      <van-loading v-if="loading" color="#1989fa" size="24px">加载中...</van-loading>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      sms: "",
      lists: [],
      loading: false,
    };
  },
  created() {
    this.getList();
  },
  mounted() {
    // console.log(this);
    // let chatbox = this.$refs.chatbox;
    // chatbox.scrollTop = chatbox.scrollHeight - chatbox.clientHeight + 100;
    // console.log(" chatbox.scrollHeight", chatbox.scrollHeight);
    // console.log(" chatbox.scrollTop", chatbox.scrollTop);
    // console.log(" chatbox.clientHeight", chatbox.clientHeight);
  },
  methods: {
    getList() {
      this.loading = true;
      axios
        .get("http://119.45.228.169:5000/list")
        .then((response) => {
          this.loading = false;
          this.lists = response.data || [];
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    handleSend() {
      this.loading = true;
      axios
        .post("http://119.45.228.169:5000/doLogin", {
          title: this.sms || "",
          time: "",
          ang: "",
        })
        .then((response) => {
          this.loading = false;
          this.sms = "";
          Toast.success("发送成功");
          this.$nextTick(() => {
            this.getList();
          });
        });
    },
  },
};
</script>
<style scoped>
.bg {
  width: 100vw;
  height: 100vh;
  background: #f3f3f3;
}
.send {
  width: 50px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  color: white;
  background-color: #0bbf62;
  border-radius: 5px;
}
.chatFix {
  margin-top: 60px;
}
.seachStyle {
  width: 100vw;
  background: #f4f3f2;
}
.chat {
  overflow-y: auto;
  height: calc(100% - 60px);
  padding: 0 10px;
}
.chat-content {
  display: flex;
  margin-bottom: 20px;
}
.img > img {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}
.time {
  color: red;
  font-size: 12px;
  margin-left: 12px;
}
.chat-content-flex {
  flex: 1;
  background-color: #fefffe;
  border-radius: 8px;
  padding: 0 10px;
  line-height: 30px;
  font-size: 12px;
  word-wrap: break-word !important;
  word-break: break-all;
  margin-left: 10px;
}
.pos_chats {
  position: fixed;
  bottom: 0px;
  width: 100%;
  display: flex;
  align-items: center;
}
.chats {
  border: 1px solid rgb(204 204 204);
  height: 35px;
  border-radius: 10px;
  padding: 0 10px;
  flex: 1;
}
.btn {
  border: 1px solid rgb(204 204 204);
  border-radius: 6px;
  padding: 0 10px;
  height: 35px;
  font-size: 10px;
  color: rgb(128 128 128);
}
.loadStyle {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.van-search .van-search--show-action {
  background-color: red;
}
</style>
<style >
.van-field__left-icon {
  display: none;
}
.van-search__action {
  background: #ccc;
}
</style>