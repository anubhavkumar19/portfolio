import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../shared/AnimatedSection";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    icon: "🎨",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT"],
    icon: "⚙️",
  },
  {
    title: "Database",
    skills: ["MongoDB", "Mongoose", "Database Design", "Data Validation"],
    icon: "🗄️",
  },
  {
    title: "Languages",
    skills: ["Java (DSA)", "C/C++", "Python", "JavaScript"],
    icon: "💻",
  },
];

const SkillsPreview = () => {
  return (
    <AnimatedSection className="py-20 relative">
      <div className="floating-orb-accent w-72 h-72 -right-20 top-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <h2 className="section-heading">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Proficient in modern web technologies and always learning new tools.
            </p>
          </div>
          <Link
            to="/skills"
            className="flex items-center gap-2 text-primary hover:gap-3 transition-all"
          >
            View All Skills
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-display font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsPreview;
