<template>
  <div class="content">
    <img src="../../static/img/flower.jpg" alt="">
    <div class="button">
      <van-button type="default" @click="handleFlowerStep">上一步</van-button>
      <van-button type="default" @click="handleFlower">下一步</van-button>
    </div>
  </div>
</template>>
<script>
export default {
  data() {
    return {
      title: "",
      make: "",
    };
  },
  created() {
    try {
      let name = JSON.parse(window.localStorage.getItem("setKey")).name || "";
      this.make = name;
      console.log("name", name);
    } catch (error) {}
  },
  methods: {
    handleFlower() {
      this.$router.push({ name: "newYear" });
    },
    handleFlowerStep() {
      this.$router.push("/");
    },
  },
};
</script>>
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
  justify-content: space-between;
  justify-content: center;
  margin-top: 10px;
}
</style>>

// https://zhoutaimin-img-1302077583.cos.ap-nanjing.myqcloud.com/tm.png
// https://zhoutaimin-img-1302077583.cos.ap-nanjing.myqcloud.com/ying.jpeg