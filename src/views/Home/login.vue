<template>
  <div class="main mb-11 w-full flex flex-col items-center">
    <div class="w-[350px] h-auto flex justify-center mt-3">
      <div
        class="w-full h-auto py-[10px] mb-[10px] flex justify-center border border-black"
      >
        <div class="w-full flex flex-col justify-center items-center">
          <div class="mt-9 mb-3 w-44">
            <Imglogo />
          </div>
          <Content />
        </div>
      </div>
    </div>
    <Recommend />
  </div>
</template>
<script>
import Imglogo from "@/components/Login/Imglogo.vue";
import Recommend from "@/components/Login/Recommend.vue";
import Content from "@/components/Login/Content.vue";
export default {
  components: { Imglogo, Content, Recommend },
};
</script>
