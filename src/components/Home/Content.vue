<template>
  <div class="content mt-4">
    <div class="story mb-6">
      <Story />
    </div>
    <Post />
  </div>
</template>
<script>
import Story from "@/components/Home/Content/StoryDay.vue";
import Post from "@/components/Home/Content/Post.vue";
export default {
  components: { Story, Post },
};
</script>
<style lang="css" scoped>
.content {
  max-width: 630px;
  width: 100%;
}
</style>
