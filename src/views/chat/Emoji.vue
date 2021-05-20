<!--
 * @Description: 
 * @Author: mac_zhou
 * @Date: 2021-05-20 09:45:47
 * @LastEditTime: 2021-05-20 10:17:32
 * @LastEditors: mac_zhou
-->
<template>
  <div class="content">
    <img :class="[number % 2 == 0 ? 'emoImg' : 'emoImg1']" :src="emjo" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: 1,
      opacityStyle: 1,
      emjo: "http://ww4.sinaimg.cn/large/9150e4e5gw1faey5i4913j20m80m8wf3.jpg",
      timer: null,
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.number++;
      if (this.number % 2 === 0) {
        this.opacityStyle = 0.2;
      } else {
        this.opacityStyle = 0.5;
      }
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>
<style scoped>
.content {
  
}
.emoImg {
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.2);
  opacity: 0.5;
}
.emoImg1 {
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.2);
  opacity: 1;
}
</style>