import { MdFavorite } from "react-icons/md";
import RotatingBadge from "@/app/nongki/component/RotatingBadge";

function Card({ data }) {
  return (
    <div className="relative w-full aspect-4/3 rounded-xl border-2 overflow-hidden flex items-end min-h-[450px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>

      <MdFavorite
        className="absolute top-3 right-3 fill-gray-400 hover:fill-pink-600 p-1 rounded-full shadow cursor-pointer hover:bg-gray-400"
        size={24}
      />

      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative font-jakartasans z-10 w-full bg-amber-50 mx-2 my-2 p-4 rounded-xl flex justify-between">
        <div className="max-w-sm p-2 ">
          <h3 className="font-bold">{data.nama_toko}</h3>
          <p className="font-light">{data.deskripsi_singkat}</p>
        </div>
        <RotatingBadge />
      </div>
    </div>
  );
}

export default Card;
