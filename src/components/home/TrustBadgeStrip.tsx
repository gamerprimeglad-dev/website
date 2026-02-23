import { ShieldCheck, Award, Globe, FlaskConical } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "WHO-GMP Certified" },
  { icon: Award, label: "ISO Compliant" },
  { icon: Globe, label: "40+ Countries Served" },
  { icon: FlaskConical, label: "Quality Assured" },
];

const TrustBadgeStrip = () => (
  <section className="bg-trust-bar py-4">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-wrap justify-center gap-6 md:gap-12">
        {badges.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-primary-foreground/90">
            <Icon className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-wide">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadgeStrip;
