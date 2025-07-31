import { supabase } from './supabase';
import { User, UserRole } from '@/types/auth';
import { DashboardStats, AuditLog, PlatformSettings } from '@/types/admin';

export const databaseService = {
  // User operations
  users: {
    async getAll(filters?: { 
      role?: UserRole; 
      isActive?: boolean; 
      searchTerm?: string 
    }) {
      try {
        let query = supabase
          .from('users')
          .select('*');

        if (filters?.role) {
          query = query.eq('role', filters.role);
        }
        
        if (filters?.isActive !== undefined) {
          query = query.eq('is_active', filters.isActive);
        }
        
        if (filters?.searchTerm) {
          query = query.or(`first_name.ilike.%${filters.searchTerm}%,last_name.ilike.%${filters.searchTerm}%,email.ilike.%${filters.searchTerm}%`);
        }

        const { data, error } = await query.order('created_at', { ascending: false });
        
        if (error) throw error;
        
        return data?.map(transformDatabaseUser) || [];
      } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
      }
    },

    async create(userData: Partial<User>) {
      try {
        const { data, error } = await supabase
          .from('users')
          .insert([transformUserForDatabase(userData)])
          .select()
          .single();
        
        if (error) throw error;
        
        return transformDatabaseUser(data);
      } catch (error) {
        console.error('Error creating user:', error);
        throw error;
      }
    },

    async update(userId: string, userData: Partial<User>) {
      try {
        const { data, error } = await supabase
          .from('users')
          .update(transformUserForDatabase(userData))
          .eq('id', userId)
          .select()
          .single();
        
        if (error) throw error;
        
        return transformDatabaseUser(data);
      } catch (error) {
        console.error('Error updating user:', error);
        throw error;
      }
    },

    async delete(userId: string) {
      try {
        const { error } = await supabase
          .from('users')
          .delete()
          .eq('id', userId);
        
        if (error) throw error;
        
        return true;
      } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
      }
    },

    async getById(userId: string) {
      try {
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', userId)
          .single();
        
        if (error) throw error;
        
        return data ? transformDatabaseUser(data) : null;
      } catch (error) {
        console.error('Error fetching user by ID:', error);
        throw error;
      }
    }
  },

  // Platform settings
  settings: {
    async get() {
      try {
        const { data, error } = await supabase
          .from('platform_settings')
          .select('*')
          .single();
        
        if (error) throw error;
        
        return data as PlatformSettings;
      } catch (error) {
        console.error('Error fetching platform settings:', error);
        throw error;
      }
    },

    async update(settings: Partial<PlatformSettings>) {
      try {
        const { data, error } = await supabase
          .from('platform_settings')
          .upsert(settings)
          .select()
          .single();
        
        if (error) throw error;
        
        return data as PlatformSettings;
      } catch (error) {
        console.error('Error updating platform settings:', error);
        throw error;
      }
    }
  },

  // Analytics
  analytics: {
    async getDashboardStats(): Promise<DashboardStats> {
      try {
        // Get user counts by role
        const { data: userStats, error: userError } = await supabase
          .from('users')
          .select('role, is_active, created_at');
        
        if (userError) throw userError;

        // Get project/transaction counts
        const { data: projects, error: projectError } = await supabase
          .from('projects')
          .select('status, created_at');
        
        if (projectError) throw projectError;

        const totalUsers = userStats?.length || 0;
        const activeUsers = userStats?.filter(u => u.is_active).length || 0;
        const totalProjects = projects?.length || 0;

        return {
          totalUsers,
          activeUsers,
          totalProjects,
          completedProjects: projects?.filter(p => p.status === 'completed').length || 0,
          totalRevenue: 0,
          monthlyRevenue: 0,
          pendingDisputes: 0,
          newRegistrations: userStats?.filter(u => {
            const createdDate = new Date(u.created_at);
            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
            return createdDate > thirtyDaysAgo;
          }).length || 0
        };
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        throw error;
      }
    }
  },

  // Audit logs
  auditLogs: {
    async getAll(limit = 50) {
      try {
        const { data, error } = await supabase
          .from('audit_logs')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(limit);
        
        if (error) throw error;
        
        return data as AuditLog[];
      } catch (error) {
        console.error('Error fetching audit logs:', error);
        throw error;
      }
    },

    async create(logData: Omit<AuditLog, 'id' | 'createdAt'>) {
      try {
        const { data, error } = await supabase
          .from('audit_logs')
          .insert([{
            ...logData,
            created_at: new Date().toISOString()
          }])
          .select()
          .single();
        
        if (error) throw error;
        
        return data as AuditLog;
      } catch (error) {
        console.error('Error creating audit log:', error);
        throw error;
      }
    }
  },

  // Transactions
  transactions: {
    async getAll(limit = 50) {
      try {
        const { data, error } = await supabase
          .from('transactions')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(limit);
        
        if (error) throw error;
        
        return data || [];
      } catch (error) {
        console.error('Error fetching transactions:', error);
        throw error;
      }
    }
  },

  // Students specific
  students: {
    async getEnrollments(userId: string) {
      try {
        const { data, error } = await supabase
          .from('enrollments')
          .select(`
            *,
            courses (*)
          `)
          .eq('user_id', userId);
        
        if (error) throw error;
        
        return data || [];
      } catch (error) {
        console.error('Error fetching enrollments:', error);
        throw error;
      }
    },

    async getAssignments(userId: string) {
      try {
        const { data, error } = await supabase
          .from('assignments')
          .select('*')
          .eq('user_id', userId);
        
        if (error) throw error;
        
        return data || [];
      } catch (error) {
        console.error('Error fetching assignments:', error);
        throw error;
      }
    }
  },

  // Projects
  projects: {
    async getAll(filters?: { status?: string; userId?: string }) {
      try {
        let query = supabase
          .from('projects')
          .select('*');

        if (filters?.status) {
          query = query.eq('status', filters.status);
        }
        
        if (filters?.userId) {
          query = query.eq('client_id', filters.userId);
        }

        const { data, error } = await query.order('created_at', { ascending: false });
        
        if (error) throw error;
        
        return data || [];
      } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
      }
    },

    async create(projectData: any) {
      try {
        const { data, error } = await supabase
          .from('projects')
          .insert([projectData])
          .select()
          .single();
        
        if (error) throw error;
        
        return data;
      } catch (error) {
        console.error('Error creating project:', error);
        throw error;
      }
    }
  }
};

// Helper functions to transform data between frontend and database formats
function transformDatabaseUser(dbUser: any): User {
  return {
    id: dbUser.id,
    email: dbUser.email,
    firstName: dbUser.first_name || '',
    lastName: dbUser.last_name || '',
    role: dbUser.role,
    avatar: dbUser.avatar_url,
    createdAt: dbUser.created_at,
    isActive: dbUser.is_active,
    profileCompleted: dbUser.profile_completed,
    phoneNumber: dbUser.phone_number,
    country: dbUser.country,
    company: dbUser.company,
    skills: dbUser.skills,
    university: dbUser.university,
    studentId: dbUser.student_id,
    experience: dbUser.experience
  };
}

function transformUserForDatabase(user: Partial<User>): any {
  return {
    id: user.id,
    email: user.email,
    first_name: user.firstName,
    last_name: user.lastName,
    role: user.role,
    avatar_url: user.avatar,
    is_active: user.isActive,
    profile_completed: user.profileCompleted,
    phone_number: user.phoneNumber,
    country: user.country,
    company: user.company,
    skills: user.skills,
    university: user.university,
    student_id: user.studentId,
    experience: user.experience
  };
}