import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-graphite text-white shadow-md px-6 py-4 flex justify-between items-center fixed w-full top-0 z-50"
    >
      <Link
        to="/"
        className="text-2xl font-bold text-bee hover:text-yellow-400 transition-colors"
      >
        Creative Agency
      </Link>
      <div className="space-x-6 text-lg">
        <Link to="/about" className="hover:text-bee transition-colors">
          About
        </Link>
        <Link to="/services" className="hover:text-bee transition-colors">
          Services
        </Link>
        <Link to="/portfolio" className="hover:text-bee transition-colors">
          Portfolio
        </Link>
        <Link to="/contact" className="hover:text-bee transition-colors">
          Contact
        </Link>
      </div>
    </motion.nav>
  );
}
