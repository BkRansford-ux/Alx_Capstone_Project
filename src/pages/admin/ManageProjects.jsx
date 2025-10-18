import React, { useState } from "react";

export default function ManageProjects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Brand Identity for NovaTech",
      client: "Ransford Bk",
      status: "In Progress",
      team: "Design Team A",
    },
    {
      id: 2,
      name: "Website Redesign for Creatix",
      client: "Bright Ayensu",
      status: "Pending",
      team: "Web Dev Team",
    },
    {
      id: 3,
      name: "Social Media Rebrand",
      client: "Akua Mensah",
      status: "Completed",
      team: "Marketing Team",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p))
    );
  };

  return (
    <div className="min-h-screen bg-graphite text-white px-6 py-12">
      <div className="max-w-6xl mx-auto bg-black p-8 rounded-2xl border border-bee shadow-lg">
        <h1 className="text-3xl font-bold text-bee mb-6">Manage Projects</h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-graphite text-bee">
                <th className="p-3 border-b border-bee">Project Name</th>
                <th className="p-3 border-b border-bee">Client</th>
                <th className="p-3 border-b border-bee">Team</th>
                <th className="p-3 border-b border-bee">Status</th>
                <th className="p-3 border-b border-bee text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr
                  key={p.id}
                  className="hover:bg-bee hover:text-black transition-colors"
                >
                  <td className="p-3 border-b border-gray-700">{p.name}</td>
                  <td className="p-3 border-b border-gray-700">{p.client}</td>
                  <td className="p-3 border-b border-gray-700">{p.team}</td>
                  <td className="p-3 border-b border-gray-700">{p.status}</td>
                  <td className="p-3 border-b border-gray-700 text-right">
                    <select
                      value={p.status}
                      onChange={(e) => updateStatus(p.id, e.target.value)}
                      className="bg-graphite border border-gray-500 rounded-md px-3 py-1 text-sm focus:border-bee outline-none"
                    >
                      <option>Pending</option>
                      <option>In Progress</option>
                      <option>Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
