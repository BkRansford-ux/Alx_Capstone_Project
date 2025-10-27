import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

export default function Portfolio() {
  const { projects } = useContext(ProjectContext);

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-bee mb-10 text-center">
          Our Portfolio
        </h1>

        {/* Fallback when no projects exist */}
        {projects.length === 0 ? (
          <p className="text-center text-gray-400">
            No projects added yet. Check back soon!
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div
                key={p.id}
                className="bg-graphite rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform border border-bee"
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-bee mb-2">
                    {p.title}
                  </h2>
                  <p className="text-gray-300 text-sm">{p.description}</p>
                  <p className="mt-3 text-sm text-gray-400 italic">
                    {p.category} — {p.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
