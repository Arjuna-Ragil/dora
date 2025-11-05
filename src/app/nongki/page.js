"use client";

import Card from "../../../component/Card";
import TopNavbar from "../../../component/TopNavbar";
import Chip from "../../../component/Chip";
import { useState } from "react";
import DropdownMenu from "../../../component/DropdownMenu";



const places = [
  { id: 1, name: "Sumi-sumi", desc: "Beef katsu and Pittu, Depok", image: "/assets/sumi_sumi.png" },
  { id: 2, name: "Sumi-sumi", desc: "Beef katsu and Pittu, Depok", image: "/assets/sumi_sumi.png" },
  { id: 3, name: "Sumi-sumi", desc: "Beef katsu and Pittu, Depok", image: "/assets/sumi_sumi.png" },
  { id: 2, name: "Sumi-sumi", desc: "Beef katsu and Pittu, Depok", image: "/assets/sumi_sumi.png" },
  { id: 3, name: "Sumi-sumi", desc: "Beef katsu and Pittu, Depok", image: "/assets/sumi_sumi.png" },
  { id: 2, name: "Sumi-sumi", desc: "Beef katsu and Pittu, Depok", image: "/assets/sumi_sumi.png" },
  { id: 3, name: "Sumi-sumi", desc: "Beef katsu and Pittu, Depok", image: "/assets/sumi_sumi.png" },
];

const filter_chip = [
  {
    tipe: "Kategori",
    filter: ["Makanan", "Minuman"]
  },
  {
    tipe: "Harga",
    filter: ["< 12000",  "12000 > 20000"]
  }
]

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <main className="w-full min-h-screen bg-white">
      <section
        className=" w-full h-56 flex justify-center items-center text-center">
        <div className="max-w-3xl m-2 p-2">
          <h2 className="font-bold text-3xl text-blue-700 mb-2">Spot Nongkrong di Pintu Doraemon</h2>
          <h4 className="font-light text-sm">Dari coffee shop tenang sampai tempat makan rame, temuin spot paling asik buat nongkrong, nugas, atau healing kecil-kecilan.</h4>
        </div>
      </section>


      <div className="mx-auto my-4 max-w-6xl">
      
        <section >
          <div className=" w-full flex flex-row gap-2 px-12 py-2 items-center text-center">
            {filter_chip.map((el, i) => 
              <Chip key={el.tipe} text={el.tipe} activeIndex={activeIndex} handleClick={handleClick} index={i} /> )}
          </div>
          {filter_chip.map((el, i) => 
            <DropdownMenu activeIndex={activeIndex} index={i} key={el.tipe} filter={el.filter} />   
          )}
        </section>

        <section className="sm:hidden flex justify-center my-4 mx-auto flex-col gap-6 px-8 pb-10">
          {places.map((el, i) => (
            <Card lokasi={el.name} desc={el.desc} key={i} />
          ))}
        </section>

        <section className="grid lg:grid-cols-3 sm:grid-cols-2 place-items-center my-4 mx-auto gap-2 px-8 pb-10">
          {places.map((el, i) => (
            <Card nama={el.name} deskripsi={el.desc} key={i} />
          ))}
        </section>
      </div>

    </main>
  );
};

export default Page;
