"use client";
import data from "../../data/data.json";
import { useState } from "react";
import Card from "../../../component/Card";
import { RiDrinksFill, RiDrinksLine } from "react-icons/ri";
import TopNavbar from "../../../component/TopNavbar";
import Chip from "../../../component/Chip";

const places = data.umkm_data;

const categori = [
  { tipe: "All", color: "Red" },
  { tipe: "Makanan", color: "Blue" },
  { tipe: "Minuman", on: RiDrinksFill, of: RiDrinksLine },
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filter, setFilter] = useState("All");
  const [input, setInput] = useState("");

  const filterData = places
    .filter(item => {
      if (filter === "All") return true;
      return item.kategori.toLowerCase() === filter.toLowerCase();
    })
    .filter(item => {
      if (!input) return true;
      const keyword = input.toLowerCase();
      return (
        item.nama_toko.toLowerCase().includes(keyword) ||
        item.deskripsi_singkat.toLowerCase().includes(keyword)
      );
    });

  const handleClick = (index, tipe) => {
    setActiveIndex(index);
    setFilter(tipe);
  };

  return (
    <main className="w-full min-h-screen bg-white">
      <TopNavbar />

      <section className="w-full bg-[#00ADB5] flex justify-center items-center text-center">
        <div className="w-full">
          <div className="h-130 p-4 mb-2 place-content-center">
            <h1 className="font-racingsans md:text-7xl text-3xl">
              SPOT NONGKRONG <br /> DI PINTU DORAEMON
            </h1>
          </div>
        </div>
      </section>

      {/* Filter kategori */}
      <div className="relative flex gap-4 max-w-4xl h-20 mx-2 md:mx-auto -mt-10 z-10 bg-[#231f20] rounded-md justify-center">
        {categori.map((el, index) => (
          <Chip
            text={el.tipe}
            handleClick={handleClick}
            activeIndex={activeIndex}
            index={index}
            key={index}
            tipe={el.tipe}
          />
        ))}
      </div>

      <div className="max-w-6xl m-auto -z-1 mt-8 p-4">
        {/* Search bar */}
        <div className="w-full flex items-center justify-between p-8">
          <div className="flex gap-4 items-center w-xl">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 h-8 p-4 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
              placeholder="Cari nama atau deskripsi..."
            />
          </div>

          {/* Tombol sort dummy */}
          <div className="flex gap-2">
            <div className="hidden md:block p-3 rounded-xl bg-gray-300">
              Default
            </div>
            <div className="hidden md:block p-3 rounded-xl bg-gray-300">
              Termurah
            </div>
            <div className="hidden md:block p-3 rounded-xl bg-gray-300">
              Termahal
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <section className="sm:hidden max-w-md flex justify-center my-4 mx-auto flex-col gap-6 px-3 pb-10">
          {filterData.map((el, i) => (
            <Card
              key={i}
              nama={el.nama_toko}
              deskripsi={el.deskripsi_singkat}
            />
          ))}
        </section>

        {/* Desktop Grid View */}
        <section
          className="hidden sm:grid
          sm:grid-cols-[minmax(320px,1fr)_minmax(320px,1fr)] 
          lg:sm:grid-cols-[minmax(320px,1fr)_minmax(320px,1fr)_minmax(320px,1fr)] 
          place-items-center my-4 mx-auto p-4 gap-2"
        >
          {filterData.map((el, i) => (
            <Card
              key={i}
              nama={el.nama_toko}
              deskripsi={el.deskripsi_singkat}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Page;
