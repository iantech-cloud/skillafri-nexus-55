import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Award, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { icon: Users, number: "10,000+", label: "Active Users" },
    { icon: Award, number: "500+", label: "Successful Projects" },
    { icon: Briefcase, number: "1,000+", label: "Freelancers" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Connect. Learn.{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Excel.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Africa's premier platform connecting talented freelancers with ambitious clients, 
                while empowering students with cutting-edge skills and opportunities.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/auth/register">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Trusted by leading companies across Africa</p>
              <div className="flex items-center justify-center lg:justify-start space-x-8 opacity-60">
                <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs font-semibold">
                  Brand 1
                </div>
                <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs font-semibold">
                  Brand 2
                </div>
                <div className="h-8 w-20 bg-muted rounded flex items-center justify-center text-xs font-semibold">
                  Brand 3
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Stats & Visual */}
          <div className="relative">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-elegant">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Platform Impact</h3>
                <p className="text-muted-foreground">Making a difference across Africa</p>
              </div>
              
              {/* Animated Stat Display */}
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl transition-all duration-500 ${
                      currentStat === index 
                        ? 'bg-primary/10 border-2 border-primary/50' 
                        : 'bg-muted/50 border border-border'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${
                        currentStat === index ? 'bg-primary text-primary-foreground' : 'bg-muted'
                      }`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;