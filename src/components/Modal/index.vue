<template>
  <div class="bg">
    <transition name="van-slide-left">
      <van-dialog
        v-model="show"
        title="标题"
        show-cancel-button
        @confirm="handleConfirm"
        @cancel="handleCancel"
      >
        <div class="title">是否跳转聊天项,请选择微信头像</div>
        <div class="imgStyle">
          <div class="img-con" v-for="(item, index) in avator" :key="index">
            <img
              :class="[clickObj === index ? 'initStyle' : 'clickStyle']"
              :src="item.img"
              alt=""
              @click="handleClickImg(item, index)"
            />
          </div>
        </div>
      </van-dialog>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      clickObj: 0,
      avator: [
        {
          img:
            "https://zhoutaimin-img-1302077583.cos.ap-nanjing.myqcloud.com/ying.jpeg",
          name: "ying"
        },
        {
          img:
            "https://zhoutaimin-img-1302077583.cos.ap-nanjing.myqcloud.com/tm.png",
          name: "tm"
        }
      ]
    };
  },
  created() {},
  methods: {
    _open() {
      this.show = true;
    },
    handleConfirm() {
      setTimeout(() => {
        this.$router.push({ name: "chats" });
      }, 1000);
    },
    handleCancel() {
      this.show = false;
    },
    handleClickImg(item, index) {
      if (index == 0) {
        window.localStorage.setItem(
          "setKey",
          JSON.stringify({ name: item.name, img: item.img })
        );
        this.clickObj = 0;
      } else {
        window.localStorage.setItem(
          "setKey",
          JSON.stringify({ name: item.name, img: item.img })
        );
        this.clickObj = 1;
      }
    }
  }
};
</script>

<style scope>
.bg /deep/ .van-dialog {
  background-image: url("../../assets/fav.jpg");
}
.imgStyle {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-con {
  width: 50px;
  height: 50px;
  padding: 10px 20px;
}

.initStyle {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid red;
}
.clickStyle {
  width: 50px;
  height: 50px;
  border-radius: 10px;
}
.title {
  text-align: center;
  font-size: 12px;
  margin-top: 20px;
}
.avator {
  display: flex;
}
</style>
