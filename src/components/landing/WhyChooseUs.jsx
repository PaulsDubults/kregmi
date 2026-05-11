import React from "react";
import { motion } from "framer-motion";
import { Handshake, Monitor, Eye, Briefcase } from "lucide-react";

const reasons = [
  {
    icon: Handshake,
    title: "Praktiska pieeja",
    description: "Mācām un strādājam caur reālu pieredzi — ne tikai lekcijas un teorija.",
  },
  {
    icon: Briefcase,
    title: "Reālu klientu pieredze",
    description: "Gan mūsu komandai, gan apmācāmajiem ir darbs ar īstiem uzņēmumiem.",
  },
  {
    icon: Monitor,
    title: "Profesionālas sistēmas",
    description: "Strādājam ar Horizon, 1C un citām nozarē atzītām sistēmām.",
  },
  {
    icon: Eye,
    title: "Individuāla uzmanība",
    description: "Katram klientam un apmācāmajam — personīga pieeja un atbalsts.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wide uppercase">
            Kāpēc mēs
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Kāpēc izvēlēties <span className="text-accent">mūs</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/10 transition-colors">
                <reason.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}