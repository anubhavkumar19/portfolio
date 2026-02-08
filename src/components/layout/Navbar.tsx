import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const location = useLocation();

  /* ---------- scroll effect ---------- */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- close mobile menu on route change ---------- */
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  /* ---------- theme handling ---------- */
  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as "light" | "dark") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all
    h-16 md:h-20
    ${isScrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border"
          : "bg-transparent"}
  `}
      style={{ "--nav-h": "5rem" } as React.CSSProperties}
    >

      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-25 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-bold"
          >
            ANUK
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors ${active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {link.name}
                {active && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary"
                  />
                )}
              </Link>
            );
          })}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-xl border border-border hover:bg-accent transition"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA */}
          <a
            href="https://github.com/anubhavkumar19"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 rounded-lg border border-border"
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-3 rounded-2xl bg-background/95 backdrop-blur-2xl border border-border shadow-xl"
          >
            <div className="flex flex-col p-6 gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium ${location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                    }`}
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={toggleTheme}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-border"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                <span>Toggle Theme</span>
              </button>

              <a
                href="https://github.com/anubhavkumar19"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-3 rounded-xl bg-primary text-primary-foreground font-medium"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
