<template>
  <div class="logo-nav cursor-pointer">
    <Logo />
  </div>
</template>
<script>
import Logo from "@/components/Images/Logo.vue";

export default {
  components: { Logo },
};
</script>
<style lang="css" scoped>
.logo-nav {
  padding: 25px 12px 16px 12px;
  margin-bottom: 19px;
}
</style>
