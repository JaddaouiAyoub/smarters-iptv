import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  { q: "What is IPTV and how does it work?", a: "IPTV (Internet Protocol Television) delivers TV content over the internet instead of traditional cable or satellite. Simply connect to our service through any compatible device and start streaming thousands of channels and on-demand content." },
  { q: "What devices are compatible?", a: "Our service works on Smart TVs (Samsung, LG, Sony), Android devices, iPhones, iPads, Amazon Firestick, Windows & Mac computers, MAG boxes, and any device that supports M3U playlists or Xtream Codes." },
  { q: "Do you offer a free trial?", a: "Yes! We offer a 24-hour free trial so you can test our service before committing. Contact our support team to get your trial credentials." },
  { q: "Is there a contract or commitment?", a: "No contracts whatsoever. You can cancel anytime. We also offer a 7-day money-back guarantee on all plans." },
  { q: "How fast is the activation?", a: "Activation is instant! After payment, you'll receive your login credentials via email within 1-5 minutes. Our automated system ensures you start watching right away." },
  { q: "What channels and content do you offer?", a: "We offer 18,000+ live TV channels from around the world including sports, news, entertainment, kids, and more. Plus 85,000+ movies and series in our VOD library, updated daily." },
  { q: "Do you offer EPG (Electronic Program Guide)?", a: "Yes, we provide a full EPG/TV Guide for most channels so you can see what's on now and what's coming up." },
  { q: "What payment methods do you accept?", a: "We accept credit/debit cards, PayPal, cryptocurrency, and Interac e-Transfer for Canadian customers." },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-xl overflow-hidden ">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="font-semibold text-foreground text-sm pr-4">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => (
  <section id="faq" className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
        <p className="text-muted-foreground">
          Everything you need to know about our IPTV service.
        </p>
      </AnimatedSection>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <AnimatedSection key={i} delay={i * 0.05}>
            <FAQItem {...faq} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;