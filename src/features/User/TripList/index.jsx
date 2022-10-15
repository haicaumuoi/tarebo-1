import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import triplist from '~/assets/images/triplist.png';

function Index() {
  const [triplists, setTriplist] = React.useState([]);

  return (
    <div className="w-5/12 h-screen bg-[#67AB93] pt-56 overflow-y-scroll">
      <div className="text-[#fff] text-4xl flex w-full justify-between items-center h-fit py-3 px-16 font-semibold">
        <div>Chuyến đi của bạn ( {triplists.length} )</div>
        <div className="border-[#fff] border-4 rounded-2xl px-16 py-2 cursor-pointer">Đi nào!</div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div>
          <img src={triplist} alt="images" />
        </div>
        <div className="text-[#fff] text-4xl font-semibold mt-12 flex justify-center">
          Bạn chưa có chuyến đi nào trong danh sách
        </div>
        <div className="border-[#fff] border-4 rounded-2xl px-16 py-2 cursor-pointer text-[#fff] text-4xl font-semibold mt-12">
          Tạo mới
        </div>
        <div className="text-[#fff] text-4xl font-semibold mt-12 w-1/2 flex justify-center">
          Khám Phá Các Chuyến Đi
        </div>
        <div className="text-[#fff] font-semibold mt-10 w-1/2 text-center">
          Bạn chưa biết đi đâu? Bạn cần tham khảo từ những người khác? Hãy xem qua các chuyến đi nổi
          bật từ mọi người nhé! Bạn chưa có chuyến đi nào trong danh sách
        </div>
      </div>
    </div>
  );
}

export default Index;
