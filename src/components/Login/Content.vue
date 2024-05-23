<template>
  <div class="w-full mt-6">
    <div class="form-group mx-10 mb-[6px]">
      <label for=""></label>
      <input
        type="text"
        class="form-control w-full h-9 text-xs border rounded bg-slate-50"
        name=""
        id=""
        aria-describedby="helpId"
        placeholder=" Số điện thoại, tên người dùng hoặc email"
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
        placeholder=" Mật Khẩu"
      />
    </div>
    <div class="mx-10 mb-[6px]">
      <button
        type="submit"
        class="w-full h-8 bg-sky-400 text-white text-sm rounded"
      >
        <b> Đăng Nhập </b>
      </button>
    </div>
    <div class="mx-10 mb-[22px] mt-[14px]">
      <div class="flex items-center justify-center my-4">
        <div class="flex-grow border-t border-gray-300"></div>
        <b class="mx-4 text-gray-500 text-xs">HOẶC</b>
        <div class="flex-grow border-t border-gray-300"></div>
      </div>
    </div>
    <div class="mx-10 my-2 flex justify-center">
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
      <button type="submit">
        <b class="text-xs text-[#3F51B5]">Đăng nhập bằng FaceBook</b>
      </button>
    </div>
    <div class="mt-3 flex justify-center">
      <span class="text-xs text-[#3F51B5]">Quên mật khẩu ?</span>
    </div>
  </div>
</template>
