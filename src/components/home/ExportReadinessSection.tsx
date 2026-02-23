import { motion } from "framer-motion";
import { PackageCheck, FileText, Settings, Clock } from "lucide-react";

const items = [
  { icon: PackageCheck, title: "Stable Supply", desc: "Consistent availability backed by trusted WHO-GMP manufacturing partners." },
  { icon: FileText, title: "Export Documentation Support", desc: "Complete COA, invoicing, packing lists and regulatory paperwork handled." },
  { icon: Settings, title: "Flexible MOQ", desc: "Customizable minimum order quantities to suit market entry or scale-up needs." },
  { icon: Clock, title: "Fast Lead Time", desc: "Optimized logistics for quick dispatch via air and sea freight." },
];

const ExportReadinessSection = () => (
  <section className="py-20 lg:py-28 bg-section-alt">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why We're Ready</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Export Readiness</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Everything you need for a smooth import process — from documentation to delivery.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 shadow-card text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExportReadinessSection;
