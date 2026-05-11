import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="text-xs tracking-[0.15em] uppercase text-accent font-medium mb-4 block">
            Atsauksmes
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight max-w-xl">
            Ko saka{" "}
            <em className="not-italic text-muted-foreground/40">sadarbības partneri</em>
          </h2>
        </motion.div>

        {/* NVA highlighted testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="rounded-2xl bg-foreground p-10 sm:p-14 mb-8 relative overflow-hidden"
        >
          {/* Decorative quote mark */}
          <div className="absolute top-8 right-10 font-display text-[8rem] leading-none text-white/5 select-none pointer-events-none">"</div>

          <div className="relative max-w-3xl">
            <p className="text-xs uppercase tracking-[0.15em] text-accent font-medium mb-6">
              Atsauksme pēc dalības NVA projektā "Apmācība pie darba devēja"
            </p>

            <blockquote className="space-y-4 text-white/75 text-base leading-relaxed font-light mb-10">
              <p>Pateicos Jums par vieglu, produktīvu un patīkamu sadarbību visā Līguma īstenošanas laikā!</p>
              <p>Priecāšos, ja izlemsiet atkārtoti iesaistīties pasākuma <em className="not-italic text-white/90">Apmācība pie darba devēja</em> īstenošanā, kad būs nepieciešamība pieņemt darbā un apmācīt jaunu darbinieku!</p>
              <p className="text-white/90 font-normal">Veiksmīgu Jums turpmāko darba procesu!</p>
            </blockquote>

            <div className="border-t border-white/10 pt-6">
              <p className="text-white font-medium mb-1">Nataļja Vasiļevska</p>
              <p className="text-white/40 text-sm">Nodarbinātības valsts aģentūras</p>
              <p className="text-white/40 text-sm">Nodarbinātības pasākumu departamenta</p>
              <p className="text-white/40 text-sm mt-1">
                AF projekts "Prasmju pilnveide pieaugušajiem"
              </p>
              <p className="text-white/30 text-xs font-mono mt-1">Nr. 3.1.2.5.i.0/1/23/I/CFLA/001</p>
              <p className="text-white/40 text-sm mt-1">projekta koordinatore</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}