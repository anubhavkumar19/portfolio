import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import profileImg from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* background grid */}
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--background)))]" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute right-[-20%] top-[10%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
      </div>


      <div className="container mx-auto px-6 grid lg:grid-cols-[420px_1fr] gap-16 items-center">

        {/* LEFT — PROFILE */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden glass-card">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-[520px] object-cover"
            />

            {/* edge label */}
            <span className="absolute top-6 left-6 px-4 py-2 text-xs rounded-full bg-background/80 backdrop-blur border">
              NIT Patna • ECE
            </span>
          </div>
        </motion.div>

        {/* RIGHT — CONTENT */}
        <div className="relative">
          {/* floating label */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            Full-Stack Developer
          </motion.div>

          {/* NAME */}
          <motion.h1
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="text-6xl md:text-7xl font-bold leading-tight mb-6"
          >
            Anubhav
            <br />
            <span className="gradient-text">Kumar</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-xl text-lg text-muted-foreground mb-10"
          >
            I design and build scalable web applications, real-time systems and
            clean user experiences using modern full-stack technologies.
          </motion.p>

          {/* ACTION ROW */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 text-lg font-medium"
            >
              View Projects
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </a>

            <div className="h-6 w-px bg-border" />

            <a
              href="https://github.com/anubhavkumar19"
              target="_blank"
              className="hover:text-primary transition"
            >
              <Github />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-primary transition"
            >
              <Linkedin />
            </a>
          </motion.div>

          {/* METRICS STRIP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-14 grid grid-cols-3 max-w-lg gap-6"
          >
            {[
              ["1000+", "DSA Problems"],
              ["10+", "Projects"],
              ["8.3", "CGPA"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="text-2xl font-bold">{v}</div>
                <div className="text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
