import { useState } from "react";
import { motion } from "framer-motion";
import { Pill, Droplets, Scissors, Package, FlaskConical, ArrowRight, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Antibiotics",
    icon: Pill,
    products: [
      { brand: "Ceforel O 200", composition: "Cefixime + Ofloxacin", strength: "200/200 mg", packing: "10×10", form: "Tablets" },
      { brand: "Amorel-625", composition: "Amoxicillin + Clavulanic Acid", strength: "625 mg", packing: "10×10", form: "Capsules" },
      { brand: "Azirel-500", composition: "Azithromycin", strength: "500 mg", packing: "1×3", form: "Tablets" },
      { brand: "Ciporel-500", composition: "Ciprofloxacin", strength: "500 mg", packing: "10×10", form: "Tablets" },
      { brand: "Ceforel-200", composition: "Cefixime", strength: "200 mg", packing: "10×10", form: "Tablets" },
    ],
  },
  {
    name: "Analgesics & Anti-inflammatory",
    icon: Heart,
    products: [
      { brand: "Pararel-500", composition: "Paracetamol", strength: "500 mg", packing: "10×25", form: "Tablets" },
      { brand: "Pararel-650", composition: "Paracetamol", strength: "650 mg", packing: "10×25", form: "Tablets" },
      { brand: "Diclorel-50", composition: "Diclofenac Sodium", strength: "50 mg", packing: "10×10", form: "Tablets" },
      { brand: "Acelev-P", composition: "Aceclofenac + Paracetamol", strength: "100 + 325 mg", packing: "10×10", form: "Tablets" },
    ],
  },
  {
    name: "Gastrointestinal",
    icon: Droplets,
    products: [
      { brand: "Pantorel-40", composition: "Pantoprazole", strength: "40 mg", packing: "10×10", form: "Tablets" },
      { brand: "Omorel-20", composition: "Omeprazole", strength: "20 mg", packing: "10×10", form: "Capsules" },
      { brand: "Loprel-2", composition: "Loperamide", strength: "2 mg", packing: "10×10", form: "Tablets" },
    ],
  },
  {
    name: "Anti-infectives & Specialty",
    icon: FlaskConical,
    products: [
      { brand: "Metrorel-400", composition: "Metronidazole", strength: "400 mg", packing: "10×10", form: "Tablets" },
      { brand: "Metrorel-500", composition: "Metronidazole", strength: "500 mg", packing: "10×10", form: "Tablets" },
      { brand: "Lumirel-A", composition: "Artemether + Lumefantrine", strength: "20 + 120 mg", packing: "1×6", form: "Tablets" },
      { brand: "Albirel-400", composition: "Albendazole", strength: "400 mg", packing: "1×1", form: "Tablet" },
      { brand: "Flucrel-150", composition: "Fluconazole", strength: "150 mg", packing: "1×1", form: "Capsule" },
    ],
  },
  {
    name: "Cardiovascular & Metabolic",
    icon: Package,
    products: [
      { brand: "Cetirel-10", composition: "Cetirizine", strength: "10 mg", packing: "10×10", form: "Tablets" },
      { brand: "Amlorel-5", composition: "Amlodipine", strength: "5 mg", packing: "10×10", form: "Tablets" },
      { brand: "Losarel-50", composition: "Losartan", strength: "50 mg", packing: "10×10", form: "Tablets" },
      { brand: "Metorel-500", composition: "Metformin", strength: "500 mg", packing: "10×10", form: "Tablets" },
    ],
  },
  {
    name: "Vitamins & Rehydration",
    icon: Scissors,
    products: [
      { brand: "Orsrel-WHO", composition: "ORS Powder (WHO Formula)", strength: "WHO Formula", packing: "25 Sachets", form: "Powder" },
      { brand: "Beecarel", composition: "Vitamin B-Complex", strength: "Standard", packing: "10×10", form: "Tablets" },
      { brand: "Multirel", composition: "Multivitamin", strength: "Standard", packing: "10×10", form: "Tablets" },
      { brand: "Zincrel-20", composition: "Zinc Sulphate", strength: "20 mg", packing: "10×10", form: "Dispersible" },
      { brand: "Vitorel Syrup", composition: "Multivitamin", strength: "Standard", packing: "100 ml", form: "Syrup" },
    ],
  },
];

const ProductsSection = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <section id="products" className="py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Range</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Product Portfolio</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            A comprehensive range of WHO-GMP certified pharmaceutical and surgical products for global distribution.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ name, icon: Icon }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow cursor-pointer group"
              onClick={() => setOpenCategory(name)}
            >
              <div className="w-12 h-12 rounded-xl bg-pharma-blue-light flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{name}</h3>
              <p className="text-muted-foreground text-sm mb-4">Export-ready formulations with complete documentation.</p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="text-xs" onClick={(e) => { e.stopPropagation(); setOpenCategory(name); }}>
                  View Products
                </Button>
                <Link to="/contact" onClick={(e) => e.stopPropagation()}>
                  <Button size="sm" className="text-xs bg-primary text-primary-foreground">
                    Request Quote
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {openCategory && (
          <div className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4" onClick={() => setOpenCategory(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-2xl shadow-elevated max-w-2xl w-full max-h-[80vh] overflow-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl font-bold text-foreground">{openCategory}</h3>
                <button onClick={() => setOpenCategory(null)} className="p-2 hover:bg-muted rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-2 font-semibold text-foreground">Brand Name</th>
                      <th className="text-left py-3 px-2 font-semibold text-foreground">Composition</th>
                      <th className="text-left py-3 px-2 font-semibold text-foreground">Strength</th>
                      <th className="text-left py-3 px-2 font-semibold text-foreground">Form</th>
                      <th className="text-left py-3 px-2 font-semibold text-foreground">Pack Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.find((c) => c.name === openCategory)?.products.map((p) => (
                      <tr key={p.brand} className="border-b border-border/50">
                        <td className="py-3 px-2 font-medium text-primary">{p.brand}</td>
                        <td className="py-3 px-2 text-foreground/80">{p.composition}</td>
                        <td className="py-3 px-2 text-foreground/80">{p.strength}</td>
                        <td className="py-3 px-2 text-foreground/80">{p.form}</td>
                        <td className="py-3 px-2 text-foreground/80">{p.packing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex gap-3">
                <Link to="/contact">
                  <Button className="bg-primary text-primary-foreground">
                    Request Bulk Pricing <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
