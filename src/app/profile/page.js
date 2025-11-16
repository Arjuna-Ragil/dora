"use client"

import Image from "next/image";
import { useState } from "react";
import { FiUser, FiSun, FiLogOut, FiMenu } from "react-icons/fi";
import TopNavbar from "../../../component/TopNavbar.jsx";
import bg_profile from "../../../assets/bg_profile.png";
import { useRouter } from "next/navigation.js";

export default function UserProfilePage() {
  const router = useRouter()

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      {/* Top Navbar */}
      <TopNavbar />

      {/* Mobile Toggle */}
      <button
        className="md:hidden flex items-center gap-2 p-4 text-gray-700"
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        <FiMenu size={22} /> Menu
      </button>

      <div className="flex flex-1 mt-2">
        {/* Sidebar */}
        <aside
          className={`fixed md:static top-0 left-0 h-full w-56 bg-white p-6 flex flex-col justify-between rounded-r-2xl shadow-md md:shadow-none transform md:translate-x-0 transition-transform duration-300 z-50
          ${openSidebar ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="space-y-5 text-gray-700 text-sm">
            <button className="flex items-center gap-2 hover:text-blue-600">
              <FiUser /> Profile
            </button>
            <button className="flex items-center gap-2 hover:text-blue-600">
              <FiSun /> Theme
            </button>
          </div>

          <button onClick={() => router.push('/welcome')} className="flex items-center gap-2 text-red-500 hover:underline text-sm md:mt-5">
            <FiLogOut /> Log out
          </button>
        </aside>

        {/* Overlay for mobile */}
        {openSidebar && (
          <div
            onClick={() => setOpenSidebar(false)}
            className="fixed inset-0 bg-black/30 md:hidden"
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10">
          <div className="bg-white rounded-2xl shadow-md border overflow-hidden">
            {/* Banner */}
            <div className="relative">
              <Image
                src={bg_profile}
                alt="Banner"
                width={1200}
                height={300}
                className="w-full h-40 object-cover"
              />

              {/* Profile Photo */}
              <div className="absolute left-6 bottom-0 translate-y-1/2">
                <div className="w-24 h-24 rounded-xl bg-gray-300 border-4 border-white shadow-md"></div>
              </div>
            </div>

            {/* User Info */}
            <div className="p-6 mt-12 text-gray-800">
              <h2 className="font-semibold text-xl">Rachel Putri Sumarecon Bekasi</h2>
              <p className="text-sm mb-4 text-gray-500">rachelputput@gmail.com</p>

              <div className="flex gap-4 mb-6 text-xs text-gray-600">
                <button className="hover:underline hover:text-blue-600">Change</button>
                <button className="hover:underline hover:text-blue-600">Delete</button>
              </div>

              {/* Form */}
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-4 py-2 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="Rachel Putri Sumarecon Bekasi"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full border rounded-lg px-4 py-2 text-sm bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="rachelputput@gmail.com"
                  />
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
