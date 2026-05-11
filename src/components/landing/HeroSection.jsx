import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-white to-secondary/50" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--primary)) 0, hsl(var(--primary)) 1px, transparent 0, transparent 50%)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      {/* Decorative accent line */}
      <div className="absolute left-0 top-1/3 w-1 h-32 bg-accent rounded-r-full" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
              Grāmatvedība & Apmācības
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Uzticama grāmatvedība un praktiska apmācība{" "}
              <span className="text-accent">vienuviet</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl font-light">
              Reāla pieredze darbā ar uzņēmumiem, praktiska pieeja apmācībām un
              individuāla uzmanība katram klientam. Palīdzam jūsu biznesam augt uz
              stabila pamata.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#kontakti">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-body text-base px-8 h-12 gap-2">
                Pieteikt konsultāciju
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#pakalpojumi">
              <Button
                size="lg"
                variant="outline"
                className="font-body text-base px-8 h-12 border-primary/20 hover:bg-primary/5"
              >
                Apskatīt pakalpojumus
              </Button>
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Pieredze ar reāliem klientiem</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Profesionālas sistēmas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Praktiska apmācību pieeja</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#par-mums" className="flex flex-col items-center text-muted-foreground/50 hover:text-muted-foreground transition-colors">
            <span className="text-xs mb-2">Uzzināt vairāk</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}