import { MapPin } from "lucide-react";
import React from "react";
import LoginBtn from "./subcomponent/loginBtn";

export default function Hero(){
  const promos = [
    {
      "name": "Sumi - Sumi",
      "diskon": "40%",
      "end": "31 Okt",
      "desc": "Makanan berat cepat saji",
      "loc": "Belok kanan dari Pintu Doraemon"
    },
    {
      "name": "Padang",
      "diskon": "40%",
      "end": "31 Okt",
      "desc": "Makanan berat cepat saji",
      "loc": "Belok kanan dari Pintu Doraemon"
    },
    {
      "name": "Mie ayam",
      "diskon": "40%",
      "end": "31 Okt",
      "desc": "Makanan berat cepat saji",
      "loc": "Belok kanan dari Pintu Doraemon"
    },
  ]

  return (
    <div className="min-h-screen h-full w-full md:pt-15 md:px-5" id="hero">
      <div className="min-h-screen h-full w-full flex flex-col gap-15 items-center justify-center bg-[url('/welcome/heroBg.svg')] bg-cover bg-center md:rounded-3xl bg-no-repeat p-5">
        <div className="h-full w-full flex flex-col items-center justify-center text-center gap-5">
          <div className="flex flex-col gap-3 text-white">
            <h1 className="md:text-5xl text-3xl font-medium">Temuin UMKM Kesukaanmu di <b className="text-yellow-300">Pintu Doraemon</b></h1>
            <p>Dari kopi, jajanan, sampe jasa kreatif — semua ada di sekitar sini. Yuk, dukung pelaku lokal bareng-bareng!</p>
          </div>
          <LoginBtn type={"hero"} text={"Jelajahi Sekarang"}/>
        </div>
        <div className="flex flex-col gap-3 max-md:hidden">
          <h2 className="text-white text-2xl">Promo Terbaru</h2>
          <div className="w-full flex flex-row md:gap-5 gap-3">
            {promos.map((promo) => (
              <div key={promo.name} className="flex flex-col gap-2 justify-between bg-neutral-200 border border-gray-400 md:p-5 p-3 rounded-2xl">
                <div className="flex md:flex-row flex-col md:items-center justify-between md:gap-5 gap-2">
                  <h3 className="text-primary">{promo.name} | Diskon {promo.diskon}</h3>
                  <p>sampai {promo.end}</p>
                </div>
                <p className="text-secondary">{promo.desc}</p>
                <p className="flex flex-row gap-2 text-secondary items-center"><MapPin size={16} /> {promo.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};