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
    <AnimatedSection className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass-card px-6 py-8 rounded-2xl text-center group"
            >
              <div className="text-4xl font-display font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default StatsSection;
