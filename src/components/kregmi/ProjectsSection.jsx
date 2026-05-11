import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    tag: "Digitalizācija",
    title: "Kickstart digitalizācijas treniņš",
    body: "Uzņēmējdarbības digitalizācijas programma, kurā tika attīstītas idejas uzņēmuma digitalizācijai un efektīvākai darba organizācijai.",
    image: "https://media.base44.com/images/public/69de5d2d05e35aad9e3771c3/efd1254ab_Bilde_Kickstart10.jpg",
    imageAlt: "Kickstart digitalizācijas treniņš — grupas foto ar sertifikātiem",
  },
  {
    tag: "NVA projekts",
    title: "\"Apmācība pie darba devēja\"",
    body: "Projekts, kura laikā uzņēmumā tika apmācīts grāmatveža palīgs praktiskā darba vidē. No nulles līdz reālam darbam — dažu mēnešu laikā.",
    image: "https://media.base44.com/images/public/69de5d2d05e35aad9e3771c3/ab7ffa81e_20251003_124710.jpg",
    imageAlt: "Egita Brūvere — NVA projekts Prasmju pilnveide pieaugušajiem",
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projekti" ref={ref} className="py-28 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs tracking-[0.15em] uppercase text-accent font-medium mb-4 block">
              Pieredze un projekti
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight max-w-xl">
              Projekti, kuros uzņēmums{" "}
              <em className="not-italic text-accent">SIA KREGMI</em>{" "}
              <em className="not-italic text-muted-foreground/40">ir piedalījies</em>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group rounded-2xl overflow-hidden bg-white border border-border hover:border-accent/30 hover:shadow-xl hover:shadow-foreground/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs bg-foreground/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full tracking-wide">
                    {project.tag}
                  </span>
                </div>
              </div>
              {/* Text */}
              <div className="p-7">
                <h3 className="font-display text-xl text-foreground mb-3 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {project.body}
                </p>
                <div className="mt-5 h-0.5 w-8 bg-accent/40 group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}