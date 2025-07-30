import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  ArrowRight,
  CheckCircle,
  User,
  Building,
  GraduationCap,
  Briefcase
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { UserRole } from "@/types/auth";

const MagicLinkRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    role: ""
  });
  
  const { registerWithMagicLink } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.role) {
      toast({
        title: "Role Required",
        description: "Please select your role to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      await registerWithMagicLink(formData.email, formData.role);
      setEmailSent(true);
      toast({
        title: "Magic Link Sent",
        description: "Check your email to complete registration.",
      });
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: error.message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'client': return <Building className="h-4 w-4" />;
      case 'freelancer': return <Briefcase className="h-4 w-4" />;
      case 'student': return <GraduationCap className="h-4 w-4" />;
      default: return <User className="h-4 w-4" />;
    }
  };

  const getRoleDescription = (role: string) => {
    switch (role) {
      case 'client': return 'Hire skilled professionals for your projects';
      case 'freelancer': return 'Offer your skills and find exciting projects';
      case 'student': return 'Learn new skills and advance your career';
      default: return '';
    }
  };

  if (emailSent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/5 flex items-center justify-center p-4 pt-20">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Check Your Email
            </h1>
            <p className="text-muted-foreground">
              We've sent a magic link to complete your registration
            </p>
          </div>

          <Card className="p-8 shadow-elegant border-border text-center">
            <div className="mb-6">
              <p className="text-muted-foreground mb-4">
                We've sent a magic link to <strong className="text-foreground">{formData.email}</strong>
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Click the link in your email to complete your registration as a <strong>{formData.role}</strong>.
              </p>
              <p className="text-xs text-muted-foreground">
                The link will expire in 24 hours.
              </p>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => {
                setEmailSent(false);
                setFormData({ email: "", role: "" });
              }}
              className="w-full mb-4"
            >
              Send Another Link
            </Button>
            
            <Button variant="link" asChild>
              <Link to="/auth/login">Already have an account? Sign in</Link>
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/5 flex items-center justify-center p-4 pt-20">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Join SkillAfrica
          </h1>
          <p className="text-muted-foreground">
            Create your account with a magic link - no password needed
          </p>
        </div>

        {/* Registration Form */}
        <Card className="p-8 shadow-elegant border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div className="space-y-2">
              <Label className="text-foreground font-medium">
                I want to join as a
              </Label>
              <Select value={formData.role} onValueChange={(value) => setFormData({...formData, role: value})}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="client">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      <div>
                        <div className="font-medium">Client</div>
                        <div className="text-xs text-muted-foreground">Hire skilled professionals</div>
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="freelancer">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      <div>
                        <div className="font-medium">Freelancer</div>
                        <div className="text-xs text-muted-foreground">Offer your skills</div>
                      </div>
                    </div>
                  </SelectItem>
                  <SelectItem value="student">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      <div>
                        <div className="font-medium">Student</div>
                        <div className="text-xs text-muted-foreground">Learn new skills</div>
                      </div>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              {formData.role && (
                <p className="text-xs text-muted-foreground mt-2">
                  {getRoleDescription(formData.role)}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Enter your email"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              variant="hero" 
              className="w-full" 
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? "Sending Magic Link..." : "Send Magic Link"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          {/* Security Note */}
          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground text-center">
              🔒 No password required! We'll send you a secure magic link to get started.
            </p>
          </div>
        </Card>

        {/* Sign In Link */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Button variant="link" className="p-0 h-auto font-semibold text-primary" asChild>
              <Link to="/auth/login">Sign in</Link>
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MagicLinkRegister;