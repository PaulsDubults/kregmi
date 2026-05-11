import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function StorySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left — large number + label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center py-20 md:py-28 md:pr-16 border-b md:border-b-0 md:border-r border-white/5"
          >
            <span className="text-xs tracking-[0.15em] uppercase text-accent font-medium mb-8 block">
              Reālais stāsts
            </span>

            <div className="mb-8">
              <div className="flex items-end gap-1 mb-2">
                <span className="font-display text-[5rem] sm:text-[7rem] leading-none text-white">
                  3
                </span>
                <span className="font-display text-3xl text-white/30 mb-4">mēn.</span>
              </div>
              <p className="text-white/40 text-sm tracking-wide">
                no nulles līdz pirmajiem reālajiem uzdevumiem
              </p>
            </div>

            <div className="flex items-end gap-1 mb-2">
              <span className="font-display text-[5rem] sm:text-[7rem] leading-none text-accent/70">
                6+
              </span>
              <span className="font-display text-3xl text-white/20 mb-4">mēn.</span>
            </div>
            <p className="text-white/40 text-sm tracking-wide">
              pastāvīgs darbs reālā vidē
            </p>
          </motion.div>

          {/* Right — story text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center py-20 md:py-28 md:pl-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] text-white leading-tight mb-8">
              No nulles{" "}
              <br />
              <em className="not-italic text-accent">līdz reālam</em>{" "}
              darbam
            </h2>

            <div className="space-y-4 text-white/55 text-base leading-relaxed font-light max-w-md">
              <p>
                NVA projekta "Apmācība pie darba devēja" ietvaros Egita apmācīja grāmatveža palīgu — cilvēku bez iepriekšējas pieredzes, kurš 3 mēnešu laikā apguva profesijas pamatus.
              </p>
              <p>
                Šī persona turpina strādāt reālā darba vidē ar reāliem uzdevumiem un reāliem klientiem.
              </p>
              <p className="text-white/80 font-normal">
                Tā ir Egitas filozofija: īstas prasmes veidojas caur praksi, nevis tikai teoriju. "Mācies – Dari – Attīsties."
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5">
              <p className="text-xs text-white/20 uppercase tracking-widest">
                NVA projekts · Reāls piemērs
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}