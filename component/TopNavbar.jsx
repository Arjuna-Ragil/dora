'use client'

import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";


export default function TopNavbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 flex justify-between items-center px-6 py-3 border-b bg-white shadow-sm">
      <div className="">
        logo
      </div>

      {/* Tombol Menu (Mobile) */}
      <button 
        className="block md:hidden"
        onClick={() => setIsActive(!isActive)}
      >
        <HiOutlineBars3 size={24}/>
      </button>

      {/* Menu Mobile */}
      {isActive && (
        <div className="fixed top-0 left-0 w-3/4 h-full bg-blue-500 text-white flex flex-col gap-4 p-6 z-40">
          <button 
            onClick={() => setIsActive(false)} 
            className="self-end text-xl font-bold"
          >
            <RxCross2 size={24}/>
          </button>
          <a href="#" className="hover:text-gray-200">Menu 1</a>
          <a href="#" className="hover:text-gray-200">Menu 2</a>
          <a href="#" className="hover:text-gray-200">Menu 3</a>
        </div>
      )}

      {/* Menu Desktop */}
      <nav className="hidden md:flex gap-6 text-sm text-gray-700">
        <a href="#" className="hover:text-blue-600">Menu 1</a>
        <a href="#" className="hover:text-blue-600">Menu 2</a>
        <a href="#" className="hover:text-blue-600">Menu 3</a>
      </nav>

      {/* Kanan: Icon User */}
      <FaRegUserCircle className="text-blue-600 w-6 h-6 cursor-pointer" />
    </header>
  );
}
