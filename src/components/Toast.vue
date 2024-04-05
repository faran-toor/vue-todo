<template>
  <div>
    <div
      v-if="visible"
      class="toast"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: "",
    };
  },
  methods: {
    showToast(message) {
      this.message = message;
      this.visible = true;
      setTimeout(() => {
        this.hideToast();
      }, 3000); // Adjust duration as needed
    },
    hideToast() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
}
</style>
