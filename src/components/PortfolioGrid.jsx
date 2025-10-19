import React, { useContext } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectContext } from "../context/ProjectContext";
import { Link } from "react-router-dom";

export default function PortfolioGrid() {
  const { projects } = useContext(ProjectContext);

  if (!projects.length) {
    return (
      <p className="text-center text-gray-400 py-12">
        No projects added yet. Check back soon!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
      {projects.map((proj) => (
        <Link
          to={`/project/${proj.id}`}
          key={proj.id}
          className="hover:scale-[1.02] transition-transform duration-300"
        >
          <ProjectCard project={proj} />
        </Link>
      ))}
    </div>
  );
}
