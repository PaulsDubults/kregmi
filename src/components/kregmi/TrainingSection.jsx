import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const topics = [
  "Dokumentu uzskaite un reģistrācija",
  "Kases un bankas dokumentu apstrāde",
  "Debitoru un kreditoru uzskaite",
  "Algu aprēķins",
  "Nodokļu uzskaite",
  "Finanšu pārskatu sagatavošana",
  "Darbs ar grāmatvedības programmām Horizon un 1C",
];

export default function TrainingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="apmacibas" ref={ref} className="py-28 bg-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ── Praktiskās apmācības block ── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs tracking-[0.15em] uppercase text-accent font-medium mb-6 block">
              Praktiskās apmācības
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white leading-tight mb-6">
              Mācies tur,{" "}
              <br />
              <em className="not-italic text-accent">kur notiek</em>{" "}
              īstais darbs
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-6 font-light max-w-md">
              SIA KREGMI piedalījās NVA projektā, kurā bezdarbniekam tika dota iespēja apgūt jaunu profesiju reālā darba vidē. Mēs piedāvājām apgūt grāmatveža palīga profesiju. Apmācības ilga vairākus mēnešus projekta{" "}
              <em className="not-italic text-white/80">"Prasmju pilnveide pieaugušajiem"</em> ietvaros.
            </p>

            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.12em] text-white/30 mb-4">Saskaņā ar NVA apstiprināto Mācību plānu, apmācību programma ietvēra:</p>
              <ul className="space-y-2.5">
                {topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-3 text-sm text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-white/10 bg-white/5 mb-8">
              <p className="text-xs uppercase tracking-widest text-white/30 mb-3">Pēc apmācībām:</p>
              <div className="space-y-2">
                <p className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-accent flex-shrink-0">→</span> Dalībniekam tiek piedāvāta iespēja turpināt darbu uzņēmumā un gūt tālāk praktiskā darba iemaņas.
                </p>
                <p className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-accent flex-shrink-0">→</span> Saņemt rekomendācijas vēstuli potenciālajiem darba devējiem, pievienojot to savai CV — tāda iespēja pastāv, ja darbinieks ir turpinājis sevi pilnveidot, godprātīgi veicis savus pienākumus un nostrādājis uzņēmumā 1 pilnu darba gadu.
                </p>
              </div>
            </div>

            <a
              href="#kontakti"
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white transition-colors"
            >
              Uzzināt vairāk par apmācībām
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center"
          >
            <div className="relative w-full rounded-3xl overflow-hidden" style={{ aspectRatio: "auto" }}>
              <img
                src="https://media.base44.com/images/public/69de5d2d05e35aad9e3771c3/ab7ffa81e_20251003_124710.jpg"
                alt="NVA projekts — Prasmju pilnveide pieaugušajiem"
                className="w-full h-auto rounded-3xl"
              />
              <div className="absolute inset-0 bg-foreground/30" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-foreground/80 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">NVA projekts</p>
                  <p className="text-white text-sm font-medium">"Apmācība pie darba devēja"</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 border border-accent/20 rounded-2xl" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}