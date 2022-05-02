<!--
 * @Description: 
 * @Author: mac_zhou
 * @Date: 2021-03-04 22:31:59
 * @LastEditTime: 2021-07-18 10:46:51
 * @LastEditors: mac_zhou
-->
<template>
  <div ref="snow">
    <div class="content">
      <div style="width:100%;margin-top:10px;">
        <video width="100%" height="240" controls>
          <source src="../video/mack.mp4" type="video/mp4" />
        </video>
      </div>
      <div v-for="(item, index) in datas" :key="index">
        <iframe
          :src="item.name"
          style="width: 100%; height: 600px; z-index: -1"
        ></iframe>
      </div>
      <div class="button">
        <van-button type="default" @click="handleEnter"
          >往下 or 下一页</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { dataSource } from "../Data/index";
console.log("dataSource :", dataSource);
// const socket = require("socket.io-client")("http://localhost:9999");
// console.log("socket", socket.emit("testInfo"));
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      datas: []
    };
  },
  created() {
    this.datas = dataSource;
  },
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
        .post("http://39.103.214.235:5000/doLogin", {
          title: this.sms || "",
          time: "",
          ang: "mobile-new"
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
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
}
</style>
