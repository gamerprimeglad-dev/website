import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/#products" },
  { label: "About", path: "/#about" },
  { label: "Exports", path: "/exports" },
  { label: "Distributor", path: "/distributor" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (path: string) => {
    setMobileOpen(false);
    if (path.startsWith("/#")) {
      const id = path.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = path;
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">RC</span>
          </div>
          <div className="leading-tight">
            <span className="font-display font-bold text-primary text-lg">RelievzCare™</span>
            <span className="block text-[10px] text-muted-foreground tracking-wider uppercase">Param Medi Link</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) =>
            item.path.startsWith("/#") ? (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <Link to="/contact">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              Get Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) =>
              item.path.startsWith("/#") ? (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className="text-sm font-medium text-foreground/70 hover:text-primary py-2 text-left"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-foreground/70 hover:text-primary py-2"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button size="sm" className="w-full bg-primary text-primary-foreground">Get Quote</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
