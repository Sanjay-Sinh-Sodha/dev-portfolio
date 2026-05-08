import { Navigation } from "@/components/Navigation";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  ArrowRight, 
  Linkedin, 
  Mail, 
  Github 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30" />
          <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] opacity-20" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6 cursor-pointer hover:bg-primary/20 transition-colors"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
              Hi, I'm <span className="text-gradient">Sanjaysinh Sodha</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Senior Software Engineer specializing in backend architecture, distributed systems, and scalable cloud solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all flex items-center gap-2">
                View Work <ArrowRight size={20} />
              </a>
            </div>

            <div className="mt-12 flex gap-6 text-muted-foreground">
              <a href="https://www.linkedin.com/in/sanjay-sinh-sodha/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:sodhasanjay14@gmail.com" className="hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://github.com/Sanjay-Sinh-Sodha" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white/5 shadow-2xl glow">
              <img 
                src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                alt="Sanjay Sodha" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-0" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl z-0" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="About Me" 
            subtitle="Architecting scalable solutions with precision and passion."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                With over 8 years of experience in software engineering, I specialize in building robust backend systems and distributed architectures. Currently serving as SDE 3 at <span className="text-white font-medium">Niyo Solutions</span>, I've led the development of critical financial infrastructure.
              </p>
              <p>
                My expertise lies in <span className="text-primary">Microservices, DDD, and CQRS</span> patterns. I thrive on solving complex scalability challenges, having successfully optimized transaction processing systems to handle 100k+ daily transactions with minimal latency.
              </p>
              <p>
                Whether it's designing event-driven architectures with Kafka or orchestrating containers with Kubernetes, I bring a depth of technical knowledge to every project I undertake.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-2xl text-center">
                <h3 className="text-4xl font-bold text-gradient mb-2">8+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <h3 className="text-4xl font-bold text-gradient mb-2">100k+</h3>
                <p className="text-sm text-muted-foreground">Daily Txns</p>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <h3 className="text-4xl font-bold text-gradient mb-2">20+</h3>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center">
                <h3 className="text-4xl font-bold text-gradient mb-2">10+</h3>
                <p className="text-sm text-muted-foreground">Startup Exits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Technical Arsenal" 
            subtitle="A comprehensive toolkit for building modern software."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <SkillCard 
              name="Languages" 
              items={["JavaScript (ES6+)", "TypeScript", "Golang", "Java"]}
              icon={Code2}
              delay={0}
            />
            <SkillCard 
              name="Backend" 
              items={["Node.js", "NestJS", "Express", "Microservices", "REST/GraphQL"]}
              icon={Server}
              delay={0.1}
            />
            <SkillCard 
              name="Databases" 
              items={["PostgreSQL", "MongoDB", "DynamoDB", "Redis", "Elasticsearch"]}
              icon={Database}
              delay={0.2}
            />
            <SkillCard 
              name="DevOps & Cloud" 
              items={["AWS", "Docker", "Kubernetes", "Kafka", "CI/CD"]}
              icon={Cloud}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Professional Journey" />
          <ExperienceTimeline />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Featured Projects" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="UPI Payment Service"
              description="Architected a high-performance UPI payment system handling multi-bank integrations and instant transactions."
              fullDescription={`Built a high-performance UPI payment platform handling multi-bank integrations, instant transactions, and complex payment flows.\n\nKey Achievements:\n• Handled 100K+ daily events with 99.9% uptime.\n• Implemented CQRS and Saga patterns for transaction reliability.\n• Ensured compliance with RBI guidelines, PCI DSS standards, and enterprise-grade security practices.`}
              tags={["Kafka", "Node.js", "CQRS", "Redis"]}
              delay={0}
            />
            <ProjectCard 
              title="Multi-Currency Wallet"
              description="Designed a robust multi-currency wallet system enabling seamless forex transactions and FX conversions."
              fullDescription={`Developed a scalable multi-currency wallet supporting deposits, withdrawals, and FX conversions across multiple currencies.\n\nKey Achievements:\n• Applied DDD for domain modeling and Saga for multi-step transactional consistency.\n• Built audit-ready systems compliant with RBI & InfoSec audit requirements.\n• Designed real-time balance updates and event-driven notifications.`}
              tags={["DDD", "Go", "PostgreSQL", "AWS"]}
              delay={0.1}
            />
            <ProjectCard 
              title="Bank Integrations Platform"
              description="Built a resilient integration layer for multiple banking partners supporting IMPS, NEFT, and account verification."
              fullDescription={`Built multi-bank integration services supporting IMPS, NEFT, and account verification.\n\nKey Achievements:\n• Implemented robust Saga workflows for reliable cross-service transaction handling.\n• Worked closely on RBI compliance, PCI DSS standards, and InfoSec audit readiness.\n• Created comprehensive technical documentation, improving onboarding.`}
              tags={["Microservices", "NestJS", "Docker", "K8s"]}
              delay={0.2}
            />
            <ProjectCard 
              title="Notification & Event System"
              description="Created a centralized notification engine delivering transactional and promotional messages via SMS, Email, and Push."
              fullDescription={`Created a centralized notification engine delivering transactional and promotional messages via SMS, Email, and Push, integrated with payment events.\n\nKey Achievements:\n• Architected event-driven microservices with CQRS for optimized reads and writes.\n• Ensured security and compliance adherence for sensitive user and transaction data.`}
              tags={["Kafka", "Node.js", "CQRS", "AWS"]}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            <SectionHeading title="Let's Connect" align="center" />
            <p className="text-xl text-muted-foreground mb-8 text-center">
              I'm always open to discussing new opportunities, interesting projects, or just talking tech.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:sodhasanjay14@gmail.com" className="flex items-center p-4 rounded-xl bg-card border border-white/5 hover:border-primary/50 transition-all group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mr-4">
                  <Mail />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-lg font-medium group-hover:text-primary transition-colors">sodhasanjay14@gmail.com</div>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/sanjay-sinh-sodha/" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 rounded-xl bg-card border border-white/5 hover:border-primary/50 transition-all group">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mr-4">
                  <Linkedin />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">LinkedIn</div>
                  <div className="text-lg font-medium group-hover:text-primary transition-colors">Sanjay Sodha</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Sanjay Sodha. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
