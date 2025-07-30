import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Settings, 
  DollarSign, 
  Mail, 
  Shield, 
  Globe, 
  Bell,
  Save,
  RefreshCw,
  Users,
  Wrench
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PlatformConfig {
  // General Settings
  siteName: string;
  siteDescription: string;
  supportEmail: string;
  contactPhone: string;
  
  // Financial Settings
  commissionRate: number;
  minProjectAmount: number;
  maxProjectAmount: number;
  withdrawalThreshold: number;
  processingFee: number;
  
  // User Settings
  registrationEnabled: boolean;
  emailVerificationRequired: boolean;
  autoApproveFreelancers: boolean;
  maxProjectsPerClient: number;
  
  // System Settings
  maintenanceMode: boolean;
  allowGuestViewing: boolean;
  enableNotifications: boolean;
  maxFileUploadSize: number;
  sessionTimeout: number;
}

const PlatformSettings = () => {
  const { toast } = useToast();
  const [config, setConfig] = useState<PlatformConfig>({
    // General Settings
    siteName: "SkillAfrica",
    siteDescription: "Africa's premier freelancing platform connecting clients with talented professionals",
    supportEmail: "support@skillafrica.com",
    contactPhone: "+1-555-0123",
    
    // Financial Settings
    commissionRate: 10,
    minProjectAmount: 50,
    maxProjectAmount: 50000,
    withdrawalThreshold: 100,
    processingFee: 2.5,
    
    // User Settings
    registrationEnabled: true,
    emailVerificationRequired: true,
    autoApproveFreelancers: false,
    maxProjectsPerClient: 25,
    
    // System Settings
    maintenanceMode: false,
    allowGuestViewing: true,
    enableNotifications: true,
    maxFileUploadSize: 10,
    sessionTimeout: 30
  });

  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const handleConfigChange = (key: keyof PlatformConfig, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
    setHasChanges(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Settings Saved",
        description: "Platform settings have been updated successfully.",
      });
      setHasChanges(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleReset = () => {
    // Reset to default values
    setConfig({
      siteName: "SkillAfrica",
      siteDescription: "Africa's premier freelancing platform connecting clients with talented professionals",
      supportEmail: "support@skillafrica.com",
      contactPhone: "+1-555-0123",
      commissionRate: 10,
      minProjectAmount: 50,
      maxProjectAmount: 50000,
      withdrawalThreshold: 100,
      processingFee: 2.5,
      registrationEnabled: true,
      emailVerificationRequired: true,
      autoApproveFreelancers: false,
      maxProjectsPerClient: 25,
      maintenanceMode: false,
      allowGuestViewing: true,
      enableNotifications: true,
      maxFileUploadSize: 10,
      sessionTimeout: 30
    });
    setHasChanges(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Platform Settings</h1>
        <div className="flex items-center space-x-2">
          {hasChanges && (
            <Button variant="outline" onClick={handleReset}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          )}
          <Button onClick={handleSave} disabled={saving || !hasChanges}>
            <Save className="h-4 w-4 mr-2" />
            {saving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general" className="flex items-center space-x-2">
            <Globe className="h-4 w-4" />
            <span>General</span>
          </TabsTrigger>
          <TabsTrigger value="financial" className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4" />
            <span>Financial</span>
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Users</span>
          </TabsTrigger>
          <TabsTrigger value="system" className="flex items-center space-x-2">
            <Wrench className="h-4 w-4" />
            <span>System</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">General Settings</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    value={config.siteName}
                    onChange={(e) => handleConfigChange('siteName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supportEmail">Support Email</Label>
                  <Input
                    id="supportEmail"
                    type="email"
                    value={config.supportEmail}
                    onChange={(e) => handleConfigChange('supportEmail', e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="siteDescription">Site Description</Label>
                <Textarea
                  id="siteDescription"
                  value={config.siteDescription}
                  onChange={(e) => handleConfigChange('siteDescription', e.target.value)}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPhone">Contact Phone</Label>
                <Input
                  id="contactPhone"
                  value={config.contactPhone}
                  onChange={(e) => handleConfigChange('contactPhone', e.target.value)}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Financial Settings</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="commissionRate">Commission Rate (%)</Label>
                  <Input
                    id="commissionRate"
                    type="number"
                    min="0"
                    max="30"
                    value={config.commissionRate}
                    onChange={(e) => handleConfigChange('commissionRate', Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="processingFee">Processing Fee (%)</Label>
                  <Input
                    id="processingFee"
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    value={config.processingFee}
                    onChange={(e) => handleConfigChange('processingFee', Number(e.target.value))}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="minProjectAmount">Minimum Project Amount ($)</Label>
                  <Input
                    id="minProjectAmount"
                    type="number"
                    min="1"
                    value={config.minProjectAmount}
                    onChange={(e) => handleConfigChange('minProjectAmount', Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxProjectAmount">Maximum Project Amount ($)</Label>
                  <Input
                    id="maxProjectAmount"
                    type="number"
                    min="100"
                    value={config.maxProjectAmount}
                    onChange={(e) => handleConfigChange('maxProjectAmount', Number(e.target.value))}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="withdrawalThreshold">Withdrawal Threshold ($)</Label>
                <Input
                  id="withdrawalThreshold"
                  type="number"
                  min="10"
                  value={config.withdrawalThreshold}
                  onChange={(e) => handleConfigChange('withdrawalThreshold', Number(e.target.value))}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">User Management Settings</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Registration Enabled</Label>
                  <p className="text-sm text-muted-foreground">Allow new users to register</p>
                </div>
                <Switch
                  checked={config.registrationEnabled}
                  onCheckedChange={(checked) => handleConfigChange('registrationEnabled', checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Verification Required</Label>
                  <p className="text-sm text-muted-foreground">Require email verification for new accounts</p>
                </div>
                <Switch
                  checked={config.emailVerificationRequired}
                  onCheckedChange={(checked) => handleConfigChange('emailVerificationRequired', checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-approve Freelancers</Label>
                  <p className="text-sm text-muted-foreground">Automatically approve freelancer applications</p>
                </div>
                <Switch
                  checked={config.autoApproveFreelancers}
                  onCheckedChange={(checked) => handleConfigChange('autoApproveFreelancers', checked)}
                />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="maxProjectsPerClient">Max Projects per Client</Label>
                <Input
                  id="maxProjectsPerClient"
                  type="number"
                  min="1"
                  max="100"
                  value={config.maxProjectsPerClient}
                  onChange={(e) => handleConfigChange('maxProjectsPerClient', Number(e.target.value))}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">System Settings</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">Put the platform in maintenance mode</p>
                </div>
                <Switch
                  checked={config.maintenanceMode}
                  onCheckedChange={(checked) => handleConfigChange('maintenanceMode', checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Allow Guest Viewing</Label>
                  <p className="text-sm text-muted-foreground">Allow non-registered users to browse</p>
                </div>
                <Switch
                  checked={config.allowGuestViewing}
                  onCheckedChange={(checked) => handleConfigChange('allowGuestViewing', checked)}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Notifications</Label>
                  <p className="text-sm text-muted-foreground">Enable system notifications</p>
                </div>
                <Switch
                  checked={config.enableNotifications}
                  onCheckedChange={(checked) => handleConfigChange('enableNotifications', checked)}
                />
              </div>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="maxFileUploadSize">Max File Upload Size (MB)</Label>
                  <Input
                    id="maxFileUploadSize"
                    type="number"
                    min="1"
                    max="100"
                    value={config.maxFileUploadSize}
                    onChange={(e) => handleConfigChange('maxFileUploadSize', Number(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    min="5"
                    max="480"
                    value={config.sessionTimeout}
                    onChange={(e) => handleConfigChange('sessionTimeout', Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlatformSettings;