<!--
 * @Description: 
 * @Version: 2.0
 * @Author: mac_zhou
 * @Date: 2021-06-02 21:12:23
 * @LastEditors: mac_zhou
 * @LastEditTime: 2021-06-13 15:53:11
-->
<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Head";
export default {
  components: {
    Header
  },
  name: "App",
  updated() {
    console.log("2");
  },
  mounted() {
    // this.handlerRender();
  },
  methods: {
    handleTest() {
      this.handlerRender();
    },
    handlerRender() {
      const snow = this.$refs.snow;
      console.log("snow :>> ", snow);
      // snow.style.position = "fixed";
      snow.style.width = "50px";
      snow.style.height = "50px";
      snow.style.marginTop = "40px";
      snow.style.borderRadius = "1px solid grey";
      snow.style.left = Math.random() * 1000 + "px";
      snow.style.top = Math.random() * 1000 + "px";
      snow.innerHTML =
        "<img  src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3206689113,2237998950&fm=26&gp=0.jpg' width='100%' height='100%'/>";
      document.body.appendChild(snow);
    }
  }
};
</script>
