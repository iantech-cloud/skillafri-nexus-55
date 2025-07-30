import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      location: "San Francisco, USA",
      rating: 5,
      content: "SkillAfrica connected us with exceptional developers who delivered our mobile app ahead of schedule. The quality of African tech talent is outstanding.",
      avatar: "🌟"
    },
    {
      name: "Dr. Michael Chen",
      role: "University Student",
      location: "London, UK",
      rating: 5,
      content: "The academic support from SkillAfrica tutors helped me excel in my computer science coursework. Personalized, expert guidance at its finest.",
      avatar: "📚"
    },
    {
      name: "Ahmed Al-Rashid",
      role: "Business Owner",
      location: "Dubai, UAE",
      rating: 5,
      content: "From cybersecurity to web development, SkillAfrica provides comprehensive digital solutions. Their 24/7 support is exceptional.",
      avatar: "🚀"
    },
    {
      name: "Grace Wanjiku",
      role: "Startup Founder",
      location: "Nairobi, Kenya",
      rating: 5,
      content: "As a local business, we appreciate SkillAfrica's understanding of both local and global markets. They helped us scale internationally.",
      avatar: "💼"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Client <span className="bg-gradient-hero bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how businesses and students worldwide have transformed their digital presence and academic journey with SkillAfrica's expert African talent
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card hover:shadow-elegant transition-all duration-300 border border-border relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-16 w-16 text-primary" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary font-medium">{testimonial.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 bg-card rounded-2xl shadow-card border border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Expert Freelancers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;