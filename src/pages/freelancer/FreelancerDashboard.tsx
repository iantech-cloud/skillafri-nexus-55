import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Briefcase, 
  DollarSign, 
  Clock, 
  Star,
  Search,
  Plus,
  Calendar,
  TrendingUp,
  FileText,
  MessageSquare,
  CheckCircle,
  Eye,
  Edit
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  client: string;
  budget: number;
  status: 'active' | 'completed' | 'pending' | 'in-progress';
  progress: number;
  deadline: string;
  category: string;
  paymentStatus: 'pending' | 'partial' | 'completed';
}

interface Proposal {
  id: string;
  projectTitle: string;
  client: string;
  bidAmount: number;
  status: 'pending' | 'accepted' | 'rejected';
  submittedDate: string;
  category: string;
}

const FreelancerDashboard = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with real API calls when backend is integrated
    // const fetchFreelancerData = async () => {
    //   const userProjects = await databaseService.projects.getByFreelancerId(userId);
    //   const userProposals = await databaseService.proposals.getByFreelancerId(userId);
    //   setProjects(userProjects);
    //   setProposals(userProposals);
    // };

    // For now, set empty data until backend is integrated
    setTimeout(() => {
      setProjects([]);
      setProposals([]);
      setLoading(false);
    }, 1000);
  }, []);
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'completed': case 'accepted': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'partial': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const freelancerStats = {
    totalProjects: projects.length,
    activeProjects: projects.filter(p => p.status === 'active' || p.status === 'in-progress').length,
    completedProjects: projects.filter(p => p.status === 'completed').length,
    totalEarnings: projects.filter(p => p.paymentStatus === 'completed').reduce((sum, p) => sum + p.budget, 0),
    pendingEarnings: projects.filter(p => p.paymentStatus === 'pending' || p.paymentStatus === 'partial').reduce((sum, p) => sum + p.budget, 0),
    proposalsSent: proposals.length,
    avgProjectValue: projects.length > 0 ? projects.reduce((sum, p) => sum + p.budget, 0) / projects.length : 0,
    successRate: 0
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Freelancer Dashboard</h1>
            <p className="text-muted-foreground">Manage your projects and grow your freelance business.</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Search className="h-4 w-4 mr-2" />
              Browse Jobs
            </Button>
            <Button>
              <Edit className="h-4 w-4 mr-2" />
              Update Profile
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Projects</p>
                <p className="text-2xl font-bold text-foreground">{freelancerStats.totalProjects}</p>
              </div>
              <Briefcase className="h-8 w-8 text-blue-600" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active</p>
                <p className="text-2xl font-bold text-foreground">{freelancerStats.activeProjects}</p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold text-foreground">{freelancerStats.completedProjects}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Earnings</p>
                <p className="text-2xl font-bold text-foreground">${freelancerStats.totalEarnings.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold text-foreground">${freelancerStats.pendingEarnings.toLocaleString()}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Proposals</p>
                <p className="text-2xl font-bold text-foreground">{freelancerStats.proposalsSent}</p>
              </div>
              <FileText className="h-8 w-8 text-purple-600" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Value</p>
                <p className="text-2xl font-bold text-foreground">${Math.round(freelancerStats.avgProjectValue).toLocaleString()}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-indigo-600" />
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                <p className="text-2xl font-bold text-foreground">{freelancerStats.successRate}%</p>
              </div>
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
          </Card>
        </div>

        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList>
            <TabsTrigger value="projects">My Projects</TabsTrigger>
            <TabsTrigger value="proposals">Proposals</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">My Projects</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                {loading ? (
                  // Loading skeletons
                  Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="border border-border rounded-lg p-4">
                      <div className="animate-pulse space-y-3">
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                        <div className="h-3 bg-muted rounded w-1/2"></div>
                        <div className="h-2 bg-muted rounded w-full"></div>
                      </div>
                    </div>
                  ))
                ) : filteredProjects.length === 0 ? (
                  <div className="text-center py-8">
                    <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No projects yet</p>
                    <p className="text-sm text-muted-foreground">Start applying to projects to get your first job</p>
                    <Button className="mt-4">
                      <Search className="h-4 w-4 mr-2" />
                      Browse Projects
                    </Button>
                  </div>
                ) : (
                  filteredProjects.map((project) => (
                    <div key={project.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-medium text-foreground">{project.title}</h4>
                            <Badge className={getStatusColor(project.status)} variant="secondary">
                              {project.status}
                            </Badge>
                            <Badge className={getPaymentStatusColor(project.paymentStatus)} variant="outline">
                              {project.paymentStatus} payment
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            Client: {project.client} • {project.category} • ${project.budget.toLocaleString()}
                          </p>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>Due: {project.deadline}</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between text-sm mb-1">
                                <span>Progress</span>
                                <span>{project.progress}%</span>
                              </div>
                              <div className="w-full bg-muted rounded-full h-2">
                                <div 
                                  className="bg-primary h-2 rounded-full transition-all duration-300" 
                                  style={{ width: `${project.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Message
                          </Button>
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-1" />
                            Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="proposals" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">My Proposals</h3>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Submit New Proposal
                </Button>
              </div>
              
              <div className="space-y-4">
                {loading ? (
                  // Loading skeletons
                  Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="border border-border rounded-lg p-4">
                      <div className="animate-pulse space-y-3">
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                        <div className="h-3 bg-muted rounded w-1/2"></div>
                      </div>
                    </div>
                  ))
                ) : proposals.length === 0 ? (
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No proposals yet</p>
                    <p className="text-sm text-muted-foreground">Submit proposals to start winning projects</p>
                    <Button className="mt-4">
                      <Plus className="h-4 w-4 mr-2" />
                      Submit Proposal
                    </Button>
                  </div>
                ) : (
                  proposals.map((proposal) => (
                    <div key={proposal.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h4 className="font-medium text-foreground">{proposal.projectTitle}</h4>
                            <Badge className={getStatusColor(proposal.status)} variant="secondary">
                              {proposal.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            Client: {proposal.client} • {proposal.category} • Bid: ${proposal.bidAmount.toLocaleString()}
                          </p>
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>Submitted: {proposal.submittedDate}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          {proposal.status === 'pending' && (
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Earnings Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Total Earned</p>
                  <p className="text-2xl font-bold text-green-600">${freelancerStats.totalEarnings.toLocaleString()}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">${freelancerStats.pendingEarnings.toLocaleString()}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Available for Withdrawal</p>
                  <p className="text-2xl font-bold text-blue-600">${(freelancerStats.totalEarnings * 0.8).toLocaleString()}</p>
                </div>
              </div>
              <div className="mt-6">
                <Button>
                  <DollarSign className="h-4 w-4 mr-2" />
                  Withdraw Earnings
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Profile Overview</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Profile Completion</p>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Client Rating</p>
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      <span className="text-lg font-bold">4.8</span>
                      <span className="text-sm text-muted-foreground">(24 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    View Public Profile
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FreelancerDashboard;