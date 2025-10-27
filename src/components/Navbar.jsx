import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-black/90 backdrop-blur-md text-white shadow-md px-6 py-4 flex justify-between items-center fixed w-full top-0 z-50 border-b border-bee"
    >
      {/* Brand / Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-bee hover:text-yellow-400 transition-colors"
      >
        Creative <span className="text-white">Agency</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6 text-lg">
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

        {/* Auth / Role-based Links */}
        {!user ? (
          <>
            <Link to="/login" className="hover:text-bee transition-colors">
              Login
            </Link>
            <Link
              to="/register"
              className="border border-bee text-bee px-3 py-1 rounded-lg hover:bg-bee hover:text-black transition"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            {/* 👋 Welcome message */}
            <span className="text-sm text-gray-300">
              Welcome,{" "}
              <span className="font-semibold text-bee">
                {user.name || "User"}
              </span>
              👋
            </span>

            {user.role === "admin" ? (
              <Link
                to="/admin/dashboard"
                className="hover:text-bee transition-colors"
              >
                Admin Panel
              </Link>
            ) : (
              <Link
                to="/client/dashboard"
                className="hover:text-bee transition-colors"
              >
                Dashboard
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="ml-4 text-white hover:text-bee transition-colors"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </motion.nav>
  );
}
