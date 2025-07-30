import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import DevHub from "./pages/DevHub";
import AcademicSupport from "./pages/AcademicSupport";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ClientRegister from "./pages/auth/ClientRegister";
import FreelancerRegister from "./pages/auth/FreelancerRegister";
import StudentRegister from "./pages/auth/StudentRegister";
import ForgotPassword from "./pages/auth/ForgotPassword";
import MagicLinkRegister from "./pages/auth/MagicLinkRegister";
import AuthCallback from "./pages/auth/AuthCallback";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagement from "./pages/admin/UserManagement";
import ContentManagement from "./pages/admin/ContentManagement";
import FinancialOversight from "./pages/admin/FinancialOversight";
import PlatformSettings from "./pages/admin/PlatformSettings";
import SystemLogs from "./pages/admin/SystemLogs";
import Analytics from "./pages/admin/Analytics";
import ChatManagement from "./pages/admin/ChatManagement";
import AdminLayout from "./components/layouts/AdminLayout";
import StudentDashboard from "./pages/student/StudentDashboard";
import ClientDashboard from "./pages/client/ClientDashboard";
import FreelancerDashboard from "./pages/freelancer/FreelancerDashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./components/AuthProvider";
import { UserRole } from "./types/auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/dev-hub" element={<DevHub />} />
              <Route path="/academic-support" element={<AcademicSupport />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<MagicLinkRegister />} />
              <Route path="/auth/register/client" element={<ClientRegister />} />
              <Route path="/auth/register/freelancer" element={<FreelancerRegister />} />
              <Route path="/auth/register/student" element={<StudentRegister />} />
              <Route path="/auth/forgot-password" element={<ForgotPassword />} />
              <Route path="/auth/callback" element={<AuthCallback />} />
              
              {/* User Dashboards */}
              <Route 
                path="/student/dashboard" 
                element={
                  <ProtectedRoute allowedRoles={[UserRole.Student]}>
                    <StudentDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute allowedRoles={[UserRole.Student, UserRole.Client, UserRole.Freelancer, UserRole.SuperAdmin]}>
                    <StudentDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/client/dashboard" 
                element={
                  <ProtectedRoute allowedRoles={[UserRole.Client]}>
                    <ClientDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/freelancer/dashboard" 
                element={
                  <ProtectedRoute allowedRoles={[UserRole.Freelancer]}>
                    <FreelancerDashboard />
                  </ProtectedRoute>
                } 
              />
              
              {/* Admin Routes */}
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute allowedRoles={[UserRole.SuperAdmin]}>
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="users" element={<UserManagement />} />
                <Route path="content" element={<ContentManagement />} />
                <Route path="financial" element={<FinancialOversight />} />
                <Route path="settings" element={<PlatformSettings />} />
                <Route path="logs" element={<SystemLogs />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="chat" element={<ChatManagement />} />
              </Route>
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
