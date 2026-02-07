import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Award, MapPin, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import profileImg from "@/assets/profile.png";
import { url } from "inspector";

const education = [
  {
    institution: "National Institute of Technology, Patna",
    degree: "B.Tech & M.Tech Integrated (ECE)",
    period: "2023 - 2028",
    grade: "CGPA: 8.3",
    location: "Patna, Bihar",
  },
  {
    institution: "N.S. Children Academy",
    degree: "Senior Secondary (12th)",
    period: "2022",
    grade: "Percentage: 80.2%",
    location: "Gorakhpur, UP",
  },
  {
    institution: "N.S. Children Academy",
    degree: "Secondary (10th)",
    period: "2020",
    grade: "Percentage: 93.5%",
    location: "Gorakhpur, UP",
  },
];

const achievements = [
  "Certified in Data Structure and Algorithm using Java Programming by NPTEL",
  "Tackled 400+ coding problems spanning dynamic programming, graphs, binary trees",
  "Qualified for Stage 2 of AlgoUniversity Tech Fellowship (ATF) 2024",
  "Completed Introduction to Java and C courses by Sololearn",
  "Qualified 3rd National Level Quiz Contest MCCS-QQUIZZARDS-2023",
];

const About = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="floating-orb w-96 h-96 -top-48 -left-48" />
        <div className="floating-orb-accent w-80 h-80 top-1/4 -right-40" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A passionate full-stack developer and ECE student, dedicated to building 
              innovative web solutions that make a difference.
            </p>
          </motion.div>

          {/* Bio Section */}
          <AnimatedSection className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
                <img
                  src={profileImg}
                  alt="Anubhav Kumar"
                  className="relative w-full max-w-md mx-auto rounded-3xl border-2 border-primary/30"
                />
              </motion.div>

              <div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  Hi, I'm <span className="gradient-text">Anubhav Kumar</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a B.Tech and M.Tech Integrated course ECE student at NIT Patna 
                    and a passionate full-stack developer specializing in the MERN stack.
                  </p>
                  <p>
                    Currently, I'm doing an internship at <span className="text-primary font-medium">IIT Ropar NPTEL</span> as 
                    a Software Engineering Winter Intern, where I'm learning and applying MERN stack 
                    technologies to solve real-world problem statements.
                  </p>
                  <p>
                    My focus is on building secure, patient-centric healthcare technology 
                    and real-time applications. I've developed projects ranging from medical 
                    appointment systems to real-time chat applications.
                  </p>
                  <p>
                    With a strong foundation in Data Structures & Algorithms (400+ problems solved), 
                    I combine my theoretical knowledge with practical development skills.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin size={16} className="text-primary" />
                    <span>NIT Patna, Bihar, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase size={16} className="text-primary" />
                    <span>Open to Opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Current Role */}
          <AnimatedSection className="mb-20">
            <div className="glass-card p-8 md:p-10 rounded-3xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Briefcase className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-semibold">Current Internship</h3>
                  <p className="text-muted-foreground">IIT Ropar NPTEL Winter Internship</p>
                </div>
              </div>
              <div className="ml-16">
                <h4 className="text-xl font-semibold text-primary mb-2">Software Engineer Intern</h4>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    Winter 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    IIT Ropar (Remote)
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Learning MERN stack technologies and applying them to solve real-world 
                  problem statement issues. Working on practical projects that enhance 
                  my full-stack development skills.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="text-primary" size={28} />
              </div>
              <h2 className="text-3xl font-display font-bold">Education</h2>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-2xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">{edu.institution}</h3>
                      <p className="text-muted-foreground">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin size={12} />
                        {edu.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-primary font-medium">{edu.grade}</span>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Achievements */}
          <AnimatedSection className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                <Award className="text-primary" size={28} />
              </div>
              <h2 className="text-3xl font-display font-bold">Achievements & Certifications</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-5 rounded-xl flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Coding Profiles */}
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                <Code2 className="text-primary" size={28} />
              </div>
              <h2 className="text-3xl font-display font-bold">Coding Profiles</h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { name: "LeetCode", rating: "1467", color: "from-yellow-500/20 to-orange-500/20", url: "https://leetcode.com/u/ujjwalKumar1/" },
                { name: "CodeChef", rating: "1473", color: "from-amber-500/20 to-brown-500/20", url: "https://www.codechef.com/users/quiver_clam_16" },
                { name: "Codeforces", rating: "1184", color: "from-blue-500/20 to-cyan-500/20", url: "https://codeforces.com/profile/kumaranubhav19" },
              ].map((profile, index) => (
                <motion.div
                  key={profile.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`glass-card p-6 rounded-2xl bg-gradient-to-br ${profile.color} text-center`}
                >
                  <a href={profile.url} target="_blank" rel="noopener noreferrer" >
                    <h3 className="text-xl font-display font-semibold mb-2">{profile.name}</h3>
                  <p className="text-3xl font-bold gradient-text">{profile.rating}</p>
                  <p className="text-sm text-muted-foreground mt-1">Max Rating</p>
                  </a>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
