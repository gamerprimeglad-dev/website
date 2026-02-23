import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import exportImg from "@/assets/world-map.jpg";

const markets = ["Africa", "Middle East", "South Asia", "Southeast Asia", "Latin America", "Europe"];

const GlobalSection = () => (
  <section id="global" className="relative py-20 lg:py-28 overflow-hidden">
    <img src={exportImg} alt="Global pharmaceutical shipping and logistics" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-foreground/70" />
    <div className="relative container mx-auto px-4 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider">Our Reach</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-6">
          Global Presence
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {markets.map((m) => (
            <span key={m} className="px-5 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium backdrop-blur-sm border border-primary-foreground/20">
              {m}
            </span>
          ))}
        </div>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
          We are actively appointing distributors worldwide. Partner with us to bring quality healthcare to your market.
        </p>
        <Link to="/distributor">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            Apply for Distributorship <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default GlobalSection;
