import React from "react";

export default function ServiceCard({ service }) {
  return (
    <div className="bg-black border border-gray-700 hover:border-bee p-6 rounded-2xl shadow-md hover:shadow-lg hover:shadow-bee/20 transition-all duration-300">
      <h3 className="text-2xl font-semibold text-bee mb-3">
        {service.name}
      </h3>
      <p className="text-gray-300 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
