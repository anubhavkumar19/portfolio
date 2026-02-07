import { motion } from "framer-motion";
import { ExternalLink, Github, Server, Database, Globe, Shield, MessageSquare, Bot } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/shared/AnimatedSection";

const projects = [
  {
    title: "PulsePoint",
    subtitle: "Smart Medical Appointment & Remedy System",
    description:
      "A comprehensive medical platform enabling patients to check appointments and access remedy documents. Features secure user authentication, responsive frontend with dynamic content, and MongoDB database models for users, doctors, diseases, and reviews.",
    features: [
      "Secure authentication with Passport.js",
      "Session management and authorization",
      "Responsive EJS frontend with dynamic rendering",
      "Remedy library with category-based filtering",
      "Doctor rating and feedback system",
      "Deployed on Render with scalability",
    ],
    tech: ["JavaScript", "Node.js", "Express.js", "EJS", "MongoDB", "Passport.js"],
    github: "https://github.com/anubhavkumar19/Pulse_Point",
    live: "https://pulsepoint-nh9x.onrender.com/",
    icon: <Shield className="text-cyan-400" size={32} />,
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "VartalApp",
    subtitle: "Real-Time Chat Application",
    description:
      "Engineered a real-time messaging application using the MERN stack with Socket.IO for live communication. Features secure JWT authentication, bcrypt password hashing, and responsive React UI with Zustand state management.",
    features: [
      "Real-time messaging with Socket.IO",
      "JWT authentication & bcrypt hashing",
      "Online/offline status tracking",
      "Read receipts functionality",
      "Responsive Tailwind CSS design",
      "Deployed on Render",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS", "Zustand"],
    github: "https://github.com/anubhavkumar19/VartalApp",
    live: "https://vartalapp-hytu.onrender.com/",
    icon: <MessageSquare className="text-purple-400" size={32} />,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Kritrim Assistant",
    subtitle: "AI Chatbot with Gemini API",
    description:
      "A MERN stack chatbot leveraging Google's Gemini API for intelligent conversations. Built with responsive UI and successfully deployed on Render for production use. Demonstrates integration of AI/ML APIs with full-stack development.",
    features: [
      "Gemini API integration",
      "Intelligent conversational AI",
      "Responsive modern UI",
      "Full MERN stack implementation",
      "Production deployment on Render",
      "Real-time chat interface",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Gemini API", "CSS"],
    github: "https://github.com/anubhavkumar19/Kritrim-Assistant",
    live: "https://kritrim-assistant.onrender.com/",
    icon: <Bot className="text-emerald-400" size={32} />,
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="floating-orb w-96 h-96 -top-48 -right-48" />
        <div className="floating-orb-accent w-80 h-80 bottom-1/4 -left-40" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of full-stack applications built with modern technologies,
              focusing on security, real-time features, and user experience.
            </p>
          </motion.div>

          {/* Tech Stack Overview */}
          <AnimatedSection className="mb-16">
            <div className="glass-card p-8 rounded-3xl">
              <h2 className="text-2xl font-display font-semibold text-center mb-8">
                Core Technologies Used
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {["React", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "Tailwind CSS", "EJS"].map(
                  (tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="skill-tag px-5 py-2.5"
                    >
                      {tech}
                    </motion.span>
                  )
                )}
              </div>
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`glass-card p-8 md:p-10 rounded-3xl bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left - Main Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-background/50">
                          {project.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-display font-bold">{project.title}</h3>
                          <p className="text-primary">{project.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span key={tech} className="skill-tag text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline flex items-center gap-2 text-sm"
                        >
                          <Github size={18} />
                          View Code
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary flex items-center gap-2 text-sm"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      </div>
                    </div>

                    {/* Right - Features */}
                    <div className="lg:border-l lg:border-border/30 lg:pl-8">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Server size={18} className="text-primary" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* GitHub CTA */}
          <AnimatedSection className="mt-16">
            <div className="glass-card p-10 rounded-3xl text-center">
              <Database className="mx-auto mb-4 text-primary" size={48} />
              <h2 className="text-2xl font-display font-bold mb-4">
                Want to see more?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Check out my GitHub profile for more projects, contributions, and code samples.
              </p>
              <a
                href="https://github.com/anubhavkumar19"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Github size={20} />
                View GitHub Profile
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
