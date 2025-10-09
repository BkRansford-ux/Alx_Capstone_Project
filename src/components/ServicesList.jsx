import React from "react";

export default function ServicesList({ services = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-graphite p-6 rounded-2xl shadow-md border border-gray-700 hover:border-bee hover:shadow-lg hover:shadow-bee/20 transition-all"
        >
          <h3 className="text-xl font-semibold text-bee mb-2">
            {service.title}
          </h3>
          <p className="text-gray-300">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
