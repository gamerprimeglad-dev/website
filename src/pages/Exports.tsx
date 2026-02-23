import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShieldCheck, Award, FileText, Package, DollarSign, Globe, ArrowRight, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrustBadgeStrip from "@/components/home/TrustBadgeStrip";
import { useToast } from "@/hooks/use-toast";
import exportImg from "@/assets/world-map.jpg";

const countries = [
  "Nigeria", "Ghana", "Kenya", "Tanzania", "Uganda", "Ethiopia", "Mozambique", "DR Congo",
  "UAE", "Saudi Arabia", "Yemen", "Iraq", "Myanmar", "Cambodia", "Philippines", "Vietnam",
  "Sri Lanka", "Nepal", "Afghanistan", "Guatemala", "Honduras", "Dominican Republic",
];

const certifications = [
  { icon: ShieldCheck, title: "WHO-GMP", desc: "All manufacturing partners are WHO-GMP certified for international quality standards." },
  { icon: Award, title: "ISO 9001:2015", desc: "Quality management systems aligned with ISO global benchmarks." },
];

const documents = [
  "Certificate of Analysis (COA)",
  "Certificate of Pharmaceutical Product (COPP)",
  "Free Sale Certificate",
  "GMP Certificate",
  "Stability Studies Data",
  "Packing List & Commercial Invoice",
];

const Exports = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((val, key) => { data[key] = val.toString(); });

    const subject = encodeURIComponent(`Export Inquiry - ${data.company || "New Lead"}`);
    const body = encodeURIComponent(
      `Company: ${data.company}\nCountry: ${data.country}\nProduct: ${data.product}\nQuantity: ${data.quantity}\nWhatsApp: ${data.whatsapp}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.open(`mailto:info@relievzcare.com?subject=${subject}&body=${body}`, "_self");

    toast({ title: "Opening email client", description: "Your export inquiry is being prepared." });
    setSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <img src={exportImg} alt="Global pharmaceutical exports" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="relative container mx-auto px-4 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
                Export Services
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Reliable pharmaceutical exports from India to 40+ countries with complete documentation and regulatory support.
              </p>
            </motion.div>
          </div>
        </section>

        <TrustBadgeStrip />

        {/* Countries */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Reach</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Countries We Serve</h2>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {countries.map((c) => (
                <span key={c} className="px-4 py-2 rounded-full bg-pharma-blue-light text-primary text-sm font-medium border border-primary/10">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-section-alt">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Compliance</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Certifications & Standards</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {certifications.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-card rounded-2xl p-8 shadow-card flex gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Documents</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Export Documentation</h2>
              <p className="text-muted-foreground mt-3 max-w-lg mx-auto">We provide all necessary export documentation to ensure smooth customs clearance and regulatory compliance.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {documents.map((doc) => (
                <div key={doc} className="flex items-center gap-3 p-4 rounded-xl bg-card shadow-card">
                  <FileText className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MOQ & Payment Terms */}
        <section className="py-20 bg-section-alt">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl p-8 shadow-card">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Minimum Order Quantity</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Tablets / Capsules: 5,000 – 10,000 Strips</li>
                  <li>• Syrups / Suspensions: 2,000 Bottles</li>
                  <li>• Softgel Capsules: 5,000 Strips</li>
                  <li>• Surgical Disposables: 500 – 1,000 Boxes</li>
                  <li className="text-primary font-medium">• Flexible MOQ for first-time buyers</li>
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card rounded-2xl p-8 shadow-card">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Payment Terms</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• T/T (Telegraphic Transfer)</li>
                  <li>• Letter of Credit (L/C)</li>
                  <li>• Advance Payment</li>
                  <li>• FOB / CIF / CFR Terms Available</li>
                  <li className="text-primary font-medium">• Negotiable for repeat buyers</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Export Inquiry Form */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Get Started</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Export Inquiry</h2>
            </motion.div>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-elevated p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Company Name *</label>
                  <Input name="company" required placeholder="Your company" maxLength={100} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Country *</label>
                  <Input name="country" required placeholder="Country" maxLength={60} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Product Required *</label>
                  <Input name="product" required placeholder="e.g. Tablets, Capsules" maxLength={200} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Quantity *</label>
                  <Input name="quantity" required placeholder="Estimated quantity" maxLength={100} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">WhatsApp Number *</label>
                  <Input name="whatsapp" required placeholder="+91 XXXXXXXXXX" maxLength={20} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                  <Input name="email" type="email" required placeholder="email@company.com" maxLength={255} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Additional Details</label>
                <Textarea name="message" placeholder="Tell us about your requirements..." rows={4} maxLength={1000} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold" disabled={submitting}>
                <Send className="w-4 h-4 mr-2" /> {submitting ? "Sending..." : "Submit Export Inquiry"}
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Exports;
