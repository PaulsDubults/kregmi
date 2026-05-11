import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, GraduationCap, ArrowRight } from "lucide-react";

export default function DualPathSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pakalpojumi-dual" ref={ref} className="relative overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[70vh]">
        {/* LEFT — uzņēmumiem */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-secondary/50 px-8 sm:px-12 md:px-16 py-20 flex flex-col justify-center"
        >
          {/* Top marker */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center">
              <Building2 className="w-5 h-5 text-background" />
            </div>
            <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground font-medium">
              Uzņēmumiem
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] text-foreground leading-tight mb-6 max-w-xs">
            Grāmatvedība uzņēmumiem
          </h2>

          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-sm font-light">
            Grāmatvedības ārpakalpojumi uzņēmumiem, tajā skaitā arī medicīnas nozarē. Palīdzu sakārtot nesakārtotu grāmatvedību, lai uzņēmuma īpašnieks varētu koncentrēties uz sava biznesa attīstību. Cena — individuāli.
          </p>

          <ul className="space-y-3 mb-10">
            {[
              "Pilna grāmatvedības uzskaite",
              "Algu aprēķins un personāla uzskaite",
              "Nodokļu aprēķins un deklarācijas",
              "Finanšu pārskatu sagatavošana",
              "Darbs ar Horizon un 1C",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#kontakti"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:bg-accent hover:text-foreground transition-all duration-300 active:scale-95"
          >
            Pieteikt konsultāciju
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Decorative corner */}
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent/20" />
        </motion.div>

        {/* RIGHT — speciālistiem */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-foreground px-8 sm:px-12 md:px-16 py-20 flex flex-col justify-center"
        >
          {/* Top marker */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="text-xs uppercase tracking-[0.12em] text-white/40 font-medium">
              Speciālistiem
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] text-white leading-tight mb-6 max-w-xs">
            Apmācības un prakse
          </h2>

          <p className="text-white/60 text-base leading-relaxed mb-8 max-w-sm font-light">
            Praktiskās apmācības NVA projektu ietvaros — reāla darba vide, reāli uzdevumi. Piemērots arī cilvēkiem bez iepriekšējas pieredzes, tostarp personām ar veselības ierobežojumiem.
          </p>

          <ul className="space-y-3 mb-10">
            {[
              "Dokumentu uzskaite un reģistrācija",
              "Kases un bankas dokumentu apstrāde",
              "Algu aprēķins un nodokļu uzskaite",
              "Darbs ar Horizon un 1C",
              "Rekomendācijas vēstule pēc apmācībām",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/50">
                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#modelis"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-accent/40 text-accent text-sm font-medium rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 active:scale-95"
          >
            Uzzināt vairāk par modeli
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Decorative corner */}
          <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-white/5" />
        </motion.div>
      </div>
    </section>
  );
}