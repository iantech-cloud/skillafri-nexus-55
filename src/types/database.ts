// Database types - ready for Supabase integration
// These types match what the Supabase tables should look like

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          first_name: string
          last_name: string
          role: 'client' | 'freelancer' | 'student' | 'super_admin'
          avatar_url: string | null
          phone_number: string | null
          country: string | null
          company: string | null
          skills: string[] | null
          university: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          first_name: string
          last_name: string
          role: 'client' | 'freelancer' | 'student' | 'super_admin'
          avatar_url?: string | null
          phone_number?: string | null
          country?: string | null
          company?: string | null
          skills?: string[] | null
          university?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string
          last_name?: string
          role?: 'client' | 'freelancer' | 'student' | 'super_admin'
          avatar_url?: string | null
          phone_number?: string | null
          country?: string | null
          company?: string | null
          skills?: string[] | null
          university?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          title: string
          description: string
          client_id: string
          freelancer_id: string | null
          budget: number
          status: 'open' | 'in_progress' | 'completed' | 'cancelled'
          skills_required: string[]
          deadline: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          client_id: string
          freelancer_id?: string | null
          budget: number
          status?: 'open' | 'in_progress' | 'completed' | 'cancelled'
          skills_required: string[]
          deadline?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          client_id?: string
          freelancer_id?: string | null
          budget?: number
          status?: 'open' | 'in_progress' | 'completed' | 'cancelled'
          skills_required?: string[]
          deadline?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      transactions: {
        Row: {
          id: string
          client_id: string
          freelancer_id: string
          project_id: string
          amount: number
          commission: number
          status: 'pending' | 'completed' | 'failed'
          payment_method: string
          created_at: string
          completed_at: string | null
        }
        Insert: {
          id?: string
          client_id: string
          freelancer_id: string
          project_id: string
          amount: number
          commission: number
          status?: 'pending' | 'completed' | 'failed'
          payment_method: string
          created_at?: string
          completed_at?: string | null
        }
        Update: {
          id?: string
          client_id?: string
          freelancer_id?: string
          project_id?: string
          amount?: number
          commission?: number
          status?: 'pending' | 'completed' | 'failed'
          payment_method?: string
          created_at?: string
          completed_at?: string | null
        }
      }
      courses: {
        Row: {
          id: string
          title: string
          description: string
          category: string
          level: 'beginner' | 'intermediate' | 'advanced'
          duration: string
          price: number
          instructor_id: string
          rating: number
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          category: string
          level: 'beginner' | 'intermediate' | 'advanced'
          duration: string
          price: number
          instructor_id: string
          rating?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          category?: string
          level?: 'beginner' | 'intermediate' | 'advanced'
          duration?: string
          price?: number
          instructor_id?: string
          rating?: number
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      enrollments: {
        Row: {
          id: string
          user_id: string
          course_id: string
          status: 'enrolled' | 'in_progress' | 'completed' | 'dropped'
          progress: number
          enrolled_at: string
          completed_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          course_id: string
          status?: 'enrolled' | 'in_progress' | 'completed' | 'dropped'
          progress?: number
          enrolled_at?: string
          completed_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          course_id?: string
          status?: 'enrolled' | 'in_progress' | 'completed' | 'dropped'
          progress?: number
          enrolled_at?: string
          completed_at?: string | null
        }
      }
      assignments: {
        Row: {
          id: string
          course_id: string
          user_id: string
          title: string
          description: string
          due_date: string
          submitted_at: string | null
          grade: number | null
          feedback: string | null
          created_at: string
        }
        Insert: {
          id?: string
          course_id: string
          user_id: string
          title: string
          description: string
          due_date: string
          submitted_at?: string | null
          grade?: number | null
          feedback?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          course_id?: string
          user_id?: string
          title?: string
          description?: string
          due_date?: string
          submitted_at?: string | null
          grade?: number | null
          feedback?: string | null
          created_at?: string
        }
      }
      platform_settings: {
        Row: {
          id: string
          commission_rate: number
          min_project_amount: number
          max_project_amount: number
          support_email: string
          maintenance_mode: boolean
          registration_enabled: boolean
          featured_freelancer_slots: number
          updated_at: string
          updated_by: string
        }
        Insert: {
          id?: string
          commission_rate: number
          min_project_amount: number
          max_project_amount: number
          support_email: string
          maintenance_mode?: boolean
          registration_enabled?: boolean
          featured_freelancer_slots: number
          updated_at?: string
          updated_by: string
        }
        Update: {
          id?: string
          commission_rate?: number
          min_project_amount?: number
          max_project_amount?: number
          support_email?: string
          maintenance_mode?: boolean
          registration_enabled?: boolean
          featured_freelancer_slots?: number
          updated_at?: string
          updated_by?: string
        }
      }
      audit_logs: {
        Row: {
          id: string
          user_id: string
          user_email: string
          action: string
          resource: string
          resource_id: string | null
          details: string | null
          ip_address: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          user_email: string
          action: string
          resource: string
          resource_id?: string | null
          details?: string | null
          ip_address?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          user_email?: string
          action?: string
          resource?: string
          resource_id?: string | null
          details?: string | null
          ip_address?: string | null
          created_at?: string
        }
      }
      chat_messages: {
        Row: {
          id: string
          sender_id: string
          receiver_id: string | null
          project_id: string | null
          message: string
          message_type: 'text' | 'file' | 'image'
          is_read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          sender_id: string
          receiver_id?: string | null
          project_id?: string | null
          message: string
          message_type?: 'text' | 'file' | 'image'
          is_read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          sender_id?: string
          receiver_id?: string | null
          project_id?: string | null
          message?: string
          message_type?: 'text' | 'file' | 'image'
          is_read?: boolean
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'client' | 'freelancer' | 'student' | 'super_admin'
      project_status: 'open' | 'in_progress' | 'completed' | 'cancelled'
      transaction_status: 'pending' | 'completed' | 'failed'
      enrollment_status: 'enrolled' | 'in_progress' | 'completed' | 'dropped'
      message_type: 'text' | 'file' | 'image'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}