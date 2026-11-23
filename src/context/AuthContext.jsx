import { createContext, useState, useContext, useEffect } from "react";
import {
  callCurrentUser,
  callLogin,
  callLogout,
} from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const user = await callCurrentUser();
        setUser(user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const login = async (payload) => {
    try {
      setLoading(true);
      const user = await callLogin(payload);
      setUser(user);
      return user;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    // Api endpoint to be implemented in backend for logging out the user
    try {
      const response = await callLogout();
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
