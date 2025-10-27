import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    if (newPassword !== verifyPassword) {
      alert("Passwords do not match!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex((u) => u.email === email);

    if (userIndex === -1) {
      alert("No account found with that email!");
      return;
    }

    users[userIndex].password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));

    alert("Password reset successful! Please log in with your new password.");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-6">
      <form
        onSubmit={handleReset}
        className="bg-graphite p-8 rounded-2xl shadow-lg w-full max-w-md border border-bee"
      >
        <h2 className="text-3xl font-bold mb-6 text-bee text-center">
          Reset Password
        </h2>

        <p className="text-gray-400 text-center mb-6">
          Enter your registered email and new password below.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-md bg-black border border-gray-700 focus:border-bee outline-none mb-4"
          required
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-3 rounded-md bg-black border border-gray-700 focus:border-bee outline-none mb-4"
          required
        />

        <input
          type="password"
          placeholder="Verify Password"
          value={verifyPassword}
          onChange={(e) => setVerifyPassword(e.target.value)}
          className="w-full p-3 rounded-md bg-black border border-gray-700 focus:border-bee outline-none mb-6"
          required
        />

        <button
          type="submit"
          className="w-full bg-bee text-black py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
