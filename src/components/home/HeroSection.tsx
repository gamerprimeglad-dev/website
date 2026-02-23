import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateCatalog } from "@/lib/generateCatalog";
import heroImg from "@/assets/hero-pharma.jpg";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-background">
    <div className="container mx-auto px-4 lg:px-8 py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            🏭 WHO-GMP Certified Manufacturer Partner
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-foreground leading-tight mb-6">
            WHO-GMP Certified Indian Pharmaceutical Exporter
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 font-body max-w-lg">
            Branded generics, surgical products & vitamins — export-ready with complete documentation for 40+ countries.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-md">
                Get Export Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 font-semibold" onClick={generateCatalog}>
              <Download className="w-4 h-4 mr-2" /> Download Catalog
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5 font-semibold">
                <Phone className="w-4 h-4 mr-2" /> Contact Export Team
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block rounded-2xl overflow-hidden shadow-elevated"
        >
          <img
            src={heroImg}
            alt="WHO-GMP certified pharmaceutical manufacturing plant"
            className="w-full h-[480px] object-cover"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
