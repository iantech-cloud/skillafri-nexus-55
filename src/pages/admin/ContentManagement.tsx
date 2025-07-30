import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Image, 
  Video, 
  Plus, 
  Search, 
  Edit, 
  Trash2,
  Eye,
  Download
} from "lucide-react";

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'tutorial' | 'documentation' | 'media';
  status: 'published' | 'draft' | 'archived';
  author: string;
  createdAt: string;
  updatedAt: string;
  views: number;
}

const ContentManagement = () => {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");

  useEffect(() => {
    // Mock content data
    const mockContent: ContentItem[] = [
      {
        id: "1",
        title: "Getting Started with React Development",
        type: "tutorial",
        status: "published",
        author: "John Admin",
        createdAt: "2024-01-15",
        updatedAt: "2024-01-20",
        views: 1250
      },
      {
        id: "2",
        title: "Platform Terms of Service",
        type: "documentation",
        status: "published",
        author: "Legal Team",
        createdAt: "2024-01-10",
        updatedAt: "2024-01-18",
        views: 890
      },
      {
        id: "3",
        title: "How to Find Quality Freelancers",
        type: "blog",
        status: "draft",
        author: "Sarah Writer",
        createdAt: "2024-01-22",
        updatedAt: "2024-01-22",
        views: 0
      },
      {
        id: "4",
        title: "Platform Introduction Video",
        type: "media",
        status: "published",
        author: "Marketing Team",
        createdAt: "2024-01-05",
        updatedAt: "2024-01-12",
        views: 2100
      }
    ];
    setContent(mockContent);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <FileText className="h-4 w-4" />;
      case 'tutorial': return <FileText className="h-4 w-4" />;
      case 'documentation': return <FileText className="h-4 w-4" />;
      case 'media': return <Video className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || item.type === selectedType;
    return matchesSearch && matchesType;
  });

  const contentStats = {
    total: content.length,
    published: content.filter(item => item.status === 'published').length,
    drafts: content.filter(item => item.status === 'draft').length,
    archived: content.filter(item => item.status === 'archived').length
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Content Management</h1>
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Create Content</span>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Content</p>
              <p className="text-2xl font-bold text-foreground">{contentStats.total}</p>
            </div>
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Published</p>
              <p className="text-2xl font-bold text-foreground">{contentStats.published}</p>
            </div>
            <Eye className="h-8 w-8 text-green-600" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Drafts</p>
              <p className="text-2xl font-bold text-foreground">{contentStats.drafts}</p>
            </div>
            <Edit className="h-8 w-8 text-yellow-600" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Archived</p>
              <p className="text-2xl font-bold text-foreground">{contentStats.archived}</p>
            </div>
            <Trash2 className="h-8 w-8 text-gray-600" />
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Content Library</h3>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Tabs value={selectedType} onValueChange={setSelectedType}>
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="blog">Blog</TabsTrigger>
                  <TabsTrigger value="tutorial">Tutorial</TabsTrigger>
                  <TabsTrigger value="documentation">Docs</TabsTrigger>
                  <TabsTrigger value="media">Media</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="space-y-4">
            {filteredContent.map((item) => (
              <div key={item.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      {getTypeIcon(item.type)}
                      <span className="font-medium text-foreground">{item.title}</span>
                    </div>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                    <Badge variant="outline" className="capitalize">
                      {item.type}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      {item.views}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  <span>By {item.author}</span>
                  <span className="mx-2">•</span>
                  <span>Created {item.createdAt}</span>
                  <span className="mx-2">•</span>
                  <span>Updated {item.updatedAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContentManagement;