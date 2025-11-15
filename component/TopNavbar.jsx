'use client'

import { useState } from "react";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

export default function TopNavbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Nongki", path: "/nongki" },
    { label: "Favorit", path: "/favorit" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          <Link href="/">MyDoraemon</Link>
        </div>

        {/* Mobile Button */}
        <div
          className="md:hidden mr-0 text-gray-700"
          onClick={() => setOpen(true)}
        >
          <HiOutlineBars3 size={28} />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700 text-sm font-medium">
          {menuItems.map((item) => (
            <Link 
              key={item.path}
              href={item.path}
              className="hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* User Icon */}
        <Link href="/profile">
          <FaRegUserCircle 
            className="hidden md:block text-blue-600 w-6 h-6 cursor-pointer" 
            
          />
        </Link>
      </div>

      {/* Mobile Menu */}
      {open && (
        <>
          <div className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-blue-600 text-white shadow-lg p-6 z-50">
            <button 
              onClick={() => setOpen(false)}
              className="text-white text-xl mb-6 flex justify-end w-full"
            >
              <RxCross2 size={28} />
            </button>

            <nav className="flex flex-col gap-5 text-lg">
              {menuItems.map((item) => (
                <Link 
                  key={item.path}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="hover:text-gray-200 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setOpen(false)}
          />
        </>
      )}
    </header>
  );
}
