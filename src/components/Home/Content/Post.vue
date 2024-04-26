<template>
  <div class="post-content flex flex-col justify-center items-center">
    <div class="divide-y-2">
      <div class="post-content-sub py-4">
        <div class="header-brand flex justify-between mb-4 text-sm">
          <div class="flex">
            <div
              class="max-w-12 max-h-12 mr-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5"
            >
              <div class="w-full h-full border-2 border-white rounded-full">
                <img
                  class="img rounded-full min-w-10 min-h-10"
                  src="https://dosi-in.com/images/news_content/255/2019/10/28/editors-pick-davies-brand-cua-sac-mau_2019_10_28_011.jpeg"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <b class="">PeiNoh.brand</b>
            <span
              class="text-gray-400 pl-2"
              dir="auto"
              style="
                line-height: var(--base-line-clamp-line-height);
                --base-line-clamp-line-height: 18px;
              "
              >• 4 ngày</span
            >
          </div>
          <div
            class="flex items-end cursor-pointer"
            @click="openOptions = true"
          >
            <svg
              aria-label="Tùy chọn khác"
              class=""
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Tùy chọn khác</title>
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </div>
        </div>
        <div class="post-short w-full">
          <iframe
            class="rounded-[4px]"
            width="100%"
            height="585"
            src="https://www.youtube.com/embed/cBnLGPWXysM"
            title="MIX MATCH # TEELAB #shorts"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="post-react flex justify-between mt-3">
          <div class="react flex">
            <div class="like mr-2">
              <svg
                aria-label="Thích"
                class="x1lliihq x1n2onr6 xyb1xck"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Thích</title>
                <path
                  d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"
                ></path>
              </svg>
            </div>
            <div class="comment mr-2">
              <svg
                aria-label="Bình luận"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Bình luận</title>
                <path
                  d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
            <div class="share mr-2">
              <svg
                aria-label="Chia sẻ bài viết"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Chia sẻ bài viết</title>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                ></line>
                <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
              </svg>
            </div>
          </div>
          <div class="save">
            <svg
              aria-label="Lưu"
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Lưu</title>
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
          </div>
        </div>
        <div class="post-count_react mt-2">
          <span class="text-sm"><b>999 lượt thích</b></span>
        </div>
        <div class="post-des mt-2">
          <span
            >levents.official 🌍🌱CELEBRATING EARTH MONTH :” LOVE YOUR MOTHER”
            <br />
            🌱🌍 Tại Levents, chúng tôi cống hiến để tiếp tục con đường hướng
            đến một tương lai bền vững hơn. Levents tin rằng không chỉ doanh
            nghiệp lớn mới có thể giúp ích cho xã hội, mà tất cả mọi người vẫn
            có thể làm được nếu bắt đầu từ những điều nhỏ nhất. Nhân dịp tháng
            trái đất chúng tôi hiện tại thông báo các hoạt động mà chúng tôi đã
            và đang phát triển như sau : 📦 Dần chuyển sang sử dụng shipping box
            thân thiện với môi trường thay vì túi nhựa như trước đây, giảm hơn 6
            tấn túi nhựa rác hàng năm. 🫙Từ những chai nhựa tái chế sử dụng công
            nghệ của đối tác Repeet.vn ( Repeet® tạo ra những vật liệu bền vững
            và hàng may mặc sử dụng sợi tái chế polyester từ vỏ chai PET đã qua
            sử dụng tại Việt Nam) , tạo nên chiếc áo đặc biệt LEVENTS® LOVE YOUR
            MOTHER TEE, 100 sản phẩm sẽ được mở bán vào ngày 23/4, 30% tổng
            doanh thu từ sản phẩm sẽ ủng hộ Quỹ Sài Gòn Xanh. Và tiếp tục áp
            dụng ở các sản phẩm mới ở tương lai.
            <br />🍀Khuyến khích trồng cây xanh bằng những hạt giống có trong
            tag giấy trên chiếc áo LEVENTS® LOVE YOUR MOTHER TEE <br />🤖Bảo vệ
            nhân quyền và duy trì các tiêu chuẩn lao động là chìa khóa và chúng
            tôi hoạt động dựa trên nguyên tắc cải tiến liên tục. Chúng tôi cam
            kết tạo ra tác động tích cực và bền vững cho cộng đồng và hành tinh.
            Hãy lan tỏa thông điệp LOVE YOUR MOTHER và thực hiện những hành động
            nhỏ trong cuộc sống hàng ngày để xây dựng một tương lai tự hào, đóng
            góp vào sự phát triển bền vững và biểu lộ tình yêu và lòng biết ơn
            đối với Mẹ Trái Đất. <br />
            <div class="tag">
              #LoveYourMother #LeventsSustainable #Levents #LeventsCSR
            </div>
          </span>
        </div>
        <div class="open-cmt text-gray-400 text-sm mt-2">
          Xem tất cả bình luận
        </div>
        <div class="post-comment flex justify-between">
          <input
            type="text"
            class="text-sm w-full border-0 outline-0 mt-2"
            placeholder="Thêm bình luận... "
          />
          <div class="flex">
            <span class="text-cyan-400 text-sm cursor-pointer px-4">Đăng</span>
            <div class="icon-react cursor-pointer">
              <svg
                aria-label="Biểu tượng cảm xúc"
                class="x1lliihq x1n2onr6 x1roi4f4"
                fill="currentColor"
                height="13"
                role="img"
                viewBox="0 0 24 24"
                width="13"
              >
                <title>Biểu tượng cảm xúc</title>
                <path
                  d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="post-content-sub py-4">
        <div class="header-brand flex justify-between mb-4 text-sm">
          <div class="flex">
            <div
              class="max-w-12 max-h-12 mr-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5"
            >
              <div class="w-full h-full border-2 border-white rounded-full">
                <img
                  class="img rounded-full min-w-10 min-h-10"
                  src="https://dosi-in.com/images/news_content/255/2019/10/28/editors-pick-davies-brand-cua-sac-mau_2019_10_28_011.jpeg"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <b class="">PeiNoh.brand</b>
            <span
              class="text-gray-400 pl-2"
              dir="auto"
              style="
                line-height: var(--base-line-clamp-line-height);
                --base-line-clamp-line-height: 18px;
              "
              >• 4 ngày</span
            >
          </div>
          <div
            class="flex items-end cursor-pointer"
            @click="openOptions = true"
          >
            <svg
              aria-label="Tùy chọn khác"
              class=""
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Tùy chọn khác</title>
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </div>
        </div>
        <div class="post-short w-full">
          <iframe
            class="rounded-[4px]"
            width="100%"
            height="585"
            src="https://www.youtube.com/embed/cBnLGPWXysM"
            title="MIX MATCH # TEELAB #shorts"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div class="post-react flex justify-between mt-3">
          <div class="react flex">
            <div class="like mr-2">
              <svg
                aria-label="Thích"
                class="x1lliihq x1n2onr6 xyb1xck"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Thích</title>
                <path
                  d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"
                ></path>
              </svg>
            </div>
            <div class="comment mr-2">
              <svg
                aria-label="Bình luận"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Bình luận</title>
                <path
                  d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
            <div class="share mr-2">
              <svg
                aria-label="Chia sẻ bài viết"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Chia sẻ bài viết</title>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                ></line>
                <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
              </svg>
            </div>
          </div>
          <div class="save">
            <svg
              aria-label="Lưu"
              class="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Lưu</title>
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
          </div>
        </div>
        <div class="post-count_react mt-2">
          <span class="text-sm"><b>999 lượt thích</b></span>
        </div>
        <div class="post-des mt-2">
          <span
            >levents.official 🌍🌱CELEBRATING EARTH MONTH :” LOVE YOUR MOTHER”
            <br />
            🌱🌍 Tại Levents, chúng tôi cống hiến để tiếp tục con đường hướng
            đến một tương lai bền vững hơn. Levents tin rằng không chỉ doanh
            nghiệp lớn mới có thể giúp ích cho xã hội, mà tất cả mọi người vẫn
            có thể làm được nếu bắt đầu từ những điều nhỏ nhất. Nhân dịp tháng
            trái đất chúng tôi hiện tại thông báo các hoạt động mà chúng tôi đã
            và đang phát triển như sau : 📦 Dần chuyển sang sử dụng shipping box
            thân thiện với môi trường thay vì túi nhựa như trước đây, giảm hơn 6
            tấn túi nhựa rác hàng năm. 🫙Từ những chai nhựa tái chế sử dụng công
            nghệ của đối tác Repeet.vn ( Repeet® tạo ra những vật liệu bền vững
            và hàng may mặc sử dụng sợi tái chế polyester từ vỏ chai PET đã qua
            sử dụng tại Việt Nam) , tạo nên chiếc áo đặc biệt LEVENTS® LOVE YOUR
            MOTHER TEE, 100 sản phẩm sẽ được mở bán vào ngày 23/4, 30% tổng
            doanh thu từ sản phẩm sẽ ủng hộ Quỹ Sài Gòn Xanh. Và tiếp tục áp
            dụng ở các sản phẩm mới ở tương lai.
            <br />🍀Khuyến khích trồng cây xanh bằng những hạt giống có trong
            tag giấy trên chiếc áo LEVENTS® LOVE YOUR MOTHER TEE <br />🤖Bảo vệ
            nhân quyền và duy trì các tiêu chuẩn lao động là chìa khóa và chúng
            tôi hoạt động dựa trên nguyên tắc cải tiến liên tục. Chúng tôi cam
            kết tạo ra tác động tích cực và bền vững cho cộng đồng và hành tinh.
            Hãy lan tỏa thông điệp LOVE YOUR MOTHER và thực hiện những hành động
            nhỏ trong cuộc sống hàng ngày để xây dựng một tương lai tự hào, đóng
            góp vào sự phát triển bền vững và biểu lộ tình yêu và lòng biết ơn
            đối với Mẹ Trái Đất. <br />
            <div class="tag">
              #LoveYourMother #LeventsSustainable #Levents #LeventsCSR
            </div>
          </span>
        </div>
        <div class="open-cmt text-gray-400 text-sm mt-2">
          Xem tất cả bình luận
        </div>
        <div class="post-comment flex justify-between">
          <input
            type="text"
            class="text-sm w-full border-0 outline-0 mt-2"
            placeholder="Thêm bình luận... "
          />
          <div class="flex">
            <span class="text-cyan-400 text-sm cursor-pointer px-4">Đăng</span>
            <div class="icon-react cursor-pointer">
              <svg
                aria-label="Biểu tượng cảm xúc"
                class="x1lliihq x1n2onr6 x1roi4f4"
                fill="currentColor"
                height="13"
                role="img"
                viewBox="0 0 24 24"
                width="13"
              >
                <title>Biểu tượng cảm xúc</title>
                <path
                  d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

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
                      <div class="flex flex-col h-full max-w-full">
                        <div class="flex w-full">
                          <div class="flex flex-col justify-center w-full">
                            <button
                              class="p-2 text-[#ED4956] font-bold border-b border-gray-300 w-full hover:bg-gray-200"
                              tabindex="0"
                            >
                              Báo cáo</button
                            ><button
                              class="p-2 text-[#ED4956] font-bold border-b border-gray-300 w-full hover:bg-gray-200"
                              tabindex="0"
                            >
                              Bỏ theo dõi</button
                            ><button
                              class="p-2 border-b border-gray-300 w-full hover:bg-gray-200"
                              tabindex="0"
                            >
                              Thêm vào mục yêu thích</button
                            ><button
                              class="p-2 border-b border-gray-300 w-full hover:bg-gray-200"
                              tabindex="0"
                            >
                              <a class="" href="" role="link" tabindex="0"
                                ><span
                                  class=""
                                  dir="auto"
                                  style="
                                    line-height: var(
                                      --base-line-clamp-line-height
                                    );
                                    --base-line-clamp-line-height: 18px;
                                  "
                                  >Đi đến bài viết</span
                                ></a
                              ></button
                            ><button
                              class="p-2 border-b border-gray-300 w-full hover:bg-gray-200"
                              tabindex="0"
                            >
                              <span
                                class=""
                                dir="auto"
                                style="
                                  line-height: var(
                                    --base-line-clamp-line-height
                                  );
                                  --base-line-clamp-line-height: 18px;
                                "
                                >Chia sẻ lên...</span
                              ></button
                            ><button
                              class="p-2 border-b border-gray-300 w-full hover:bg-gray-200"
                              tabindex="0"
                            >
                              Sao chép liên kết</button
                            ><button
                              class="p-2 border-b border-gray-300 w-full hover:bg-gray-200"
                              tabindex="0"
                            >
                              Nhúng</button
                            ><button
                              class="p-2 border-b border-gray-300 w-full hover:bg-gray-200"
                              tabindex="0"
                            >
                              Giới thiệu về tài khoản này</button
                            ><button
                              class="p-2 w-full hover:bg-gray-200"
                              tabindex="0"
                              @click="openOptions = false"
                            >
                              Hủy
                            </button>
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
  </div>
</template>

<style lang="css" scoped>
.post-content {
  max-width: 100%;
}
.post-content-sub {
  width: min(470px, 100vw);
}
</style>
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
