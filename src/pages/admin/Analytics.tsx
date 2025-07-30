import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Calendar,
  Download,
  RefreshCw,
  Target,
  Activity
} from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Analytics = () => {
  const [timeframe, setTimeframe] = useState("7d");

  // Mock analytics data
  const userGrowthData = [
    { date: '2024-01-18', users: 120, active: 89 },
    { date: '2024-01-19', users: 125, active: 95 },
    { date: '2024-01-20', users: 132, active: 101 },
    { date: '2024-01-21', users: 138, active: 108 },
    { date: '2024-01-22', users: 145, active: 115 },
    { date: '2024-01-23', users: 152, active: 122 },
    { date: '2024-01-24', users: 158, active: 128 },
    { date: '2024-01-25', users: 165, active: 135 }
  ];

  const revenueData = [
    { date: '2024-01-18', revenue: 2500, commissions: 250 },
    { date: '2024-01-19', revenue: 3200, commissions: 320 },
    { date: '2024-01-20', revenue: 2800, commissions: 280 },
    { date: '2024-01-21', revenue: 4100, commissions: 410 },
    { date: '2024-01-22', revenue: 3600, commissions: 360 },
    { date: '2024-01-23', revenue: 4800, commissions: 480 },
    { date: '2024-01-24', revenue: 5200, commissions: 520 },
    { date: '2024-01-25', revenue: 4900, commissions: 490 }
  ];

  const projectStatusData = [
    { name: 'Completed', value: 45, color: '#22c55e' },
    { name: 'In Progress', value: 32, color: '#3b82f6' },
    { name: 'Pending', value: 18, color: '#f59e0b' },
    { name: 'Cancelled', value: 5, color: '#ef4444' }
  ];

  const categoryData = [
    { category: 'Web Development', projects: 25, revenue: 15000 },
    { category: 'Mobile Apps', projects: 18, revenue: 12500 },
    { category: 'Design', projects: 22, revenue: 8500 },
    { category: 'Writing', projects: 15, revenue: 4200 },
    { category: 'Marketing', projects: 12, revenue: 6800 },
    { category: 'Data Analysis', projects: 8, revenue: 9200 }
  ];

  const analyticsStats = {
    totalUsers: 165,
    activeUsers: 135,
    totalRevenue: 32200,
    monthlyGrowth: 12.5,
    avgProjectValue: 890,
    completionRate: 85.2
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
        <div className="flex items-center space-x-2">
          <Tabs value={timeframe} onValueChange={setTimeframe}>
            <TabsList>
              <TabsTrigger value="7d">7 Days</TabsTrigger>
              <TabsTrigger value="30d">30 Days</TabsTrigger>
              <TabsTrigger value="90d">90 Days</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Users</p>
              <p className="text-2xl font-bold text-foreground">{analyticsStats.totalUsers}</p>
            </div>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Users</p>
              <p className="text-2xl font-bold text-foreground">{analyticsStats.activeUsers}</p>
            </div>
            <Activity className="h-8 w-8 text-green-600" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
              <p className="text-2xl font-bold text-foreground">${analyticsStats.totalRevenue.toLocaleString()}</p>
            </div>
            <DollarSign className="h-8 w-8 text-yellow-600" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Monthly Growth</p>
              <p className="text-2xl font-bold text-foreground">{analyticsStats.monthlyGrowth}%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-600" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Avg Project Value</p>
              <p className="text-2xl font-bold text-foreground">${analyticsStats.avgProjectValue}</p>
            </div>
            <Target className="h-8 w-8 text-orange-600" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Completion Rate</p>
              <p className="text-2xl font-bold text-foreground">{analyticsStats.completionRate}%</p>
            </div>
            <BarChart3 className="h-8 w-8 text-indigo-600" />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">User Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} name="Total Users" />
              <Line type="monotone" dataKey="active" stroke="#22c55e" strokeWidth={2} name="Active Users" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Revenue Chart */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Revenue Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="revenue" stackId="1" stroke="#f59e0b" fill="#f59e0b" name="Revenue" />
              <Area type="monotone" dataKey="commissions" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" name="Commissions" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Project Status Distribution */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Project Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={projectStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {projectStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Category Performance */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Category Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" angle={-45} textAnchor="end" height={60} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="projects" fill="#3b82f6" name="Projects" />
              <Bar dataKey="revenue" fill="#22c55e" name="Revenue ($)" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Performance Insights */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span className="font-medium text-foreground">Top Performing Category</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Web Development leads with 25 projects and $15K revenue
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-foreground">User Engagement</span>
            </div>
            <p className="text-sm text-muted-foreground">
              82% of users are actively using the platform
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-purple-600" />
              <span className="font-medium text-foreground">Conversion Rate</span>
            </div>
            <p className="text-sm text-muted-foreground">
              15% of visitors convert to registered users
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Analytics;