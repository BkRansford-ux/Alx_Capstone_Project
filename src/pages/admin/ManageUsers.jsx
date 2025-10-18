import React, { useState } from "react";

export default function ManageBookings() {
  const [bookings, setBookings] = useState([
    { id: 1, client: "Bright Ayensu", project: "Brand Strategy", status: "In Progress" },
    { id: 2, client: "Ransford Bk", project: "Web Revamp", status: "Pending" },
    { id: 3, client: "Akua Mensah", project: "Logo Design", status: "Completed" },
  ]);

  const updateStatus = (id, newStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  return (
    <div className="min-h-screen bg-graphite text-white px-6 py-12">
      <div className="max-w-6xl mx-auto bg-black p-8 rounded-2xl border border-bee shadow-lg">
        <h1 className="text-3xl font-bold text-bee mb-6">Manage Bookings</h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-graphite text-bee">
                <th className="p-3 border-b border-bee">Client</th>
                <th className="p-3 border-b border-bee">Project</th>
                <th className="p-3 border-b border-bee">Status</th>
                <th className="p-3 border-b border-bee text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr
                  key={b.id}
                  className="hover:bg-bee hover:text-black transition-colors"
                >
                  <td className="p-3 border-b border-gray-700">{b.client}</td>
                  <td className="p-3 border-b border-gray-700">{b.project}</td>
                  <td className="p-3 border-b border-gray-700">{b.status}</td>
                  <td className="p-3 border-b border-gray-700 text-right">
                    <select
                      value={b.status}
                      onChange={(e) => updateStatus(b.id, e.target.value)}
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
