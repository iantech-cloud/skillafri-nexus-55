import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  CreditCard, 
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Clock,
  Search,
  Download,
  Filter
} from "lucide-react";

interface Transaction {
  id: string;
  type: 'payment' | 'refund' | 'commission' | 'withdrawal';
  amount: number;
  status: 'completed' | 'pending' | 'failed' | 'disputed';
  client: string;
  freelancer: string;
  project: string;
  date: string;
  paymentMethod: string;
}

const FinancialOversight = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    // Mock transaction data
    const mockTransactions: Transaction[] = [
      {
        id: "TXN001",
        type: "payment",
        amount: 1250.00,
        status: "completed",
        client: "Tech Startup Inc",
        freelancer: "John Developer",
        project: "E-commerce Website",
        date: "2024-01-25",
        paymentMethod: "Credit Card"
      },
      {
        id: "TXN002",
        type: "commission",
        amount: 125.00,
        status: "completed",
        client: "Tech Startup Inc",
        freelancer: "Platform",
        project: "E-commerce Website",
        date: "2024-01-25",
        paymentMethod: "Auto"
      },
      {
        id: "TXN003",
        type: "payment",
        amount: 750.00,
        status: "pending",
        client: "Marketing Agency",
        freelancer: "Sarah Designer",
        project: "Brand Identity Design",
        date: "2024-01-24",
        paymentMethod: "Bank Transfer"
      },
      {
        id: "TXN004",
        type: "refund",
        amount: 500.00,
        status: "disputed",
        client: "Small Business",
        freelancer: "Mike Writer",
        project: "Content Writing",
        date: "2024-01-23",
        paymentMethod: "Credit Card"
      },
      {
        id: "TXN005",
        type: "withdrawal",
        amount: 2100.00,
        status: "completed",
        client: "Platform",
        freelancer: "Jane Freelancer",
        project: "Withdrawal Request",
        date: "2024-01-22",
        paymentMethod: "Bank Transfer"
      }
    ];
    setTransactions(mockTransactions);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'disputed': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'payment': return 'bg-blue-100 text-blue-800';
      case 'commission': return 'bg-purple-100 text-purple-800';
      case 'refund': return 'bg-red-100 text-red-800';
      case 'withdrawal': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'failed': return <AlertTriangle className="h-4 w-4" />;
      case 'disputed': return <AlertTriangle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = 
      transaction.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.freelancer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || transaction.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const financialStats = {
    totalRevenue: transactions
      .filter(t => t.type === 'payment' && t.status === 'completed')
      .reduce((sum, t) => sum + t.amount, 0),
    totalCommissions: transactions
      .filter(t => t.type === 'commission' && t.status === 'completed')
      .reduce((sum, t) => sum + t.amount, 0),
    pendingPayments: transactions
      .filter(t => t.status === 'pending')
      .reduce((sum, t) => sum + t.amount, 0),
    disputedAmount: transactions
      .filter(t => t.status === 'disputed')
      .reduce((sum, t) => sum + t.amount, 0)
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Financial Oversight</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Data
          </Button>
        </div>
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
              <p className="text-2xl font-bold text-foreground">
                ${financialStats.totalRevenue.toLocaleString()}
              </p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Platform Commissions</p>
              <p className="text-2xl font-bold text-foreground">
                ${financialStats.totalCommissions.toLocaleString()}
              </p>
            </div>
            <DollarSign className="h-8 w-8 text-purple-600" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Pending Payments</p>
              <p className="text-2xl font-bold text-foreground">
                ${financialStats.pendingPayments.toLocaleString()}
              </p>
            </div>
            <Clock className="h-8 w-8 text-yellow-600" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Disputed Amount</p>
              <p className="text-2xl font-bold text-foreground">
                ${financialStats.disputedAmount.toLocaleString()}
              </p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Transaction History</h3>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Tabs value={statusFilter} onValueChange={setStatusFilter}>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="disputed">Disputed</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="space-y-4">
            {filteredTransactions.map((transaction) => (
              <div key={transaction.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(transaction.status)}
                      <span className="font-medium text-foreground">{transaction.id}</span>
                    </div>
                    <Badge className={getTypeColor(transaction.type)} variant="secondary">
                      {transaction.type}
                    </Badge>
                    <Badge className={getStatusColor(transaction.status)}>
                      {transaction.status}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-semibold text-foreground">
                      ${transaction.amount.toLocaleString()}
                    </span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                  <div>
                    <span className="font-medium">Client:</span> {transaction.client}
                  </div>
                  <div>
                    <span className="font-medium">Freelancer:</span> {transaction.freelancer}
                  </div>
                  <div>
                    <span className="font-medium">Project:</span> {transaction.project}
                  </div>
                  <div>
                    <span className="font-medium">Payment Method:</span> {transaction.paymentMethod}
                  </div>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  <span className="font-medium">Date:</span> {transaction.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FinancialOversight;