import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    idNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (
      !form.firstName ||
      !form.surname ||
      !form.email ||
      !form.phone ||
      !form.idNumber ||
      !form.password
    ) {
      return alert("Please fill out all fields!");
    }

    if (form.password !== form.confirmPassword) {
      return alert("Passwords do not match!");
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.email === form.email);

    if (existingUser) {
      return alert("A user with this email already exists!");
    }

    const newUser = {
      ...form,
      role: "client", // default role
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    register(newUser);
    navigate("/client/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-graphite p-8 rounded-2xl shadow-lg w-full max-w-lg border border-bee"
      >
        <h2 className="text-3xl font-bold mb-6 text-bee text-center">
          Create Account
        </h2>

        {/* Name fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-black border border-gray-700 focus:border-bee outline-none"
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={form.surname}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-black border border-gray-700 focus:border-bee outline-none"
          />
        </div>

        {/* Other fields */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 mt-4 rounded-md bg-black border border-gray-700 focus:border-bee outline-none"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full p-3 mt-4 rounded-md bg-black border border-gray-700 focus:border-bee outline-none"
        />

        <input
          type="text"
          name="idNumber"
          placeholder="ID Number"
          value={form.idNumber}
          onChange={handleChange}
          required
          className="w-full p-3 mt-4 rounded-md bg-black border border-gray-700 focus:border-bee outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          autoComplete="new-password"
          required
          className="w-full p-3 mt-4 rounded-md bg-black border border-gray-700 focus:border-bee outline-none"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          autoComplete="new-password"
          required
          className="w-full p-3 mt-4 rounded-md bg-black border border-gray-700 focus:border-bee outline-none"
        />

        <button
          type="submit"
          className="w-full bg-bee text-black py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors mt-6"
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
