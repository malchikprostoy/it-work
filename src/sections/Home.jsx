import { motion } from "framer-motion";

export default function Home() {
  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Cloud Solutions",
    "Cybersecurity",
    "AI Integration",
    "E-Commerce Platforms",
    "Technical Support",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 overflow-hidden"
    >
      {/* Заголовок */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold mb-6"
      >
        Building <span className="text-cyan-400">Next-Gen</span> Digital
        Solutions
      </motion.h1>

      {/* Подзаголовок */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-2xl text-gray-400 text-lg mb-8"
      >
        We deliver high-performance web and mobile applications to help
        businesses grow in the digital age.
      </motion.p>

      {/* Кнопка */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-md mb-12"
      >
        Let’s Talk
      </motion.button>

      {/* Бегущая строка с IT услугами */}
      <div className="relative w-full overflow-hidden py-8">
        <motion.div
          className="flex items-center justify-center space-x-24 text-cyan-400 text-3xl font-bold uppercase tracking-widest"
          animate={{ x: ["0%", "-200%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...services, ...services, ...services].map((service, index) => (
            <motion.span
              key={index}
              whileHover={{
                scale: 1.3,
                color: "#00ffff",
                textShadow: "0px 0px 15px rgba(0,255,255,0.8)",
              }}
              transition={{ type: "spring", stiffness: 180 }}
              className="cursor-pointer min-w-[250px] text-center flex items-center justify-center"
            >
              {service}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
