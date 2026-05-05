import { motion } from "framer-motion";
import { Tv, Smartphone, Tablet, Laptop, MonitorSmartphone, Flame } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const devices = [
  { icon: Tv, name: "Smart TV", desc: "Samsung, LG, Sony, Android TV" },
  { icon: MonitorSmartphone, name: "Android", desc: "Phones & tablets, Android 5+" },
  { icon: Smartphone, name: "iPhone", desc: "iOS 13+ with full app support" },
  { icon: Tablet, name: "Tablet", desc: "iPad, Android tablets, Surface" },
  { icon: Laptop, name: "Laptop / PC", desc: "Windows, Mac, Linux browsers" },
  { icon: Flame, name: "Firestick", desc: "All Amazon Fire TV devices" },
];

const Devices = () => (
  <section id="devices" className="py-20">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
          Works on <span className="text-gradient">All Your Devices</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Watch anywhere, anytime. Our service is compatible with all major devices and platforms.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {devices.map((d, i) => (
          <AnimatedSection key={d.name} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass rounded-xl p-6 text-center group hover:border-primary/40 transition-colors"
            >
              <d.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground text-sm mb-1">{d.name}</h3>
              <p className="text-xs text-muted-foreground">{d.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Devices;