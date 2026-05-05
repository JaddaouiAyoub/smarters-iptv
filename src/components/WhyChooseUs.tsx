import { motion } from "framer-motion";
import { ShieldCheck, Server, Film, HeadphonesIcon, Zap, MonitorPlay } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  { icon: ShieldCheck, title: "7-Day Money Back", desc: "Not satisfied? Get a full refund within 7 days, no questions asked." },
  { icon: Server, title: "Stable Servers", desc: "Enterprise-grade infrastructure with 99.9% uptime guaranteed." },
  { icon: Film, title: "Huge VOD Library", desc: "85,000+ movies and series updated daily with the latest releases." },
  { icon: HeadphonesIcon, title: "Premium Support", desc: "Expert support team available 24/7 via live chat, email, and WhatsApp." },
  { icon: Zap, title: "Instant Setup", desc: "Receive your credentials within minutes and start streaming right away." },
  { icon: MonitorPlay, title: "High Quality Streams", desc: "Enjoy buffer-free 4K, FHD, and HD streams on all your devices." },
];

const WhyChooseUs = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
          Why <span className="text-gradient">Choose Us</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We deliver the best IPTV experience with features that set us apart from the competition.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <AnimatedSection key={b.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              className="glass rounded-xl p-6 group hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;