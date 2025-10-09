import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-graphite text-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-bold text-bee hover:text-yellow-400 transition-colors"
      >
        Creative Agency
      </Link>
      <div className="space-x-6 text-lg">
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
    </nav>
  );
}
