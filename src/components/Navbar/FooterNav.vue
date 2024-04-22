<template>
  <div class="flex p-3 mt-1 mb-1 hover:bg-gray-200 rounded-lg cursor-pointer">
    <Threads />
    <span class="pl-4"> Threads</span>
  </div>
  <div class="flex p-3 mt-1 mb-1 hover:bg-gray-200 rounded-lg cursor-pointer">
    <More />
    <span class="pl-4"> Xem Thêm</span>
  </div>
</template>
<script>
import Threads from "@/components/Images/Threads.vue";
import More from "@/components/Images/More.vue";
export default {
  components: {
    Threads,
    More,
  },
};
</script>
