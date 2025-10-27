import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((u) => u.email === email);

    if (!userExists) {
      alert("No account found with this email!");
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-graphite p-8 rounded-2xl shadow-lg w-full max-w-md border border-bee"
      >
        {!submitted ? (
          <>
            <h2 className="text-3xl font-bold mb-6 text-bee text-center">
              Forgot Password
            </h2>

            <p className="text-gray-400 text-center mb-6">
              Enter your registered email and we’ll send password reset
              instructions.
            </p>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md bg-black border border-gray-700 focus:border-bee outline-none mb-6"
              required
            />

            <button
              type="submit"
              className="w-full bg-bee text-black py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
            >
              Send Reset Link
            </button>

            <p className="text-center text-sm mt-4">
              <Link to="/login" className="text-bee hover:underline">
                Back to Login
              </Link>
            </p>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-bee mb-4">Email Sent!</h2>
            <p className="text-gray-300 mb-6">
              If an account with <span className="text-bee">{email}</span> exists, you’ll
              receive password reset instructions shortly.
            </p>

            <Link
              to="/login"
              className="inline-block bg-bee text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
            >
              Back to Login
            </Link>

            <p className="text-gray-400 text-sm mt-4">
              Or{" "}
              <Link to="/reset-password" className="text-bee hover:underline">
                reset your password here
              </Link>
              .
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
