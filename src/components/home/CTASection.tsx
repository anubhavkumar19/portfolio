import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5" />
      <div className="floating-orb w-[32rem] h-[32rem] -top-56 -left-56 opacity-60" />
      <div className="floating-orb-accent w-[28rem] h-[28rem] -bottom-48 -right-48 opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative glass-card p-10 md:p-16 rounded-[2.5rem] text-center shadow-2xl"
        >
          {/* subtle glow */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -z-10" />

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight"
          >
            Let’s Build Something{" "}
            <span className="gradient-text">Meaningful</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
          >
            I’m actively looking for internship and full-time opportunities.
            If you have a challenging project or role in mind, I’d love to connect
            and explore how I can contribute.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-5 justify-center mb-10"
          >
            <Link
              to="/contact"
              className="btn-primary px-7 py-3 flex items-center gap-2 group"
            >
              Get In Touch
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href="mailto:anubhavkumar22166@gmail.com"
              className="btn-outline px-7 py-3 flex items-center gap-2"
            >
              <Mail size={18} />
              Send Email
            </a>
          </motion.div>

          {/* Contact row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-8 justify-center text-sm text-muted-foreground"
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
