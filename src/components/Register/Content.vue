<template>
  <div class="w-full mt-6">
    <div class="mx-10 mb-[22px] mt-[14px]">
      <div class="flex text-center text-gray-500">
        <span>Đăng ký để xem ảnh và video từ bạn bè.</span>
      </div>
      <div
        class="flex my-2 bg-sky-400 rounded-md hover:bg-sky-500 cursor-pointer"
      >
        <button type="submit" class="flex py-[7px] px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 48 48"
          >
            <path
              fill="#3F51B5"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
            ></path>
            <path
              fill="#FFF"
              d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
            ></path>
          </svg>
          <b class="flex self-center text-xs text-white"
            >Đăng nhập bằng FaceBook</b
          >
        </button>
      </div>
      <div class="flex items-center justify-center my-4">
        <div class="flex-grow border-t border-gray-300"></div>
        <b class="mx-4 text-gray-500 text-xs">HOẶC</b>
        <div class="flex-grow border-t border-gray-300"></div>
      </div>
    </div>

    <div class="form-group mx-10 mb-[6px]">
      <label for=""></label>
      <input
        type="text"
        class="form-control w-full h-9 text-xs border rounded bg-slate-50"
        name=""
        id=""
        aria-describedby="helpId"
        placeholder=" Số di động hoặc email"
      />
    </div>
    <div class="form-group mx-10 mb-[6px]">
      <label for=""></label>
      <input
        type="text"
        class="form-control w-full h-9 text-xs border rounded bg-slate-50"
        name=""
        id=""
        aria-describedby="helpId"
        placeholder=" Tên đầy đủ"
      />
    </div>
    <div class="form-group mx-10 mb-[6px]">
      <label for=""></label>
      <input
        type="text"
        class="form-control w-full h-9 text-xs border rounded bg-slate-50"
        name=""
        id=""
        aria-describedby="helpId"
        placeholder=" Tên người dùng"
      />
    </div>
    <div class="form-group mx-10 mb-[6px]">
      <label for=""></label>
      <input
        type="password"
        class="form-control w-full h-9 text-xs border rounded bg-slate-50"
        name=""
        id=""
        aria-describedby="helpId"
        placeholder=" Mật khẩu"
      />
    </div>
    <div class="mx-10 mb-[6px]">
      <span class="flex text-center text-xs text-gray-500 mb-2"
        >Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ
        của bạn lên Instagram. Tìm hiểu thêm.</span
      >
      <span class="flex text-center text-xs text-gray-500 mb-2"
        >Bằng cách đăng ký, bạn đồng ý với Điều khoản, Chính sách quyền riêng tư
        và Chính sách cookie của chúng tôi.</span
      >
      <button
        type="submit"
        class="w-full h-8 bg-sky-400 hover:bg-sky-500 cursor-pointer text-white text-sm rounded"
      >
        <b> Đăng Ký </b>
      </button>
    </div>
  </div>
</template>
