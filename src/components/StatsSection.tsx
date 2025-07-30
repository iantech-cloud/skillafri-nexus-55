import { Card } from "@/components/ui/card";
import { 
  TrendingUp, 
  Users, 
  Globe, 
  Award,
  Code,
  Shield,
  GraduationCap,
  Clock
} from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Vetted African Developers",
      description: "Expert freelancers across all tech disciplines",
      gradient: "from-primary to-primary-dark"
    },
    {
      icon: Globe,
      number: "4",
      label: "Global Markets Served",
      description: "Kenya, USA, UK, and Dubai coverage",
      gradient: "from-accent to-accent-warm"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Client Satisfaction Rate",
      description: "Consistently high-quality deliverables",
      gradient: "from-success to-success-dark"
    },
    {
      icon: Award,
      number: "25%",
      label: "Competitive Commission",
      description: "Fair pricing for premium services",
      gradient: "from-warning to-warning-dark"
    },
    {
      icon: Code,
      number: "1000+",
      label: "Projects Completed",
      description: "Web development, apps, and digital solutions",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Secure Transactions",
      description: "Protected payments and data security",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: GraduationCap,
      number: "200+",
      label: "Students Supported",
      description: "Academic tutoring and assignment help",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Customer Support",
      description: "Round-the-clock assistance available",
      gradient: "from-orange-500 to-orange-700"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Platform <span className="bg-gradient-hero bg-clip-text text-transparent">Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the numbers behind SkillAfrica's success in connecting global businesses with exceptional African tech talent and comprehensive digital solutions
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden bg-card border border-border hover:shadow-elegant transition-all duration-300 group">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-6 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>

                {/* Number */}
                <div className="text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-card rounded-2xl shadow-elegant border border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Growing Community?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether you're a business looking for expert developers or a talented African freelancer ready to showcase your skills, SkillAfrica provides the platform for success across global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/dev-hub" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Join as Developer
              </a>
              <a 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-lg font-medium hover:bg-secondary/50 transition-colors"
              >
                Hire Talent
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;