import { motion } from "framer-motion";
import { ShieldCheck, FlaskConical, Package, FileCheck, ClipboardCheck } from "lucide-react";
import qualityImg from "@/assets/quality-lab.jpg";

const items = [
  { icon: ShieldCheck, text: "WHO-GMP partner manufacturing" },
  { icon: FlaskConical, text: "Rigorous quality testing" },
  { icon: Package, text: "Export-grade packaging standards" },
  { icon: FileCheck, text: "Certificate of Analysis (COA)" },
  { icon: ClipboardCheck, text: "Complete invoice & documentation support" },
];

const QualitySection = () => (
  <section className="py-20 lg:py-28 bg-section-alt">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-elevated"
        >
          <img src={qualityImg} alt="Quality control laboratory" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Standards</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
            Quality & Compliance
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Every product under RelievzCare™ undergoes stringent quality checks. We partner only with WHO-GMP certified manufacturers to ensure international quality standards are met at every stage.
          </p>
          <div className="space-y-4">
            {items.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-card">
                <Icon className="w-5 h-5 text-accent shrink-0" />
                <span className="text-foreground font-medium">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default QualitySection;
