import { motion } from "framer-motion";
import AnimatedSection from "../shared/AnimatedSection";

const stats = [
  { value: "1000+", label: "Problems Solved" },
  { value: "8.3", label: "CGPA at NIT Patna" },
  { value: "10+", label: "Full-Stack Projects" },
  { value: "1467", label: "LeetCode Rating" },
  { value: "1472", label: "CodeChef Rating" },
  { value: "1184", label: "Codeforces Rating" },
];

const StatsSection = () => {
  return (
    <AnimatedSection className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="glass-card p-8 md:p-12 rounded-3xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default StatsSection;
