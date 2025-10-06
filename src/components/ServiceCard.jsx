import React from "react";

export default function ServiceCard({ service }) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
}
