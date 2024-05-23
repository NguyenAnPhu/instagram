<template>
  <component :is="layoutComponent">
    <router-view></router-view>
  </component>
</template>
<script>
import { computed } from "vue";
import { PUBLIC_LAYOUT } from "@/constants";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();

    return {
      layoutComponent: computed(
        () => (route.meta.layout || PUBLIC_LAYOUT) + "-layout"
      ),
    };
  },
};
</script>
