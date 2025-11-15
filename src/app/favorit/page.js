// src/app/favorites/page.js
import Image from "next/image";
import { MdFavorite } from "react-icons/md";
import TopNavbar from "../../../component/TopNavbar";
import data from "../../data/data.json";
import HeroSection from "./component/HeroSection";

export default function FavoritesPage() {
  const toko = data.umkm_data;

  return (
    <main className="w-full min-h-screen bg-gray-50">
      {/* Navbar */}
      <TopNavbar />

      {/* Heading */}
      <HeroSection />


      {/* Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6 pb-12">
        {toko.slice(0, 4).map((place) => (
          <div
            key={place.umkm_id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">

            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={place.image}
                alt={place.nama_toko}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <MdFavorite
                className="absolute top-3 right-3 bg-pink-600 text-white p-1 rounded-full shadow cursor-pointer hover:bg-pink-700 transition"
                size={26}
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-semibold text-xl text-gray-800 mb-1">
                {place.nama_toko}
              </h3>
              <p className="text-xs text-blue-600 font-medium mb-2">
                {place.kategori}
              </p>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {place.deskripsi_singkat}
              </p>

              <button className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition">
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}