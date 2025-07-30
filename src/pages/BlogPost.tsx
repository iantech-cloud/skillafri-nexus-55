import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useParams, Navigate } from "react-router-dom";
import { 
  Calendar, 
  User, 
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
  ThumbsUp,
  MessageCircle
} from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();

  // Blog posts data - in a real app, this would come from an API
  const blogPosts: any = {
    "future-african-tech-talent-global-markets": {
      title: "The Future of African Tech Talent in Global Markets",
      content: `
        <p>Africa's technology sector is experiencing unprecedented growth, with talented developers, designers, and tech professionals making significant impacts on the global stage. This transformation is reshaping how international businesses view African talent and opening new opportunities for collaboration.</p>

        <h2>The Rise of African Tech Hubs</h2>
        <p>Cities like Lagos, Nairobi, Cape Town, and Accra have emerged as major technology centers, fostering innovation and nurturing world-class talent. These hubs are producing professionals who are not just competing globally but leading groundbreaking projects.</p>

        <h2>Key Advantages of African Tech Talent</h2>
        <ul>
          <li><strong>Diverse Perspectives:</strong> African developers bring unique problem-solving approaches shaped by local challenges</li>
          <li><strong>Cost Effectiveness:</strong> Competitive rates without compromising on quality</li>
          <li><strong>Time Zone Benefits:</strong> Strategic location for serving both European and American markets</li>
          <li><strong>Educational Excellence:</strong> Growing number of top-tier universities and coding bootcamps</li>
        </ul>

        <h2>Success Stories</h2>
        <p>From fintech innovations like mobile money to breakthrough e-commerce platforms, African developers are creating solutions that are being adopted worldwide. Companies like Flutterwave, Paystack, and Jumia have shown that African tech talent can build globally competitive products.</p>

        <h2>The Future Outlook</h2>
        <p>As remote work becomes the norm and companies seek diverse talent pools, African tech professionals are positioned to play an increasingly important role in global technology development. The combination of strong technical skills, innovative thinking, and competitive rates makes African talent an attractive option for businesses worldwide.</p>

        <p>At SkillAfrica, we're proud to connect this exceptional talent with international opportunities, fostering partnerships that drive innovation and growth on both sides.</p>
      `,
      author: "Sarah Kiprotich",
      date: "2024-01-28",
      readTime: "8 min read",
      category: "Industry Insights",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop"
    },
    "building-secure-web-applications-2024": {
      title: "Building Secure Web Applications: Best Practices for 2024",
      content: `
        <p>Web application security remains one of the most critical aspects of modern software development. As cyber threats evolve, developers must stay vigilant and implement robust security measures from the ground up.</p>

        <h2>Essential Security Principles</h2>
        <p>Security should never be an afterthought. Here are the fundamental principles every developer should follow:</p>

        <h3>1. Input Validation and Sanitization</h3>
        <p>Never trust user input. Implement comprehensive validation on both client and server sides:</p>
        <ul>
          <li>Validate data types, lengths, and formats</li>
          <li>Use whitelisting over blacklisting</li>
          <li>Sanitize input to prevent XSS attacks</li>
          <li>Implement proper encoding for output</li>
        </ul>

        <h3>2. Authentication and Authorization</h3>
        <p>Implement robust user authentication systems:</p>
        <ul>
          <li>Use strong password policies</li>
          <li>Implement multi-factor authentication</li>
          <li>Use secure session management</li>
          <li>Implement proper role-based access control</li>
        </ul>

        <h3>3. Data Protection</h3>
        <p>Protect sensitive data at rest and in transit:</p>
        <ul>
          <li>Use HTTPS for all communications</li>
          <li>Encrypt sensitive data in databases</li>
          <li>Implement proper key management</li>
          <li>Follow data minimization principles</li>
        </ul>

        <h2>Common Vulnerabilities to Avoid</h2>
        <p>The OWASP Top 10 provides a excellent guide for the most critical security risks:</p>
        <ol>
          <li>Injection attacks (SQL, NoSQL, LDAP)</li>
          <li>Broken authentication</li>
          <li>Sensitive data exposure</li>
          <li>XML external entities (XXE)</li>
          <li>Broken access controls</li>
        </ol>

        <h2>Security Testing</h2>
        <p>Regular security testing should be part of your development process:</p>
        <ul>
          <li>Automated security scanning in CI/CD pipelines</li>
          <li>Regular penetration testing</li>
          <li>Code reviews focused on security</li>
          <li>Dependency vulnerability scanning</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Building secure web applications requires a proactive approach and continuous learning. By following these best practices and staying updated with the latest security trends, developers can create applications that protect user data and maintain trust.</p>
      `,
      author: "James Mwangi",
      date: "2024-01-25",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop"
    },
    "remote-collaboration-african-developers": {
      title: "Remote Collaboration: How African Developers Excel Globally",
      content: `
        <p>The shift to remote work has opened unprecedented opportunities for African developers to collaborate with teams worldwide. This new paradigm has not only expanded career prospects but also showcased the exceptional skills and work ethic of African tech talent.</p>

        <h2>Overcoming Initial Challenges</h2>
        <p>While remote collaboration initially presented challenges such as time zone differences and communication barriers, African developers have turned these into competitive advantages through strategic adaptation and cultural intelligence.</p>

        <h3>Time Zone Strategy</h3>
        <p>African developers have mastered the art of asynchronous communication:</p>
        <ul>
          <li>Detailed documentation and clear handoffs</li>
          <li>Strategic overlap hours for real-time collaboration</li>
          <li>Proactive communication to prevent bottlenecks</li>
          <li>Cultural awareness in global team dynamics</li>
        </ul>

        <h2>Tools and Technologies</h2>
        <p>African developers have quickly adopted and mastered modern collaboration tools:</p>
        <ul>
          <li><strong>Communication:</strong> Slack, Microsoft Teams, Discord</li>
          <li><strong>Project Management:</strong> Jira, Trello, Asana</li>
          <li><strong>Development:</strong> GitHub, GitLab, Bitbucket</li>
          <li><strong>Design Collaboration:</strong> Figma, Miro, InVision</li>
        </ul>

        <h2>Success Factors</h2>
        <p>Several factors contribute to the success of African developers in remote collaboration:</p>

        <h3>1. Strong Communication Skills</h3>
        <p>Many African countries have English as an official language, providing a natural advantage in global communication.</p>

        <h3>2. Adaptability</h3>
        <p>Growing up in dynamic environments has made African developers highly adaptable to changing requirements and technologies.</p>

        <h3>3. Strong Work Ethic</h3>
        <p>Cultural values emphasizing dedication and perseverance translate well to remote work environments.</p>

        <h2>Building Trust Across Cultures</h2>
        <p>African developers excel at building trust with international teams through:</p>
        <ul>
          <li>Consistent delivery and reliability</li>
          <li>Proactive communication</li>
          <li>Cultural sensitivity and adaptability</li>
          <li>Continuous learning and skill development</li>
        </ul>

        <h2>The Future of Global Collaboration</h2>
        <p>As remote work becomes the norm, African developers are positioned to play an increasingly important role in global technology development. Their combination of technical skills, cultural adaptability, and strong work ethic makes them valuable team members for companies worldwide.</p>

        <p>The success of African developers in remote collaboration is not just changing perceptions—it's reshaping the global tech industry and creating new opportunities for inclusive innovation.</p>
      `,
      author: "Grace Ochieng",
      date: "2024-01-22",
      readTime: "5 min read",
      category: "Remote Work",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop"
    },
    "academic-excellence-international-students": {
      title: "Academic Excellence: Supporting International Students in Tech",
      content: `
        <p>International students pursuing technology degrees face unique challenges, from adapting to new educational systems to mastering complex technical concepts in a second language. Personalized tutoring has emerged as a game-changing solution, helping students not just survive but thrive in their academic pursuits.</p>

        <h2>Understanding the Challenges</h2>
        <p>International students in tech programs often face multiple obstacles simultaneously:</p>

        <h3>Academic Challenges</h3>
        <ul>
          <li>Different educational methodologies and expectations</li>
          <li>Language barriers in understanding complex technical concepts</li>
          <li>Unfamiliar assessment styles and academic culture</li>
          <li>Gaps in foundational knowledge due to different educational backgrounds</li>
        </ul>

        <h3>Social and Cultural Factors</h3>
        <ul>
          <li>Isolation from family and familiar support systems</li>
          <li>Cultural adjustment and adaptation stress</li>
          <li>Financial pressures and part-time work obligations</li>
          <li>Difficulty forming study groups and peer connections</li>
        </ul>

        <h2>The Power of Personalized Tutoring</h2>
        <p>One-on-one tutoring addresses these challenges through targeted, individualized support:</p>

        <h3>Academic Benefits</h3>
        <ul>
          <li><strong>Customized Learning:</strong> Tutors adapt teaching methods to individual learning styles</li>
          <li><strong>Pace Control:</strong> Students can work at their own speed without feeling rushed</li>
          <li><strong>Immediate Feedback:</strong> Real-time clarification of concepts and correction of misunderstandings</li>
          <li><strong>Exam Preparation:</strong> Targeted practice for specific assessment formats</li>
        </ul>

        <h3>Beyond Academics</h3>
        <ul>
          <li>Mentorship and guidance on academic culture</li>
          <li>Support with communication skills and presentation techniques</li>
          <li>Career advice and industry insights</li>
          <li>Emotional support and motivation</li>
        </ul>

        <h2>Success Stories</h2>
        <p>Our tutoring program has helped thousands of international students achieve their academic goals:</p>

        <blockquote>
          <p>"When I arrived from Nigeria to study Computer Science in the US, I struggled with the different teaching style and technical writing requirements. My tutor helped me not just understand the concepts but also communicate my ideas clearly. I went from barely passing to making the Dean's List." - Adaora, Computer Science Student</p>
        </blockquote>

        <h2>Subject-Specific Support</h2>
        <p>Our tutors specialize in key technology subjects:</p>
        <ul>
          <li><strong>Programming:</strong> Java, Python, C++, JavaScript, and more</li>
          <li><strong>Data Structures and Algorithms:</strong> Foundation concepts for computer science</li>
          <li><strong>Database Systems:</strong> SQL, NoSQL, and database design</li>
          <li><strong>Software Engineering:</strong> Design patterns, project management, and development methodologies</li>
          <li><strong>Mathematics:</strong> Discrete math, statistics, and calculus for computer science</li>
        </ul>

        <h2>Building Confidence and Independence</h2>
        <p>The goal of tutoring extends beyond immediate academic success:</p>
        <ul>
          <li>Building confidence in technical abilities</li>
          <li>Developing independent problem-solving skills</li>
          <li>Fostering critical thinking and analytical reasoning</li>
          <li>Preparing students for successful careers in technology</li>
        </ul>

        <h2>Global Reach, Local Understanding</h2>
        <p>Our tutors understand the unique challenges faced by students from different cultural backgrounds. Many are themselves international students or graduates who have successfully navigated similar challenges.</p>

        <p>This shared experience creates a supportive environment where students feel understood and encouraged to excel.</p>

        <h2>The Future of Academic Support</h2>
        <p>As international education continues to grow, personalized tutoring will play an increasingly important role in ensuring student success. By providing targeted, culturally-aware support, we're not just helping students pass their courses—we're empowering the next generation of global technology leaders.</p>
      `,
      author: "David Kimani",
      date: "2024-01-20",
      readTime: "4 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop"
    }
  };

  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Industry Insights": "bg-primary/10 text-primary",
      "Cybersecurity": "bg-destructive/10 text-destructive",
      "Remote Work": "bg-success/10 text-success",
      "Education": "bg-accent/10 text-accent-foreground",
      "Technology": "bg-primary/10 text-primary",
      "Digital Marketing": "bg-accent-warm/10 text-accent-foreground",
      "Tutorial": "bg-success/10 text-success"
    };
    return colors[category] || "bg-secondary text-secondary-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button variant="ghost" className="mb-6" asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="mb-6">
              <Badge className={getCategoryColor(post.category)}>
                {post.category}
              </Badge>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                Like
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="h-64 md:h-96 rounded-xl bg-cover bg-center shadow-elegant"
              style={{ backgroundImage: `url(${post.image})` }}
            >
              <div className="h-full bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <Card className="p-8 lg:p-12">
                  <div 
                    className="prose prose-lg max-w-none text-foreground
                             prose-headings:text-foreground 
                             prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
                             prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
                             prose-p:mb-4 prose-p:leading-relaxed
                             prose-ul:mb-4 prose-li:mb-2
                             prose-strong:text-foreground prose-strong:font-semibold
                             prose-blockquote:border-l-4 prose-blockquote:border-primary 
                             prose-blockquote:bg-accent/5 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
                             prose-blockquote:italic prose-blockquote:text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Author Info */}
                <Card className="p-6">
                  <h3 className="font-bold text-foreground mb-4">About the Author</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                        {post.author.split(' ').map((n: string) => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{post.author}</div>
                        <div className="text-sm text-muted-foreground">Tech Writer</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Passionate about technology and helping others learn and grow in the digital world.
                    </p>
                  </div>
                </Card>

                {/* Related Articles */}
                <Card className="p-6">
                  <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    <Link to="/blog/remote-collaboration-african-developers" className="block group">
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        Remote Collaboration Tips
                      </div>
                      <div className="text-xs text-muted-foreground">5 min read</div>
                    </Link>
                    <Link to="/blog/building-secure-web-applications-2024" className="block group">
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        Web Security Best Practices
                      </div>
                      <div className="text-xs text-muted-foreground">6 min read</div>
                    </Link>
                  </div>
                </Card>

                {/* CTA */}
                <Card className="p-6 bg-gradient-card">
                  <h3 className="font-bold text-foreground mb-3">Get More Content</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Subscribe to our newsletter for the latest insights and tutorials.
                  </p>
                  <Button variant="default" size="sm" className="w-full">
                    Subscribe Now
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="py-12 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MessageCircle className="h-6 w-6" />
                Join the Discussion
              </h3>
              <p className="text-muted-foreground mb-6">
                We'd love to hear your thoughts on this article. Share your insights and connect with our community.
              </p>
              <div className="flex gap-4">
                <Button variant="hero">
                  Leave a Comment
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/auth/register">Join SkillAfrica</Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;