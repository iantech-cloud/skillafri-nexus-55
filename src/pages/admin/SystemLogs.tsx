import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, 
  AlertTriangle, 
  Info, 
  CheckCircle, 
  XCircle,
  Search,
  Download,
  RefreshCw,
  Filter,
  Calendar,
  User,
  Server
} from "lucide-react";

interface LogEntry {
  id: string;
  level: 'info' | 'warning' | 'error' | 'success';
  category: 'auth' | 'payment' | 'system' | 'user' | 'security';
  message: string;
  details?: string;
  userId?: string;
  userEmail?: string;
  ipAddress: string;
  timestamp: string;
  source: string;
}

const SystemLogs = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  useEffect(() => {
    // Mock log data
    const mockLogs: LogEntry[] = [
      {
        id: "LOG001",
        level: "info",
        category: "auth",
        message: "User login successful",
        details: "User authenticated via email/password",
        userId: "user123",
        userEmail: "john@example.com",
        ipAddress: "192.168.1.100",
        timestamp: "2024-01-25T10:30:00Z",
        source: "AuthService"
      },
      {
        id: "LOG002",
        level: "warning",
        category: "payment",
        message: "Payment processing delayed",
        details: "Payment gateway response time exceeded threshold",
        ipAddress: "192.168.1.50",
        timestamp: "2024-01-25T10:25:00Z",
        source: "PaymentProcessor"
      },
      {
        id: "LOG003",
        level: "error",
        category: "system",
        message: "Database connection timeout",
        details: "Failed to connect to primary database after 30 seconds",
        ipAddress: "192.168.1.10",
        timestamp: "2024-01-25T10:20:00Z",
        source: "DatabaseManager"
      },
      {
        id: "LOG004",
        level: "success",
        category: "user",
        message: "Profile update completed",
        details: "User profile information updated successfully",
        userId: "user456",
        userEmail: "sarah@example.com",
        ipAddress: "192.168.1.120",
        timestamp: "2024-01-25T10:15:00Z",
        source: "UserService"
      },
      {
        id: "LOG005",
        level: "error",
        category: "security",
        message: "Multiple failed login attempts",
        details: "5 consecutive failed login attempts detected",
        userEmail: "suspicious@example.com",
        ipAddress: "203.0.113.1",
        timestamp: "2024-01-25T10:10:00Z",
        source: "SecurityMonitor"
      },
      {
        id: "LOG006",
        level: "info",
        category: "system",
        message: "Backup completed successfully",
        details: "Daily database backup completed in 45 minutes",
        ipAddress: "192.168.1.10",
        timestamp: "2024-01-25T02:00:00Z",
        source: "BackupService"
      }
    ];
    setLogs(mockLogs);
  }, []);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'info': return 'bg-blue-100 text-blue-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'success': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'auth': return 'bg-purple-100 text-purple-800';
      case 'payment': return 'bg-orange-100 text-orange-800';
      case 'system': return 'bg-gray-100 text-gray-800';
      case 'user': return 'bg-blue-100 text-blue-800';
      case 'security': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'info': return <Info className="h-4 w-4" />;
      case 'warning': return <AlertTriangle className="h-4 w-4" />;
      case 'error': return <XCircle className="h-4 w-4" />;
      case 'success': return <CheckCircle className="h-4 w-4" />;
      default: return <Info className="h-4 w-4" />;
    }
  };

  const filteredLogs = logs.filter(log => {
    const matchesSearch = 
      log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.details?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.userEmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.source.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter === "all" || log.level === levelFilter;
    const matchesCategory = categoryFilter === "all" || log.category === categoryFilter;
    return matchesSearch && matchesLevel && matchesCategory;
  });

  const logStats = {
    total: logs.length,
    errors: logs.filter(log => log.level === 'error').length,
    warnings: logs.filter(log => log.level === 'warning').length,
    info: logs.filter(log => log.level === 'info').length
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">System Logs</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Logs
          </Button>
          <Button>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Log Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Logs</p>
              <p className="text-2xl font-bold text-foreground">{logStats.total}</p>
            </div>
            <Activity className="h-8 w-8 text-blue-600" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Errors</p>
              <p className="text-2xl font-bold text-foreground">{logStats.errors}</p>
            </div>
            <XCircle className="h-8 w-8 text-red-600" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Warnings</p>
              <p className="text-2xl font-bold text-foreground">{logStats.warnings}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-yellow-600" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Info</p>
              <p className="text-2xl font-bold text-foreground">{logStats.info}</p>
            </div>
            <Info className="h-8 w-8 text-green-600" />
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Activity Log</h3>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search logs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Tabs value={levelFilter} onValueChange={setLevelFilter}>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="error">Errors</TabsTrigger>
                  <TabsTrigger value="warning">Warnings</TabsTrigger>
                  <TabsTrigger value="info">Info</TabsTrigger>
                </TabsList>
              </Tabs>
              <Tabs value={categoryFilter} onValueChange={setCategoryFilter}>
                <TabsList>
                  <TabsTrigger value="all">All Categories</TabsTrigger>
                  <TabsTrigger value="auth">Auth</TabsTrigger>
                  <TabsTrigger value="payment">Payment</TabsTrigger>
                  <TabsTrigger value="system">System</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="space-y-4">
            {filteredLogs.map((log) => (
              <div key={log.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex items-center space-x-2 mt-1">
                      {getLevelIcon(log.level)}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-foreground">{log.message}</span>
                        <Badge className={getLevelColor(log.level)} variant="secondary">
                          {log.level}
                        </Badge>
                        <Badge className={getCategoryColor(log.category)} variant="outline">
                          {log.category}
                        </Badge>
                      </div>
                      {log.details && (
                        <p className="text-sm text-muted-foreground">{log.details}</p>
                      )}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(log.timestamp).toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Server className="h-3 w-3" />
                          <span>{log.source}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>IP: {log.ipAddress}</span>
                        </div>
                        {log.userEmail && (
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{log.userEmail}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SystemLogs;