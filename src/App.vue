<template>
  <component :is="layoutComponent">
    <router-view></router-view>
  </component>
</template>
<script>
import { computed } from "vue";
import { PUBLIC_LAYOUT } from "@/constants";
export default {
  setup() {
    return {
      layoutComponent: computed(() => PUBLIC_LAYOUT + "-layout"),
    };
  },
};
</script>
