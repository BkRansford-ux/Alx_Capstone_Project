import React, { createContext, useState, useEffect, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Load user from localStorage initially
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  // Save to localStorage on login/logout
  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  const login = (userData) => setUser(userData);
  const register = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook for easy access
export const useAuth = () => useContext(AuthContext);
