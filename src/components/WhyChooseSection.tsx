import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Star, 
  Shield, 
  Clock, 
  Globe, 
  Users,
  Zap,
  Heart,
  ArrowRight
} from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Star,
      title: "Exclusively African Talent",
      description: "Access to the fastest-growing tech talent pool in Africa, bringing fresh perspectives and innovative solutions to your projects.",
      benefits: ["Diverse skill sets", "Competitive pricing", "Cultural diversity", "Fresh perspectives"]
    },
    {
      icon: Shield,
      title: "Rigorous Vetting Process",
      description: "Every freelancer undergoes comprehensive technical and professional evaluation to ensure only top-tier talent joins our platform.",
      benefits: ["Technical assessments", "Portfolio reviews", "Client feedback", "Communication skills"]
    },
    {
      icon: Clock,
      title: "24/7 Global Support",
      description: "Round-the-clock customer support across all time zones, ensuring your projects never face unnecessary delays.",
      benefits: ["Instant chat support", "Project management", "Technical assistance", "Quality assurance"]
    },
    {
      icon: Globe,
      title: "Global Market Expertise",
      description: "Deep understanding of both local African markets and international business requirements across USA, UK, and Dubai.",
      benefits: ["Local insights", "Global standards", "Cultural competency", "Market knowledge"]
    }
  ];

  const achievements = [
    { metric: "500+", label: "Expert Developers" },
    { metric: "98%", label: "Success Rate" },
    { metric: "24/7", label: "Support Available" },
    { metric: "4", label: "Global Markets" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="bg-gradient-hero bg-clip-text text-transparent">SkillAfrica</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover what sets SkillAfrica apart as the premier platform for connecting with exceptional African tech talent and comprehensive digital solutions
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="p-8 bg-card border border-border hover:shadow-elegant transition-all duration-300 group">
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {reason.description}
                  </p>
                  
                  {/* Benefits List */}
                  <div className="grid grid-cols-2 gap-2">
                    {reason.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-card rounded-2xl shadow-elegant border border-accent/20 p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Proven Track Record of Excellence
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our numbers speak for themselves - consistent delivery, satisfied clients, and growing community of expert African developers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">
                  {achievement.metric}
                </div>
                <div className="text-muted-foreground">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 bg-card border border-border text-center hover:shadow-card transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-3">Fast Delivery</h4>
            <p className="text-muted-foreground">
              Quick turnaround times without compromising on quality, ensuring your projects stay on schedule.
            </p>
          </Card>

          <Card className="p-6 bg-card border border-border text-center hover:shadow-card transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-warm flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-3">Dedicated Support</h4>
            <p className="text-muted-foreground">
              Personal project managers and technical support throughout your entire development journey.
            </p>
          </Card>

          <Card className="p-6 bg-card border border-border text-center hover:shadow-card transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-success to-success-dark flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-3">Client-Focused</h4>
            <p className="text-muted-foreground">
              Your success is our priority. We go above and beyond to ensure exceptional results and satisfaction.
            </p>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto p-8 bg-primary/5 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience the SkillAfrica Difference?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Join thousands of satisfied clients who have transformed their businesses with our exceptional African tech talent and comprehensive digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="/services">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/dev-hub">Browse Talent</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;