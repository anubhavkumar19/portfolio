import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../shared/AnimatedSection";
import pulsepointImg from "@/assets/pulsepoint.png";
import vartalappImg from "@/assets/vartalapp.png";
import kritrimImg from "@/assets/kritrim.png";

const projects = [
  {
    title: "VartalApp",
    subtitle: "Real-Time Chat Application",
    description:
      "Full-stack real-time messaging app with Socket.IO for live communication, JWT authentication, and responsive React UI.",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/anubhavkumar19/VartalApp",
    live: "https://vartalapp-hytu.onrender.com/",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Kritrim Assistant",
    subtitle: "AI Chatbot with Gemini API",
    description:
      "MERN stack chatbot leveraging Gemini API with responsive UI, successfully deployed on Render for production use.",
    tech: ["React", "Node.js", "Gemini API", "MongoDB", "Express.js"],
    github: "https://github.com/anubhavkumar19/Kritrim-Assistant",
    live: "https://kritrim-assistant.onrender.com/",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "PulsePoint",
    subtitle: "Smart Medical Appointment & Remedy System",
    description:
      "A comprehensive medical platform enabling patients to check appointments and access remedy documents with secure authentication.",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Passport.js"],
    github: "https://github.com/anubhavkumar19/Pulse_Point",
    live: "https://pulsepoint-nh9x.onrender.com/",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
];

const FeaturedProjects = () => {
  return (
    <AnimatedSection className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <h2 className="section-heading">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              A collection of full-stack applications built with modern technologies and best practices.
            </p>
          </div>
          <Link
            to="/projects"
            className="flex items-center gap-2 text-primary hover:gap-3 transition-all"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl group"
            >
              {/* Project header with gradient */}
              <div className={`h-32 rounded-xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center`}>
                {/* <span className="text-3xl font-display font-bold">{project.title.slice(0, 2)}</span> */}
                <img
                  src={
                    project.title === "PulsePoint"
                      ? pulsepointImg
                      : project.title === "VartalApp"
                      ? vartalappImg
                      : kritrimImg
                  }
                  alt={project.title}
                  className="h-full object-cover rounded-xl"
                />
              </div>

              <h3 className="text-xl font-display font-semibold mb-1">{project.title}</h3>
              <p className="text-primary text-sm mb-3">{project.subtitle}</p>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 4).map((tech) => (
                  <span key={tech} className="skill-tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FeaturedProjects;
