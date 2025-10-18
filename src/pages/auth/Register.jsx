import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name, email, role: "client" });
    navigate("/client/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-graphite text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-black p-8 rounded-2xl shadow-lg w-full max-w-md border border-bee"
      >
        <h2 className="text-2xl font-bold mb-6 text-bee text-center">Register</h2>

        <div className="mb-4">
          <label className="block mb-2 text-sm">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-md bg-graphite border border-gray-600 focus:border-bee outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-graphite border border-gray-600 focus:border-bee outline-none"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md bg-graphite border border-gray-600 focus:border-bee outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-bee text-black py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
        >
          Register
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-bee hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
