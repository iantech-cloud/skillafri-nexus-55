import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { UserRole } from '@/types/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
  redirectTo?: string;
}

export const ProtectedRoute = ({ 
  children, 
  allowedRoles, 
  redirectTo = '/auth/login' 
}: ProtectedRouteProps) => {
  const { auth } = useAuth();

  if (auth.isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!auth.isAuthenticated || !auth.user) {
    return <Navigate to={redirectTo} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(auth.user.role)) {
    // Redirect to appropriate dashboard based on user role
    const dashboardPath = getDashboardPath(auth.user.role);
    return <Navigate to={dashboardPath} replace />;
  }

  return <>{children}</>;
};

// Helper function to get dashboard path based on user role
const getDashboardPath = (role: UserRole): string => {
  switch (role) {
    case UserRole.SuperAdmin:
      return '/admin/dashboard';
    case UserRole.Client:
      return '/client/dashboard';
    case UserRole.Freelancer:
      return '/freelancer/dashboard';
    case UserRole.Student:
      return '/student/dashboard';
    default:
      return '/';
  }
};