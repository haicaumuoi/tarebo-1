import React from 'react';
import { Autocomplete } from '@react-google-maps/api';

function index() {
  return (
    <div className="w-5/12 h-screen bg-[#67AB93] pt-56 overflow-y-scroll">
      <div className="text-[#fff] text-4xl flex w-full justify-between items-center h-fit py-3 px-16 font-semibold">
        <div>Chuyến đi của bạn ( 0 )</div>
        <div className="border-[#fff] border-4 rounded-2xl px-16 py-2 cursor-pointer">Đi nào!</div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="text-[#fff] text-4xl font-semibold mt-28">
          Bạn chưa có chuyến đi nào trong danh sách
        </div>
        <div className="border-[#fff] border-4 rounded-2xl px-16 py-2 cursor-pointer text-[#fff] text-4xl font-semibold mt-28">
          Tạo mới
        </div>
        <div className="text-[#fff] text-4xl font-semibold mt-28 w-1/2">Khám Phá Các Chuyến Đi</div>
        <div className="text-[#fff] text-4xl font-semibold mt-28">
          Bạn chưa có chuyến đi nào trong danh sách
        </div>
        <div className="text-[#fff] font-semibold mt-28 w-1/2 text-center">
          Bạn chưa biết đi đâu? Bạn cần tham khảo từ những người khác? Hãy xem qua các chuyến đi nổi
          bật từ mọi người nhé! Bạn chưa có chuyến đi nào trong danh sách
        </div>
      </div>
    </div>
  );
}

export default index;
