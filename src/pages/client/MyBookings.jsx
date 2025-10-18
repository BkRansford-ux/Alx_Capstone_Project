import React, { useState } from "react";

export default function MyBookings() {
  const [bookings] = useState([
    {
      id: 1,
      project: "Brand Identity Design",
      status: "In Progress",
      deadline: "2025-10-20",
    },
    {
      id: 2,
      project: "Website Redesign",
      status: "Completed",
      deadline: "2025-09-15",
    },
  ]);

  return (
    <div className="min-h-screen bg-graphite text-white px-6 py-12">
      <div className="max-w-5xl mx-auto bg-black p-8 rounded-2xl border border-bee shadow-lg">
        <h1 className="text-3xl font-bold text-bee mb-6">My Bookings</h1>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-graphite text-bee">
                <th className="p-3 border-b border-bee">Project</th>
                <th className="p-3 border-b border-bee">Status</th>
                <th className="p-3 border-b border-bee">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr
                  key={b.id}
                  className="hover:bg-bee hover:text-black transition-colors"
                >
                  <td className="p-3 border-b border-gray-700">{b.project}</td>
                  <td className="p-3 border-b border-gray-700">{b.status}</td>
                  <td className="p-3 border-b border-gray-700">{b.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
