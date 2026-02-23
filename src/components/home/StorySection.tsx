import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StorySection = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Journey</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
          A Decade of Growth and Trust
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Started with a vision to supply affordable medicines with integrity, Param Medi Link Enterprises has grown over the past 10 years into a trusted export partner. Through disciplined sourcing, transparent dealings, and consistent performance, we have expanded into multiple international markets under our flagship brand RelievzCare™.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          What began as a small trading firm in Delhi has evolved into a full-spectrum pharmaceutical export house — serving hospitals, pharmacies, and distributors across continents. Our story is one of perseverance, trust, and an unwavering commitment to healthcare access for all.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            Start a Partnership <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default StorySection;
