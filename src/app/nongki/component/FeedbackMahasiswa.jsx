import { motion } from "framer-motion";

export default function FeedbackMahasiswa() {
  const feedbacks = [
    {
      text: "Jajan di sini selalu puas! Banyak pilihan UMKM, rasanya enak dan harganya bersahabat.",
      color: "text-green-700",
    },
    {
      text: "Pedagangnya ramah semua, jajanan tradisionalnya bikin nostalgia banget!",
      color: "text-red-700",
    },
    {
      text: "Setiap hari jajan beda-beda, semuanya murah tapi kualitasnya mantap.",
      color: "text-yellow-700",
    },
    {
      text: "Tempat favorit kalau lagi laper mendadak—harga kaki lima, rasa bintang lima!",
      color: "text-green-700",
    },
    {
      text: "Pilihan UMKM lengkap, mulai dari minuman segar sampai makanan berat.",
      color: "text-red-700",
    },
  ];

  return (
    <div className="w-full py-16 bg-neutral-100 overflow-hidden">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-4">
        FEEDBACK MAHASISWA
      </h1>
      <p className="text-center text-neutral-700 text-lg mb-10 font-semibold">
        Mereka belajar. Mereka berkembang. Ini alasan mereka tetap semangat.
      </p>

      <div className="relative w-full overflow-hidden py-10">
        <div className="flex gap-6">
          {feedbacks.map((item, index) => (
            <motion.div
              key={index}
              className="w-80 h-56 shadow-lg bg-white rounded-xl border border-neutral-300 p-6 flex items-center justify-center text-center"
              animate={{ x: ["100%", "-150%"] }}
              transition={{
                repeat: Infinity,
                duration: 12 + index * 1.5,
                ease: "linear",
              }}
            >
              <p className={`text-lg font-medium ${item.color}`}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
