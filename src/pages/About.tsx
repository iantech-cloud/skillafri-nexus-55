import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-6">
                About SkillAfrica Limited
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A subsidiary of HustleHub Africa, empowering digital transformation and connecting global businesses with top-tier African tech talent.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-accent" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To bridge the gap between global opportunities and African talent by providing comprehensive digital solutions, secure platforms, and educational support that empowers individuals and businesses to thrive in the digital economy.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-8 w-8 text-accent" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the leading platform connecting African tech talent with global opportunities while fostering innovation, education, and sustainable economic growth across the continent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at SkillAfrica Limited
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community First</h3>
                <p className="text-muted-foreground">
                  Building strong communities and fostering collaboration between talent and businesses.
                </p>
              </div>
              
              <div className="text-center p-6">
                <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
                <p className="text-muted-foreground">
                  Creating opportunities that transcend borders and drive meaningful change.
                </p>
              </div>
              
              <div className="text-center p-6">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  Delivering exceptional quality in everything we do, from our platform to our partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Powered by HustleHub Africa</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              As a subsidiary of HustleHub Africa, SkillAfrica Limited leverages years of experience in connecting talent with opportunities across the continent. Based in Nairobi, Kenya, we're at the heart of Africa's tech revolution.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;