import React, { useState } from "react";

export default function ManageUsers() {
  const [users, setUsers] = useState([
    { id: 1, name: "Ransford Bk", email: "ransford@agency.com", role: "admin" },
    { id: 2, name: "Bright Ayensu", email: "bright@agency.com", role: "client" },
    { id: 3, name: "Akua Mensah", email: "akua@agency.com", role: "client" },
  ]);

  const updateRole = (id, newRole) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, role: newRole } : user))
    );
  };

  const removeUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <div className="min-h-screen bg-graphite text-white px-6 py-12">
      <div className="max-w-6xl mx-auto bg-black p-8 rounded-2xl border border-bee shadow-lg">
        <h1 className="text-3xl font-bold text-bee mb-6">Manage Users</h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-graphite text-bee">
                <th className="p-3 border-b border-bee">Name</th>
                <th className="p-3 border-b border-bee">Email</th>
                <th className="p-3 border-b border-bee">Role</th>
                <th className="p-3 border-b border-bee text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-bee hover:text-black transition-colors"
                >
                  <td className="p-3 border-b border-gray-700">{user.name}</td>
                  <td className="p-3 border-b border-gray-700">{user.email}</td>
                  <td className="p-3 border-b border-gray-700">{user.role}</td>
                  <td className="p-3 border-b border-gray-700 text-right space-x-2">
                    <select
                      value={user.role}
                      onChange={(e) => updateRole(user.id, e.target.value)}
                      className="bg-graphite border border-gray-500 rounded-md px-2 py-1 text-sm focus:border-bee outline-none"
                    >
                      <option>client</option>
                      <option>admin</option>
                    </select>
                    <button
                      onClick={() => removeUser(user.id)}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm"
                    >
                      Remove
                    </button>
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
