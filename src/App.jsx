import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";

// New pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/client/Dashboard";
import MyBookings from "./pages/client/MyBookings";
import Profile from "./pages/client/Profile";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageBookings from "./pages/admin/ManageBookings";
import ManageProjects from "./pages/admin/ManageProjects";
import ManageUsers from "./pages/admin/ManageUsers";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white font-sans">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
	    
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Client Routes (Protected) */}
            <Route
              path="/client/dashboard"
              element={
                <ProtectedRoute role="client">
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/client/bookings"
              element={
                <ProtectedRoute role="client">
                  <MyBookings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/client/profile"
              element={
                <ProtectedRoute role="client">
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* Admin Routes (Protected) */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute role="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/bookings"
              element={
                <ProtectedRoute role="admin">
                  <ManageBookings />
                </ProtectedRoute>
              }
	    />
            <Route
	      path="/admin/projects"
	      element={
		<ProtectedRoute role="admin">
		  <ManageProjects />
		</ProtectedRoute>
	      }
	    />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute role="admin">
                  <ManageUsers />
                </ProtectedRoute>
              }
            />

            {/* 404 Page */}
            <Route
              path="*"
              element={
                <div className="text-center py-20">
                  <h2 className="text-3xl font-bold">404 - Page Not Found</h2>
                </div>
              }
            />
          </Routes>
        </main>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

