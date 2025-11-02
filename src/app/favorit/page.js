// src/app/favorites/page.js
import Image from "next/image";
import { MdFavorite } from "react-icons/md";

import image_contoh from "./assets/sumi_sumi.png"

export default function FavoritesPage() {
  const places = [
    {
      id: 1,
      name: "Sumi-sumi",
      desc: "Beef katsu and Pittu, Depok",
      image: "/assets/sumi_sumi.png", // place your image in /public folder
    },
    {
      id: 2,
      name: "Sumi-sumi",
      desc: "Beef katsu and Pittu, Depok",
      image: "/assets/sumi_sumi.png",
    },
    {
      id: 3,
      name: "Sumi-sumi",
      desc: "Beef katsu and Pittu, Depok",
      image: "/assets/sumi_sumi.png",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-b-blue-600">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full" />
          <h1 className="font-semibold text-gray-700">App Name</h1>
        </div>
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#">menu 1</a>
          <a href="#">menu 2</a>
          <a href="#">menu 3</a>
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-500">👤</span>
          </div>
        </nav>
      </header>

      {/* Heading */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-bold text-blue-700">
          Favoritmu, Pilihan Terbaikmu
        </h2>
        <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto">
          Tempat-tempat yang udah kamu tandain karena emang sesuka itu. Mau balik makan, nongkrong, atau sekadar scroll liat promo barunya — semuanya ada di sini.
        </p>
      </section>

      {/* Cards */}
      <section className=" flex justify-center flex-col gap-6 px-8 pb-10 md:flex-row md:overflow-x-auto md:snap-x md:snap-mandatory">
        {places.map((place) => (
          <div
            key={place.id}
            className="snap-start relative shrink-0 w-full md:w-80 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <Image
              src={image_contoh}
              alt={place.name}
              width={320}
              height={200}
              className="object-cover w-full h-48 md:h-56"
            />
            <MdFavorite className="absolute top-3 right-3 bg-pink-600 p-1 rounded-full shadow cursor-pointer hover:bg-pink-700" size={24}/>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{place.name}</h3>
              <p className="text-xs text-gray-500 mb-3">{place.desc}</p>
              <button className="bg-blue-600 text-white text-xs px-4 py-2 rounded-lg hover:bg-blue-700">
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </section>

    </main>
  );
}
