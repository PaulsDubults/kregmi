import React from "react";
import { motion } from "framer-motion";
import { Users, Building2, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "Darbs ar uzņēmumiem",
    description: "Pieredze grāmatvedības nodrošināšanā uzņēmumiem ar 20+ darbiniekiem un dažādu nozaru specifiku.",
  },
  {
    icon: Users,
    title: "Reāli klienti",
    description: "Katrs klients ir unikāls — strādājam ar individuālu pieeju un izprotam jūsu biznesa vajadzības.",
  },
  {
    icon: GraduationCap,
    title: "Praktiska apmācība",
    description: "Mācām grāmatvedību caur reālu darbu, nevis tikai teoriju. Jūs iegūsiet prasmes, kuras patiešām izmantosiet.",
  },
];

export default function AboutSection() {
  return (
    <section id="par-mums" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm tracking-wide uppercase">
              Par mums
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              Pieredze, uz kuru var{" "}
              <span className="text-accent">paļauties</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Mūsu darbs balstās uz reālu pieredzi — ne tikai teorētiskām zināšanām,
                bet ikdienas darbā iegūtām prasmēm. Strādājam ar dažāda lieluma
                uzņēmumiem, nodrošinot kvalitatīvu grāmatvedību un palīdzot saprast
                finanšu procesus.
              </p>
              <p>
                Paralēli grāmatvedības pakalpojumiem mācām citus — sadarbībā ar
                apmācību uzņēmumiem un individuāli. Mūsu pieeja ir vienkārša:
                mācies darot. Tas nozīmē darbu ar reāliem uzdevumiem, reālām
                sistēmām un reāliem rezultātiem.
              </p>
              <p>
                Ticam, ka katrs cilvēks var apgūt grāmatvedību, ja tam ir
                pareizais atbalsts un vide. Mēs to nodrošinām.
              </p>
            </div>
          </motion.div>

          {/* Right: Highlight cards */}
          <div className="space-y-5">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5 p-5 rounded-xl bg-secondary/50 border border-border/50 hover:border-accent/20 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}