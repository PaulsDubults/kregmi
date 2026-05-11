import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, Mail, Phone, Shield } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handle = (e) => {
    e.preventDefault();
    setSent(true);
    toast.success("Ziņa nosūtīta!");
  };

  return (
    <section id="kontakti" ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between"
          >
            <div>
              <span className="text-xs tracking-[0.15em] uppercase text-accent font-medium mb-6 block">
                Kontakti
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-foreground leading-tight mb-6">
                Sazināties
                <br />
                <em className="not-italic text-muted-foreground/40">ar mums</em>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed font-light max-w-sm mb-10">
                Atstājiet ziņu par savu jautājumu — bizness, grāmatvedība vai
                apmācības. Atbildēsim pēc iespējas ātrāk.
              </p>
            </div>

            <div className="space-y-5">
              <a
                href="mailto:kregmi@inbox.lv"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg border border-border group-hover:border-accent/40 flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground/60 mb-0.5">E-pasts</p>
                  <p className="text-sm font-medium text-foreground">kregmi@inbox.lv</p>
                </div>
              </a>

              <a
                href="tel:+37120229997"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg border border-border group-hover:border-accent/40 flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground/60 mb-0.5">Tālrunis</p>
                  <p className="text-sm font-medium text-foreground">+371 20229997</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg border border-border flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground/60 mb-0.5">Licence</p>
                  <p className="text-sm text-foreground font-medium">VID izsniegtā licence Nr. AGL 0001251</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-border/50">
                <p className="text-sm font-medium text-foreground mb-1">Egita Brūvere</p>
                <p className="text-xs text-muted-foreground/60">
                  SIA KREGMI valdes locekle, grāmatvede un lektore
                </p>
                <p className="text-xs text-muted-foreground/50 mt-2">
                  SIA "KREGMI" · Reģ. Nr. 40203449138 · Latvija
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-start justify-center py-10">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">Paldies!</h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Jūsu ziņa ir saņemta. Sazināsimies ar jums drīzumā.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
                >
                  Nosūtīt vēl vienu ziņu
                </button>
              </div>
            ) : (
              <form onSubmit={handle} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs text-muted-foreground tracking-wide">Vārds</label>
                    <input
                      type="text"
                      required
                      placeholder="Jūsu vārds"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm border border-border rounded-xl focus:outline-none focus:border-accent/50 transition-colors bg-white placeholder:text-muted-foreground/40"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-muted-foreground tracking-wide">E-pasts</label>
                    <input
                      type="email"
                      required
                      placeholder="jusu@epasts.lv"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm border border-border rounded-xl focus:outline-none focus:border-accent/50 transition-colors bg-white placeholder:text-muted-foreground/40"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-muted-foreground tracking-wide">
                    Tālrunis <span className="text-muted-foreground/40">(neobligāti)</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+371"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-border rounded-xl focus:outline-none focus:border-accent/50 transition-colors bg-white placeholder:text-muted-foreground/40"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-muted-foreground tracking-wide">Jūsu ziņa</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Pastāstiet par savu projektu vai jautājumu..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm border border-border rounded-xl focus:outline-none focus:border-accent/50 transition-colors bg-white resize-none placeholder:text-muted-foreground/40"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 py-3.5 bg-foreground text-background text-sm font-medium rounded-xl hover:bg-accent hover:text-foreground transition-all duration-300 active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  Nosūtīt ziņu
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}