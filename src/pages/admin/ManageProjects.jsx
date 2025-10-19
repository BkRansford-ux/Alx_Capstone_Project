import React, { useContext, useState } from "react";
import { ProjectContext } from "../../context/ProjectContext";

export default function ManageProjects() {
  const { projects, addProject, updateProjectStatus } =
    useContext(ProjectContext);

  const [form, setForm] = useState({
    title: "",
    category: "",
    image: "",
    description: "",
    preview: null,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({
        ...form,
        image: file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.category)
      return alert("Please fill all fields!");

    // Create new project object
    const newProject = {
      id: Date.now(),
      title: form.title,
      category: form.category,
      description: form.description,
      image:
        form.preview ||
        form.image ||
        "https://via.placeholder.com/400x300?text=No+Image",
      status: "Pending",
    };

    addProject(newProject);

    // Reset form
    setForm({
      title: "",
      category: "",
      image: "",
      description: "",
      preview: null,
    });
  };

  return (
    <div className="min-h-screen bg-graphite text-white px-6 py-12">
      <div className="max-w-6xl mx-auto bg-black p-8 rounded-2xl border border-bee shadow-lg">
        <h1 className="text-3xl font-bold text-bee mb-6">Manage Projects</h1>

        {/* Add New Project Form */}
        <form
          onSubmit={handleSubmit}
          className="mb-10 grid gap-4 sm:grid-cols-2"
        >
          <input
            type="text"
            placeholder="Project Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="p-3 rounded bg-graphite border border-gray-600 text-white"
          />
          <input
            type="text"
            placeholder="Category (e.g., Web Design)"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="p-3 rounded bg-graphite border border-gray-600 text-white"
          />

          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            className="p-3 rounded bg-graphite border border-gray-600 text-white sm:col-span-2"
          />

          {/* File upload + preview */}
          <div className="sm:col-span-2 flex items-center gap-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="text-gray-300"
            />
            {form.preview && (
              <img
                src={form.preview}
                alt="Preview"
                className="w-24 h-24 rounded-lg border border-bee object-cover"
              />
            )}
          </div>

          <button
            type="submit"
            className="bg-bee text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 transition sm:col-span-2"
          >
            + Add Project
          </button>
        </form>

        {/* Project Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-graphite text-bee">
                <th className="p-3 border-b border-bee">Title</th>
                <th className="p-3 border-b border-bee">Category</th>
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
                  <td className="p-3 border-b border-gray-700 flex items-center gap-3">
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-12 h-12 object-cover rounded-md border border-gray-600"
                      />
                    )}
                    {p.title}
                  </td>
                  <td className="p-3 border-b border-gray-700">{p.category}</td>
                  <td className="p-3 border-b border-gray-700">{p.status}</td>
                  <td className="p-3 border-b border-gray-700 text-right">
                    <select
                      value={p.status}
                      onChange={(e) =>
                        updateProjectStatus(p.id, e.target.value)
                      }
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
