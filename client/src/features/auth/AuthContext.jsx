import { createContext, useContext, useEffect, useState } from "react";
import * as auth from "./authServices";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    try {
      const userData = await auth.getCurrentUser();
      setUser(userData);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function register(credentials) {
    const userData = await auth.register(credentials);
    setUser(userData);
  }

  async function login(credentials) {
    const userData = await auth.login(credentials);
    setUser(userData);
  }

  async function logout() {
    await auth.logout();
    setUser(null);
  }

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        checkAuth,
        register,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
