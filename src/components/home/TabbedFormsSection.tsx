import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formTabs = [
  { value: "enquiry", label: "Export Enquiry" },
  { value: "distributor", label: "Become a Distributor" },
  { value: "partnership", label: "Start Partnership" },
];

const TabbedFormsSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, tabLabel: string) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((val, key) => { data[key] = val.toString(); });

    const subject = encodeURIComponent(`${tabLabel} - ${data.company || "New Inquiry"}`);
    const body = encodeURIComponent(
      `Company: ${data.company}\nCountry: ${data.country}\nContact Person: ${data.contact}\nEmail: ${data.email}\nWhatsApp: ${data.whatsapp}\n\nMessage:\n${data.message}`
    );
    window.open(`mailto:info@relievzcare.com?subject=${subject}&body=${body}`, "_self");

    toast({ title: "Opening email client", description: "Your inquiry is being prepared." });
    setLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Start Your Export Journey</h2>
        </motion.div>

        <Tabs defaultValue="enquiry" className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-8">
            {formTabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className="text-xs sm:text-sm">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {formTabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <form
                onSubmit={(e) => handleSubmit(e, tab.label)}
                className="bg-card rounded-2xl shadow-card p-6 sm:p-8 space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input name="company" placeholder="Company Name" required maxLength={100} />
                  <Input name="country" placeholder="Country" required maxLength={60} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input name="contact" placeholder="Contact Person" required maxLength={100} />
                  <Input name="email" type="email" placeholder="Email" required maxLength={255} />
                </div>
                <Input name="whatsapp" placeholder="WhatsApp Number" required maxLength={20} />
                <Textarea name="message" placeholder="Your Message / Product Requirements" rows={4} required maxLength={1000} />
                <Button type="submit" className="w-full bg-primary text-primary-foreground" size="lg" disabled={loading}>
                  <Send className="w-4 h-4 mr-2" /> Submit {tab.label}
                </Button>
              </form>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TabbedFormsSection;
