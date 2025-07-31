import { User, UserRole } from '@/types/auth';
import { 
  PlatformSettings, 
  AuditLog, 
  Transaction, 
  UserManagementFilter, 
  DashboardStats 
} from '@/types/admin';
import { databaseService } from './databaseService';

// This service uses mock data until Supabase is connected
// When Supabase is integrated, replace mock calls with databaseService calls

export const adminService = {
  // Dashboard
  async getDashboardStats(): Promise<DashboardStats> {
    try {
      return await databaseService.analytics.getDashboardStats();
    } catch (error) {
      // Return empty stats when no backend is connected
      return {
        totalUsers: 0,
        activeUsers: 0,
        totalProjects: 0,
        completedProjects: 0,
        totalRevenue: 0,
        monthlyRevenue: 0,
        pendingDisputes: 0,
        newRegistrations: 0
      };
    }
  },

  // User Management
  async getUsers(filter?: UserManagementFilter): Promise<User[]> {
    try {
      return await databaseService.users.getAll(filter);
    } catch (error) {
      // Return empty array when no backend is connected
      return [];
    }
  },

  async createUser(userData: Partial<User>): Promise<User> {
    return await databaseService.users.create(userData);
  },

  async updateUser(userId: string, userData: Partial<User>): Promise<User> {
    return await databaseService.users.update(userId, userData);
  },

  async deleteUser(userId: string): Promise<void> {
    await databaseService.users.delete(userId);
  },

  // Platform Settings
  async getPlatformSettings(): Promise<PlatformSettings> {
    try {
      return await databaseService.settings.get();
    } catch (error) {
      // Return default settings when no backend is connected
      return {
        id: '1',
        commissionRate: 0,
        minProjectAmount: 0,
        maxProjectAmount: 0,
        supportEmail: '',
        maintenanceMode: false,
        registrationEnabled: true,
        featuredFreelancerSlots: 0,
        updatedAt: new Date().toISOString(),
        updatedBy: ''
      };
    }
  },

  async updatePlatformSettings(settings: Partial<PlatformSettings>): Promise<PlatformSettings> {
    return await databaseService.settings.update(settings);
  },

  // Audit Logs
  async getAuditLogs(limit = 50): Promise<AuditLog[]> {
    try {
      return await databaseService.auditLogs.getAll(limit);
    } catch (error) {
      // Return empty array when no backend is connected
      return [];
    }
  },

  // Financial Oversight
  async getTransactions(limit = 50): Promise<Transaction[]> {
    try {
      return await databaseService.transactions.getAll(limit);
    } catch (error) {
      // Return empty array when no backend is connected
      return [];
    }
  }
};