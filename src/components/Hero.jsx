import React from "react";

export default function Hero() {
  return (
    <section className="bg-black py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Welcome to Our Creative Agency
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        We specialize in design, web development, photography, and event
        solutions that make brands shine.
      </p>
      <button className="px-8 py-3 bg-bee text-black font-semibold rounded-full hover:bg-yellow-400 transition-all duration-300 hover:scale-105">
        Explore Our Work
      </button>
    </section>
  );
}
