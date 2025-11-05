import Image from "next/image"
import image_contoh from "../assets/sumi_sumi.png"
import { MdFavorite } from "react-icons/md"


function Card({nama, lokasi, deskripsi}) {
  return (
    <div
      key={nama}
      className="relative w-full md:w-80 aspect-4/3 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944_1280.jpg')] bg-cover bg-center opacity-80" ></div>
      
      <MdFavorite className="absolute top-3 right-3 fill-gray-400 hover:fill-pink-600 p-1 rounded-full shadow cursor-pointer hover:bg-gray-400" size={24}/>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-4 w-full text-white h-full p-4 place-content-end">
        <h3 className="font-semibold">{nama}</h3>
        <p className="text-xs mb-3">{deskripsi}</p>
        <button className="bg-blue-600 text-white text-xs px-4 py-2 rounded-lg hover:bg-blue-700">
          Lihat Detail
        </button>
      </div>
    </div>
  )
}

export default Card