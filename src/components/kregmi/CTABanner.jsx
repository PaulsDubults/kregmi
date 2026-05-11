import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-secondary/40 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="relative rounded-3xl bg-foreground overflow-hidden p-10 sm:p-14 md:p-20">
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/5" />
          <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-white/3" />
          <div className="absolute top-0 right-0 bottom-0 w-1/3 bg-gradient-to-l from-accent/5 to-transparent hidden md:block" />

          <div className="relative max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.15em] uppercase text-accent font-medium mb-6 block"
            >
              Sāciet šodien
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6"
            >
              Attīstiet savu biznesu vai uzsāciet savu ceļu grāmatvedībā jau šodien
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/50 text-base leading-relaxed mb-10 font-light"
            >
              Neatkarīgi no tā, vai jums nepieciešams uzticams grāmatvedis vai
              vēlaties apgūt grāmatvedību praksē — sazinieties ar mums.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="#kontakti"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-medium rounded-full hover:bg-white hover:text-foreground transition-all duration-300"
            >
              Pieteikt konsultāciju
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}