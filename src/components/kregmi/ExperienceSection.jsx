import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    number: "10+",
    title: "Gadu pieredzē",
    body: "Vairāk nekā 10 gadu pieredze kā lektore grāmatvedībā un digitālajā grāmatvedībā.",
  },
  {
    number: "02",
    title: "Horizon & 1C",
    body: "Ikdienas profesionāls darbs ar grāmatvedības sistēmām Horizon un 1C reālos projektos.",
  },
  {
    number: "03",
    title: "NVA projekti",
    body: "Piedalās NVA projektos, nodrošinot praktiskas apmācības reālā darba vidē grāmatveža palīga profesijā.",
  },
  {
    number: "04",
    title: "Medicīnas nozare",
    body: "Īpaša pieredze grāmatvedības ārpakalpojumos medicīnas nozarē un grāmatvedības sakārtošanā.",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pieredze" ref={ref} className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Asymmetric header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-md"
          >
            <span className="text-xs tracking-[0.15em] uppercase text-accent font-medium mb-4 block">
              Pieredze
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight">
              Pieredze,{" "}
              <br />
              <em className="not-italic text-muted-foreground/50">kas balstīta</em>{" "}
              praksē
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-muted-foreground max-w-xs leading-relaxed md:text-right md:pb-1"
          >
            Egitas pieredze apvieno profesionālus grāmatvedības pakalpojumus ar praktisko apmācību — reāls darbs, ne tikai teorija.
          </motion.p>
        </div>

        {/* Staggered card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`relative rounded-2xl p-8 group transition-all duration-300 overflow-hidden cursor-default ${
                i === 0
                  ? "bg-foreground text-white hover:shadow-xl hover:shadow-foreground/20"
                  : i === 2
                  ? "bg-accent hover:shadow-xl hover:shadow-accent/30"
                  : "bg-secondary border border-border hover:border-accent/40 hover:shadow-lg"
              } ${i % 2 === 1 ? "lg:mt-10" : ""}`}
            >
              <span className={`font-display text-6xl block mb-6 leading-none select-none ${
                i === 0 ? "text-white/10" : i === 2 ? "text-foreground/10" : "text-accent/20"
              }`}>
                {card.number}
              </span>
              <h3 className={`text-base font-semibold mb-3 leading-snug ${
                i === 0 ? "text-white" : "text-foreground"
              }`}>
                {card.title}
              </h3>
              <p className={`text-sm leading-relaxed font-light ${
                i === 0 ? "text-white/55" : i === 2 ? "text-foreground/70" : "text-muted-foreground"
              }`}>
                {card.body}
              </p>
              <div className={`mt-6 h-0.5 w-8 group-hover:w-16 transition-all duration-500 ${
                i === 0 ? "bg-accent" : i === 2 ? "bg-foreground/30" : "bg-accent/40"
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}