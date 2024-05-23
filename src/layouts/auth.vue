<template>
  <div>
    <slot></slot>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer/footerAuth.vue";
export default {
  components: { Footer },
};
</script>
