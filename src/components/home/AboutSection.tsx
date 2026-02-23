import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import aboutImg from "@/assets/about-business.jpg";

const points = [
  "10+ years in pharmaceutical distribution and exports",
  "Strong sourcing network across India",
  "WHO-GMP certified manufacturing partners",
  "International shipping expertise (Air & Sea)",
  "Full compliance & documentation support",
];

const AboutSection = () => (
  <section id="about" className="py-20 lg:py-28 bg-section-alt">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Who We Are</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
            About Param Medi Link Enterprises
          </h2>
          <ul className="space-y-3 mb-8">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground/80">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <blockquote className="border-l-4 border-accent pl-4 text-muted-foreground italic leading-relaxed">
            "Over the last decade, we have built strong relationships with manufacturers and international buyers, supplying consistent quality medicines across growing markets. Our commitment to reliability, transparent pricing, and long-term partnerships has helped us scale globally."
          </blockquote>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-elevated"
        >
          <img src={aboutImg} alt="Business partnership handshake" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
