"use client";

import { motion } from "framer-motion";
import { RiMegaphoneFill } from "react-icons/ri";

export default function RunningPromoBar() {
  return (
    <div className="w-full bg-yellow-300 text-black py-2 overflow-hidden border-b border-yellow-400 flex items-center">
      <motion.div
        className="flex items-center gap-2 whitespace-nowrap text-sm font-medium"
        animate={{ x: ["300%", "-100%"] }}
        transition={{ duration: 16, ease: "linear", repeat: Infinity }}
      >
        <RiMegaphoneFill className="text-red-600" size={20} />
        <span>Ayo kunjungin Pintu Doraemon sekarang, banyak promo menanti!</span>
      </motion.div>
    </div>
  );
}
