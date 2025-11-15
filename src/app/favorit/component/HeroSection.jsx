"use client"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-linear-to-br from-blue-600 via-blue-500 to-blue-700 text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 overflow-hidden relative">

      {/* Floating Background Circles */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-2xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      {/* Left Text Content */}
      <motion.div
        className="max-w-xl z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Temukan Tempat Nongkrong
          <span className="block text-yellow-300">Favoritmu 🎉</span>
        </h1>
        
        <p className="mt-4 text-base md:text-lg text-blue-100 max-w-md">
          Jelajahi berbagai spot terbaik buat nongkrong, kerja, atau sekadar isi waktu luang dengan vibes yang nyaman dan modern.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-50 transition"
        >
          Mulai Jelajah
          <ArrowRight size={20} />
        </motion.button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="relative hidden lg:block w-full md:w-1/2 mt-10 md:mt-0 z-10"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-full h-80 md:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_1280.jpg"
            alt="Cafe Illustration"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

    </section>
  );
}
