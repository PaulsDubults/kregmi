import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Mācies",
    description:
      "Apgūsti grāmatvedības pamatus un darbu ar profesionālām sistēmām mentora vadībā.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Wrench,
    title: "Dari",
    description:
      "Strādā ar reāliem klientu uzdevumiem — grāmato, aprēķini algas, gatavo atskaites.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Rocket,
    title: "Attīsties",
    description:
      "Iegūsti pieredzi, atsauksmes un gatavību patstāvīgam darbam grāmatvedības jomā.",
    color: "bg-accent/10 text-accent",
  },
];

export default function TrainingProgram() {
  return (
    <section id="apmacibas" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm tracking-wide uppercase">
              Apmācību programma
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              Mācies — Dari —{" "}
              <span className="text-accent">Attīsties</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Unikāla programma, kas dod iespēju apgūt grāmatvedību no nulles
              līdz patstāvīgam līmenim. Strādājot ar reāliem uzdevumiem reālā
              vidē.
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="flex gap-5"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.color}`}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Key facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary/50 rounded-2xl p-8 border border-border/50"
          >
            <h3 className="font-heading font-bold text-xl text-foreground mb-6">
              Ko jūs iegūsiet
            </h3>
            <div className="space-y-5">
              {[
                {
                  label: "Ilgums",
                  value: "Līdz 1 gadam",
                  detail: "Elastīgs periods atbilstoši jūsu tempam",
                },
                {
                  label: "Darba vide",
                  value: "Reāli klienti",
                  detail: "Strādāsiet ar īstiem uzņēmumu datiem",
                },
                {
                  label: "Sistēmas",
                  value: "Horizon, 1C",
                  detail: "Profesionālas grāmatvedības sistēmas",
                },
                {
                  label: "Atbalsts",
                  value: "Personīgs mentors",
                  detail: "Individuāla uzmanība un regulāra atgriezeniskā saite",
                },
                {
                  label: "Rezultāts",
                  value: "Pieredze un atsauksmes",
                  detail: "Reālas references jūsu CV un darba tirgum",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-b border-border/50 pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-sm text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="font-semibold text-foreground font-body text-sm">
                      {item.value}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground/70">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-accent/10 border border-accent/20">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-semibold">Piemērots arī iesācējiem</span>{" "}
                — nav nepieciešama iepriekšēja pieredze grāmatvedībā. Programma
                ir veidota, lai palīdzētu ikvienam sākt un attīstīties.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}