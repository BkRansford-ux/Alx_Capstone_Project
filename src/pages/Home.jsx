import React from "react";
import Hero from "../components/Hero";
import ServicesList from "../components/ServicesList";
import PortfolioGrid from "../components/PortfolioGrid";
import projectsData from "../../data/projects.json";
import servicesData from "../../data/services.json";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Hero />

      <section className="py-16 bg-graphite">
        <h2 className="text-4xl font-semibold text-center text-bee mb-10">
          Our Services
        </h2>
        <ServicesList services={servicesData} />
      </section>

      <section className="py-16 bg-black">
        <h2 className="text-4xl font-semibold text-center text-bee mb-10">
          Portfolio
        </h2>
        <PortfolioGrid />
      </section>
    </div>
  );
}
