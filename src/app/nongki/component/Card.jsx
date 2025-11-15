import { MdFavorite } from "react-icons/md";
import RotatingBadge from "@/app/nongki/component/RotatingBadge";


export default function Card({ data }) {
  return (
    <div className="relative w-full aspect-4/3 rounded-2xl border border-white/20 overflow-hidden flex items-end min-h-[450px] shadow-lg bg-white/10 backdrop-blur-md">
    {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${data.image})` }} />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-black/10" />


      {/* Favorite Button */}
      <MdFavorite
      className="absolute top-3 right-3 fill-gray-300 hover:fill-pink-500 p-1 rounded-full cursor-pointer bg-white/30 backdrop-blur-sm hover:bg-white/50 transition"
      size={26}
      />


      {/* Content */}
      <div className="relative font-jakartasans z-10 w-full mx-3 mb-3 p-4 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start justify-between bg-white/80 backdrop-blur-lg shadow-md gap-4">
      <div className="w-full sm:max-w-sm p-2">
        <h3 className="font-bold text-gray-900 text-lg">{data.nama_toko}</h3>
        <p className="font-light text-gray-700 text-sm">{data.deskripsi_singkat}</p>
      </div>


      {/* Badge pindah ke bawah + animasi hilang di mobile */}
        <RotatingBadge data={data} />
      {/* <div className="w-full flex sm:block justify-center">
      </div> */}
      </div>
    </div>
  );
}

