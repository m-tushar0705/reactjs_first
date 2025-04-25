import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // NEW

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('authUser'));
    if (savedUser) setUser(savedUser);
    setLoading(false); // Mark loading complete
  }, []);

  const login = (name, role, remember) => {
    const userData = { name, role };
    setUser(userData);
    if (remember) {
      localStorage.setItem('authUser', JSON.stringify(userData));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
