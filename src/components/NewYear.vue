<template>
  <div class="content">
    <img src="../../static/img/newYear.jpg" alt="">
    <div class="button">
      <van-button type="default" @click="handleFlowerStep">上一步</van-button>
      <van-button type="default" @click="handleFlower">下一步</van-button>
    </div>
  </div>
</template>>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleFlower() {
      this.$router.push({ name: "miss" });
    },
    handleFlowerStep() {
      this.$router.push({ name: "flower" });
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