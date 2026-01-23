import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  delay?: number;
}

export function ProjectCard({ title, description, tags, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary/30 to-background border border-white/5 hover:border-primary/50 transition-colors duration-300"
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition duration-500 blur-xl"></div>
      
      <div className="relative p-8 h-full flex flex-col z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
          <div className="flex gap-2 text-muted-foreground">
            {/* Mock links for portfolio display */}
            <Github size={20} className="hover:text-foreground cursor-pointer transition-colors" />
            <ExternalLink size={20} className="hover:text-foreground cursor-pointer transition-colors" />
          </div>
        </div>
        
        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-xs font-medium px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
