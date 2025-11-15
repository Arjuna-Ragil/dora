import { Star, Tags, Users } from 'lucide-react'
import React from 'react'

export default function Features(){
  const features = [
    {
      "symbol": <Star size={34}/>,
      "judul": "Favoritkan UMKM Pilihanmu",
      "desc": "Simpan usaha yang kamu suka biar gampang dikunjungi lagi nanti — dari warung langganan sampai tempat ngopi favoritmu."
    },
    {
      "symbol": <Tags size={34}/>,
      "judul": "Promo of The Day",
      "desc": "Gak mau ketinggalan diskon? Lihat promo paling fresh dari pelaku UMKM sekitar Pintu Doraemon, langsung update tiap hari."
    },
    {
      "symbol": <Users size={34}/>,
      "judul": "Spot Nongkrong Favorit",
      "desc": "Butuh tempat chill bareng temen? Temuin rekomendasi spot nongkrong lokal yang cozy dan ramah di kantong."
    },
  ]

  return (
    <div className='bg-white lg:h-screen h-full w-full flex flex-col items-center justify-center xl:p-40 sm:p-20 py-5 px-8 pt-15 2xl:px-45  gap-8' id='features'>
        <div className='flex flex-col md:items-center justify-center gap-2'>
            <h2 className='sm:text-5xl text-3xl font-semibold text-center text-primary'>Fitur yang Bikin Jelajah UMKM Makin Gampang</h2>
            <p className='md:text-xl text-sm text-justify md:text-center'>
                Gak perlu ribet cari tempat makan, nongkrong, atau promo menarik. Semua udah kami kumpulin biar kamu bisa dukung pelaku lokal dengan cara paling simpel.
            </p>
        </div>
        <div className='grid lg:grid-cols-3 items-center justify-evenly sm:gap-7  gap-5 animate-slideUp [animation-timeline:view()] '>
          {features.map((feature) => (
            <div key={feature.judul} className='flex flex-col bg-neutral-100 border h-full w-full border-gray-500 p-5 rounded-3xl gap-3 text-primary'>
              {feature.symbol}
              <h2 className='text-2xl font-medium'>{feature.judul}</h2>
              <p className='text-gray-800 text-justify'>{feature.desc}</p>
            </div>
          ))}
        </div>
    </div>
  )
}