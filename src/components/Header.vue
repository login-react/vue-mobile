<!--
 * @Description: 
 * @Version: 2.0
 * @Author: mac_zhou
 * @Date: 2021-06-02 21:12:23
 * @LastEditors: mac_zhou
 * @LastEditTime: 2021-07-18 10:47:34
-->
<template>
  <div class="content">
    <iframe src="https://www.jsdaima.com/js/demo/3742.html"
            style="width: 100%; height: 600px; z-index: -1"></iframe>
    <div class="button">
      <van-button type="default"
                  @click="handleEnter">下一步</van-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// const socket = require("socket.io-client")("http://localhost:9999");
// console.log("socket", socket.emit("testInfo"));
export default {
  name: "HelloWorld",
  data () {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted () {
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
    handleEnter () {
      this.$router.push({ name: "flower" });
    },
    headerRecord () {
      axios
        .post("http://39.103.214.235:5000/doLogin", {
          title: this.sms || "",
          time: "",
          ang: "mobile-new"
        })
        .then(response => { });
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
