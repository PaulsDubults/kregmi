import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function HeroSplit() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* LEFT — text */}
      <div className="relative flex-1 flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 pt-28 pb-16 md:pt-16 bg-white">
        <div className="absolute left-0 top-1/4 bottom-1/4 w-[3px] bg-gradient-to-b from-transparent via-accent to-transparent hidden md:block" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-center mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-8 bg-accent" />
            <span className="text-sm tracking-[0.15em] uppercase text-muted-foreground font-medium">
              SIA "KREGMI"
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-[5rem] leading-[1.1] text-foreground mb-8">
            Grāmatvedības ārpakalpojumi{" "}
            <em className="not-italic text-accent">uzņēmumiem</em>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-4 font-light">
            SIA KREGMI piedāvā grāmatvedības pakalpojumus un arī praktisko apmācību.
          </p>

          <p className="text-lg text-muted-foreground/70 leading-relaxed mb-12 font-light">
            Cena tiek noteikta individuāli, ņemot vērā jūsu uzņēmuma apjomu un vajadzības.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakti"
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-foreground text-background text-base rounded-full hover:bg-accent hover:text-foreground transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md"
            >
              Pieteikt konsultāciju
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#pakalpojumi"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-border text-foreground text-base rounded-full hover:border-accent hover:bg-accent/5 active:scale-95 transition-all duration-300"
            >
              Apskatīt pakalpojumus
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-8 sm:left-12 md:left-16 lg:left-20 flex items-center gap-2 text-xs text-muted-foreground/50"
        >
          <ArrowDown className="w-3 h-3 animate-bounce" />
          <span>Ritināt zemāk</span>
        </motion.div>
      </div>

      {/* RIGHT — abstract visual */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative md:w-[45%] lg:w-[42%] min-h-[50vh] md:min-h-0 bg-foreground overflow-hidden"
      >
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.4, delay: 0.3 }} className="absolute -top-16 -right-16 w-80 h-80 rounded-full border border-white/10" />
          <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.4, delay: 0.5 }} className="absolute -top-8 -right-8 w-56 h-56 rounded-full border border-white/10" />
          <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} className="absolute top-1/3 left-8 w-24 h-24 bg-accent/80 rounded-2xl rotate-12" />
          <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="absolute top-1/3 left-16 w-24 h-24 border-2 border-accent/40 rounded-2xl rotate-12" />
          <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full border border-white/8" />
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/3 right-12 w-6 h-6 bg-white/20 rounded-sm rotate-45" />
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-1/4 left-1/3 w-4 h-4 bg-accent/60 rounded-sm" />

          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
            <line x1="0" y1="600" x2="400" y2="200" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <line x1="0" y1="400" x2="400" y2="0" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.p initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.7 }} className="font-display text-[5rem] md:text-[6rem] leading-none text-white/5 select-none">K</motion.p>
          </div>

          <div className="absolute bottom-8 left-0 right-0 px-10">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.6 }} className="flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-white/30 tracking-widest uppercase">Latvija</span>
              <div className="h-px flex-1 bg-white/10" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}