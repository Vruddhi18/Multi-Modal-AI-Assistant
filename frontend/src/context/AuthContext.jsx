import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for mocked session
    const savedUser = localStorage.getItem('mock_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const loginWithGoogle = () => {
    // Mock a Google Login response
    const mockUser = {
      id: 'g_' + Math.random().toString(36).substr(2, 9),
      name: 'Test User',
      email: 'user@example.com',
      avatar: 'https://ui-avatars.com/api/?name=Test+User&background=3b82f6&color=fff'
    };
    setUser(mockUser);
    localStorage.setItem('mock_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mock_user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
