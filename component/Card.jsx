import Image from "next/image"
import image_contoh from "../assets/sumi_sumi.png"
import { MdFavorite } from "react-icons/md"
import RotatingBadge from "@/app/nongki/component/RotatingBadge"


function Card({nama, lokasi, deskripsi}) {
  return (
    <div
      key={nama}
      className="relative w-full aspect-4/3 rounded-xl border-2 overflow-hidden flex items-end min-h-[450px]">
        <div className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944_1280.jpg')] bg-cover bg-center" ></div>
      
      <MdFavorite className="absolute top-3 right-3 fill-gray-400 hover:fill-pink-600 p-1 rounded-full shadow cursor-pointer hover:bg-gray-400" size={24}/>

      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="
        relative z-4 w-full bg-amber-50 mx-2 my-2 p-4 rounded-xl 
        flex justify-between
        ">
        <div>
          <h3 className="font-semibold">{nama}</h3>
          <p className="text-xs mb-3">{deskripsi}</p>
        </div>
        <RotatingBadge />
      </div>
    </div>
  )
}

export default Card