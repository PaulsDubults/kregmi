import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Par uzņēmumu", href: "#par-uznemumu" },
  { label: "Pakalpojumi", href: "#pakalpojumi" },
  { label: "Projekti", href: "#projekti" },
  { label: "Apmācības", href: "#apmacibas" },
  { label: "Par mani", href: "#par-mani" },
  { label: "Kontakti", href: "#kontakti" },
];

export default function KregmiNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/96 backdrop-blur-lg border-b border-border/60 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-foreground rounded-sm" />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-accent rounded-sm" />
          </div>
          <span className="font-display text-base tracking-wide text-foreground">
            KREGMI
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#kontakti"
            className="ml-2 px-5 py-2 bg-foreground text-background text-sm rounded-full hover:bg-accent hover:text-foreground transition-all duration-300"
          >
            Pieteikt konsultāciju
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-border px-6 py-5 space-y-4"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakti"
              onClick={() => setOpen(false)}
              className="inline-block px-5 py-2 bg-foreground text-background text-sm rounded-full mt-2"
            >
              Pieteikt konsultāciju
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}