import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: "Niyo Solutions",
    role: "Senior Software Engineer (SDE 3)",
    period: "Jan 2020 - Present",
    description: [
      "Led backend development for UPI and Forex modules, handling 100k+ daily transactions.",
      "Designed event-driven microservices architecture using Kafka, decoupling monolithic systems.",
      "Optimized worker processing time from 4s to 146ms through innovative caching and concurrency strategies."
    ]
  },
  {
    company: "CognitiveClouds",
    role: "Software Engineer",
    period: "Aug 2019 - Dec 2019",
    description: [
      "Implemented Clean Architecture principles to improve code maintainability.",
      "Developed high-performance REST APIs and optimized database queries."
    ]
  },
  {
    company: "Qleverlabs",
    role: "Full Stack Developer",
    period: "Nov 2017 - Jun 2019",
    description: [
      "Full stack development using Node.js and React ecosystem.",
      "Managed AWS infrastructure and ensured system reliability."
    ]
  }
];

export function ExperienceTimeline() {
  return (
    <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
      {experiences.map((exp, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative pl-8 md:pl-12"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-[9px] top-0 h-[18px] w-[18px] rounded-full bg-background border-2 border-primary ring-4 ring-background" />
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
            <div className="flex items-center text-sm text-primary font-medium mt-1 sm:mt-0">
              <Calendar size={14} className="mr-2" />
              {exp.period}
            </div>
          </div>
          
          <div className="flex items-center text-lg text-muted-foreground mb-4">
            <Briefcase size={16} className="mr-2" />
            <span className="text-white font-semibold">{exp.company}</span>
          </div>
          
          <ul className="space-y-2 text-muted-foreground list-disc list-outside ml-4">
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
