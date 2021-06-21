<!--
 * @Description: 
 * @Author: mac_zhou
 * @Date: 2021-03-04 22:31:59
 * @LastEditTime: 2021-06-18 06:55:01
 * @LastEditors: mac_zhou
-->
<template>
  <div ref="snow">
    <div class="content">
      <iframe
        src="https://www.jsdaima.com/js/demo/4253.html"
        style="width: 100%; height: 600px; z-index: -1"
      ></iframe>
      <div class="button">
        <van-button type="default" @click="handleEnter">下一步</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// const socket = require("socket.io-client")("http://localhost:9999");
// console.log("socket", socket.emit("testInfo"));
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {},
  mounted() {
    window.localStorage.setItem(
      "setKey",
      JSON.stringify({
        name: "ying",
        img:
          "https://zhoutaimin-img-1302077583.cos.ap-nanjing.myqcloud.com/ying.jpeg"
      })
    );
    this.headerRecord();
  },
  methods: {
    handleEnter() {
      this.$router.push({ name: "first" });
    },
    headerRecord() {
      axios
        .post("http://119.45.228.169:5000/doLogin", {
          title: this.sms || "",
          time: "",
          ang: "mobile"
        })
        .then(response => {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 37rem;
  width: 100%;
}
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.button {
  position: absolute;
  bottom: 3px;
  left: 50%;
  transform: translate(-50%);
}
</style>
