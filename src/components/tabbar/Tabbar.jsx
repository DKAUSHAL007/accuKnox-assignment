import React from "react";
import { IoMdSync } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
function TabBar() {
  return (
    <div className="h-10 flex px-6 justify-between items-center">
      <h1 className="text-xl font-bold text-blue-950">CNAPP Dashboard</h1>
      <div className="flex items-center justify-around gap-4">
        <button className="border-gray-600 h-9 px-3 bg-white text-gray-600 gap-2 py-0.5 border-[1px] rounded-md flex items-center justify-between">
          Add Widget<span className="text-gray-600 text-2xl">+</span>
        </button>
        <button className="border-gray-600 h-9 px-2 bg-white text-gray-600 gap-2 py-0.5 border-[1px] rounded-md flex items-center justify-between">
          <IoMdSync />
        </button>
        <button className="border-gray-600 px-2 h-9 bg-white text-gray-600 gap-2 py-0.5 border-[1px] rounded-md flex items-center justify-between">
          <BsThreeDotsVertical />
        </button>
        <button className="border-gray-600 px-2 h-9 bg-white text-gray-600 gap-2 py-0.5 border-[1px] rounded-md flex items-center justify-between">
          <FaClock /> | Last 2 Days
        </button>
      </div>
    </div>
  );
}

export default TabBar;
