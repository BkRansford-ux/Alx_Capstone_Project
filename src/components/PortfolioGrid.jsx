import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

export default function PortfolioGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects &&
        projects.map((proj) => (
          <Link to={`/project/${proj.id}`} key={proj.id}>
            <ProjectCard project={proj} />
          </Link>
        ))}
    </div>
  );
}
