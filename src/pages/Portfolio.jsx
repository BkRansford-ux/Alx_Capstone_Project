import React, { useEffect, useState } from "react";
import PortfolioGrid from "../components/PortfolioGrid";
import projectsData from "../../data/projects.json";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

   return (
    <div className="bg-black text-white min-h-screen py-16">
      <h2 className="text-4xl font-bold text-center text-bee mb-10">
        Our Portfolio
      </h2>
      <PortfolioGrid projects={projects} />
    </div>
  );
}
