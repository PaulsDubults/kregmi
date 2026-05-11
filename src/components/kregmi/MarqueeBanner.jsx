import React from "react";
import { motion } from "framer-motion";

const items = [
  "Grāmatvedības ārpakalpojumi",
  "RVS Horizon",
  "1C",
  "Praktiskas apmācības",
  "Reāla darba pieredze",
  "SIA KREGMI",
  "Latvija",
  "Mācies · Dari · Attīsties",
];

export default function MarqueeBanner() {
  return (
    <div className="bg-accent overflow-hidden py-3.5 border-y border-accent/20">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-0"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6 text-sm font-medium text-accent-foreground/80 tracking-wide">
            {item}
            <span className="text-accent-foreground/30 text-lg leading-none">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}