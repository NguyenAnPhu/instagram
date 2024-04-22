<template>
  <div class="navbar">
    <div class="fixed">
      <logo-nav-vue />
      <menu-vue />
      <footer-nav-vue />
    </div>
    <!-- <span class=""> Navbar nè </span> -->
  </div>
</template>
<style lang="css" scoped>
.navbar {
  max-width: 100%;
  height: 100vh;
  min-width: 244px;
  padding: 8px 12px 20px 12px;
}
</style>
<script>
import LogoNavVue from "@/components/Navbar/LogoNav.vue";
import MenuVue from "@/components/Navbar/Menu.vue";
import FooterNavVue from "@/components/Navbar/FooterNav.vue";
export default {
  components: {
    LogoNavVue,
    MenuVue,
    FooterNavVue,
  },
};
</script>
