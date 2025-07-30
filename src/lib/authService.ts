// Authentication service - ready for Supabase integration
import { LoginCredentials, RegisterData, User, UserRole } from '@/types/auth'
import { supabase } from './supabase'

export const authService = {
  // These functions will use Supabase auth when integration is active
  
  async signUp(data: RegisterData): Promise<{ user: User | null; error: string | null }> {
    // TODO: Implement with Supabase Auth
    // const { data: authData, error } = await supabase.auth.signUp({
    //   email: data.email,
    //   password: data.password,
    //   options: {
    //     data: {
    //       first_name: data.firstName,
    //       last_name: data.lastName,
    //       role: data.role,
    //       company: data.company,
    //       skills: data.skills,
    //       university: data.university,
    //       phone_number: data.phoneNumber,
    //       country: data.country
    //     }
    //   }
    // })
    
    throw new Error('Authentication requires Supabase integration. Click the Supabase button to connect.')
  },

  async signIn(credentials: LoginCredentials): Promise<{ user: User | null; error: string | null }> {
    // TODO: Implement with Supabase Auth
    // const { data, error } = await supabase.auth.signInWithPassword({
    //   email: credentials.email,
    //   password: credentials.password
    // })
    
    throw new Error('Authentication requires Supabase integration. Click the Supabase button to connect.')
  },

  async signOut(): Promise<{ error: string | null }> {
    // TODO: Implement with Supabase Auth
    // const { error } = await supabase.auth.signOut()
    
    // For now, just clear local storage
    localStorage.removeItem('user')
    return { error: null }
  },

  async getCurrentUser(): Promise<User | null> {
    // TODO: Implement with Supabase Auth
    // const { data: { user }, error } = await supabase.auth.getUser()
    
    // For now, check localStorage
    const storedUser = localStorage.getItem('user')
    return storedUser ? JSON.parse(storedUser) : null
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

  async resetPassword(email: string): Promise<{ error: string | null }> {
    // TODO: Implement with Supabase Auth
    // const { error } = await supabase.auth.resetPasswordForEmail(email, {
    //   redirectTo: `${window.location.origin}/auth/reset-password`
    // })
    
    throw new Error('Password reset requires Supabase integration.')
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