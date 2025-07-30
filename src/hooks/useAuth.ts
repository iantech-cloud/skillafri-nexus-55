import { useState, useEffect, createContext, useContext } from 'react';
import { User, AuthState, LoginCredentials, RegisterData, UserRole } from '@/types/auth';
import { supabase } from '@/lib/supabase';
import { authService } from '@/lib/authService';

const AuthContext = createContext<{
  auth: AuthState;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
  sendMagicLink: (email: string) => Promise<void>;
  registerWithMagicLink: (email: string, role: string) => Promise<void>;
} | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    // Return a default state when no context is available
    return {
      auth: {
        user: null,
        isAuthenticated: false,
        isLoading: false
      },
      login: async () => {},
      register: async () => {},
      logout: () => {},
      updateUser: () => {},
      sendMagicLink: async () => {},
      registerWithMagicLink: async () => {}
    };
  }
  return context;
};

export const useAuthState = () => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });

  useEffect(() => {
    // Check localStorage for existing auth
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setAuth({
          user,
          isAuthenticated: true,
          isLoading: false
        });
      } catch {
        localStorage.removeItem('user');
        setAuth(prev => ({ ...prev, isLoading: false }));
      }
    } else {
      setAuth(prev => ({ ...prev, isLoading: false }));
    }
  }, []);


  const sendMagicLink = async (email: string) => {
    const result = await authService.sendMagicLink(email);
    if (result.error) {
      throw new Error(result.error);
    }
  };

  const login = async (credentials: LoginCredentials) => {
    throw new Error('Login requires Supabase integration. Click the Supabase button to connect.');
  };

  const registerWithMagicLink = async (email: string, role: string) => {
    throw new Error('Registration requires Supabase integration. Click the Supabase button to connect.');
  };

  const register = async (data: RegisterData) => {
    throw new Error('Registration requires Supabase integration. Click the Supabase button to connect.');
  };

  const logout = async () => {
    localStorage.removeItem('user');
    setAuth({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
    window.location.href = '/';
  };

  const updateUser = async (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
    setAuth(prev => ({ ...prev, user }));
  };

  return { auth, login, register, logout, updateUser, sendMagicLink, registerWithMagicLink };
};

// Helper function to get dashboard path based on user role
const getDashboardPath = (role: string): string => {
  switch (role) {
    case 'super_admin':
      return '/admin/dashboard';
    case 'client':
      return '/client/dashboard';
    case 'freelancer':
      return '/freelancer/dashboard';
    case 'student':
      return '/student/dashboard';
    default:
      return '/';
  }
};

export { AuthContext };