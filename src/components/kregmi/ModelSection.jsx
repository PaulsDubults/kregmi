import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    index: "I",
    title: "Mācies",
    subtitle: "Pamati",
    body: "Apgūsti grāmatvedības pamatus saprotamā un praktiskā veidā — bez liekas teorijas.",
    color: "bg-accent",
    textColor: "text-accent-foreground",
  },
  {
    index: "II",
    title: "Dari",
    subtitle: "Prakse",
    body: "Strādā ar profesionālu sistēmu RVS Horizon reālos uzdevumos — tieši kā darba vidē.",
    color: "bg-foreground",
    textColor: "text-background",
  },
  {
    index: "III",
    title: "Attīsties",
    subtitle: "Izaugsme",
    body: "Iegūsti pieredzi un attīsties ilgtermiņā — programma paredzēta līdz pat 1 gadam.",
    color: "bg-secondary",
    textColor: "text-foreground",
    border: true,
  },
];

export default function ModelSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="modelis" ref={ref} className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-start gap-8"
          >
            <div className="hidden sm:block mt-2">
              <div className="w-10 h-px bg-accent mt-3" />
            </div>
            <div>
              <span className="text-xs tracking-[0.15em] uppercase text-accent font-medium mb-4 block">
                Apmācību modelis
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground max-w-2xl leading-[1.05]">
                "Mācies —{" "}
                <em className="not-italic italic text-muted-foreground/40">Dari</em> —{" "}
                Attīsties"
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Steps — asymmetric row */}
        <div className="grid sm:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`${step.color} ${step.border ? "border-2 border-border hover:border-accent/40" : ""} p-10 flex flex-col justify-between min-h-[320px] group rounded-2xl cursor-default transition-shadow duration-300 ${
                step.color === "bg-foreground" ? "hover:shadow-2xl hover:shadow-foreground/20" :
                step.color === "bg-accent" ? "hover:shadow-xl hover:shadow-accent/30" : "hover:shadow-lg"
              }`}
            >
              <div>
                <span
                  className={`font-display text-[4rem] leading-none ${
                    step.color === "bg-foreground"
                      ? "text-white/10"
                      : step.color === "bg-accent"
                      ? "text-foreground/10"
                      : "text-foreground/5"
                  }`}
                >
                  {step.index}
                </span>
              </div>

              <div className="mt-auto pt-10">
                <p
                  className={`text-xs uppercase tracking-[0.12em] mb-2 ${
                    step.color === "bg-foreground"
                      ? "text-white/30"
                      : "text-muted-foreground/50"
                  }`}
                >
                  {step.subtitle}
                </p>
                <h3
                  className={`font-display text-3xl mb-4 ${step.textColor}`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed font-light ${
                    step.color === "bg-foreground"
                      ? "text-white/55"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground font-light max-w-sm">
            Programma piemērota arī cilvēkiem bez iepriekšējas pieredzes
            grāmatvedībā — ieskaitot personas ar veselības ierobežojumiem.
          </p>
          <a
            href="#kontakti"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Pieteikties programmai →
          </a>
        </motion.div>
      </div>
    </section>
  );
}