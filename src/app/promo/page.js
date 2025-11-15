"use client"

import TopNavbar from "../../../component/TopNavbar";
import PromoSection from "./component/PromoSection"
import data from "../../data/data.json"
import Confetti from "./component/Confetti";
import { RiDiscountPercentFill } from "react-icons/ri";
import { motion } from "framer-motion";
import RunningPromoBar from "./component/RunningPromoBar";



const page = () => {
  const promoItems = data.umkm_data

  return (
    <>
      <RunningPromoBar />
      <TopNavbar />
      <div className="min-h-screen w-full bg-white text-gray-900 p-6">
        <Confetti />
        <div className="text-center mt-10">
          <h1 className="ralative text-4xl font-bold mb-3">Promo of the Day 
            <motion.div
              animate={{
                rotate: [-10, 10, -10], // goyang kanan–kiri
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block -mt-5"
            >
              <RiDiscountPercentFill className="text-yellow-400" size={34} />
            </motion.div>  
          </h1>
          <p className="text-sm text-gray-500 mb-6 max-w-xl mx-auto">
            Setiap hari selalu ada promo baru dari UMKM sekitar Pintu Doraemon. Siapa tahu, tempat langganan kamu lagi kasih diskon hari ini!
          </p>
        </div>

        <PromoSection promoItems={promoItems} />
      </div>
    </>
  )
}

export default page