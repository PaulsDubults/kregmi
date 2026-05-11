import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Heart, Award } from "lucide-react";

export default function ResultsSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wide uppercase">
            Pieredze
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Reāli stāsti, reāli <span className="text-accent">rezultāti</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Mēs nerunājam par teorētiskām iespējām — mūsu pieeja ir
            pārbaudīta praksē.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
              <Heart className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-3">
              No iesācēja līdz speciālistam
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Viens no mūsu spilgtākajiem stāstiem — cilvēks bez iepriekšējas
              pieredzes grāmatvedībā, turklāt ar veselības ierobežojumiem, sāka
              mācīties mūsu programmā.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Jau pēc 3 mēnešiem viņš patstāvīgi veica pamata grāmatvedības
              uzdevumus. Pēc 6 mēnešiem — strādāja ar reāliem klientiem un
              sagatavoja atskaites.
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-border/50">
              <div className="flex -space-x-1">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="w-2 h-2 rounded-full bg-accent/60" />
                <div className="w-2 h-2 rounded-full bg-accent/30" />
              </div>
              <span className="text-xs text-muted-foreground">
                Reāla pieredze, ne simulācija
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-3">
              Izaugsme, kas redzama
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Mūsu apmācāmie neaiziet ar diplomu, kas gulēs atvilktnē — viņi
              aiziet ar pieredzi, ko var uzreiz izmantot darba tirgū.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              References no reāliem klientiem, prasmes darbā ar profesionālām
              sistēmām un pārliecība, ka grāmatvedība ir viņiem pa spēkam.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/50">
              <div className="text-center">
                <p className="font-heading font-bold text-2xl text-foreground">3</p>
                <p className="text-xs text-muted-foreground">mēneši pamata prasmēm</p>
              </div>
              <div className="text-center">
                <p className="font-heading font-bold text-2xl text-foreground">6</p>
                <p className="text-xs text-muted-foreground">mēneši patstāvībai</p>
              </div>
              <div className="text-center">
                <p className="font-heading font-bold text-2xl text-accent">12</p>
                <p className="text-xs text-muted-foreground">mēneši specializācijai</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}