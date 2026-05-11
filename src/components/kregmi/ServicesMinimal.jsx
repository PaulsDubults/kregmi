import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calculator, BookOpen, User } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Grāmatvedības ārpakalpojumi",
    description:
      "Pilna cikla grāmatvedības uzskaite, algas, deklarācijas un gada pārskati — Horizon un 1C vidē.",
  },
  {
    icon: BookOpen,
    title: "Apmācības un lekcijas",
    description:
      "Praktiskas grāmatvedības apmācības sadarbībā ar apmācību uzņēmumiem vai individuāli.",
  },
  {
    icon: User,
    title: "Individuāla pieeja",
    description:
      "Katram klientam vai apmācāmajam — personīga uzmanība, elastīgs temps un reāls atbalsts.",
  },
];

export default function ServicesMinimal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.15em] uppercase text-accent font-medium mb-4 block">
            Pakalpojumi
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground">
            Ko mēs darām
          </h2>
        </motion.div>

        <div className="divide-y divide-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group py-10 grid sm:grid-cols-[2fr_3fr] gap-6 sm:gap-12 items-start hover:pl-2 transition-all duration-300"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl border border-border group-hover:border-accent/50 flex items-center justify-center transition-colors flex-shrink-0">
                  <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground text-base leading-snug">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed font-light sm:pt-3">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}