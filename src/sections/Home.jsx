import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold mb-6"
      >
        Building <span className="text-cyan-400">Next-Gen</span> Digital
        Solutions
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-2xl text-gray-400 text-lg mb-8"
      >
        We deliver high-performance web and mobile applications to help
        businesses grow in the digital age.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-md"
      >
        Let’s Talk
      </motion.button>
    </section>
  );
}
