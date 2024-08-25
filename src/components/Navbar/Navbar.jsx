import React from "react";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/reducers";

function Navbar() {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="z-50 fixed px-8 top-0 w-full bg-white h-16 flex justify-around items-center">
      <div className="mr-auto h-full flex justify-evenly gap-2 items-center">
        <p className="text-slate-400 text-lg font-semibold">{"Home >"}</p>
        <p className="text-lg text-blue-900 font-semibold">DashBoard v2</p>
      </div>
      <div className="ml-48 mr-auto">
        <input
          className="border-blue-200 bg-blue-100 placeholder-zinc-400 border-2 focus:outline-none rounded-sm w-[520px] h-10 p-2"
          type="text"
          name=""
          placeholder="Search Anything.."
          onChange={handleSearchChange}
        />
      </div>
      <div className="flex justify-evenly items-center h-full w-48">
        <div className="h-full w-full flex items-center justify-center">
          <HiOutlineBellAlert className="h-6 w-6" />
        </div>
        <div className="flex justify-evenly items-center h-full w-full">
          <FaUserCircle className="h-6 w-6" />
          <p>Dishant</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
