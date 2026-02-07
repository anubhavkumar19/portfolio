import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="floating-orb w-96 h-96 -bottom-48 left-1/4" />
      <div className="floating-orb-accent w-80 h-80 -top-40 right-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-16 rounded-3xl text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Let's Build Something{" "}
            <span className="gradient-text">Amazing</span> Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8"
          >
            I'm currently looking for internship and full-time opportunities. 
            If you have an exciting project or role that could use my skills, let's connect!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            <Link to="/contact" className="btn-primary flex items-center gap-2">
              Get In Touch
              <ArrowRight size={18} />
            </Link>
            <a
              href="mailto:anubhavkumar22166@gmail.com"
              className="btn-outline flex items-center gap-2"
            >
              <Mail size={18} />
              Send Email
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6 justify-center text-muted-foreground"
          >
            <a
              href="mailto:anubhavkumar22166@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={16} />
              anubhavkumar22166@gmail.com
            </a>
            <a
              href="tel:+917319830728"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone size={16} />
              +91-7319830728
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
