import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function NVAProjectSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="nva-projekts" ref={ref} className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.15em] uppercase text-accent font-medium mb-6 block">
              NVA projekts
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight mb-4">
              Prasmju pilnveide{" "}
              <em className="not-italic text-accent">pieaugušajiem</em>
            </h2>
            <p className="text-xs text-muted-foreground/50 font-mono mb-8">
              Nr. 3.1.2.5.i.0/1/23/I/CFLA/001
            </p>

            <div className="space-y-5 text-sm text-muted-foreground leading-relaxed font-light">
              <p>
                Uzņēmums piedalījās NVA projektā, kurā bezdarbniekam tika dota iespēja apgūt jaunu profesiju reālā darba vidē. Mēs piedāvājām apgūt grāmatveža palīga profesiju.
              </p>
              <p>
                Apmācības ilga vairākus mēnešus projekta <em className="not-italic text-foreground">Prasmju pilnveide pieaugušajiem</em> ietvaros.
              </p>
              <p>
                Pēc apmācībām dalībniekam tiek piedāvāta iespēja turpināt darbu uzņēmumā un gūt tālāk praktiskā darba iemaņas.
              </p>
              <p>
                Saņemt rekomendācijas vēstuli potenciālajiem darba devējiem — tāda iespēja pastāv, ja darbinieks ir turpinājis sevi pilnveidot, godprātīgi veicis savus pienākumus, un nostrādājis uzņēmumā 1 pilnu darba gadu.
              </p>
            </div>

            <a
              href="#kontakti"
              className="group inline-flex items-center gap-2 mt-10 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:bg-accent hover:text-foreground transition-all duration-300 active:scale-95"
            >
              Sazināties par projektu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://media.base44.com/images/public/69de5d2d05e35aad9e3771c3/ab7ffa81e_20251003_124710.jpg"
                alt="NVA projekts — Prasmju pilnveide pieaugušajiem"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 15%", objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-foreground/20" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Projekts</p>
                <p className="text-white text-sm font-medium">"Prasmju pilnveide pieaugušajiem"</p>
                <p className="text-white/50 text-xs mt-0.5">Līga Kurmane</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 border border-accent/20 rounded-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}