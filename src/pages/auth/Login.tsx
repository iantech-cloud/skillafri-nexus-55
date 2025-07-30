import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  
  const { sendMagicLink } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await sendMagicLink(email);
      setEmailSent(true);
      toast({
        title: "Magic Link Sent",
        description: "Check your email for the sign-in link.",
      });
    } catch (error: any) {
      toast({
        title: "Failed to Send Link",
        description: error.message || "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
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
              We've sent a magic link to sign you in
            </p>
          </div>

          <Card className="p-8 shadow-elegant border-border text-center">
            <div className="mb-6">
              <p className="text-muted-foreground mb-4">
                We've sent a magic link to <strong className="text-foreground">{email}</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                Click the link in your email to sign in securely. The link will expire in 24 hours.
              </p>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => {
                setEmailSent(false);
                setEmail("");
              }}
              className="w-full mb-4"
            >
              Send Another Link
            </Button>
            
            <Button variant="link" asChild>
              <Link to="/auth/register">Don't have an account? Sign up</Link>
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
            Welcome Back
          </h1>
          <p className="text-muted-foreground">
            Enter your email to receive a secure sign-in link
          </p>
        </div>

        {/* Login Form */}
        <Card className="p-8 shadow-elegant border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              🔒 Magic links are more secure than passwords. No need to remember or type complex passwords.
            </p>
          </div>
        </Card>

        {/* Sign Up Link */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Button variant="link" className="p-0 h-auto font-semibold text-primary" asChild>
              <Link to="/auth/register">Sign up for free</Link>
            </Button>
          </p>
        </div>

        {/* User Type Options */}
        <div className="mt-8 p-6 bg-card rounded-xl border border-border">
          <h3 className="font-semibold text-foreground mb-4 text-center">
            New to SkillAfrica?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Button variant="outline" size="sm" className="text-xs" asChild>
              <Link to="/auth/register/client">Join as Client</Link>
            </Button>
            <Button variant="outline" size="sm" className="text-xs" asChild>
              <Link to="/auth/register/freelancer">Join as Freelancer</Link>
            </Button>
            <Button variant="outline" size="sm" className="text-xs" asChild>
              <Link to="/auth/register/student">Join as Student</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;