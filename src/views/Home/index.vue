<template>
  <div class="home w-full flex justify-center">
    <Content />
    <Sidebar />
  </div>
</template>
<script>
import Content from "@/components/Home/Content.vue";
import Sidebar from "@/components/Home/Sidebar.vue";
export default {
  components: { Content, Sidebar },
};
</script>
