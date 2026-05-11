import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Gatavi sākt savu ceļu?
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Neatkarīgi no tā, vai meklējat uzticamu grāmatvedības partneri vai
            vēlaties apgūt grāmatvedību praksē — mēs esam gatavi palīdzēt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#kontakti">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-body text-base px-8 h-12 gap-2"
              >
                Sazināties ar mums
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#pakalpojumi">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-body text-base px-8 h-12"
              >
                Apskatīt pakalpojumus
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}