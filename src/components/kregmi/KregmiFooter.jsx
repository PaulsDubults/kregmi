import React from "react";

export default function KregmiFooter() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7 flex-shrink-0">
              <div className="absolute inset-0 bg-white/10 rounded-sm" />
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-accent rounded-sm" />
            </div>
            <div>
              <p className="font-display text-sm text-white tracking-wide">KREGMI</p>
              <p className="text-xs text-white/30">SIA "KREGMI" · Latvija</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6">
            {[
              { label: "Par uzņēmumu", href: "#par-uznemumu" },
              { label: "Pakalpojumi", href: "#pakalpojumi" },
              { label: "Projekti", href: "#projekti" },
              { label: "Apmācības", href: "#apmacibas" },
              { label: "Par mani", href: "#par-mani" },
              { label: "Kontakti", href: "#kontakti" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-white/30 hover:text-white/70 transition-colors tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} SIA "KREGMI"
          </p>
        </div>
      </div>
    </footer>
  );
}