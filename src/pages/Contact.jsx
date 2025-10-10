import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We’ll get back to you soon.");
  };

  return (
    <section className="min-h-screen bg-graphite flex items-center justify-center py-16 px-4">
      <div className="bg-black/80 p-10 rounded-3xl shadow-lg border border-bee/30 max-w-lg w-full">
        <h2 className="text-4xl font-bold text-center text-bee mb-8">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-graphite text-white border border-gray-700 focus:border-bee focus:ring-2 focus:ring-bee outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-graphite text-white border border-gray-700 focus:border-bee focus:ring-2 focus:ring-bee outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-graphite text-white border border-gray-700 focus:border-bee focus:ring-2 focus:ring-bee outline-none transition-all resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-bee text-black font-semibold hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
