export enum UserRole {
  Client = 'client',
  Freelancer = 'freelancer',
  Student = 'student',
  SuperAdmin = 'super_admin'
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
  isActive: boolean;
  profileCompleted?: boolean;
  phoneNumber?: string;
  country?: string;
  // Role-specific fields
  company?: string; // For clients
  skills?: string; // For freelancers
  university?: string; // For students
  studentId?: string; // For students
  experience?: string; // For freelancers
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  // Role-specific fields
  company?: string; // For clients
  skills?: string[]; // For freelancers
  university?: string; // For students
  phoneNumber?: string;
  country?: string;
}