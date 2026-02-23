import { motion } from "framer-motion";
import { Shield, Package, Globe, TrendingUp } from "lucide-react";
// Updated medicine boxes image
import packagingImg from "@/assets/medicine-boxes.png";

const features = [
  { icon: Globe, text: "Developed for global markets" },
  { icon: Package, text: "Attractive export packaging" },
  { icon: TrendingUp, text: "Competitive distributor margins" },
  { icon: Shield, text: "Stringent quality assurance" },
];

const products = [
  "Pararel-500", "Pararel-650", "Amorel-500", "Azirel-500",
  "Pantorel-40", "Ceforel-200", "Ciporel-500", "Metrorel-400",
  "Diclorel-50", "Acelev-P", "Omorel-20", "Ororel",
];

const BrandSection = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-elevated"
        >
          <img src={packagingImg} alt="RelievzCare product packaging" className="w-full h-auto object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Brand</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Relievz Care — Relief You Can Trust
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            RelievzCare™ is our flagship brand, developed specifically for international markets. With wide therapeutic coverage, premium export-ready packaging, and competitive margins for distributors.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-8">
            {products.map((name) => (
              <div key={name} className="bg-section-alt rounded-xl px-3 py-2.5 text-center">
                <span className="text-sm font-semibold text-primary">{name}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {features.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3 p-4 rounded-xl bg-section-alt">
                <Icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-foreground">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default BrandSection;
