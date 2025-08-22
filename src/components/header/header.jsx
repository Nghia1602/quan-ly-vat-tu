import React from 'react';
const yy = 10
const Header = ()=>{
    return(
 <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">THACO INDUSTRIES</h1>
        <div className="text-sm">
          <span className="font-medium">PHẦN MỀM QUẢN LÝ VẬT TƯ</span>
          <span className="ml-2 text-blue-200">Nguyên vật liệu</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          0
        </span>
        <span className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
          ?
        </span>
      </div>
    </div>
    )
   
}
export default Header;
export {yy}