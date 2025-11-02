import { FaRegUserCircle } from "react-icons/fa";

export default function TopNavbar() {
  return (
    <header className="w-full sticky top-0 z-50 flex justify-between items-center px-6 py-3 border-b bg-white">
      {/* Kiri: Logo dan App Name */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
        <h1 className="font-semibold text-gray-800 text-lg">App Name</h1>
      </div>


      {/* Kanan: Icon User */}
      <div className="flex gap-6 items-center">
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#" className="hover:text-blue-600">
            menu 1
          </a>
          <a href="#" className="hover:text-blue-600">
            menu 2
          </a>
          <a href="#" className="hover:text-blue-600">
            menu 3
          </a>
        </nav>
        <FaRegUserCircle className="text-blue-600 w-6 h-6 cursor-pointer" />
      </div>
    </header>
  );
}
