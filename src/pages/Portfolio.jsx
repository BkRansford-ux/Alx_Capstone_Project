import React, { useEffect, useState } from "react";
import PortfolioGrid from "../components/PortfolioGrid";
import projectsData from "../../data/projects.json";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-semibold mb-8">Portfolio Projects</h2>
      <PortfolioGrid projects={projects} />
    </div>
  );
}
