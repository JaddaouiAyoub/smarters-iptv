import { Zap, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer id="contact" className="border-t border-border/50 py-16">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12 text-center md:text-left">
        <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center md:items-start">
          <a href="/" className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <Zap className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-lg text-foreground">
              smarters-iptv<span className="text-primary">.ca</span>
            </span>
          </a>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Canada's #1 premium IPTV provider. 18,000+ channels, 85,000+ VOD, instant activation.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/#home" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="/#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="/#showcase" className="hover:text-primary transition-colors">Channels</a></li>
            <li><a href="/#devices" className="hover:text-primary transition-colors">Devices</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            <li><a href="/#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Setup Guide</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground flex flex-col items-center md:items-start">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-4 h-4 text-primary" /> support@smarters-iptv.ca
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MessageCircle className="w-4 h-4 text-primary" /> Live Chat 24/7
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SMARTERS-IPTV.CA — All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;