import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight, MessageCircle, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrustBadgeStrip from "@/components/home/TrustBadgeStrip";
import { useToast } from "@/hooks/use-toast";
import contactImg from "@/assets/contact-team.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Inquiry Sent!", description: "Our export team will respond within 24 hours." });
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
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
                  Start Your Import Process Today
                </h1>
                <p className="text-primary-foreground/80 text-lg max-w-xl">
                  Get in touch with our export team for pricing, product information, and partnership opportunities.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="hidden lg:block rounded-2xl overflow-hidden shadow-elevated">
                <img src={contactImg} alt="Professional customer support team" className="w-full h-[320px] object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        <TrustBadgeStrip />

        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Contact info */}
              <div className="space-y-6">
                <h2 className="font-display text-2xl font-bold text-foreground">Param Medi Link Enterprises</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-card shadow-card">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground text-sm">Delhi, India</p>
                    </div>
                  </div>
                  <a href="mailto:info@relievzcare.com" className="flex items-start gap-4 p-5 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-shadow">
                    <Mail className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Email Us</p>
                      <p className="text-muted-foreground text-sm">info@relievzcare.com</p>
                    </div>
                  </a>
                  <a href="https://wa.me/919711111612" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-shadow">
                    <MessageCircle className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">WhatsApp Us</p>
                      <p className="text-muted-foreground text-sm">+91-9711111612</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-card shadow-card">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Schedule Business Call</p>
                      <p className="text-muted-foreground text-sm">Mon-Sat, 10AM-6PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-elevated space-y-5">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">Send an Inquiry</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Your Name *</label>
                        <Input required placeholder="Full name" maxLength={100} />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Company Name *</label>
                        <Input required placeholder="Company" maxLength={100} />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Country *</label>
                        <Input required placeholder="Country" maxLength={60} />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                        <Input type="email" required placeholder="email@company.com" maxLength={255} />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Product Requirement</label>
                        <Input placeholder="e.g., Tablets, Injectables" maxLength={200} />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">WhatsApp Number</label>
                        <Input placeholder="+91 XXXXXXXXXX" maxLength={20} />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                      <Textarea placeholder="Tell us about your requirements..." rows={4} maxLength={1000} />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold" disabled={submitting}>
                      {submitting ? "Sending..." : "Submit Inquiry"} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Contact;
