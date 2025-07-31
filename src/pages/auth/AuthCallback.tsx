import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const AuthCallback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          throw error;
        }

        if (data?.session?.user) {
          // Store user data in localStorage for compatibility with existing code
          const user = {
            id: data.session.user.id,
            email: data.session.user.email,
            firstName: data.session.user.user_metadata?.first_name || '',
            lastName: data.session.user.user_metadata?.last_name || '',
            role: data.session.user.user_metadata?.role || 'client',
            avatar: data.session.user.user_metadata?.avatar_url,
            createdAt: data.session.user.created_at,
            isActive: true,
            profileCompleted: data.session.user.user_metadata?.profile_completed || false
          };

          localStorage.setItem('user', JSON.stringify(user));

          toast({
            title: "Welcome!",
            description: "You've been successfully signed in.",
          });

          // Check if profile needs completion
          if (!user.profileCompleted || !user.firstName || !user.lastName) {
            navigate('/auth/profile-setup');
          } else {
            // Redirect based on user role
            const dashboardPath = getDashboardPath(user.role);
            navigate(dashboardPath);
          }
        } else {
          throw new Error('No session found');
        }
      } catch (error: any) {
        console.error('Auth callback error:', error);
        toast({
          title: "Authentication Error",
          description: error.message || "Failed to sign in. Please try again.",
          variant: "destructive",
        });
        navigate('/auth/login');
      }
    };

    handleAuthCallback();
  }, [navigate, toast]);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Signing you in...
        </h2>
        <p className="text-muted-foreground">
          Please wait while we verify your magic link.
        </p>
      </div>
    </div>
  );
};

export default AuthCallback;