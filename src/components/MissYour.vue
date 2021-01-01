<template>
  <div class="content">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item> <iframe src="https://www.jsdaima.com/js/demo/4081.html" frameborder="0" style="width:100%;height:570px;"></iframe></van-swipe-item>
      <van-swipe-item><iframe src="https://www.jsdaima.com/js/demo/4064.html" frameborder="0" style="width:100%;height:570px;"></iframe></van-swipe-item>
    </van-swipe>
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
        name: "newYear",
      });
    },
    handleFlowerStep() {
      this.$router.push({ name: "chats" });
    },
  },
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
