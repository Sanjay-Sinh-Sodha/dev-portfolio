import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  items: string[];
  icon: LucideIcon;
  delay?: number;
}

export function SkillCard({ name, items, icon: Icon, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="glass-card p-6 rounded-2xl h-full border-t-2 border-t-transparent hover:border-t-primary transition-all duration-300 group"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold">{name}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <span 
            key={idx}
            className="px-3 py-1 text-sm bg-secondary/50 rounded-full text-secondary-foreground/90 border border-white/5"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
