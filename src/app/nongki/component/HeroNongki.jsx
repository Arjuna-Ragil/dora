"use client";

export default function HeroNongki() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2015/11/16/22/39/balloons-1046658_1280.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-white/60 to-white/80 backdrop-blur-sm"></div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#034ED2] leading-tight drop-shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Spot Nongkrong di <br /><span className="text-yellow-300">Pintu Doraemon</span>
        </h1>
        <p
          className="mt-4 text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Dari coffee shop tenang sampai tempat makan rame, temuin spot paling
          asik buat nongkrong, nugas, atau healing kecil-kecilan.
        </p>
        <div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="#search-nongki"
            className="px-6 py-3 bg-[#034ED2] text-white font-semibold rounded-xl shadow-md hover:bg-[#033AAA] transition-all"
          >
            Jelajahi Semua Tempat
          </a>
        </div>
      </div>
    </section>
  );
}
