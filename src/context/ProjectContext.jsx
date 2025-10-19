import React, { createContext, useState, useEffect } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  // Load projects from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("projects");
    if (stored) {
      setProjects(JSON.parse(stored));
    } else {
      // default demo projects
      setProjects([
        {
          id: 1,
          title: "Brand Identity for NovaTech",
          category: "Branding",
          image: "/images/branding1.jpg",
          description: "A modern rebranding for a tech startup.",
          status: "Completed",
        },
        {
          id: 2,
          title: "Website Redesign for Creatix",
          category: "Web Design",
          image: "/images/web1.jpg",
          description: "A sleek and responsive redesign for a digital agency.",
          status: "In Progress",
        },
      ]);
    }
  }, []);

  // Persist projects in localStorage whenever updated
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  // Add a new project
  const addProject = (newProject) => {
    const updated = [
      ...projects,
      { ...newProject, id: Date.now(), status: "Pending" },
    ];
    setProjects(updated);
  };

  // Update a project’s status
  const updateProjectStatus = (id, status) => {
    const updated = projects.map((p) =>
      p.id === id ? { ...p, status } : p
    );
    setProjects(updated);
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject, updateProjectStatus }}>
      {children}
    </ProjectContext.Provider>
  );
};
