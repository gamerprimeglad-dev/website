import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-pharma-navy text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-xl font-bold mb-4">RelievzCare™</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            A flagship brand of Param Medi Link Enterprises — your trusted partner for pharmaceutical exports from India.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
            <li><Link to="/#products" className="hover:text-primary-foreground transition-colors">Products</Link></li>
            <li><Link to="/exports" className="hover:text-primary-foreground transition-colors">Exports</Link></li>
            <li><Link to="/distributor" className="hover:text-primary-foreground transition-colors">Become Distributor</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Product Range</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Tablets & Capsules</li>
            <li>Softgel Capsules</li>
            <li>Syrups & Suspensions</li>
            <li>Vitamin & Nutrition Range</li>
            <li>Surgical Disposables</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              Delhi, India
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              info@relievzcare.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              +91-9711111612
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Param Medi Link Enterprises. All rights reserved. RelievzCare™ is a registered brand.</p>
        <p className="mt-1">Pharmaceutical Exporter from India | Branded Generic Medicines Supplier | Bulk Medicine Export</p>
      </div>
    </div>
  </footer>
);

export default Footer;
