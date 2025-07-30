import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What makes SkillAfrica different from other freelance platforms?",
      answer: "SkillAfrica specializes exclusively in connecting clients with vetted African tech talent. We offer a curated marketplace with comprehensive digital solutions, including web development, cybersecurity, and academic support. Our platform charges a competitive 25% commission and provides 24/7 support across global markets including Kenya, USA, UK, and Dubai."
    },
    {
      question: "How are freelancers vetted on SkillAfrica?",
      answer: "Our rigorous vetting process includes technical skill assessments, portfolio reviews, client feedback verification, and communication evaluations. We ensure all freelancers meet our high standards for technical expertise, professionalism, and English proficiency to serve our global client base effectively."
    },
    {
      question: "What services does SkillAfrica offer?",
      answer: "SkillAfrica provides four core service areas: Web Development & Digital Presence (custom development, SEO, hosting), Cybersecurity Services (security audits, malware removal, SSL management), Developer Talent Hub (curated freelance marketplace), and Global Academic Support (tutoring and assignment assistance for university students)."
    },
    {
      question: "Which programming languages and technologies do your developers specialize in?",
      answer: "Our developers are experts in modern technologies including Python, React, WordPress, Node.js, JavaScript, PHP, Java, and mobile development platforms. We also provide technical SEO specialists, cybersecurity experts, and UI/UX designers to meet comprehensive digital needs."
    },
    {
      question: "How does the academic support service work?",
      answer: "Our Global Academic Support connects university students worldwide with expert African tutors specializing in technology fields. We provide personalized learning support, assignment assistance, and guidance across computer science, software engineering, and related technical subjects with coverage in USA, UK, and Dubai markets."
    },
    {
      question: "What are SkillAfrica's pricing and commission structure?",
      answer: "SkillAfrica charges a competitive 25% platform commission on completed projects. This covers our comprehensive vetting process, 24/7 customer support, secure payment processing, and quality assurance. Pricing varies by project complexity and is determined between clients and freelancers."
    },
    {
      question: "How do I get started with SkillAfrica?",
      answer: "Getting started is simple: browse our curated marketplace to find vetted African talent, post your project requirements, review proposals from qualified freelancers, and select the best match for your needs. Our team provides support throughout the entire process to ensure project success."
    },
    {
      question: "Does SkillAfrica provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive ongoing support including website maintenance, security monitoring, technical support, and project management assistance. Our 24/7 support team ensures your digital solutions remain secure, updated, and performing optimally across all global markets we serve."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
              <HelpCircle className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Frequently Asked <span className="bg-gradient-hero bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about SkillAfrica's services, pricing, and how we connect you with top-tier African tech talent
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-card rounded-2xl shadow-card border border-border p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left hover:bg-secondary/50 rounded-lg [&[data-state=open]]:rounded-b-none">
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Our Support Team
            </a>
            <a 
              href="/services" 
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary/50 transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;