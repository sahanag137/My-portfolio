import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "learning", label: "Learning" },
  { id: "resume", label: "Resume" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

interface NavbarProps {
  activeSection: string;
  scrollTo: (section: any) => void;
}

export default function Navbar({ activeSection, scrollTo }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-ink/8">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="font-sans font-medium text-ink tracking-tight text-base hover:opacity-70 transition-opacity"
        >
          Sahana G
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" role="navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-sans text-sm tracking-wide transition-opacity relative ${
                activeSection === item.id
                  ? "text-ink font-medium"
                  : "text-secondary hover:text-ink"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-px bg-burgundy"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="block w-5 h-px bg-ink mb-1.5 transition-all" />
          <span className="block w-5 h-px bg-ink mb-1.5 transition-all" />
          <span className="block w-3 h-px bg-ink transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-paper border-t border-ink/8 px-6 py-4 flex flex-col gap-4"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollTo(item.id);
                  setMenuOpen(false);
                }}
                className={`text-left font-sans text-sm tracking-wide py-1 ${
                  activeSection === item.id
                    ? "text-ink font-medium"
                    : "text-secondary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
