import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Creative Agency</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        We specialize in design, web dev, photography, and event solutions.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Explore Our Work
      </button>
    </section>
  );
}
