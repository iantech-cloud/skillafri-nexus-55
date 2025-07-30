// Authentication service - ready for Supabase integration
import { LoginCredentials, RegisterData, User, UserRole } from '@/types/auth'
import { supabase } from './supabase'

export const authService = {
  async signUp(data: RegisterData): Promise<{ user: User | null; error: string | null }> {
    try {
      const { data: authData, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          emailRedirectTo: `http://skillafrica.online/auth/callback`,
          data: {
            first_name: data.firstName,
            last_name: data.lastName,
            role: data.role,
            company: data.company,
            skills: data.skills,
            university: data.university,
            phone_number: data.phoneNumber,
            country: data.country,
            profile_completed: false
          }
        }
      })
      
      if (error) throw error
      
      if (authData?.user) {
        const user = transformSupabaseUser(authData.user)
        return { user, error: null }
      }
      
      return { user: null, error: null }
    } catch (error: any) {
      return { user: null, error: error.message }
    }
  },

  async signIn(credentials: LoginCredentials): Promise<{ user: User | null; error: string | null }> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password
      })
      
      if (error) throw error
      
      if (data?.user) {
        const user = transformSupabaseUser(data.user)
        return { user, error: null }
      }
      
      return { user: null, error: null }
    } catch (error: any) {
      return { user: null, error: error.message }
    }
  },

  async signOut(): Promise<{ error: string | null }> {
    try {
      const { error } = await supabase.auth.signOut()
      localStorage.removeItem('user')
      return { error: error?.message || null }
    } catch (error: any) {
      return { error: error.message }
    }
  },

  async getCurrentUser(): Promise<User | null> {
    try {
      const { data: { user }, error } = await supabase.auth.getUser()
      
      if (error || !user) {
        // Fallback to localStorage
        const storedUser = localStorage.getItem('user')
        return storedUser ? JSON.parse(storedUser) : null
      }
      
      return transformSupabaseUser(user)
    } catch (error) {
      const storedUser = localStorage.getItem('user')
      return storedUser ? JSON.parse(storedUser) : null
    }
  },

  async sendMagicLink(email: string): Promise<{ error: string | null }> {
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: `http://skillafrica.online/auth/callback`
        }
      })
      
      if (error) throw error
      return { error: null }
    } catch (error: any) {
      return { error: error.message }
    }
  },

  async sendMagicLinkWithRole(email: string, role: string): Promise<{ error: string | null }> {
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: `http://skillafrica.online/auth/callback`,
          data: {
            role: role,
            profile_completed: false
          }
        }
      })
      
      if (error) throw error
      return { error: null }
    } catch (error: any) {
      return { error: error.message }
    }
  },

  async updateProfile(updates: Partial<User>): Promise<{ error: string | null }> {
    try {
      const { error } = await supabase.auth.updateUser({
        data: {
          ...updates,
          profile_completed: true
        }
      })
      
      if (error) throw error
      return { error: null }
    } catch (error: any) {
      return { error: error.message }
    }
  },

  async resetPassword(email: string): Promise<{ error: string | null }> {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `http://skillafrica.online/auth/reset-password`
      })
      
      if (error) throw error
      return { error: null }
    } catch (error: any) {
      return { error: error.message }
    }
  },

  // Listen to auth state changes
  onAuthStateChange(callback: (user: User | null) => void) {
    return supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        const user = transformSupabaseUser(session.user);
        callback(user);
      } else {
        callback(null);
      }
    });
  }
}

// Helper function to transform Supabase user to our User type
const transformSupabaseUser = (supabaseUser: any): User => {
  return {
    id: supabaseUser.id,
    email: supabaseUser.email,
    firstName: supabaseUser.user_metadata?.first_name || '',
    lastName: supabaseUser.user_metadata?.last_name || '',
    role: supabaseUser.user_metadata?.role || UserRole.Client,
    avatar: supabaseUser.user_metadata?.avatar_url,
    createdAt: supabaseUser.created_at,
    isActive: true
  }
}