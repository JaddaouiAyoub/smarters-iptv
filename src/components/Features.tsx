import { motion } from "framer-motion";
import { MonitorPlay, Zap, Wifi, HeadphonesIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: MonitorPlay,
    title: "Ultra HD / 4K",
    description: "Crystal clear picture quality with support for 4K, FHD, and HD streams on all devices.",
  },
  {
    icon: Zap,
    title: "Instant Activation",
    description: "Your subscription is activated within minutes. Start watching immediately after payment.",
  },
  {
    icon: Wifi,
    title: "No Buffering",
    description: "Our premium servers ensure zero buffering with 99.9% uptime for seamless streaming.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist you with any questions.",
  },
];

const Features = () => (
  <section className="py-20 relative">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
          Why <span className="text-gradient">Thousands</span> Choose Us
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience the best IPTV service with premium features designed for maximum entertainment.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <AnimatedSection key={f.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass rounded-xl p-6 h-full group hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-cyan transition-shadow">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Features;