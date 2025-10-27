import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // ✅ Admin hardcoded login
    if (email === "admin@agency.com" && password === "admin123") {
      login({ name: "Admin", role: "admin" });
      return navigate("/admin/dashboard");
    }

    // ✅ Registered user check
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return alert("Invalid email or password!");
    }

    login(user);
    navigate("/client/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-graphite p-8 rounded-2xl shadow-lg w-full max-w-md border border-bee"
      >
        <h2 className="text-3xl font-bold mb-6 text-bee text-center">Login</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block mb-2 text-sm text-gray-400">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-md bg-black border border-gray-700 focus:border-bee outline-none"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-2">
          <label className="block mb-2 text-sm text-gray-400">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-md bg-black border border-gray-700 focus:border-bee outline-none"
            required
          />
        </div>

        <div className="text-right mb-6">
          <Link
            to="/forgot-password"
            className="text-bee text-sm hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-bee text-black py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
        >
          Login
        </button>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-bee hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
