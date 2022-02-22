<template>
  <div class="el-notification">
    <div class="el-notification__title">
      {{ title }}
    </div>
    <div class="el-notification__message">
      {{ message }}
    </div>

    <div class="el-notifiaction__closeBtn" v-if="showClose">关闭</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ElNotification",
};
</script>

<script setup lang="ts">
import { getCurrentInstance, defineProps } from "vue";
const instance = getCurrentInstance();

interface ShowClose {
  type: string;
  default: boolean;
}

interface Props {
  title?: string;
  message: string;
  showClose: boolean;
}

withDefaults(defineProps<Props>(), {
  title: "",
  message: "",
  showClose: true,
});
</script>

<style scoped></style>
