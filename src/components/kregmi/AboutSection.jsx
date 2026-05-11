import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="par-mani" ref={ref} className="py-28 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="text-xs tracking-[0.15em] uppercase text-accent font-medium mb-4 block">
            Par mani
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight">
            Egita Brūvere
          </h2>
          <p className="text-muted-foreground text-sm mt-2 font-light">
            SIA KREGMI valdes locekle · Grāmatvede un lektore
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="lg:col-span-1"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                src="https://media.base44.com/images/public/69de5d2d05e35aad9e3771c3/945edc4ac_IMG-20251018-WA0013.jpg"
                alt="Egita Brūvere"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Kas es esmu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-2xl bg-white border border-border p-8"
            >
              <p className="text-xs uppercase tracking-[0.12em] text-accent font-medium mb-4">
                Kas es esmu
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Esmu praktizējoša grāmatvede, komunikabla, atbildīga, ar labām organizatora dotībām, labi pārvaldu auditoriju.
                Mans darbs apvieno divas lietas: grāmatvedības ārpakalpojumi uzņēmumiem un praktiskas apmācības cilvēkiem, kuri vēlas apgūt šo profesiju.
                Kā praktizējoša grāmatvede esmu ieguvusi pieredzi un sniegusi pakalpojumus dažādās nozarēs, tai skaitā siltumapgādē, būvniecībā un medicīnā.
              </p>
            </motion.div>

            {/* Lektora pieredze */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="rounded-2xl bg-foreground p-8"
            >
              <p className="text-xs uppercase tracking-[0.12em] text-accent font-medium mb-4">
                Lektora pieredze
              </p>
              <p className="text-sm text-white/70 leading-relaxed font-light">
                Tā kā vēlējos savas laika gaitā uzkrātās zināšanas un pieredzi nodot cilvēkiem, kas tikai apgūst šī darba specifiku, tad man ir uzkrāta vairāk kā 10 gadu lektora pieredze, apmācot bezdarbniekus un darbiniekus mūžizglītības programmās darbam digitālajā vidē ar grāmatvedības programmām 1C un RVS Horizon.
              </p>
            </motion.div>

            {/* Atsauksmes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.26 }}
              className="rounded-2xl border border-accent/30 bg-accent/5 p-8"
            >
              <p className="text-xs uppercase tracking-[0.12em] text-accent font-medium mb-5">
                Atsauksmes
              </p>
              <div className="space-y-3 mb-5">
                <p className="text-sm font-semibold text-foreground">PALDIES!!!</p>
                {[
                  "Par iedrošināšanu nebaidīties mainīties. Meklēt savu ceļu, kad pamats zūd zem kājām.",
                  "Par atbalstu nebaidīties mēģināt jaunas lietas un iespēju sevi parādīt, ceļā uz sava ideālā darba devēja atrašanu.",
                  "Par iegūtajām zināšanām. Par skaidru, strukturētu pieeju apmācību procesā.",
                  "Par cilvēcību. Par pacietību. Par to, ka bija interesanti.",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm text-muted-foreground font-light">
                    <span className="text-accent font-medium flex-shrink-0">{i + 1}.</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-accent/20 pt-5">
                <p className="text-sm text-muted-foreground leading-relaxed font-light italic">
                  "Egita, nevaru nepateikt Jums lielu paldies par patīkamo apmācīšanas stilu! Esmu pateicīga par Jūsu pacietību mācību laikā. Patika, ka bijāt vērīga pret katru no mūsu grupas. Ļoti ievērojami, ka Jūs pati detalizēti izskaidrojāt katru tēmu un rādījāt papildmateriālu — video, lai nostiprinātu jaunās zināšanas, un pēc tam mēs negājām tālāk, kamēr visi grupas dalībnieki nebija apguvuši mācību materiālu. Paldies par tik brīnišķīgu apmācīšanu!"
                </p>
                <p className="text-xs text-muted-foreground/60 mt-3 font-medium">— Anna</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}