import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-graphite rounded-2xl shadow-md overflow-hidden border border-gray-700 hover:border-bee hover:shadow-bee/20 hover:shadow-lg transition-all duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-bee mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300">{project.description}</p>
      </div>
    </div>
  );
}
