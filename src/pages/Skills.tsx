import { motion } from "framer-motion";
import { Code, Server, Database, Globe, Wrench, BookOpen, Cpu, Terminal } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/shared/AnimatedSection";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code size={28} />,
    skills: [
      { name: "Java (DSA)", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "C/C++", level: 75 },
      { name: "Python (Basics)", level: 60 },
      { name: "TypeScript", level: 70 },
    ],
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Backend",
    icon: <Server size={28} />,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "REST APIs", level: 85 },
      { name: "Socket.IO", level: 80 },
      { name: "Passport.js", level: 78 },
      { name: "JWT Auth", level: 85 },
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Frontend",
    icon: <Globe size={28} />,
    skills: [
      { name: "React.js", level: 85 },
      { name: "HTML5/CSS3", level: 92 },
      { name: "Tailwind CSS", level: 88 },
      { name: "EJS Templates", level: 80 },
      { name: "Bootstrap", level: 75 },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Database",
    icon: <Database size={28} />,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Mongoose ODM", level: 82 },
      { name: "MongoDB Atlas", level: 80 },
      { name: "Data Validation (JOI)", level: 78 },
      { name: "Database Design", level: 75 },
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench size={28} />,
    skills: [
      { name: "Git/GitHub", level: 88 },
      { name: "Render Deployment", level: 82 },
      { name: "Nodemon", level: 85 },
      { name: "Multer (File Uploads)", level: 78 },
      { name: "Cloudinary (Media)", level: 75 },
    ],
    color: "from-rose-500 to-red-500",
  },
  {
    title: "CS Fundamentals",
    icon: <BookOpen size={28} />,
    skills: [
      { name: "Data Structures", level: 90 },
      { name: "Algorithms", level: 88 },
      { name: "OOP Concepts", level: 85 },
      { name: "Computer Networks", level: 75 },
      { name: "DBMS/SQL", level: 72 },
      { name: "Operating Systems", level: 70 },
    ],
    color: "from-indigo-500 to-violet-500",
  },
];

const exposureSkills = [
  "Socket.IO",
  "Real-Time Communication",
  "Testing Library (Jest)",
  "CORS Security",
  "Crypto",
  "Session/Cookies",
  "Bcrypt",
  "WebSockets",
  "Zustand",
  "React Query",
];

const Skills = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="floating-orb w-96 h-96 -top-48 -left-48" />
        <div className="floating-orb-accent w-80 h-80 bottom-1/3 -right-40" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise, from frontend development
              to backend systems and computer science fundamentals.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <AnimatedSection key={category.title} delay={categoryIndex * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-2xl h-full"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-20`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-display font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        <div className="flex justify-between text-sm mb-1">
                          <span>{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Additional Exposure */}
          <AnimatedSection>
            <div className="glass-card p-8 md:p-10 rounded-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Cpu className="text-primary" size={28} />
                </div>
                <h2 className="text-2xl font-display font-bold">Additional Exposure</h2>
              </div>

              <div className="flex flex-wrap gap-3">
                {exposureSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="skill-tag px-5 py-2.5"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Problem Solving Stats */}
          <AnimatedSection className="mt-12">
            <div className="glass-card p-8 md:p-10 rounded-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Terminal className="text-primary" size={28} />
                </div>
                <h2 className="text-2xl font-display font-bold">Problem Solving</h2>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { platform: "LeetCode", rating: "1467", problems: "350+", color: "from-yellow-500/20 to-orange-500/20", url: "https://leetcode.com/u/ujjwalKumar1/" },
                  { platform: "CodeChef", rating: "1473", problems: "250+", color: "from-amber-500/20 to-brown-500/20", url: "https://www.codechef.com/users/quiver_clam_16" },
                  { platform: "Codeforces", rating: "1184", problems: "200+", color: "from-blue-500/20 to-cyan-500/20", url: "https://codeforces.com/profile/kumaranubhav19" },
                ].map((platform, index) => (
                  <motion.div
                    key={platform.platform}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-2xl bg-gradient-to-br ${platform.color} text-center`}
                  >
                    <a href={platform.url} target="_blank" rel="noopener noreferrer" >
                      <h3 className="text-xl font-display font-semibold mb-3">{platform.platform}</h3>
                      <div className="text-3xl font-bold gradient-text mb-1">{platform.rating}</div>
                      <p className="text-sm text-muted-foreground">Max Rating</p>
                      <div className="mt-3 pt-3 border-t border-border/30">
                        <span className="text-sm text-muted-foreground">{platform.problems} Problems</span>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
                  <span className="text-4xl font-display font-bold gradient-text">1000+</span>
                  <span className="text-muted-foreground">Total Problems Solved</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
