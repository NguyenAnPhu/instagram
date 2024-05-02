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
      @click="openOptions = true"
    >
      <Create />
      <span class="pl-4"> Tạo</span>
      <TransitionRoot as="template" :show="openOptions">
        <Dialog as="div" class="relative z-10" @close="openOptions = false">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
          </TransitionChild>

          <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div
              class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
            >
              <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enter-to="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leave-from="opacity-100 translate-y-0 sm:scale-100"
                leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel
                  class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                >
                  <div class="bg-white max-w-full h-full">
                    <div class="w-full" role="dialog">
                      <div class="flex flex-col min-h-[391px] max-w-full">
                        <div class="flex w-full h-full">
                          <div
                            class="flex flex-col justify-center w-full h-full divide-y-2"
                          >
                            <div
                              class="p-2 w-full h-full flex items-center justify-center"
                            >
                              <span>Tạo bài viết mới</span>
                            </div>
                            <div class="w-full min-h-full">
                              <div
                                class="w-full min-h-full p-6 flex flex-col items-center justify-center"
                              >
                                <svg
                                  aria-label="Biểu tượng thể hiện file phương tiện, chẳng hạn như hình ảnh hoặc video"
                                  class=""
                                  fill="currentColor"
                                  height="77"
                                  role="img"
                                  viewBox="0 0 97.6 77.3"
                                  width="96"
                                >
                                  <title>
                                    Biểu tượng thể hiện file phương tiện, chẳng
                                    hạn như hình ảnh hoặc video
                                  </title>
                                  <path
                                    d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                                    fill="currentColor"
                                  ></path>
                                  <path
                                    d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                                <div class="mt-4">
                                  <span class="" dir="auto"
                                    >Kéo ảnh và video vào đây</span
                                  >
                                </div>
                                <div class="mt-6">
                                  <div class="">
                                    <label
                                      for="fileInput"
                                      class="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                                    >
                                      Chọn từ máy tính
                                    </label>
                                    <input
                                      id="fileInput"
                                      type="file"
                                      class="hidden"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
    <div
      class="home flex p-3 mt-1 mb-1 hover:bg-gray-200 rounded-lg cursor-pointer"
    >
      <Personal />
      <span class="pl-4"> Trang Cá Nhân</span>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

const openOptions = ref(false);
</script>

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
