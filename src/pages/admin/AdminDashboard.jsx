import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-graphite text-white px-6 py-12">
      <div className="max-w-6xl mx-auto bg-black p-8 rounded-2xl border border-bee shadow-lg">
        <h1 className="text-3xl font-bold text-bee mb-4">Admin Dashboard</h1>
        <p className="text-gray-300 mb-8">
          Manage your agencyâ€™s projects, clients, and team â€” all in one place.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          <Link
            to="/admin/bookings"
            className="bg-graphite border border-bee p-6 rounded-xl text-center hover:bg-bee hover:text-black transition-all"
          >
            <h2 className="text-xl font-semibold">Manage Bookings</h2>
            <p className="text-sm text-gray-400 mt-2">Review & update projects.</p>
          </Link>
	  
          <Link
            to="/admin/projects"
            className="bg-graphite border border-bee p-6 rounded-xl text-center hover:bg-bee hover:text-black transition-all"
          >
            <h2 className="text-xl font-semibold">Manage Projects</h2>
            <p className="text-sm text-gray-400 mt-2">Track and update project progress.</p>
          </Link>

          <Link
            to="/admin/users"
            className="bg-graphite border border-bee p-6 rounded-xl text-center hover:bg-bee hover:text-black transition-all"
          >
            <h2 className="text-xl font-semibold">Manage Users</h2>
            <p className="text-sm text-gray-400 mt-2">View clients & permissions.</p>
          </Link>

          <div className="bg-graphite border border-bee p-6 rounded-xl text-center">
            <h2 className="text-xl font-semibold">Analytics</h2>
            <p className="text-sm text-gray-400 mt-2">Coming soon í³Š</p>
          </div>
        </div>
      </div>
    </div>
  );
}
