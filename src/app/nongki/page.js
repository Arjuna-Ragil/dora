"use client";

import { useState } from "react";
import Card from "../../../component/Card";
import TopNavbar from "../../../component/TopNavbar";
import Chip from "../../../component/Chip";
import DropdownMenu from "../../../component/DropdownMenu";

const places = [
  { id: 1, name: "Sumi-sumi", desc: "Beef katsu and Pittu, Depok", image: "/assets/sumi_sumi.png" },
  { id: 2, name: "Sumi-sumi", desc: "Beef katsu and Pittu, Depok", image: "/assets/sumi_sumi.png" },
  { id: 3, name: "Sumi-sumi", desc: "Beef katsu and Pittu, Depok", image: "/assets/sumi_sumi.png" },
  { id: 4, name: "Sumi-sumi", desc: "Beef katsu and Pittu, Depok", image: "/assets/sumi_sumi.png" },
  { id: 5, name: "Sumi-sumi", desc: "Beef katsu and Pittu, Depok", image: "/assets/sumi_sumi.png" },
  { id: 6, name: "Sumi-sumi", desc: "Beef katsu and Pittu, Depok", image: "/assets/sumi_sumi.png" },
  { id: 7, name: "Sumi-sumi", desc: "Beef katsu and Pittu, Depok", image: "/assets/sumi_sumi.png" },
];

const filter_chip = [
  {
    tipe: "Kategori",
    filter: ["Makanan", "Minuman"],
  },
  {
    tipe: "Harga",
    filter: ["< 12000", "12000 > 20000"],
  },
];

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="w-full min-h-screen bg-white">
      <section className="w-full bg-[#00ADB5] flex justify-center items-center text-center">
        <div className="w-full">
          <div className="h-80 p-4 mb-2 place-content-center">
            <h2 className="font-racingsans text-5xl ">
              SPOT NONGKRONG <br /> DI PINTU DORAEMON
            </h2>
          </div>

          {/* <div className="bg-amber-300 overflow-hidden whitespace-nowrap border-2">
            <p className="text-xl font-racingsans text-pink-700 p-4 animate-marquee">
              Dari coffee shop tenang sampai tempat makan rame, temuin spot
              paling asik buat nongkrong, nugas, atau healing kecil-kecilan.
            </p>
          </div>
           */}
        </div>
      </section>

      <div 
        className="relative flex gap-4 max-w-4xl h-20 mx-auto -mt-10 z-10 bg-[#231f20] rounded-md justify-center">
        
        <div className="flex gap-2 text-white font-bold items-center">
          <div className="bg-red-600 rounded-full w-6 h-6"></div>
          <p>Makanan</p>
        </div>

        <div className="flex gap-2 text-white font-bold items-center">
          <div className="bg-purple-600 rounded-full w-6 h-6"></div>
          <p>Minuman</p>
        </div>

      </div>

      <div className="w-full -z-1 mt-36 bg-[#d62828] border b-[#231f20] p-4">
        {/* Mobile View */}
        <section className="sm:hidden max-w-md flex justify-center my-4 mx-auto flex-col gap-6 px-3 pb-10">
          {places.map((el, i) => (
            <Card key={i} nama={el.name} deskripsi={el.desc} />
          ))}
        </section>

        {/* Desktop Grid View */}
        <section className="hidden sm:grid
          sm:grid-cols-[minmax(320px,1fr)_minmax(320px,1fr)] 
          lg:sm:grid-cols-[minmax(320px,1fr)_minmax(320px,1fr)_minmax(320px,1fr)] 
          place-items-center my-4 mx-auto p-4 gap-2">
          {places.map((el, i) => (
            <Card key={i} nama={el.name} deskripsi={el.desc} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Page;
