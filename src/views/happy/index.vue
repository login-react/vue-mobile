<!--
 * @Description: 
 * @Version: 2.0
 * @Author: mac_zhou
 * @Date: 2021-06-02 21:12:23
 * @LastEditors: mac_zhou
 * @LastEditTime: 2021-06-18 07:05:34
-->
<template>
  <div class="content">
    <iframe
      src="https://www.jsdaima.com/js/demo/3601.html"
      style="width: 100%; height: 600px; margin-top: 10px; z-index: -1"
    ></iframe>
    <div class="button">
      <van-button type="default" @click="handleFlower">上一步</van-button>
      <van-button type="default" @click="handleFlowerStep">下一步</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleFlower() {
      this.$router.push({
        name: "miss"
      });
    },
    handleFlowerStep() {
      this.$router.push({ name: "chats" });
    }
  }
};
</script>

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
</style>
