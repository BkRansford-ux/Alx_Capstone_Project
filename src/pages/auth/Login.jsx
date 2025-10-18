import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy check (replace with real backend later)
    if (email === "admin@agency.com" && password === "admin123") {
      login({ name: "Admin", role: "admin" });
      navigate("/admin/dashboard");
    } else if (email && password) {
      login({ name: "Client User", role: "client" });
      navigate("/client/dashboard");
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-graphite text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-black p-8 rounded-2xl shadow-lg w-full max-w-md border border-bee"
      >
        <h2 className="text-2xl font-bold mb-6 text-bee text-center">Login</h2>

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
          Login
        </button>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-bee hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
