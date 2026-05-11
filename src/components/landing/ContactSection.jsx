import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder — no actual send
    setSubmitted(true);
    toast.success("Paldies! Jūsu ziņa ir saņemta.");
  };

  return (
    <section id="kontakti" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wide uppercase">
            Kontakti
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Sazināties ar <span className="text-accent">mums</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Atstājiet ziņu, un mēs ar jums sazināsimies pēc iespējas ātrāk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
                Kontaktinformācija
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Zvaniet, rakstiet vai aizpildiet formu — atradīsim labāko
                risinājumu jūsu vajadzībām.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">E-pasts</p>
                  <p className="text-sm font-medium text-foreground">info@gramatpro.lv</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Tālrunis</p>
                  <p className="text-sm font-medium text-foreground">+371 XX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Atrašanās vieta</p>
                  <p className="text-sm font-medium text-foreground">Latvija</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-white rounded-2xl border border-border/50 p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  Paldies par ziņu!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Mēs ar jums sazināsimies pēc iespējas ātrāk.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 font-body"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", message: "" });
                  }}
                >
                  Nosūtīt vēl vienu
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-border/50 p-8 shadow-sm space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Vārds
                    </Label>
                    <Input
                      id="name"
                      placeholder="Jūsu vārds"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      E-pasts
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jusu@epasts.lv"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Tālrunis{" "}
                    <span className="text-muted-foreground font-normal">(neobligāti)</span>
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+371"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Ziņa
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Pastāstiet par savu jautājumu vai projektu..."
                    className="min-h-28 resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 font-body h-11 gap-2"
                >
                  <Send className="w-4 h-4" />
                  Nosūtīt ziņu
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}