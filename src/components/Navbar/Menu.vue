<template>
  <div class="menu block grow pb-14 w-full">
    <div
      class="home flex p-3 mt-1 mb-1 hover:bg-gray-200 rounded-lg cursor-pointer"
    >
      <Home />
      <span class="pl-4"> Trang Chủ</span>
    </div>
    <div
      class="home flex p-3 mt-1 mb-1 hover:bg-gray-200 rounded-lg cursor-pointer"
    >
      <Search />
      <span class="pl-4"> Tìm Kiếm</span>
    </div>
    <div
      class="home flex p-3 mt-1 mb-1 hover:bg-gray-200 rounded-lg cursor-pointer"
    >
      <Explore />
      <span class="pl-4"> Khám Phá</span>
    </div>
    <div
      class="home flex p-3 mt-1 mb-1 hover:bg-gray-200 rounded-lg cursor-pointer"
    >
      <Reels />
      <span class="pl-4"> Reels</span>
    </div>
    <div
      class="home flex p-3 mt-1 mb-1 hover:bg-gray-200 rounded-lg cursor-pointer"
    >
      <Messages />
      <span class="pl-4"> Tin Nhắn</span>
    </div>
    <div
      class="home flex p-3 mt-1 mb-1 hover:bg-gray-200 rounded-lg cursor-pointer"
    >
      <Notification />
      <span class="pl-4"> Thông Báo</span>
    </div>
    <div
      class="home flex p-3 mt-1 mb-1 hover:bg-gray-200 rounded-lg cursor-pointer"
    >
      <Create />
      <span class="pl-4"> Tạo</span>
    </div>
    <div
      class="home flex p-3 mt-1 mb-1 hover:bg-gray-200 rounded-lg cursor-pointer"
    >
      <Personal />
      <span class="pl-4"> Trang Cá Nhân</span>
    </div>
  </div>
</template>
<script>
import Home from "@/components/Images/Home.vue";
import Search from "@/components/Images/Search.vue";
import Explore from "@/components/Images/Explore.vue";
import Messages from "@/components/Images/Messages.vue";
import Notification from "@/components/Images/Notification.vue";
import Reels from "@/components/Images/Reels.vue";
import Create from "@/components/Images/Create.vue";
import Personal from "@/components/Images/Personal.vue";
export default {
  components: {
    Home,
    Search,
    Explore,
    Messages,
    Notification,
    Reels,
    Create,
    Personal,
  },
};
</script>
