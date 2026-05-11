import React from "react";

const footerLinks = [
  { label: "Par mums", href: "#par-mums" },
  { label: "Pakalpojumi", href: "#pakalpojumi" },
  { label: "Apmācības", href: "#apmacibas" },
  { label: "Kontakti", href: "#kontakti" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-sm">G</span>
              </div>
              <span className="font-heading font-semibold text-lg">GrāmatPro</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Uzticama grāmatvedība un praktiska apmācība. Palīdzam jūsu
              biznesam augt uz stabila finanšu pamata.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8">
            <div>
              <h4 className="font-semibold text-sm mb-3 font-body">Navigācija</h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-3 font-body">Kontakti</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/60">
                <li>info@gramatpro.lv</li>
                <li>+371 XX XXX XXX</li>
                <li>Latvija</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} GrāmatPro. Visas tiesības aizsargātas.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Latvija
          </p>
        </div>
      </div>
    </footer>
  );
}