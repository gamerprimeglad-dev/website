import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Emmanuel Okonkwo",
    role: "Managing Director",
    company: "MediPlus Pharmaceuticals",
    country: "Nigeria",
    region: "West Africa",
    text: "RelievzCare has been our trusted supplier for over 3 years. Their WHO-GMP certified products meet our regulatory standards, and the documentation support for NAFDAC registration is exceptional.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashidi",
    role: "Procurement Head",
    company: "Gulf Medical Supplies",
    country: "UAE",
    region: "Middle East",
    text: "We distribute RelievzCare products across the GCC region. Consistent quality, competitive pricing, and timely CIF deliveries make them a reliable partner for our healthcare distribution network.",
    rating: 5,
  },
  {
    name: "Dr. Priya Nambiar",
    role: "Chief Pharmacist",
    company: "Asian Health Corp",
    country: "Myanmar",
    region: "South-East Asia",
    text: "The complete export documentation — COA, COPP, and stability data — provided with every shipment has simplified our import process significantly. Product quality has been consistently excellent.",
    rating: 5,
  },
  {
    name: "Jean-Claude Mbeki",
    role: "Director of Operations",
    company: "Afrique Santé SARL",
    country: "Cameroon",
    region: "Central Africa",
    text: "From private-label manufacturing to door-to-door shipping, Param Medi Link handles everything professionally. Their flexible MOQs helped us enter the market with minimal risk.",
    rating: 5,
  },
  {
    name: "Hassan Karim",
    role: "General Manager",
    company: "Al-Shifa Pharma Trading",
    country: "Iraq",
    region: "Middle East",
    text: "RelievzCare's antibiotic and analgesic ranges are in high demand across our distribution network. Quality assurance and batch traceability give us full confidence in every order.",
    rating: 4,
  },
  {
    name: "Dr. Nguyen Thi Lan",
    role: "Supply Chain Manager",
    company: "VietMed Distribution",
    country: "Vietnam",
    region: "South-East Asia",
    text: "Timely communication, professional export documentation, and WHO-GMP compliance are the reasons we continue to source from RelievzCare. Highly recommended for Asian markets.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">
          Trusted Worldwide
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
          What Our Global Partners Say
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Feedback from pharmaceutical distributors, importers, and healthcare companies across Africa, the Middle East, and Asia.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow flex flex-col"
          >
            <Quote className="w-8 h-8 text-primary/20 mb-3 shrink-0" />
            <p className="text-foreground/80 text-sm leading-relaxed flex-1">
              "{t.text}"
            </p>

            <div className="flex items-center gap-0.5 mt-4 mb-3">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  className={`w-4 h-4 ${s < t.rating ? "text-amber-500 fill-amber-500" : "text-muted-foreground/30"}`}
                />
              ))}
            </div>

            <div className="border-t border-border pt-3">
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">
                {t.role}, {t.company}
              </p>
              <p className="text-primary text-xs font-medium mt-0.5">
                {t.country} · {t.region}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
