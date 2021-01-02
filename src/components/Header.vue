<template>
  <div class="content">
    <img src="../../static/img/header.png" alt="">
    <div class="button">
      <van-button type="default" @click="handleEnter">下一步</van-button>
    </div>
    <ModalChat ref="modalChat"></ModalChat>
  </div>
</template>

<script>
import ModalChat from "../components/Modal";
import axios from "axios";
// const socket = require("socket.io-client")("http://localhost:9999");
// console.log("socket", socket.emit("testInfo"));
export default {
  components: {
    ModalChat,
  },
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    this.$refs.modalChat.show = true;
    this.headerRecord();
  },
  methods: {
    handleEnter() {
      this.$router.push({ name: "flower" });
    },
    headerRecord() {
      // axios
      //   .post("http://119.45.228.169:5000/doLogin", {
      //     title: this.sms || "",
      //     time: "",
      //     ang: "mobile",
      //   })
      //   .then((response) => {});
    },
  },
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
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.header-down {
  padding: 0 10px;
  height: 30px;
  border: 1px solid grey;
  line-height: 30px;
}
</style>
