<template>
  <div class="content">
    <iframe
      src="https://www.jsdaima.com/js/demo/4012.html"
      style="width: 100%; height: 600px; margin-top: 10px;z-index:-1;"
    ></iframe>
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
  position: absolute;
  bottom: 3px;
  left: 50%;
  transform: translate(-50%);
}

</style>>

// https://zhoutaimin-img-1302077583.cos.ap-nanjing.myqcloud.com/tm.png
// https://zhoutaimin-img-1302077583.cos.ap-nanjing.myqcloud.com/ying.jpeg