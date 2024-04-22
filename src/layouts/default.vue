<template>
  <div class="flex divide-x-2">
    <nav-bar />
    <slot></slot>
  </div>
</template>
<script>
import NavBar from "@/components/Navbar/NavBar.vue";
export default {
  components: { NavBar },
};
</script>
