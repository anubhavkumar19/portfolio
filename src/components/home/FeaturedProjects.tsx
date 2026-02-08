import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../shared/AnimatedSection";
import pulsepointImg from "@/assets/pulsepoint.png";
import vartalappImg from "@/assets/vartalapp.png";
import kritrimImg from "@/assets/kritrim.png";


/* ===== Motion Variants ===== */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//     scale: 0.96,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

/* ===== Data ===== */

const projects = [
  {
    title: "VartalApp",
    subtitle: "Real-Time Chat Application",
    description:
      "Full-stack real-time messaging app with Socket.IO for live communication, JWT authentication, and responsive React UI.",
    tech: ["React", "Node.js", "Socket.IO", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/anubhavkumar19/VartalApp",
    live: "https://vartalapp-hytu.onrender.com/",
  },
  {
    title: "Kritrim Assistant",
    subtitle: "AI Chatbot with Gemini API",
    description:
      "MERN stack chatbot leveraging Gemini API with responsive UI, successfully deployed on Render for production use.",
    tech: ["React", "Node.js", "Gemini API", "MongoDB", "Express.js"],
    github: "https://github.com/anubhavkumar19/Kritrim-Assistant",
    live: "https://kritrim-assistant.onrender.com/",
  },
  {
    title: "PulsePoint",
    subtitle: "Medical Appointment Platform",
    description:
      "Smart medical platform enabling patients to manage appointments and access remedy documents securely.",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Passport.js"],
    github: "https://github.com/anubhavkumar19/Pulse_Point",
    live: "https://pulsepoint-nh9x.onrender.com/",
  },
];

const FeaturedProjects = () => {
  return (
    <AnimatedSection className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="section-heading">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Selected production-ready full-stack applications.
            </p>
          </div>

          <Link
            to="/projects"
            className="hidden md:flex items-center gap-2 text-primary hover:gap-3 transition-all"
          >
            View All
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              style={{ willChange: "transform" }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={
                    project.title === "PulsePoint"
                      ? pulsepointImg
                      : project.title === "VartalApp"
                      ? vartalappImg
                      : kritrimImg
                  }
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="hover:scale-125 transition text-white" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="hover:scale-125 transition text-white" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold">
                  {project.title}
                </h3>
                <p className="text-primary text-sm mb-2">
                  {project.subtitle}
                </p>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default FeaturedProjects;
