import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-graphite text-white text-center py-6 mt-12 border-t border-bee/20"
    >
      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-bee font-semibold">Creative Agency</span>. All
        rights reserved.
      </p>
    </motion.footer>
  );
}
