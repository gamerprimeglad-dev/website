import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Users, Globe, TrendingUp, Handshake } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrustBadgeStrip from "@/components/home/TrustBadgeStrip";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: Globe, text: "Exclusive territory opportunities" },
  { icon: TrendingUp, text: "Competitive margin structure" },
  { icon: Users, text: "Marketing support" },
  { icon: Handshake, text: "Long-term supply contracts" },
];

const Distributor = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Application Received!", description: "Our export team will contact you within 24 hours." });
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-primary py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
                Become a RelievzCare™ Distributor
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
                Join our growing network of international pharmaceutical distributors and unlock exclusive opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        <TrustBadgeStrip />

        {/* Benefits */}
        <section className="py-16 bg-section-alt">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 p-5 rounded-2xl bg-card shadow-card">
                  <Icon className="w-6 h-6 text-primary shrink-0" />
                  <span className="font-medium text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                Apply for Distributorship
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5 bg-card p-8 rounded-2xl shadow-elevated">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Company Name *</label>
                    <Input required placeholder="Your company name" maxLength={100} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Country *</label>
                    <Input required placeholder="Country" maxLength={60} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">License Number</label>
                    <Input placeholder="Import / Drug license no." maxLength={50} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Products Interested *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tablets">Tablets</SelectItem>
                        <SelectItem value="capsules">Capsules</SelectItem>
                        <SelectItem value="softgels">Softgel Capsules</SelectItem>
                        <SelectItem value="syrups">Syrups & Suspensions</SelectItem>
                        <SelectItem value="vitamins">Vitamin & Nutrition</SelectItem>
                        <SelectItem value="surgical">Surgical Disposables</SelectItem>
                        <SelectItem value="all">All Categories</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Annual Purchase Volume</label>
                    <Input placeholder="e.g., $50,000 - $100,000" maxLength={50} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                    <Input type="email" required placeholder="business@email.com" maxLength={255} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">WhatsApp Number *</label>
                  <Input required placeholder="+1 234 567 8900" maxLength={20} />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Application"} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Distributor;
