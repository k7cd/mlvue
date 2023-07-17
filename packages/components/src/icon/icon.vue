<template>
  <div class="ml-icon" :style="style">this is a icon component</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import "./style/index.less";

defineOptions({
  name: "ml-icon",
});

type IconProps = {
  type?: "primary" | "secondary";
};

const iconProps = defineProps<IconProps>();

const style = computed(() => {
  return { [`ml-button--${iconProps.type}`]: iconProps.type };
});
</script>
