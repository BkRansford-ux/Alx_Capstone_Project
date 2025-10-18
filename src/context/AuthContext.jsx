import React, { createContext, useState, useEffect, useContext } from "react";

// Create context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Login function
  const login = (email, password) => {
    // Simulated login (replace with API later)
    if (email === "admin@agency.com" && password === "admin123") {
      const adminUser = { email, role: "admin", name: "Admin User" };
      setUser(adminUser);
      localStorage.setItem("user", JSON.stringify(adminUser));
      return { success: true, role: "admin" };
    } else {
      const clientUser = { email, role: "client", name: "Client User" };
      setUser(clientUser);
      localStorage.setItem("user", JSON.stringify(clientUser));
      return { success: true, role: "client" };
    }
  };

  // Register function (for demo purposes)
  const register = (email, password, name) => {
    const newUser = { email, role: "client", name };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    return { success: true };
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Add this hook for easy access to context
export const useAuth = () => useContext(AuthContext);
