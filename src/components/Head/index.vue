<template>
  <div class="box">
    <div class="content">{{ title }}</div>
    <ModalChat ref="modalChat"></ModalChat>
    <audio
      style="
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        opacity: 0;
      "
      :autoplay="true"
      :controls="true"
      :loop="true"
      preload
      webkit-playsinline="true"
      playsinline="true"
      ref="audio"
    >
      <source src="../../assets/audio/love.mp3" />
    </audio>
  </div>
</template>
<script>
import ModalChat from "../../components/Modal";

export default {
  components: {
    ModalChat
  },
  data() {
    return {
      title: ""
    };
  },
  mounted() {
    this.$refs.modalChat.show = true;
    this.$refs.audio.play();
  },
  watch: {
    $route: {
      handler: function(val, oldValue) {
        console.log("👓", val.name);
        const routeName = val.name;
        if (routeName === "chats") {
          this.title = "盈盈";
          this.$refs.audio.play();
        }
        if (routeName === "header") {
          this.title = "盈盈";
        }
        if (routeName === "flower") {
          this.title = "灏妤";
        }
        if (routeName === "newYear") {
          this.title = "博宇";
        }
        if (routeName === "miss") {
          this.title = "小寿星生日快乐";
        }
        if (routeName === " happy") {
          this.title = "生日快乐盈盈";
        }
        if (routeName === "two21") {
          this.title = "202121";
        }
      },
      immediate: true
    }
  }
  // filters: {
  //   showTitle(name) {
  //     console.log("===ddd>>>>>", name);
  //     if (name === "flower") {
  //       return "送给最爱的人";
  //     }
  //     if (name === "Header") {
  //       return "开启浪漫之旅";
  //     }
  //   },
  // },
};
</script>
<style scoped>
.box {
  position: fixed;
  top: 0;
  width: 100%;
}
.content {
  height: 40px;
  line-height: 40px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}</style
>>
