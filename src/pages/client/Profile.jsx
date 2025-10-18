import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [bio, setBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully! (simulated)");
  };

  return (
    <div className="min-h-screen bg-graphite text-white px-6 py-12">
      <div className="max-w-3xl mx-auto bg-black p-8 rounded-2xl border border-bee shadow-lg">
        <h1 className="text-3xl font-bold text-bee mb-6">My Profile</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-md bg-graphite border border-gray-600 focus:border-bee outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md bg-graphite border border-gray-600 focus:border-bee outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-3 rounded-md bg-graphite border border-gray-600 focus:border-bee outline-none min-h-[100px]"
              placeholder="Tell us about yourself..."
            />
          </div>

          <button
            type="submit"
            className="bg-bee text-black py-3 px-6 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
