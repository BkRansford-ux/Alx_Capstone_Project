import React from "react";
import Hero from "../components/Hero";
import ServicesList from "../components/ServicesList";
import PortfolioGrid from "../components/PortfolioGrid";
import servicesData from "../../data/services.json";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Services</h2>
        <ServicesList services={servicesData} />
      </section>
      <section className="py-10 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-6">Portfolio</h2>
        <PortfolioGrid />
      </section>
    </div>
  );
}
