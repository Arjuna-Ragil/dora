import { FaMapMarkerAlt } from "react-icons/fa";


const RotatingBadge = () => {
  return (
    <div className="relative flex items-center justify-center bg-kuning rounded-full w-[100px] h-[100px] cursor-pointer">
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
        <text fontSize="10" fontWeight="bold" letterSpacing="1" fill="currentColor">
          <textPath href="#circlePath" startOffset="0%">
            Click Untuk Lihat Selengkapnya
          </textPath>
        </text>
      </svg>

      <div className="relative flex items-center justify-center">
        <FaMapMarkerAlt />
      </div>
    </div>
  );
};

export default RotatingBadge;