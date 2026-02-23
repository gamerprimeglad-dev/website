import { motion } from "framer-motion";
import { Award, Globe, DollarSign, Truck, FileText, Tag, Warehouse, Plane } from "lucide-react";

const reasons = [
  { icon: Award, title: "10+ Years Experience", desc: "Deep pharma industry expertise" },
  { icon: Globe, title: "Global Export Support", desc: "Documentation & regulatory aid" },
  { icon: DollarSign, title: "Competitive Pricing", desc: "Best margins for distributors" },
  { icon: Truck, title: "Reliable Supply Chain", desc: "Consistent stock availability" },
  { icon: FileText, title: "Complete Documentation", desc: "COA, invoices & compliance" },
  { icon: Tag, title: "Private Labeling", desc: "Custom branding available" },
  { icon: Warehouse, title: "Bulk Supply Capacity", desc: "Large volume fulfillment" },
  { icon: Plane, title: "Fast Shipment", desc: "By air & sea worldwide" },
];

const WhyChooseSection = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Strengths</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Why Choose Us</h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="text-center p-6 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-shadow"
          >
            <div className="w-14 h-14 rounded-2xl bg-pharma-blue-light flex items-center justify-center mx-auto mb-4">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
