import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 900));

    toast({
      title: "Message received",
      description: "I’ll get back to you shortly.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <section className="relative scroll-mt-[var(--nav-h)] pt-24 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Let’s <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Whether it’s a project, opportunity, or just a quick hello —
              my inbox is always open.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            {/* LEFT — CONTACT PRESENCE */}
            <AnimatedSection>
              <div className="space-y-10">
                {/* Quick Info */}
                <div className="space-y-5">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "anubhavkumar22166@gmail.com",
                      href: "mailto:anubhavkumar22166@gmail.com",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+91 7319830728",
                      href: "tel:+917319830728",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "NIT Patna, India",
                    },
                  ].map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <item.icon size={22} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Rail */}
                <div className="flex gap-4 pt-6">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/anubhavkumar19",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/anuk01/",
                    },
                  ].map((s, i) => (
                    <motion.a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4 }}
                      className="p-4 rounded-2xl border border-border bg-secondary hover:border-primary transition"
                    >
                      <s.icon size={22} />
                    </motion.a>
                  ))}
                </div>

                {/* Availability */}
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-primary/30 bg-primary/5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">
                    Open to internships & full-time roles
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* RIGHT — FORM PANEL */}
            <AnimatedSection delay={0.1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl p-8 md:p-10 bg-secondary/60 border border-border"
              >
                <h2 className="text-2xl font-display font-semibold mb-8">
                  Send a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none"
                  />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="What would you like to talk about?"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none resize-none"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : <>Send Message <Send size={18} /></>}
                  </button>
                </form>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
