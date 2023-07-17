<template>
  <button class="ml-button" :class="style">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import "./style/index.less";

defineOptions({
  name: "ml-button",
});

type ButtonProps = {
  type?: "primary" | "secondary";
};

const buttonProps = defineProps<ButtonProps>();

const style = computed(() => {
  return { [`ml-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
