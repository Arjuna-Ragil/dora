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
    <div className="min-h-screen h-full w-full p-15" id="hero">
      <div className="min-h-screen h-full w-full flex flex-col gap-15 items-center justify-center bg-[url('/welcome/heroBg.svg')] bg-contain bg-no-repeat p-5">
        <div className="h-full w-full flex flex-col items-center justify-center text-center gap-5">
          <div className="flex flex-col gap-3 text-white">
            <h1 className="text-5xl font-medium">Temuin UMKM Kesukaanmu di <b className="text-yellow-300">Pintu Doraemon</b></h1>
            <p>Dari kopi, jajanan, sampe jasa kreatif — semua ada di sekitar sini. Yuk, dukung pelaku lokal bareng-bareng!</p>
          </div>
          <LoginBtn type={"hero"} text={"Jelajahi Sekarang"}/>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-white text-2xl">Promo Terbaru</h2>
          <div className="w-full flex flex-row gap-5">
            {promos.map((promo) => (
              <div key={promo.name} className="flex flex-col gap-2 bg-neutral-200 border border-gray-400 p-5 rounded-2xl">
                <div className="flex flex-row items-center justify-between gap-5">
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