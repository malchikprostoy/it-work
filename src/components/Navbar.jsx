import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1
          className="text-2xl font-bold text-cyan-400 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          NovaTech
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          {["home", "services", "projects", "about", "contact"].map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="cursor-pointer hover:text-cyan-400 transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>

        {/* Burger menu */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-gray-900 text-center py-4 space-y-4"
        >
          {["home", "services", "projects", "about", "contact"].map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item)}
              className="cursor-pointer hover:text-cyan-400"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
