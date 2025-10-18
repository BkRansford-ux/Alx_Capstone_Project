import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-graphite text-white px-6 py-12">
      <div className="max-w-5xl mx-auto bg-black p-8 rounded-2xl border border-bee shadow-lg">
        <h1 className="text-3xl font-bold text-bee mb-4">
          Welcome, {user?.name || "Client"}!
        </h1>
        <p className="text-gray-300 mb-6">
          Here’s your personalized dashboard where you can manage your bookings,
          track project progress, and update your profile.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          <Link
            to="/client/bookings"
            className="bg-graphite hover:bg-bee hover:text-black transition-all p-6 rounded-xl border border-bee text-center"
          >
            <h2 className="text-xl font-semibold">My Bookings</h2>
            <p className="text-sm text-gray-400 mt-2">
              View and monitor your ongoing projects.
            </p>
          </Link>

          <Link
            to="/client/profile"
            className="bg-graphite hover:bg-bee hover:text-black transition-all p-6 rounded-xl border border-bee text-center"
          >
            <h2 className="text-xl font-semibold">Profile Settings</h2>
            <p className="text-sm text-gray-400 mt-2">
              Update your information and preferences.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
