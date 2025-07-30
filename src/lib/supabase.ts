// Supabase client setup with manual configuration
import { createClient } from '@supabase/supabase-js'

// Manual Supabase configuration
const supabaseUrl = 'https://hchgpwsiamzdqyltljig.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjaGdwd3NpYW16ZHF5bHRsamlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NzE4NjUsImV4cCI6MjA2OTQ0Nzg2NX0.8Nn_2UjJLnAzPo6YO68K1Mxuu78ipFZ_YyibkSe1veY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database table names - ready for Supabase
export const TABLES = {
  USERS: 'users',
  PROJECTS: 'projects', 
  TRANSACTIONS: 'transactions',
  AUDIT_LOGS: 'audit_logs',
  PLATFORM_SETTINGS: 'platform_settings',
  COURSES: 'courses',
  ENROLLMENTS: 'enrollments',
  ASSIGNMENTS: 'assignments',
  CHAT_MESSAGES: 'chat_messages'
} as const

// RLS (Row Level Security) helper functions
export const getUserId = () => {
  // Will return authenticated user ID when Supabase is connected
  return null
}

export const checkUserRole = (allowedRoles: string[]) => {
  // Will check user role against RLS policies when Supabase is connected
  return true
}