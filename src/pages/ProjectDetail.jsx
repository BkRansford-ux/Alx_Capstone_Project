import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../../data/projects.json";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const found = projectsData.find((p) => p.id === parseInt(id));
    setProject(found);
  }, [id]);

  if (!project) {
    return <p className="text-center mt-10">Project not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Home
      </Link>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-700">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
