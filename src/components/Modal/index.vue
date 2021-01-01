<template>
  <div>
    <van-dialog v-model="show" title="标题" show-cancel-button @confirm="handleConfirm" @cancel="handleCancel">
      <div class="title">是否跳转聊天项</div>
    </van-dialog>
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

<style>
.title {
  text-align: center;
}
</style>