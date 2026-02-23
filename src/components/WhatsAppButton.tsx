import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919711111612?text=Hello%2C%20I%20am%20interested%20in%20your%20pharmaceutical%20products"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-full shadow-elevated hover:scale-105 transition-transform"
    aria-label="Contact us on WhatsApp"
  >
    <MessageCircle className="w-5 h-5" />
    <span className="text-sm font-semibold hidden sm:inline">Chat with Export Team</span>
  </a>
);

export default WhatsAppButton;
