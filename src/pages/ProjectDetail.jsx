import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import projectsData from "../../data/projects.json";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const found = projectsData.find((p) => p.id === parseInt(id));
    setProject(found);
  }, [id]);

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-black text-white flex flex-col items-center justify-center min-h-screen"
      >
        <h2 className="text-3xl font-semibold text-bee mb-4">
          Project Not Found
        </h2>
        <Link
          to="/portfolio"
          className="text-bee underline hover:text-yellow-400 transition"
        >
          ← Back to Portfolio
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white min-h-screen py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <Link
          to="/portfolio"
          className="inline-block text-bee hover:text-yellow-400 mb-8 transition-colors"
        >
          ← Back to Portfolio
        </Link>

        <motion.div
          initial={{ scale: 0.97, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-graphite rounded-2xl border border-bee/30 shadow-lg overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-80 object-cover border-b border-bee/20"
          />
          <div className="p-8">
            <h2 className="text-4xl font-bold text-bee mb-4">
              {project.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

