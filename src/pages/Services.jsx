import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import servicesData from "../../data/services.json";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesData);
  }, []);

  return (
    <section className="bg-graphite text-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-bee mb-6">Our Services</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12">
          At Creative Agency, we craft digital experiences that inspire, engage,
          and elevate your brand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
