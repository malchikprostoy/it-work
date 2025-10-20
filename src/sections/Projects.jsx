import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Our Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={`https://picsum.photos/600/400?random=${i}`}
                alt="project"
                className="object-cover w-full h-64 group-hover:opacity-70 transition"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg font-semibold">
                  View More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
