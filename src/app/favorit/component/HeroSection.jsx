"use client"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white flex flex-col items-center justify-center text-center px-8 md:px-20 py-28 overflow-hidden relative">

      {/* Floating Animated Blobs */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.6 }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-2xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.8, delay: 0.3 }}
      />

      {/* Center Content */}
      <motion.div
        className="max-w-2xl z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
          Pilihan Favorit
          <span className="block text-yellow-300">Tempat Nongkrong Kamu</span>
        </h1>

        <p className="mt-4 text-base md:text-lg text-purple-100 max-w-lg">
          Temukan rekomendasi tempat nongkrong paling hits, cozy, dan kekinian. Eksplorasi lebih mudah, cepat, dan modern.
        </p>

        <motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.94 }}
          className="mt-8 flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-purple-50 transition"
        >
          Mulai Eksplor
          <ArrowRight size={20} />
        </motion.button>
      </motion.div>

    </section>
  );
}