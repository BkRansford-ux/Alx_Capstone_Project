import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-5xl font-bold text-bee mb-6">About Us</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          We are a passionate team of creatives, designers, and developers
          driven by innovation and storytelling. Our mission is to bring ideas
          to life through design, technology, and authentic visual experiences.
        </p>
        <p className="mt-6 text-gray-400">
          From branding and photography to digital strategy, we help businesses
          create powerful connections with their audiences. Your vision is our
          blueprint for creativity.
        </p>
      </motion.div>
    </section>
  );
}
