<template>
  <div class="el-notification">
    <div class="el-notification__title">
      {{ title }}
    </div>
    <div class="el-notification__message">
      {{ message }}
    </div>
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

interface Props {
  title?: string;
  message: string;
}

withDefaults(defineProps<Props>(), {
  title: "",
  message: "",
});
</script>

<style scoped></style>
