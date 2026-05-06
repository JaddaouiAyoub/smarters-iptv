import { motion } from "framer-motion";
import { ShieldCheck, Server, Film, HeadphonesIcon, Zap, MonitorPlay, Settings, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  { 
    icon: ShieldCheck, 
    title: "7-Day Money-Back Guarantee", 
    desc: "Your satisfaction is our top priority! That's why we offer a 7-day money back guarantee" 
  },
  { 
    icon: MonitorPlay, 
    title: "4K and 8K Quality", 
    desc: "4K and 8K Quality: Enjoy ultra-high-definition streaming with 4K and 8K quality." 
  },
  { 
    icon: Zap, // Ou une icône de type "badge/check" pour correspondre à "No Buffering"
    title: "No Buffering", 
    desc: "Our Channels Don't Buffer While You Are Watching" 
  },
  { 
    icon: Settings, // Ou Wrench pour "Easy To Setup"
    title: "Easy To Setup", 
    desc: "If You Are An In-Experienced User Contact Us" 
  },
  { 
    icon: HeadphonesIcon, 
    title: "24/7 Support", 
    desc: "Fast Support 24/7: Quick and responsive customer support available 24/7." 
  },
  { 
    icon: Star, // Ou Shield pour "Satisfaction Guaranteed"
    title: "Satisfaction Guaranteed", 
    desc: "With Our Super Quality For A Super Price We Aim Your 100% Satisfaction." 
  },
];

const WhyChooseUs = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
          Why <span className="text-gradient">Thousands Choose Us</span>
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
              className="glass rounded-xl p-6 group hover:border-primary/40 transition-colors flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-primary block" />
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