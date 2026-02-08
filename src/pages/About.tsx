import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  MapPin,
  Calendar,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import profileImg from "@/assets/profile.png";

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
    grade: "80.2%",
    location: "Gorakhpur, UP",
  },
  {
    institution: "N.S. Children Academy",
    degree: "Secondary (10th)",
    period: "2020",
    grade: "93.5%",
    location: "Gorakhpur, UP",
  },
];

const achievements = [
  "Certified in Data Structures & Algorithms using Java (NPTEL)",
  "Solved 400+ DSA problems across graphs, DP, trees",
  "Qualified Stage 2 – AlgoUniversity Tech Fellowship 2024",
  "Completed Java & C certifications (Sololearn)",
  "3rd National Level Quiz – MCCS QQUIZZARDS 2023",
];

const About = () => {
  return (
    <Layout>
      <section className="relative pt-24 pb-28 scroll-mt-24">
        {/* Background accents */}
        {/* <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 rounded-full bg-accent/10 blur-3xl" /> */}

        <div className="container mx-auto px-6 max-w-6x1">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-20"
          >
            {/* <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1> */}
            <h1 className="text-5xl font-display font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Engineering-driven full-stack developer with a strong foundation in
              problem solving and system thinking.
            </p>
          </motion.div>

          {/* Bio Section */}
          <AnimatedSection className="mb-28">
            <div className="grid lg:grid-cols-[420px_1fr] gap-16">
              {/* Profile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-28 space-y-6"
              >
                <img
                  src={profileImg}
                  alt="Anubhav Kumar"
                  className="rounded-3xl border border-border shadow-xl"
                />

                <div className="glass-card p-5 rounded-2xl space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin size={14} className="text-primary" />
                    NIT Patna, India
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase size={14} className="text-primary" />
                    Open to Opportunities
                  </div>
                </div>
              </motion.div>

              {/* Narrative */}
              <div>
                <h2 className="text-4xl font-display font-bold mb-8 leading-tight">
                  Building scalable software with a strong
                  <span className="gradient-text"> engineering mindset</span>
                </h2>

                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    I’m an Integrated B.Tech + M.Tech ECE student at NIT Patna,
                    focused on building real-world full-stack systems.
                  </p>
                  <p>
                    Currently interning at{" "}
                    <span className="text-primary font-medium">
                      IIT Ropar (NPTEL)
                    </span>
                    , working on MERN-based applications and applied
                    software engineering problems.
                  </p>
                  <p>
                    I enjoy clean backend design, intuitive UI, and algorithmic
                    thinking — backed by 400+ solved DSA problems.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Internship */}
          <AnimatedSection className="mb-24">
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Briefcase size={26} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-semibold">
                    Software Engineer Intern
                  </h3>
                  <p className="text-muted-foreground">
                    IIT Ropar – NPTEL Winter Internship
                  </p>
                </div>
              </div>

              <div className="ml-16 space-y-3 text-muted-foreground">
                <div className="flex gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> Winter 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> Remote
                  </span>
                </div>
                <p>
                  Working on MERN stack projects and applying software engineering
                  principles to real problem statements.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection className="mb-24">
            <h2 className="text-3xl font-display font-bold mb-10">
              Education
            </h2>

            <div className="space-y-5">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card p-6 rounded-2xl"
                >
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="font-semibold">{edu.institution}</h3>
                      <p className="text-muted-foreground text-sm">
                        {edu.degree}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {edu.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary font-medium">{edu.grade}</p>
                      <p className="text-xs text-muted-foreground">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Achievements */}
          <AnimatedSection className="mb-24">
            <h2 className="text-3xl font-display font-bold mb-10">
              Achievements & Certifications
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card p-6 rounded-2xl"
                >
                  <p className="text-muted-foreground">{a}</p>
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
