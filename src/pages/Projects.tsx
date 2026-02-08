import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

const projects = [
  {
    title: "VartalApp",
    role: "Real-Time Chat Application",
    description:
      "A modern chat system supporting real-time communication, user presence, and secure authentication using MERN and WebSockets.",
    highlights: [
      "Socket.IO real-time messaging",
      "JWT + bcrypt security",
      "Online/offline indicators",
      "State handled via Zustand",
    ],
    tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
    github: "https://github.com/anubhavkumar19/VartalApp",
    live: "https://vartalapp-hytu.onrender.com/",
    projectImg:"./src/assets/vartalapp.png"
  },
  {
    title: "Kritrim Assistant",
    role: "AI Chatbot Platform",
    description:
      "An AI-powered chatbot integrating Google Gemini API, demonstrating production-level AI + MERN integration.",
    highlights: [
      "Gemini API integration",
      "Scalable MERN backend",
      "Clean conversational UI",
      "Production deployment",
    ],
    tech: ["React", "Node.js", "MongoDB", "Gemini API"],
    github: "https://github.com/anubhavkumar19/Kritrim-Assistant",
    live: "https://kritrim-assistant.onrender.com/",
    projectImg:"./src/assets/kritrim.png"
  },
  {
    title: "PulsePoint",
    role: "Full-Stack Medical Platform",
    description:
      "A secure healthcare platform allowing patients to book appointments, explore remedies, and interact with doctors through structured data models.",
    highlights: [
      "Passport.js based authentication",
      "Doctor review & rating system",
      "Remedy knowledge base",
      "Session-based authorization",
    ],
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    github: "https://github.com/anubhavkumar19/Pulse_Point",
    live: "https://pulsepoint-nh9x.onrender.com/",
    projectImg:"./src/assets/pulsepoint.png"
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="pt-24 pb-28 scroll-mt-24 bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h1 className="text-5xl font-display font-bold mb-4">
              Selected <span className="text-primary">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              A focused collection of systems I’ve built — emphasizing backend
              architecture, security, and real-world usability.
            </p>
          </motion.div>

          {/* Projects */}
          <div className="space-y-28">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center`}
              >
                {/* Text */}
                <div className={index % 2 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl font-display font-semibold mb-2">
                    {project.title}
                  </h2>
                  <p className="text-primary text-sm mb-4">{project.role}</p>

                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {project.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle size={16} className="text-primary mt-0.5" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary"
                    >
                      <Github size={18} /> Source
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary"
                    >
                      <ExternalLink size={18} /> Live
                    </a>
                  </div>
                </div>

                {/* Visual block */}
                <div
                  className={`h-64 rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-transparent`}
                  >
                    <img src={project.projectImg} alt="Project visual" />
                  </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
