import React from "react";
import { motion } from "framer-motion";
import { Calculator, BookOpen, TrendingUp, FileText, Monitor, Users } from "lucide-react";

const serviceCategories = [
  {
    title: "Grāmatvedības ārpakalpojumi",
    description: "Pilna spektra grāmatvedības pakalpojumi, lai jūs varētu fokusēties uz biznesa attīstību.",
    icon: Calculator,
    features: [
      "Pilna grāmatvedības uzskaite",
      "Algu aprēķins un personāla uzskaite",
      "Gada pārskatu sagatavošana",
      "Darbs ar Horizon un 1C sistēmām",
      "Nodokļu deklarāciju sagatavošana",
      "Regulāra finanšu atskaišu nodrošināšana",
    ],
  },
  {
    title: "Apmācības un lekcijas",
    description: "Grāmatvedības apmācības sadarbībā ar apmācību uzņēmumiem un individuāli.",
    icon: BookOpen,
    features: [
      "Praktiskas grāmatvedības apmācības",
      "Sadarbība ar apmācību centriem",
      "Individuālas konsultācijas",
      "Darbs ar reāliem piemēriem",
      "Nodokļu un likumdošanas jautājumi",
      "Piemērotas dažādiem zināšanu līmeņiem",
    ],
  },
  {
    title: "Apmācību programma",
    subtitle: "«Mācies – Dari – Attīsties»",
    description: "Unikāla iespēja apgūt grāmatvedību praksē — darba vidē ar reāliem uzdevumiem.",
    icon: TrendingUp,
    highlighted: true,
    features: [
      "Mācīšanās reālā darba vidē",
      "Līdz 1 gadam ilga attīstības iespēja",
      "Reālu klientu uzdevumi",
      "Personīgs mentors un atbalsts",
      "Atsauksmes un references darba tirgum",
      "Piemērots arī iesācējiem",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="pakalpojumi" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wide uppercase">
            Pakalpojumi
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Ko mēs piedāvājam
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trīs virzieni, viens mērķis — palīdzēt jums un jūsu biznesam augt
            ar stabilu finanšu pamatu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {serviceCategories.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-7 border transition-all ${
                service.highlighted
                  ? "bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/10"
                  : "bg-white border-border hover:border-accent/30 hover:shadow-md"
              }`}
            >
              {service.highlighted && (
                <span className="absolute -top-3 left-7 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                  Unikāla programma
                </span>
              )}

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  service.highlighted ? "bg-white/10" : "bg-accent/10"
                }`}
              >
                <service.icon
                  className={`w-5 h-5 ${
                    service.highlighted ? "text-accent" : "text-accent"
                  }`}
                />
              </div>

              <h3 className="font-heading font-bold text-xl mb-1">
                {service.title}
              </h3>
              {service.subtitle && (
                <p
                  className={`text-sm font-medium mb-3 ${
                    service.highlighted ? "text-accent" : "text-accent"
                  }`}
                >
                  {service.subtitle}
                </p>
              )}
              <p
                className={`text-sm mb-6 leading-relaxed ${
                  service.highlighted
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>

              <ul className="space-y-2.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <div
                      className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                        service.highlighted ? "bg-accent" : "bg-accent"
                      }`}
                    />
                    <span
                      className={
                        service.highlighted
                          ? "text-primary-foreground/90"
                          : "text-muted-foreground"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}