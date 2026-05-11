import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const naceRows = [
  { code: "6920", desc: "Uzskaites, grāmatvedības, audita un revīzijas pakalpojumi; konsultēšana nodokļu jautājumos" },
  { code: "8559", desc: "Citur neklasificēta izglītība" },
];

export default function CompanyInfoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="par-uznemumu" ref={ref} className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="text-xs tracking-[0.15em] uppercase text-accent font-medium mb-4 block">
            Par uzņēmumu
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight max-w-xl">
            SIA <em className="not-italic text-accent">"KREGMI"</em>
          </h2>
          <p className="text-muted-foreground text-sm mt-3 font-light">
            Reģ. Nr. 40203449138 · Licences Nr. AGL 0001251 (VID izsniegtā licence)
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {/* NACE table */}
            <div className="rounded-2xl border border-border bg-secondary/30 p-7">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground/60 font-medium mb-5">
                Nozare · Specializācija · NACE kods
              </p>
              <div className="space-y-4">
                {naceRows.map((row) => (
                  <div key={row.code} className="flex gap-4">
                    <span className="font-display text-lg text-accent flex-shrink-0 w-12">{row.code}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">{row.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue */}
            <div className="rounded-2xl border border-border bg-secondary/30 p-7">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground/60 font-medium mb-3">
                Galvenie ieņēmumu veidi
              </p>
              <p className="text-foreground font-medium">Grāmatvedības pakalpojumi</p>
            </div>

            {/* Clients */}
            <div className="rounded-2xl border border-border bg-secondary/30 p-7">
              <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground/60 font-medium mb-3">
                Uzņēmuma nozīmīgākie klienti
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Gan mazi, gan lielāki uzņēmumi (20+ darbinieku), kas sniedz pakalpojumus dažādās nozarēs, tostarp medicīnas jomā.
              </p>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Lecturer */}
            <div className="rounded-2xl bg-foreground p-7">
              <p className="text-xs uppercase tracking-[0.12em] text-white/30 font-medium mb-4">
                Lektora darbs
              </p>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                Sadarbojos ar mācību uzņēmumiem, kuriem ir līgumi ar Nodarbinātības valsts aģentūru un kuri nodrošina bezdarbnieku apmācību. Ir vairāk kā 10 gadu lektora pieredze, apmācot bezdarbniekus darbam ar grāmatvedības datorprogrammām.
              </p>
              <div className="mt-5 pt-4 border-t border-white/10">
                <p className="text-sm text-white/50">
                  Ikdienas profesionāls darbs ar grāmatvedības sistēmām{" "}
                  <span className="text-accent">Horizon</span> un <span className="text-accent">1C</span>
                </p>
              </div>
            </div>

            {/* NVA project */}
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-7">
              <p className="text-xs uppercase tracking-[0.12em] text-accent font-medium mb-4">
                NVA projekts
              </p>
              <p className="text-sm text-foreground font-medium mb-3">
                AF projekts "Prasmju pilnveide pieaugušajiem"
              </p>
              <p className="text-xs text-muted-foreground/70 font-mono mb-4">
                Nr. 3.1.2.5.i.0/1/23/I/CFLA/001
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Uzņēmums iesaistījās NVA rīkotajā Nodarbinātības pasākumu departamenta projektā. Mūsu uzņēmumā tika iesaistīts un apmācīts bezdarbnieks grāmatveža palīga profesijā. Projekta ilgums bija 3 mēneši. Beidzoties apmācībām, uzņēmums izsniedza Apliecinājumu par iegūtajām zināšanām un praktiskajām darba iemaņām saskaņā ar Mācību plānu.
              </p>
            </div>

            {/* NVA testimonial */}
            <div className="rounded-2xl bg-foreground p-7 relative overflow-hidden">
              <div className="absolute top-4 right-6 font-display text-[5rem] leading-none text-white/5 select-none pointer-events-none">"</div>
              <p className="text-xs uppercase tracking-[0.12em] text-accent font-medium mb-5">
                Atsauksme pēc dalības NVA projektā "Apmācība pie darba devēja"
              </p>
              <blockquote className="space-y-3 text-white/70 text-sm leading-relaxed font-light mb-6 relative">
                <p>Pateicos Jums par vieglu, produktīvu un patīkamu sadarbību visā Līguma īstenošanas laikā!</p>
                <p>Priecāšos, ja izlemsiet atkārtoti iesaistīties pasākuma <em className="not-italic text-white/90">Apmācība pie darba devēja</em> īstenošanā, kad būs nepieciešamība pieņemt darbā un apmācīt jaunu darbinieku!</p>
                <p className="text-white/90 font-normal">Veiksmīgu Jums turpmāko darba procesu!</p>
              </blockquote>
              <div className="border-t border-white/10 pt-5">
                <p className="text-white font-medium text-sm mb-1">Nataļja Vasiļevska</p>
                <p className="text-white/40 text-xs">Nodarbinātības valsts aģentūras</p>
                <p className="text-white/40 text-xs">Nodarbinātības pasākumu departamenta</p>
                <p className="text-white/40 text-xs mt-1">AF projekts "Prasmju pilnveide pieaugušajiem"</p>
                <p className="text-white/30 text-xs font-mono mt-0.5">Nr. 3.1.2.5.i.0/1/23/I/CFLA/001</p>
                <p className="text-white/40 text-xs mt-0.5">projekta koordinatore</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}