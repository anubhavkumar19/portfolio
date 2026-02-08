import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const zones = [
  {
    title: "Core Languages",
    items: ["Java (DSA)", "JavaScript", "TypeScript", "C / C++", "Python (Basics)"],
  },
  {
    title: "Backend Systems",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication (JWT, Sessions)",
      "Socket.IO",
      "Passport.js",
    ],
  },
  {
    title: "Frontend Systems",
    items: [
      "React.js",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Component Architecture",
      "Responsive Design",
    ],
  },
  {
    title: "Databases",
    items: [
      "MongoDB",
      "Mongoose",
      "Schema Design",
      "JOI Validation",
      "MongoDB Atlas",
    ],
  },
  {
    title: "Tools & Workflow",
    items: ["Git / GitHub", "Linux CLI", "Render", "Cloudinary", "Multer", "Nodemon"],
  },
  {
    title: "CS Foundations",
    items: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
    ],
  },
];

const problemSolving = [
  { platform: "LeetCode", rating: "1467", solved: "350+" },
  { platform: "CodeChef", rating: "1473", solved: "250+" },
  { platform: "Codeforces", rating: "1184", solved: "200+" },
];

const Skills = () => {
  return (
    <Layout>
      <section className="pt-28 pb-28">
        <div className="container mx-auto px-6 max-w-6xl">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-5">
              Skill Atlas
            </h1>
            <div className="w-16 h-1 bg-primary mb-6 rounded-full" />
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              A system-level view of the technologies and foundations I use to
              design, build, and reason about software.
            </p>
          </motion.div>

          {/* Skill Zones */}
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-20">
            {zones.map((zone, index) => (
              <motion.section
                key={zone.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="rounded-2xl border border-border/60 bg-background/40 backdrop-blur-sm p-8 hover:border-primary/40 transition-colors"
              >
                <h2 className="text-xl font-semibold mb-6 tracking-wide">
                  {zone.title}
                </h2>

                <div className="flex flex-wrap gap-3">
                  {zone.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full text-sm
                                 bg-muted/60 text-muted-foreground
                                 border border-border/50
                                 hover:bg-primary/10 hover:text-foreground
                                 hover:border-primary/40
                                 transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Divider */}
          <div className="my-28 border-t border-border/70" />

          {/* Problem Solving */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold mb-14">
              Competitive Programming
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {problemSolving.map((p) => (
                <div
                  key={p.platform}
                  className="rounded-xl border border-border/60 p-6
                             bg-background/40 backdrop-blur-sm"
                >
                  <span className="block font-semibold mb-2">
                    {p.platform}
                  </span>
                  <span className="block text-muted-foreground">
                    Rating — {p.rating}
                  </span>
                  <span className="block text-muted-foreground">
                    Problems Solved — {p.solved}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-12 text-muted-foreground">
              Total problems solved across platforms:{" "}
              <strong className="text-foreground">1000+</strong>
            </p>
          </motion.section>

        </div>
      </section>
    </Layout>
  );
};

export default Skills;
