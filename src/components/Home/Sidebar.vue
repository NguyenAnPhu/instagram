<template>
  <div class="sidebar pl-16">
    <div class="mt-9">
      <Account />
      <Suggest />
      <footer-sidebar />
    </div>
  </div>
</template>
<script>
import Account from "@/components/Home/Sidebar/Account.vue";
import Suggest from "@/components/Home/Sidebar/Suggest.vue";
import FooterSidebar from "@/components/Home/Sidebar/FooterSidebar.vue";

export default {
  components: {
    Account,
    Suggest,
    FooterSidebar,
  },
};
</script>
