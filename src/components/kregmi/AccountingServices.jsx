import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, ArrowRight, Stethoscope, LayoutList } from "lucide-react";

const services = [
  "Pilna grāmatvedības uzskaite",
  "Algu aprēķins un personāla uzskaite",
  "Nodokļu uzskaite un deklarācijas",
  "Finanšu pārskatu sagatavošana",
  "Atbalsts darbā ar grāmatvedības programmām Horizon un 1C",
];

export default function AccountingServices() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section id="pakalpojumi" ref={ref} className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.15em] uppercase text-accent font-medium mb-4 block">
            Pakalpojumi
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight mb-4 max-w-xl">
            Grāmatvedības pakalpojumi{" "}
            <em className="not-italic text-muted-foreground/40">uzņēmumiem</em>
          </h2>
          <p className="text-muted-foreground text-base font-light max-w-lg leading-relaxed">
            Profesionāli grāmatvedības ārpakalpojumi, kas ļauj jums koncentrēties uz sava biznesa attīstību. Cena tiek noteikta individuāli, ņemot vērā jūsu uzņēmuma apjomu un vajadzības.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main services card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 rounded-2xl bg-foreground p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/5 -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-500" />
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                <LayoutList className="w-5 h-5 text-accent" />
              </div>
              <span className="text-xs uppercase tracking-[0.12em] text-white/40 font-medium">
                Pakalpojumu saraksts
              </span>
            </div>
            <ul className="space-y-3 relative">
              {services.map((service, i) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  onMouseEnter={() => setHoveredService(i)}
                  onMouseLeave={() => setHoveredService(null)}
                  className={`flex items-start gap-3 px-4 py-3 rounded-xl cursor-default transition-all duration-200 ${
                    hoveredService === i ? "bg-white/8" : "hover:bg-white/5"
                  }`}
                >
                  <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors duration-200 ${hoveredService === i ? "text-accent" : "text-accent/60"}`} />
                  <span className={`text-base font-light leading-snug transition-colors duration-200 ${hoveredService === i ? "text-white" : "text-white/70"}`}>{service}</span>
                </motion.li>
              ))}
            </ul>
            <a
              href="#kontakti"
              className="group/btn inline-flex items-center gap-2 mt-10 px-6 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-full hover:bg-white hover:text-foreground transition-all duration-300"
            >
              Pieteikt konsultāciju
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="rounded-2xl border-2 border-border bg-secondary/40 p-8 cursor-default hover:border-accent/30 transition-colors duration-300"
            >
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground/60 font-medium mb-4">
                Cenas noteikšana
              </p>
              <h3 className="font-display text-xl text-foreground leading-snug mb-4">
                Individuāla cena
              </h3>
              <ul className="space-y-2">
                {[
                  "Uzņēmuma lielums",
                  "Darījumu apjoms",
                  "Nepieciešamo pakalpojumu apjoms",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}