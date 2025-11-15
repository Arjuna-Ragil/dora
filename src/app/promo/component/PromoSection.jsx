"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

const PromoSection = ({ promoItems }) => {
  return (
    <>
      {/* Promo Sections */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold mb-4">Promo Terbaru</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promoItems.slice(0, 6).map((item, i) => (
            <Link href={promoItems[i].umkm_id} key={i}>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border rounded-2xl p-5 shadow-sm hover:shadow-md cursor-pointer"
              >
                <h3 className="text-blue-600 font-semibold text-lg">
                  {item.menu[0].nama}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.kategori}</p>

                <div className="mt-3 text-sm">
                  <p className="text-gray-400 line-through">
                    Rp {item.menu[0].harga}k
                  </p>
                  <p className="text-green-600 font-semibold text-lg -mt-1">
                    Rp {item.menu[0].harga - 2}k
                  </p>
                </div>

                <p className="flex gap-2 text-xs text-gray-400 mt-2"><FaLocationDot /> {item.lokasi_sederhana}</p>
                <p className="text-xs text-yellow-600 mt-3">Sampai 21 november</p>
              </motion.div>
            </Link>

          ))}
        </div>
      </section>

      <section className="mt-12 mb-20">
        <h2 className="text-lg font-semibold mb-4">
          Promo yang berakhir hari ini
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promoItems.slice(6, 12).map((item, i) => (
            <Link href={promoItems[i+6].umkm_id} key={i}>
            
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border rounded-2xl p-5 shadow-sm hover:shadow-md cursor-pointer"
              >
                <h3 className="text-blue-600 font-semibold text-lg">
                  {item.menu[0].nama}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.kategori}</p>

                <div className="mt-3 text-sm">
                  <p className="text-gray-400 line-through">
                    Rp {item.menu[0].harga}k
                  </p>
                  <p className="text-green-600 font-semibold text-lg -mt-1">
                    Rp {item.menu[0].harga - 2}k
                  </p>
                </div>
                <p className="flex gap-2 text-xs text-gray-400 mt-2"><FaLocationDot /> {item.lokasi_sederhana}</p>
                <p className="text-xs text-yellow-600 mt-3">Hari ini</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default PromoSection;
