<template>
  <div>
    <transition name="van-slide-left">
      <van-dialog v-model="show" title="标题" show-cancel-button @confirm="handleConfirm" @cancel="handleCancel">
        <div class="title">是否跳转聊天项</div>
        <div class="avator">
          <van-row>
            <van-col span="8">span: 8</van-col>
            <van-col span="8">span: 8</van-col>
          </van-row>
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
    };
  },
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
  },
};
</script>

<style scope>
.title {
  text-align: center;
}
.avator {
  display: flex;
}
</style>