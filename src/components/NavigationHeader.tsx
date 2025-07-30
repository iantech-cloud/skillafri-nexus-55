import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  LogOut, 
  User, 
  Settings, 
  Menu, 
  X,
  MessageCircle,
  Home,
  BookOpen,
  Briefcase,
  Users,
  Info,
  Phone
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";


interface NavigationHeaderProps {
  showBackToSite?: boolean;
}

const NavigationHeader = ({ showBackToSite = false }: NavigationHeaderProps) => {
  const { auth, logout } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const isAuthenticated = auth.isAuthenticated;
  const user = auth.user;

  const navigationItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Services", href: "/services", icon: Briefcase },
    { label: "Academic Support", href: "/academic-support", icon: BookOpen },
    { label: "Dev Hub", href: "/dev-hub", icon: Users },
    { label: "About", href: "/about", icon: Info },
    { label: "Contact", href: "/contact", icon: Phone },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  const getUserInitials = () => {
    if (!user) return "U";
    return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();
  };

  const getDashboardLink = () => {
    if (!user) return "/";
    switch (user.role) {
      case "super_admin":
        return "/admin/dashboard";
      case "client":
        return "/client/dashboard";
      case "freelancer":
        return "/freelancer/dashboard";
      case "student":
        return "/student/dashboard";
      default:
        return "/";
    }
  };

  return (
    <>
      <header className="border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SA</span>
              </div>
              <span className="font-bold text-xl text-foreground">SkillAfrica</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {!showBackToSite && navigationItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActivePath(item.href) 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {showBackToSite && (
                <Link
                  to="/"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  ← Back to Site
                </Link>
              )}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              {/* Live Chat Support - Hidden on mobile in header */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setChatOpen(!chatOpen)}
                className="hidden sm:flex text-muted-foreground hover:text-primary"
                title="Live Support Chat"
              >
                <MessageCircle className="h-5 w-5" />
              </Button>

              {isAuthenticated ? (
                <>
                  {/* Dashboard Link - Hidden on mobile */}
                  <Button asChild variant="ghost" size="sm" className="hidden sm:flex">
                    <Link to={getDashboardLink()}>Dashboard</Link>
                  </Button>

                  {/* User Menu - Hidden on mobile */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="hidden sm:flex relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user?.avatar} alt={user?.firstName} />
                          <AvatarFallback>{getUserInitials()}</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <div className="flex items-center justify-start gap-2 p-2">
                        <div className="flex flex-col space-y-1 leading-none">
                          <p className="font-medium">{user?.firstName} {user?.lastName}</p>
                          <p className="w-[200px] truncate text-sm text-muted-foreground">
                            {user?.email}
                          </p>
                          <p className="text-xs text-muted-foreground capitalize">
                            {user?.role.replace('_', ' ')}
                          </p>
                        </div>
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link to="/profile" className="w-full cursor-pointer">
                          <User className="mr-2 h-4 w-4" />
                          Profile
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/settings" className="w-full cursor-pointer">
                          <Settings className="mr-2 h-4 w-4" />
                          Settings
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="cursor-pointer text-red-600 focus:text-red-600"
                        onClick={logout}
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <div className="hidden sm:flex items-center space-x-2">
                  <Button asChild variant="ghost">
                    <Link to="/auth/login">Sign In</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/auth/register">Get Started</Link>
                  </Button>
                </div>
              )}

              {/* Mobile Hamburger Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="sm:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          {mobileMenuOpen && (
            <div className="sm:hidden border-t border-border py-4">
              <nav className="flex flex-col space-y-2">
                {/* Navigation Items */}
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      isActivePath(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                ))}
                
                {/* Mobile-only actions */}
                <div className="border-t border-border pt-2 mt-2">
                  {/* Live Chat Support */}
                  <button
                    onClick={() => {
                      setChatOpen(!chatOpen);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors w-full"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Live Support</span>
                  </button>
                  
                  {isAuthenticated ? (
                    <>
                      {/* Dashboard Link */}
                      <Link
                        to={getDashboardLink()}
                        className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <User className="h-4 w-4" />
                        <span>Dashboard</span>
                      </Link>
                      
                      {/* Profile */}
                      <Link
                        to="/profile"
                        className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <User className="h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                      
                      {/* Settings */}
                      <Link
                        to="/settings"
                        className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                      
                      {/* User Info */}
                      <div className="px-4 py-3 border-t border-border mt-2">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user?.avatar} alt={user?.firstName} />
                            <AvatarFallback>{getUserInitials()}</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <p className="text-sm font-medium">{user?.firstName} {user?.lastName}</p>
                            <p className="text-xs text-muted-foreground">{user?.email}</p>
                            <p className="text-xs text-muted-foreground capitalize">
                              {user?.role.replace('_', ' ')}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Logout */}
                      <button
                        onClick={() => {
                          logout();
                          setMobileMenuOpen(false);
                        }}
                        className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors w-full mt-2"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Log out</span>
                      </button>
                    </>
                  ) : (
                    <div className="px-4 py-3 space-y-2">
                      <Link
                        to="/auth/login"
                        className="block w-full text-center py-2 px-4 text-sm font-medium text-muted-foreground hover:text-primary border border-border rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/auth/register"
                        className="block w-full text-center py-2 px-4 text-sm font-medium bg-primary text-primary-foreground rounded-md transition-colors hover:bg-primary/90"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Get Started
                      </Link>
                    </div>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Live Chat Widget */}
      {chatOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-card border border-border rounded-lg shadow-lg z-50 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-semibold text-foreground">Live Support</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setChatOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  👋 Hello! How can we help you today?
                </p>
              </div>
              <div className="text-center text-sm text-muted-foreground">
                Connect with our support team for instant help
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background"
              />
              <Button size="sm">Send</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationHeader;