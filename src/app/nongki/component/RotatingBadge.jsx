import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const RotatingBadge = ({ data }) => {
  return (
    <Link
      href={`/${data.umkm_id}`}
      className="block"
      key={data.umkm_id}
    >
      <div className="relative flex items-center justify-center bg-yellow-400 rounded-full w-[100px] h-[100px] cursor-pointer shadow-lg">
        
        {/* Animasi hanya aktif ketika sm ke atas */}
        <svg
          className="absolute w-full h-full animate-spin-slow text-red-600"
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id="circlePath"
              d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
            />
          </defs>
          <text
            fontSize="10"
            fontWeight="bold"
            letterSpacing="1"
            fill="currentColor"
          >
            <textPath href="#circlePath" startOffset="0%">
              Click Untuk Lihat Selengkapnya
            </textPath>
          </text>
        </svg>

        {/* Icon marker */}
        <div className="relative flex items-center justify-center text-gray-900 text-xl">
          <FaMapMarkerAlt />
        </div>
      </div>
    </Link>
  );
};

export default RotatingBadge;
