import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              desc: "Custom websites built for performance and scalability.",
            },
            {
              title: "UI/UX Design",
              desc: "Beautiful, user-centered interfaces for better engagement.",
            },
            {
              title: "Cloud Solutions",
              desc: "Deploy and manage your apps seamlessly in the cloud.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-cyan-500/20"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
