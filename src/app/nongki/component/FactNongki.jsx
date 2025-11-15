import { motion } from "framer-motion";

export default function FactNongki() {
  const items = [
    {
      title: "Sign Up today",
      line2: "and get",
      highlight: "500 POINTS",
    },
    {
      title: "Earn 10 points",
      line2: "for every $1",
      highlight: "you spend!",
    },
    {
      title: "Order through",
      line2: "the app and",
      highlight: "earn 2X points",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center bg-blue-100 items-center gap-10 py-10">
      <h1 className="text-4xl font-bold text-green-700 text-center">
        EARNS REWARDS WITH EVERY PURCHASE
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.75 }}
            className="relative w-56 h-56 flex flex-col items-center justify-center text-center p-4 bg-yellow-500 text-black rounded-full shadow-lg"
            style={{ clipPath: "polygon(50% 0%, 61% 13%, 78% 13%, 87% 26%, 100% 35%, 100% 50%, 100% 65%, 87% 74%, 78% 87%, 61% 87%, 50% 100%, 39% 87%, 22% 87%, 13% 74%, 0% 65%, 0% 50%, 0% 35%, 13% 26%, 22% 13%, 39% 13%)" }}
          >
            <p className="text-xl font-bold leading-tight">{item.title}</p>
            <p className="text-xl font-bold leading-tight">{item.line2}</p>
            <p className="text-xl font-bold leading-tight">{item.highlight}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
